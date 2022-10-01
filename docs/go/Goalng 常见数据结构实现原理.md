---
article: true
title: golang常见数据结构实现原理
star: true
tag:
   - go
order: 3
---

# Golang 常见数据结构实现原理

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



```go
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





## Iota



## Chan

