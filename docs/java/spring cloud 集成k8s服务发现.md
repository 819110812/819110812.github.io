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



