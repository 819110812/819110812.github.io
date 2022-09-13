---
article: false
title: spring cloud 集成k8s 服务发现
tag:
    - springboot
order: 2
---

# spring cloud 集成k8s 服务发现

## 添加必要的依赖

```xml
        <!-- https://mvnrepository.com/artifact/org.springframework.cloud/spring-cloud-starter-kubernetes -->
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-kubernetes-client</artifactId>
            <version>2.1.2</version>
        </dependency>

        <!-- https://mvnrepository.com/artifact/org.springframework.boot/spring-boot-starter-actuator -->
        <!-- 用来做healceare检测 -->
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-actuator</artifactId>
        </dependency>
```




注意`springboot`和`spring cloud`的版本要匹配，否则会报错，详情可以查看官方给出的[版本对应关系](https://spring.io/projects/spring-cloud#overview)
![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian20220912163954.png)



