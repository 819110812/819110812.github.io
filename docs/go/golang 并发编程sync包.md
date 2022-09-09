---
article: true
title: golang并发编程 sync包
star: true
tag:
  - go
order: 2
---

# golang并发编程 sync包

## mutex 和 rwmutex
#### 是什么
`Mutex`: 和java里的一样，`Mutex`是一个互斥锁，也就是说，同一时刻只能有一个goroutine持有锁，其他的goroutine只能等待。
`RWMutex`: 读写锁， `RWMutex`有两个锁，一个是读锁，一个是写锁。读锁是共享的，多个goroutine可以同时持有读锁，
而写锁是独占的，只能有一个goroutine持有写锁。当一个goroutine持有写锁时，其他goroutine既不能持有读锁，也不能持有写锁。

#### 怎么用
一般的用法就是将`Mutex`或者`RWMutex`和需要保护的数据放在一起，这样就可以保证数据的安全性了。
如：
```go
type Counter struct {
    lock sync.Mutex
    count int
}
```
#### 什么时候用
- 对于多个goroutine都会读写的资源，如公用的map，slice，channel等，需要加锁来保证数据的安全性。
- 如果多个goroutine只读不写，这种资源可以不需要加锁
- 使用锁的时候可以优先使用RWMutex

### RWmutex的使用
主要方法： RLock() RUnlock() Lock() Unlock()

```go

```


## once

## pool

## waitgroup




![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian扫码_搜索联合传播样式-标准色版.png)
