# de identify

## 目的

敏感信息去标识

### 哪些信息可以去表示？





## 怎么做？



### 方案1：sidex 现有实现



#### 所用语言

#### 使用方式

#### 所要的资源



### 方案2： CTF Clinical Trial Processor

是一个软件，需要下载

#### 所用语言

Java

#### 使用方式

1. java jar部署/installer
2. CTF提供一个PIPELINE的功能，将DICOM导入到CTF本地，然后内部去标识化，然后通过HTTP去访问结果



#### 支持的去标识化功能

- dicom object的去标识化
- Dicom 像素的去标识化



#### 评价：

优点：功能很强大，支持很多dicom需要的功能

缺点：部署和使用都需要另外spike去看，部署，未知风险多



### 方案3：deid



#### 所用语言:

python



#### 使用方式：

 部署：

- docker
- 自部署

访问：

- 命令行
- 自己写代码实现

#### 支持的去标识化功能

- dicom identifier
- dicom像素 



#### 评价

优点：

1. 比较轻量级
2. 实现简单，功能齐全



缺点：

1. 不提供rest的访问方式，可能需要自己封装
2. 可能有二次开发量



























