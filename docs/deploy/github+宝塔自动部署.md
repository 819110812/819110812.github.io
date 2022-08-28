---
article: false
title: github+宝塔面板自动部署页面
order: 2
---

# github+宝塔面板自动部署页面

## 服务器配置宝塔面板

```shell
# ubuntu
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh
```

## 安装webhook插件

## 配置回调脚本
```shell
cd folder #进入你的网页文件夹
git pull
## 配置部署脚本 如：
npm install
npm build
npm run
```

## 在github配置webhook
![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian20220828101240.png)

## 方案分析
### 优点：
- 可视化界面，方便简单
- 可以查看日志
### 缺点：
- 需要手动配置很多环境
- 如果部署或者拉取失败，没有及时反馈机制