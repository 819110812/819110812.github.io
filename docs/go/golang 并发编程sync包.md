---
article: true
title: golang并发编程 sync包
star: true
tag:
- go
order: 2
---

# golang并发编程 sync包
 ![golang 锁模型](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian20220910131423.png)
<div style="text-align: center;">golang锁模型</div>

## mutex 和 rwmutex
### 是什么？
`Mutex`: 和java里的一样，`Mutex`是一个互斥锁，也就是说，同一时刻只能有一个goroutine持有锁，其他的goroutine只能等待。
`RWMutex`: 读写锁， `RWMutex`有两个锁，一个是读锁，一个是写锁。读锁是共享的，多个goroutine可以同时持有读锁，
而写锁是独占的，只能有一个goroutine持有写锁。当一个goroutine持有写锁时，其他goroutine既不能持有读锁，也不能持有写锁。

### 怎么用？
一般的用法就是将`Mutex`或者`RWMutex`和需要保护的数据放在一起，这样就可以保证数据的安全性了。
如：

```go
type Counter struct {
    lock sync.Mutex
    count int
}

func (c *Counter) Inc() {
    c.lock.Lock()
    defer c.lock.Unlock()
    c.count++
}
```
这样的写法可以保证，别人在调用方法时，可以不用再手动的去设置锁了，确保我们加锁的一个逻辑不会散落到各个地方。

注：使用锁的时候可以优先使用RWMutex

### RWmutex的使用

主要方法： RLock() RUnlock() Lock() Unlock()

#### 怎么用？
实战案例： `LoadOrStore`方法

```go
type Map struct {
	mu sync.RWMutex
	m  map[string]string
}

// LoadOrStore: 已有key则返回对应值，loaded=true, 反之则是返回新的值，loaded=false
func (m *Map) LoadOrStore(key, newValue string) (value string, loaded bool) {
	// 加读锁
	m.mu.RLock()
	// 如果要添加的内容已经存在了
	oldValue, ok := m.m[key]
	// 一定要在这边手动释放锁，如果使用defer释放锁，会在下方加锁时形成死锁
	// 因为defer是在返回时返回执行操作
	m.mu.RUnlock()
	if ok {
		return oldValue, ok
	}
	// 加写锁
	m.mu.Lock()
	defer m.mu.Unlock()
	// double check
	// 在设值前需要double check，确保不会因为其他的goroutine而把值覆盖
	oldValue, ok = m.m[key]
	if ok {
		return oldValue, ok
	}
	m.m[key] = newValue
	fmt.Printf("newValue is %s\n", newValue)
	return newValue, false
}

```


## once
### 是什么？
`Once`是一个只执行一次的结构体，可以用来保证某个函数只执行一次，比如初始化的时候，只需要初始化一次就可以了。
例子：

```go
var instance *singleton
var once sync.Once

// GetInstance: 获取单例 无论调用多少次GetInstance，都只会执行一次
func GetInstance() *singleton {
    once.Do(func() {
        instance = &singleton{}
    })
    return instance
}
```


## pool
### 是什么？
`Pool`是一个可以安全的在多个goroutine间共享且重用的对象的集合，可以用来减少内存分配的次数，提高性能。一般情况下，如果考虑缓存资源，
如创建好的对象，可以放到pool里面。但是`sync.Pool`不适合用来管理所有的资源，因为它不会对资源的数量进行限制，如果资源数量过多，会导致内存溢出，
并且GC的时候会释放资源。
### 怎么用？

## waitgroup

![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian扫码_搜索联合传播样式-标准色版.png)
