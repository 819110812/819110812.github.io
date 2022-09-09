---
article: true
title: 如何理解和使用go context包
star: true
tag:
- go
order: 1
---

# 如何理解和使用go context包

## 什么是context包
context包提供了一个上下文，可以在多个goroutine之间传递数据，同时可以取消一个goroutine。有点类似与线程总线的一个角色，里面可以存储任何和你当前场景相关
的信息，比如各种中间件传过来的东西，http的请求头，traceid等一些和业务不那么相关的数据。内部结构有点类似map，是一个key-value形式存储的。 

## context包的使用
![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian20220908213529.png)
注： context是不可变的。
### context.Background()
作用：返回一个空的context，一般用于main函数，作为整个程序的入口，所有的goroutine都可以从这个context中获取到数据，但是这个context没有任何的值，也没有任何的超时时间，也没有任何的取消函数，所以这个context只能用于main函数，或者是一些初始化的操作，不能用于其他的goroutine中。

### context.TODO()
作用：返回一个空的context，一般用于一些还没有实现的函数，或者是一些还没有实现的功能，这个context也是没有任何的值，也没有任何的超时时间，也没有任何的取消函数，所以这个context只能用于一些还没有实现的函数，或者是一些还没有实现的功能。

### context.WithCancel(), context.WithTimeout(), context.WithDeadline()
作用：都返回一个可取消的上下文，当调用cancel函数或者超时或者到期时，上下文会被取消，同时会通知所有的子上下文也被取消。

### context.WithValue()
作用：设置键值对，返回一个新的上下文，这个上下文和原来的上下文是同一个父节点，但是有不同的值。

### context 和 time.AfterFunc() (对比)
作用：在指定的时间后，执行一个函数。对比context.WithTimeout()，time.AfterFunc()只能执行一个函数，而context.WithTimeout()可以执行多个函数。

## context父子关系
context实例间存在父子关系，当一个context被取消时，它的所有子context都会被取消。



![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian扫码_搜索联合传播样式-标准色版.png)

