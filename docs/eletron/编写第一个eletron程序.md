---
article: true
title: 编写第一个eletron程序
star: true
tag:
  - eletron
order: 1
---

# 编写第一个eletron程序

## 1. 安装

```bash
npm install --save-dev electron
```
当你安装完electron后，你会发现你的项目目录下多了一个node_modules文件夹，里面有electron的相关文件。
在安装完之后，我们需要手动的去到package.json文件中添加一下启动的配置：
```json
{
  "scripts": {
    "start": "electron ."
  }
}
```
完整的配置如下：

```json
{
  "name": "my-electron-app", //我的项目名称
  "version": "1.0.0",
  "main": "index.js", // 入口文件
  "scripts": {
 "start": "electron .",  // 启动脚本 
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC",
  "description": "",
  "devDependencies": {
    "electron": "^20.1.2"
  }
}
```


## 2. 创建一个简单的html页面并且用eletron打开

在项目任意一个目录下创建一个html文件：

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <!-- https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP -->
    <meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self'">
    <title>Hello World!</title>
  </head>
  <body>
    <h1>Hello World!</h1>
    We are using Node.js <span id="node-version"></span>,
    Chromium <span id="chrome-version"></span>,
    and Electron <span id="electron-version"></span>.
  </body>
</html>
```

根据默认的入口文件配置，我们还需要在根目录下创建一个`index.js`文件，用来作为整个程序的启动文件
```js
// 加载必要的模块
const {app, BrowserWindow} = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600
    })

    // 加载我们刚刚创建的html文件，由于我是在src目录下创建的，所以这边使用更多是相对路径
    win.loadFile('./src/index.html')
}

app.whenReady().then(() => {
    // 创建窗口
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})
```


## 3. 运行

```shell
npm run start
```

此时就可以看到页面上显示出我们的第一个页面了

![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian20220910150407.png)

## 4. 打包
添加必要的依赖

```shell
npm install --save-dev @electron-forge/cli
npx electron-forge import
```
打包程序
```shell
npm run make
```
此时我们的程序就会出现在`out`目录下, 直接运行`out/my-electron-app-darwin-x64/my-electron-app.app/Contents/MacOS/my-electron-app`就可以运行我们的程序了



![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian扫码_搜索联合传播样式-标准色版.png)

