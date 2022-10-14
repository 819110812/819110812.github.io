---
article: true
title: 如何Golang快速构建一个CLI小工具02-解析文件
star: true
tag:
   - go
order: 5
---

# 如何用golang快速构建一个CLI小工具02 - 解析文件

在上一篇文章中，我们构建了一个叫`autoSeletor`的子命令用来随机选择我们输入的字符数组。在这篇中，我们来给我们的这个子命令加点功能 -- 解析文件！

我们希望通过文件的方式来作为输入，然后随机选出文件的内容。


## 先上效果

```go
// 文件内容:
// 学习
// 出去玩
// 走走走

>> gtools as -f test.env
出去玩
>> gtools as -f test.env
走走走
>> gtools as 1 2 3
1
```

在我们使用了一个`-f`  的标致来加载表示我们希望通过文件的形式来加载内容，同时我们也保留原本的直接从命令行输入的功能。不多bb，开始细讲下我们如何去实现吧



## 添加我们的flag

在我们之前的`autoSeletor` 子命令初始化时注册进一个 flag 叫`file`，我们可以使用`--file`的形式来使用这个flag进行输入，我们也可以通过短命令`-f`来代替`--file`。 

```go
var autoSelectorCmd = &cobra.Command{
	Use:     "autoSelector",
	Aliases: []string{"as"},
	Short:   "randomly select string from a list",
	Long:    `randomly select string from a list`,
	Run: func(cmd *cobra.Command, args []string) {
	  // 通过GetString接可以获得我们的flag后面的内容了
		fileFlag, err := cmd.Flags().GetString("file")
	},
}


func init() {
	rootCmd.AddCommand(autoSelectorCmd)

	// Here you will define your flags and configuration settings.

	// Cobra supports Persistent Flags which will work for this command
	// and all subcommands, e.g.:
	// autoSelectorCmd.PersistentFlags().String("foo", "", "A help for foo")

	// Cobra supports local flags which will only run when this command
	// is called directly, e.g.:
	// autoSelectorCmd.Flags().BoolP("toggle", "t", false, "Help message for toggle")
	autoSelectorCmd.Flags().StringP("file", "f", "", "file path")
}
```



### 实现我们的解析逻辑吧

既然我们的flag已经拓展成功了，那么我们可以实现我们的具体逻辑了。 在`pkg`包下创建一个`fileParser.go`的文件来放置我们的具体逻辑。

```go
// 一个抽象的接口，放在这边便于后续拓展
type FileParser interface {
	Parse(filePath string) ([]string, error)
}

type Parser struct {
}

// 主要解析方法
func (p *Parser) Parse(filePath string) ([]string, error) {
  // 判断文件是否存在
	_, err := os.Stat(filePath)
	if err != nil {
		return nil, errors.New("file not exist")
	}
  // 如果存在就去读取文件
	bytesContent, err := os.Open(filePath)
	if err != nil {
		return nil, errors.New("read file error")
	}

  // 放到buffer里
	r := bufio.NewReader(bytesContent)
	var chunks []string
  
	for {
    // 逐行去解析
		line, _, err := r.ReadLine()
		if err != nil {
			break
		}
		chunks = append(chunks, string(line))
	}

	return chunks, nil
}

func NewParser() *Parser {
	return &Parser{}
}
```



### 将我们的逻辑集成到命令行吧

```go
var autoSelectorCmd = &cobra.Command{
	Use:     "autoSelector",
	Aliases: []string{"as"},
	Short:   "randomly select string from a list",
	Long:    `randomly select string from a list`,
	Run: func(cmd *cobra.Command, args []string) {
    // 读取flag
		fileFlag, err := cmd.Flags().GetString("file")
		if err != nil {
			cmd.Println("go error when parse file flag")
			os.Exit(1)
		}
    // 如果是文件读取的模式话，就去解析文件
		if fileFlag != "" {
			parser := file_parser.NewParser()
			args, err = parser.Parse(fileFlag)
		}
    // 如果都不是，就结束
		if len(args) == 0 && fileFlag == "" {
			cmd.Println("please input a list of string or file path")
			os.Exit(1)
		}
    // 主要的解析
		res, err := auto_selector.AutoSelect(args)
		if err != nil {
			cmd.Println("got error: ", err.Error())
			os.Exit(1)
		}
		if len(res) > 0 {
			cmd.Println(res)
		}
	},
}
```



至此，我们的拓展就结束啦~，构建一把，直接起飞使用！

```go
go build -o gtools
```





代码仓库： [https://github.com/819110812/GoCommandTools](https://github.com/819110812/GoCommandTools)

个人博客地址：[https://doraemonabcd.xyz/]([https://doraemonabcd.xyz/)



![](https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian扫码_搜索联合传播样式-标准色版.png)

