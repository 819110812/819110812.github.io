---
article: true
title: 如何Golang快速构建一个CLI小工具
star: true
tag:
   - go
order: 4
---

# 如何Golang快速构建一个CLI小工具

在现实开发的过程中，大家会发现很多开源的框架都会有着自己的一个CLI工具库来帮助开发者们通过命令行的方式快速的达到某些目的，比如常见的`docker `命令。那么在这篇文章当中，主要给大家介绍一个golang的小框架，我们可以借助这个框架来快速搭建一个小的CLI工具


## 先上效果

我们这边构建了一个叫`gtools`的小工具，用来容纳我们自已用`golang`开发的一些小的工具

```shell
>> gtools            
gtools is a CLI application for golang command tools.

Usage:
  gtools [command]

Available Commands:
  autoSelector randomly select string from a list
  completion   Generate the autocompletion script for the specified shell
  help         Help about any command

Flags:
  -h, --help     help for gtools
  -t, --toggle   Help message for toggle

Use "gtools [command] --help" for more information about a command.

```

 这边的`autoSeletor`是我们自己的一个小工具，用来随机的从输入的字符列表中选一个作为结果：

```
>> gtools as 学习 看电影 还是学习
学习

>> gtools as 学习 看电影 还是学习
还是学习
```



## 那么如何实现呢？

在这边，我们用了一个叫`cobra`的框架，这个框架被广泛运用到很多开源的产品当中，比如`docker-compose`, `kubectl`等。

首先，我们要安装相应的环境：

```
go get -u github.com/spf13/cobra@latest

go install github.com/spf13/cobra-cli@latest
```

在执行完上面两条命令后我们就具备最基本的开发条件了，接下来开始我们的开发吧！

> **使用Cobra初始化我们的项目**

```
cobra-cli init
```

执行完之后，我们会在本地目录看到这样的结构

```
├── main.go
├── cmd
│   └── root.go
```

`main.go`就是我们的主入口了，`root`是我们命令的根命令

main.go

```go
// 只是做了一个执行的操作
func main() {
	cmd.Execute()
}
```

Root.go 定义了根命令，还有一些初始化的操作

```go
var rootCmd = &cobra.Command{
	Use:   "gtools",  // 这是你的命令的名字
	Short: "A brief description of your application",
	Long: `A longer description that spans multiple lines and likely contains
examples and usage of using your application. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.`,
	// Uncomment the following line if your bare application
	// has an action associated with it:
	// Run: func(cmd *cobra.Command, args []string) { },
}

// Execute adds all child commands to the root command and sets flags appropriately.
// This is called by main.main(). It only needs to happen once to the rootCmd.
func Execute() {
	err := rootCmd.Execute()
	if err != nil {
		os.Exit(1)
	}
}

func init() {
	// Here you will define your flags and configuration settings.
	// Cobra supports persistent flags, which, if defined here,
	// will be global for your application.

	// rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "", "config file (default is $HOME/.main.yaml)")

	// Cobra also supports local flags, which will only run
	// when this action is called directly.
	rootCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
```

> **加入我们的子命令**

现在，我们需要加入一个子命令，如`autoSelector`, 只需执行一下命令即可：

```
cobra-cli add autoSelector
```

对应的一个叫`autoSelector.go`的文件就会出现在`cmd`目录底下，并且已经为你准备了基本的命令行框架

```go
// autoSelectorCmd represents the autoSelector command
var autoSelectorCmd = &cobra.Command{
	Use:     "autoSelector",  // 名字
	Aliases: []string{"as"}, // 命令行的简写
	Short:   "randomly select string from a list",  //简单的描述
	Long:    `randomly select string from a list`,  //详细描述
	Run: func(cmd *cobra.Command, args []string) {
    // 在这里加入/调用你的主要逻辑
  }
}

func init() {
  // 注册到根命令下
	rootCmd.AddCommand(autoSelectorCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// autoSelectorCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// autoSelectorCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
}
```

> **实现我们的功能**

我们可以创建一个`pkg`包来存放我们的具体实现逻辑，在`cmd`中只需要做简单的调用即可

```
import (
	"math/rand"
	"time"
)

// 简单实现逻辑
func AutoSelect(inputs []string) (selected string, err error) {
	source := rand.NewSource(time.Now().UnixNano())
	r := rand.New(source)
	randomIndex := r.Intn(len(inputs))
	selected = inputs[randomIndex]
	return selected, nil
}
```

此时我们的代码工具就基本实现完成了，只需要编译一下就可以直接使用。编译运行

```go
go build -o gtools
```

你就可以得到一个叫`gtools`的二进制包，直接运行就可以看到我们开头的效果啦~



代码仓库： https://github.com/819110812/GoCommandTools

个人博客地址：https://doraemonabcd.xyz/

![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian扫码_搜索联合传播样式-标准色版.png)

