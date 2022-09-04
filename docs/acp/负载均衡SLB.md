---
article: true  
title: 负载均衡SLB 
tag: acp
order: 2

---

# 负载均衡SLB

### 种类

|      | ALB            | NLB             | CLB              |
|------|----------------|-----------------|------------------|
| 适用场景 | 面向应用交付，如视频网络应用 | 面向网络交付，如IOT等物联网 | 传统应用，<br/>网络分流或者是同城灾备 |


### CLB
#### 基础架构
CLB原来是阿里云的一个产品，后来被整合到了SLB中，现在的CLB是SLB的一个子产品，所以CLB的基础架构和SLB的基础架构是一样的。
当前CLB提供四层和七层的负载均衡，四层负载均衡是基于TCP协议的，七层负载均衡是基于HTTP协议的。

四层是采用的开源的LVS（Linux Virtual Service）

七层是采用的开源的Tengine, 它是在Nginx的基础上针对大流量访问的网站需求，添加了很多功能。







### 配置转发策略
- 只有七层的（HTTP/HTTPS）可以配置转发策略


### 会话保持
- 七层的（HTTP/HTTPS）通过cookie实现会话保持
- 四层的（TCP/UDP）通过源IP实现会话保持


![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian扫码_搜索联合传播样式-标准色版.png)
