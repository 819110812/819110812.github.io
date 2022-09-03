---
article: true
title: waline评论服务docker自部署 
tag: devops
order: 1
---

# Waline评论服务docker自部署手册 + 无备案域名配置

## 序
写在前面，为啥要整个自己部署的waline （waline是啥就不细说了）呢。一句话：就是为了访问稍微快点！

在[官方的教程](https://waline.js.org/guide/get-started.html)中，最简单易用的是`LeanCloud`+`Vercel`部署的做法。不得不说，如果放在之前，这个部署方式觉得是简单易用的，傻瓜式部署。但是奈何，现在leancloud已经不适合大陆访问了，

![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian20220903120512.png)


并且vercel也不是很稳定。也尝试过使用腾讯云的`Cloudbase`和阿里云的`函数计算`，都是踩了无数坑。前者`node`版本太低，直接报错，后者需要域名备案，直接达咩放弃。

所以，最后还是选择了`docker`部署，这样就可以自己随便整了。

需要完成本教程的内容需要你拥有这些东西：
- 服务器一台
- 域名一枚
- 或者信用卡一张（用于购买域名）
- 给你的服务器装上宝塔用来配置域名（命令行配置也是可以的）

废话不多说，上才艺！

## 先把waline部署起来
我这边采用的是`docker-compose`的方式部署的，所以需要先安装`docker`和`docker-compose`。
安装过程就不细讲了，直接上yaml文件

```yaml
version: '3.8'
services:
  web:
    image: 'lizheming/waline'
    restart: always
    ports:
      - '8360:8360'
    environment:
      MYSQL_DB: 'waline'
      MYSQL_USER: 'root'
      MYSQL_PASSWORD: 'root'
      MYSQL_HOST: 'db'
      MYSQL_PORT: '3306'

  db:
    image: 'mysql:5.7'
    restart: always
    ports:
      - '3306:3306'
    environment:
      MYSQL_ROOT_PASSWORD: 'root'
      MYSQL_DATABASE: 'waline'
```

一个极度偷懒的yaml，为了后续维护，建议大家把volume挂载起来，这样就可以真正的stateless了。
由于咱们的数据库是全新的，所以还需要手动将表创建出来。

```sql
# CREATE DATABASE waline DEFAULT CHARACTER SET utf8mb4;
use waline;

CREATE TABLE `wl_Comment` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(11) DEFAULT NULL,
  `comment` text,
  `insertedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `ip` varchar(100) DEFAULT '',
  `link` varchar(255) DEFAULT NULL,
  `mail` varchar(255) DEFAULT NULL,
  `nick` varchar(255) DEFAULT NULL,
  `pid` int(11) DEFAULT NULL,
  `rid` int(11) DEFAULT NULL,
  `sticky` int(11) DEFAULT NULL,
  `status` varchar(50) NOT NULL DEFAULT '',
  `ua` text,
  `url` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `wl_Counter` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `time` int(11) DEFAULT NULL,
  `url` varchar(255) NOT NULL DEFAULT '',
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

CREATE TABLE `wl_Users` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `display_name` varchar(255) NOT NULL DEFAULT '',
  `email` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL DEFAULT '',
  `type` varchar(50) NOT NULL DEFAULT '',
  `url` varchar(255) DEFAULT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `github` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `google` varchar(255) DEFAULT NULL,
  `weibo` varchar(255) DEFAULT NULL,
  `qq` varchar(255) DEFAULT NULL,
  `label` varchar(255) DEFAULT NULL,
  `2fa` varchar(255) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
```
配置完数据库，就可以测试一下咱们的页面了
当你访问`host+8360`的时看到这个页面，就说明你部署成功了：
![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian20220903121138.png)

当然，别忘了顺带测一下你的登陆和评论功能，如果有问题，可以去`waline`的github仓库提issue。

## 配置我们的域名
### 购买域名
我这边使用的是cloudflare的域名可以在cloudflare域注册中点击注册域
![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian20220903125138.png)

在里面选择咱们需要购买的域名 （这里需要你拥有一张信用卡）

### 配置域名
当我们拥有了我们自己的域名后，可以在服务器上配置上我们的域名了
首先，将我们域名解析绑定到我们的服务器上，这一步需要你在DNS的设置中添加一天A记录，将你的域名解析到你的服务器IP上
![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian20220903125500.png)
![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian20220903125709.png)
然后在宝塔上创建一条网站记录，将我们的域名绑定到我们的网站上
![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian20220903130024.png)
点击创建好的站点的设置，开始配置反向代理.(注：我们这边SSL可以不用部署，因为cloudflare自带一个免费的SSL证书)
![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian20220903130148.png)
![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian20220903130404.png)

这个时候，就可以在浏览器中输入我们的域名，看到waline运行起来了!!!

# 小结
这边文章主要就是给大家提供一个简单的waline docker部署的思路，优点是咱们的服务是自己维护的，可以任意更改，并且可以通过域名优雅的访问，
缺点就是这个部署方式是比较简陋的，难以承载很大的并发，评论的相应速度也是取决于咱们服务器的性能。
