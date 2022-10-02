---
article: true
title: golang常见数据结构(Slice & Map)实现原理
star: true
tag:
   - go
order: 3
---

# Golang 常见数据结构（Slice & Map）实现原理

## Slice

切片是golang中很常见的数据结构之一，它依赖于数组实现，它可以很轻松的实现扩容。

在源码包`runtime/slice.go`中定义了基本的slice结构

```go
type slice struct {
	array unsafe.Pointer
	len   int
	cap   int
}
```

`array`指向底层的数组，`len` 表示切片的长度，`cap`表示切片的容量。 由于指向了底层数组，所以`slice`本质上和slice共享了存储空间。

举个栗子：

```go
package main

import (
    "fmt"
)

func main() {
    var array [10]int

    var slice = array[5:6]

    fmt.Println("lenth of slice: ", len(slice))
    fmt.Println("capacity of slice: ", cap(slice))
    fmt.Println(&slice[0] == &array[5])
}
```

上述代码先是定义了一个10位的数组，然后在这个基础上创建了一个切片，然后去打印出切片的长度，容量以及切片和数组地址是否相等。最终输出的结果是：`1,5,true`。整个切片可视化出来应该是这样的：

![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian20221001213722.png)



## Map

在源码`runtime/map.go`中定义了map的基本结构，map底层是由哈希表实现的，一个哈希表可以关联多个哈希表节点，每个哈希表中都存了一个键值对。

```go
// 1.19版本中的map结构
type hmap struct {
	// Note: the format of the hmap is also encoded in cmd/compile/internal/reflectdata/reflect.go.
	// Make sure this stays in sync with the compiler's definition.
	count     int // # live cells == size of map.  Must be first (used by len() builtin)
	flags     uint8
	B         uint8  // log_2 of # of buckets (can hold up to loadFactor * 2^B items)
	noverflow uint16 // approximate number of overflow buckets; see incrnoverflow for details
	hash0     uint32 // hash seed

	buckets    unsafe.Pointer // array of 2^B Buckets. may be nil if count==0.
	oldbuckets unsafe.Pointer // previous bucket array of half the size, non-nil only when growing
	nevacuate  uintptr        // progress counter for evacuation (buckets less than this have been evacuated)

	extra *mapextra // optional fields
}
```

从源码中我们可以得到这么一些信息，

- `hmap`指向了一些buckets
- 有一个extra的字段来存储其余信息

![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian20221002083048.png)



### mapextra基本结构

在hmap中有一个字段叫`mapextra`，它其实是用来解决当哈希冲突时，溢出的一些哈希表的存储。

```go
type mapextra struct {
	// If both key and elem do not contain pointers and are inline, then we mark bucket
	// type as containing no pointers. This avoids scanning such maps.
	// However, bmap.overflow is a pointer. In order to keep overflow buckets
	// alive, we store pointers to all overflow buckets in hmap.extra.overflow and hmap.extra.oldoverflow.
	// overflow and oldoverflow are only used if key and elem do not contain pointers.
	// overflow contains overflow buckets for hmap.buckets.
	// oldoverflow contains overflow buckets for hmap.oldbuckets.
	// The indirection allows to store a pointer to the slice in hiter.
	overflow    *[]*bmap
	oldoverflow *[]*bmap

	// nextOverflow holds a pointer to a free overflow bucket.
	nextOverflow *bmap
}
```



### bucket的基本结构

```go
type bmap struct {
	// tophash generally contains the top byte of the hash value
	// for each key in this bucket. If tophash[0] < minTopHash,
	// tophash[0] is a bucket evacuation state instead.
	tophash [bucketCnt]uint8
	// Followed by bucketCnt keys and then bucketCnt elems.
	// NOTE: packing all the keys together and then all the elems together makes the
	// code a bit more complicated than alternating key/elem/key/elem/... but it allows
	// us to eliminate padding which would be needed for, e.g., map[int64]int8.
	// Followed by an overflow pointer.
}
```

可以看到的是`bmap`中存储了固定长度的哈希值，这个长度的大小是`buckerCnt`，代码中默认是8位。

### 哈希冲突

当有两个或以上数量的键被哈希到了同一个bucket时，我们称这些键发生了冲突。Go使用链地址法来解决键冲突。
由于每个bucket可以存放8个键值对，所以同一个bucket存放超过8个键值对时就会再创建一个键值对，用类似链表的方式将bucket连接起来 (源码中的`extra`)。



### 负载因子 & Rehash

在`map.go`中有一个叫做`overLoadFactor`的方法来判断当前的`map`是否过大，哈希表需要将负载因子控制在合适的大小，超过其阀值需要进行rehash，也即键值对重新组织：

- 哈希因子过小，说明空间利用率低
- 哈希因子过大，说明冲突严重，存取效率低



### 查找和插入

查找过程如下：

1. 根据key值算出哈希值
2. 取哈希值低位与hmap.B取模确定bucket位置
3. 取哈希值高位在tophash数组中查询
4. 如果tophash[i]中存储值也哈希值相等，则去找到该bucket中的key值进行比较
5. 当前bucket没有找到，则继续从下个overflow的bucket中查找。
6. 如果当前处于搬迁过程，则优先从oldbuckets查找





新元素插入过程如下：

1. 根据key值算出哈希值
2. 取哈希值低位与hmap.B取模确定bucket位置
3. 查找该key是否已经存在，如果存在则直接更新值
4. 如果没找到将key，将key插入







