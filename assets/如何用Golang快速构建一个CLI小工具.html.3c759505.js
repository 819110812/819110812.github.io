import{_ as t,o,c as i,a as n,b as e,e as l,d as s,r as c}from"./app.e0f96500.js";const p={},d=l(`<h1 id="\u5982\u4F55golang\u5FEB\u901F\u6784\u5EFA\u4E00\u4E2Acli\u5C0F\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55golang\u5FEB\u901F\u6784\u5EFA\u4E00\u4E2Acli\u5C0F\u5DE5\u5177" aria-hidden="true">#</a> \u5982\u4F55Golang\u5FEB\u901F\u6784\u5EFA\u4E00\u4E2ACLI\u5C0F\u5DE5\u5177</h1><p>\u5728\u73B0\u5B9E\u5F00\u53D1\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5927\u5BB6\u4F1A\u53D1\u73B0\u5F88\u591A\u5F00\u6E90\u7684\u6846\u67B6\u90FD\u4F1A\u6709\u7740\u81EA\u5DF1\u7684\u4E00\u4E2ACLI\u5DE5\u5177\u5E93\u6765\u5E2E\u52A9\u5F00\u53D1\u8005\u4EEC\u901A\u8FC7\u547D\u4EE4\u884C\u7684\u65B9\u5F0F\u5FEB\u901F\u7684\u8FBE\u5230\u67D0\u4E9B\u76EE\u7684\uFF0C\u6BD4\u5982\u5E38\u89C1\u7684<code>docker </code>\u547D\u4EE4\u3002\u90A3\u4E48\u5728\u8FD9\u7BC7\u6587\u7AE0\u5F53\u4E2D\uFF0C\u4E3B\u8981\u7ED9\u5927\u5BB6\u4ECB\u7ECD\u4E00\u4E2Agolang\u7684\u5C0F\u6846\u67B6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u501F\u52A9\u8FD9\u4E2A\u6846\u67B6\u6765\u5FEB\u901F\u642D\u5EFA\u4E00\u4E2A\u5C0F\u7684CLI\u5DE5\u5177</p><h2 id="\u5148\u4E0A\u6548\u679C" tabindex="-1"><a class="header-anchor" href="#\u5148\u4E0A\u6548\u679C" aria-hidden="true">#</a> \u5148\u4E0A\u6548\u679C</h2><p>\u6211\u4EEC\u8FD9\u8FB9\u6784\u5EFA\u4E86\u4E00\u4E2A\u53EB<code>gtools</code>\u7684\u5C0F\u5DE5\u5177\uFF0C\u7528\u6765\u5BB9\u7EB3\u6211\u4EEC\u81EA\u5DF2\u7528<code>golang</code>\u5F00\u53D1\u7684\u4E00\u4E9B\u5C0F\u7684\u5DE5\u5177</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token operator">&gt;&gt;</span> gtools            
gtools is a CLI application <span class="token keyword">for</span> golang <span class="token builtin class-name">command</span> tools.

Usage:
  gtools <span class="token punctuation">[</span>command<span class="token punctuation">]</span>

Available Commands:
  autoSelector randomly <span class="token keyword">select</span> string from a list
  completion   Generate the autocompletion script <span class="token keyword">for</span> the specified shell
  <span class="token builtin class-name">help</span>         Help about any <span class="token builtin class-name">command</span>

Flags:
  -h, <span class="token parameter variable">--help</span>     <span class="token builtin class-name">help</span> <span class="token keyword">for</span> gtools
  -t, <span class="token parameter variable">--toggle</span>   Help message <span class="token keyword">for</span> toggle

Use <span class="token string">&quot;gtools [command] --help&quot;</span> <span class="token keyword">for</span> <span class="token function">more</span> information about a command.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u8FB9\u7684<code>autoSeletor</code>\u662F\u6211\u4EEC\u81EA\u5DF1\u7684\u4E00\u4E2A\u5C0F\u5DE5\u5177\uFF0C\u7528\u6765\u968F\u673A\u7684\u4ECE\u8F93\u5165\u7684\u5B57\u7B26\u5217\u8868\u4E2D\u9009\u4E00\u4E2A\u4F5C\u4E3A\u7ED3\u679C\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&gt;&gt; gtools as \u5B66\u4E60 \u770B\u7535\u5F71 \u8FD8\u662F\u5B66\u4E60
\u5B66\u4E60

&gt;&gt; gtools as \u5B66\u4E60 \u770B\u7535\u5F71 \u8FD8\u662F\u5B66\u4E60
\u8FD8\u662F\u5B66\u4E60
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u90A3\u4E48\u5982\u4F55\u5B9E\u73B0\u5462" tabindex="-1"><a class="header-anchor" href="#\u90A3\u4E48\u5982\u4F55\u5B9E\u73B0\u5462" aria-hidden="true">#</a> \u90A3\u4E48\u5982\u4F55\u5B9E\u73B0\u5462\uFF1F</h2><p>\u5728\u8FD9\u8FB9\uFF0C\u6211\u4EEC\u7528\u4E86\u4E00\u4E2A\u53EB<code>cobra</code>\u7684\u6846\u67B6\uFF0C\u8FD9\u4E2A\u6846\u67B6\u88AB\u5E7F\u6CDB\u8FD0\u7528\u5230\u5F88\u591A\u5F00\u6E90\u7684\u4EA7\u54C1\u5F53\u4E2D\uFF0C\u6BD4\u5982<code>docker-compose</code>, <code>kubectl</code>\u7B49\u3002</p><p>\u9996\u5148\uFF0C\u6211\u4EEC\u8981\u5B89\u88C5\u76F8\u5E94\u7684\u73AF\u5883\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>go get -u github.com/spf13/cobra@latest

go install github.com/spf13/cobra-cli@latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728\u6267\u884C\u5B8C\u4E0A\u9762\u4E24\u6761\u547D\u4EE4\u540E\u6211\u4EEC\u5C31\u5177\u5907\u6700\u57FA\u672C\u7684\u5F00\u53D1\u6761\u4EF6\u4E86\uFF0C\u63A5\u4E0B\u6765\u5F00\u59CB\u6211\u4EEC\u7684\u5F00\u53D1\u5427\uFF01</p><blockquote><p><strong>\u4F7F\u7528Cobra\u521D\u59CB\u5316\u6211\u4EEC\u7684\u9879\u76EE</strong></p></blockquote><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cobra-cli init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6267\u884C\u5B8C\u4E4B\u540E\uFF0C\u6211\u4EEC\u4F1A\u5728\u672C\u5730\u76EE\u5F55\u770B\u5230\u8FD9\u6837\u7684\u7ED3\u6784</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u251C\u2500\u2500 main.go
\u251C\u2500\u2500 cmd
\u2502   \u2514\u2500\u2500 root.go
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>main.go</code>\u5C31\u662F\u6211\u4EEC\u7684\u4E3B\u5165\u53E3\u4E86\uFF0C<code>root</code>\u662F\u6211\u4EEC\u547D\u4EE4\u7684\u6839\u547D\u4EE4</p><p>main.go</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u53EA\u662F\u505A\u4E86\u4E00\u4E2A\u6267\u884C\u7684\u64CD\u4F5C</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	cmd<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Root.go \u5B9A\u4E49\u4E86\u6839\u547D\u4EE4\uFF0C\u8FD8\u6709\u4E00\u4E9B\u521D\u59CB\u5316\u7684\u64CD\u4F5C</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> rootCmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
	Use<span class="token punctuation">:</span>   <span class="token string">&quot;gtools&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u8FD9\u662F\u4F60\u7684\u547D\u4EE4\u7684\u540D\u5B57</span>
	Short<span class="token punctuation">:</span> <span class="token string">&quot;A brief description of your application&quot;</span><span class="token punctuation">,</span>
	Long<span class="token punctuation">:</span> <span class="token string">\`A longer description that spans multiple lines and likely contains
examples and usage of using your application. For example:

Cobra is a CLI library for Go that empowers applications.
This application is a tool to generate the needed files
to quickly create a Cobra application.\`</span><span class="token punctuation">,</span>
	<span class="token comment">// Uncomment the following line if your bare application</span>
	<span class="token comment">// has an action associated with it:</span>
	<span class="token comment">// Run: func(cmd *cobra.Command, args []string) { },</span>
<span class="token punctuation">}</span>

<span class="token comment">// Execute adds all child commands to the root command and sets flags appropriately.</span>
<span class="token comment">// This is called by main.main(). It only needs to happen once to the rootCmd.</span>
<span class="token keyword">func</span> <span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	err <span class="token operator">:=</span> rootCmd<span class="token punctuation">.</span><span class="token function">Execute</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">if</span> err <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// Here you will define your flags and configuration settings.</span>
	<span class="token comment">// Cobra supports persistent flags, which, if defined here,</span>
	<span class="token comment">// will be global for your application.</span>

	<span class="token comment">// rootCmd.PersistentFlags().StringVar(&amp;cfgFile, &quot;config&quot;, &quot;&quot;, &quot;config file (default is $HOME/.main.yaml)&quot;)</span>

	<span class="token comment">// Cobra also supports local flags, which will only run</span>
	<span class="token comment">// when this action is called directly.</span>
	rootCmd<span class="token punctuation">.</span><span class="token function">Flags</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">BoolP</span><span class="token punctuation">(</span><span class="token string">&quot;toggle&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;t&quot;</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token string">&quot;Help message for toggle&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>\u52A0\u5165\u6211\u4EEC\u7684\u5B50\u547D\u4EE4</strong></p></blockquote><p>\u73B0\u5728\uFF0C\u6211\u4EEC\u9700\u8981\u52A0\u5165\u4E00\u4E2A\u5B50\u547D\u4EE4\uFF0C\u5982<code>autoSelector</code>, \u53EA\u9700\u6267\u884C\u4E00\u4E0B\u547D\u4EE4\u5373\u53EF\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cobra-cli add autoSelector
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5BF9\u5E94\u7684\u4E00\u4E2A\u53EB<code>autoSelector.go</code>\u7684\u6587\u4EF6\u5C31\u4F1A\u51FA\u73B0\u5728<code>cmd</code>\u76EE\u5F55\u5E95\u4E0B\uFF0C\u5E76\u4E14\u5DF2\u7ECF\u4E3A\u4F60\u51C6\u5907\u4E86\u57FA\u672C\u7684\u547D\u4EE4\u884C\u6846\u67B6</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// autoSelectorCmd represents the autoSelector command</span>
<span class="token keyword">var</span> autoSelectorCmd <span class="token operator">=</span> <span class="token operator">&amp;</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">{</span>
	Use<span class="token punctuation">:</span>     <span class="token string">&quot;autoSelector&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// \u540D\u5B57</span>
	Aliases<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;as&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// \u547D\u4EE4\u884C\u7684\u7B80\u5199</span>
	Short<span class="token punctuation">:</span>   <span class="token string">&quot;randomly select string from a list&quot;</span><span class="token punctuation">,</span>  <span class="token comment">//\u7B80\u5355\u7684\u63CF\u8FF0</span>
	Long<span class="token punctuation">:</span>    <span class="token string">\`randomly select string from a list\`</span><span class="token punctuation">,</span>  <span class="token comment">//\u8BE6\u7EC6\u63CF\u8FF0</span>
	Run<span class="token punctuation">:</span> <span class="token keyword">func</span><span class="token punctuation">(</span>cmd <span class="token operator">*</span>cobra<span class="token punctuation">.</span>Command<span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u5728\u8FD9\u91CC\u52A0\u5165/\u8C03\u7528\u4F60\u7684\u4E3B\u8981\u903B\u8F91</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u6CE8\u518C\u5230\u6839\u547D\u4EE4\u4E0B</span>
	rootCmd<span class="token punctuation">.</span><span class="token function">AddCommand</span><span class="token punctuation">(</span>autoSelectorCmd<span class="token punctuation">)</span>

	<span class="token comment">// Here you will define your flags and configuration settings.</span>

	<span class="token comment">// Cobra supports Persistent Flags which will work for this command</span>
	<span class="token comment">// and all subcommands, e.g.:</span>
	<span class="token comment">// autoSelectorCmd.PersistentFlags().String(&quot;foo&quot;, &quot;&quot;, &quot;A help for foo&quot;)</span>

	<span class="token comment">// Cobra supports local flags which will only run when this command</span>
	<span class="token comment">// is called directly, e.g.:</span>
	<span class="token comment">// autoSelectorCmd.Flags().BoolP(&quot;toggle&quot;, &quot;t&quot;, false, &quot;Help message for toggle&quot;)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>\u5B9E\u73B0\u6211\u4EEC\u7684\u529F\u80FD</strong></p></blockquote><p>\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E00\u4E2A<code>pkg</code>\u5305\u6765\u5B58\u653E\u6211\u4EEC\u7684\u5177\u4F53\u5B9E\u73B0\u903B\u8F91\uFF0C\u5728<code>cmd</code>\u4E2D\u53EA\u9700\u8981\u505A\u7B80\u5355\u7684\u8C03\u7528\u5373\u53EF</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import (
	&quot;math/rand&quot;
	&quot;time&quot;
)

// \u7B80\u5355\u5B9E\u73B0\u903B\u8F91
func AutoSelect(inputs []string) (selected string, err error) {
	source := rand.NewSource(time.Now().UnixNano())
	r := rand.New(source)
	randomIndex := r.Intn(len(inputs))
	selected = inputs[randomIndex]
	return selected, nil
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B64\u65F6\u6211\u4EEC\u7684\u4EE3\u7801\u5DE5\u5177\u5C31\u57FA\u672C\u5B9E\u73B0\u5B8C\u6210\u4E86\uFF0C\u53EA\u9700\u8981\u7F16\u8BD1\u4E00\u4E0B\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u3002\u7F16\u8BD1\u8FD0\u884C</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">go</span> build <span class="token operator">-</span>o gtools
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F60\u5C31\u53EF\u4EE5\u5F97\u5230\u4E00\u4E2A\u53EB<code>gtools</code>\u7684\u4E8C\u8FDB\u5236\u5305\uFF0C\u76F4\u63A5\u8FD0\u884C\u5C31\u53EF\u4EE5\u770B\u5230\u6211\u4EEC\u5F00\u5934\u7684\u6548\u679C\u5566~</p>`,32),u=s("\u4EE3\u7801\u4ED3\u5E93\uFF1A "),r={href:"https://github.com/819110812/GoCommandTools",target:"_blank",rel:"noopener noreferrer"},m=s("https://github.com/819110812/GoCommandTools"),v=s("\u4E2A\u4EBA\u535A\u5BA2\u5730\u5740\uFF1A"),k={href:"https://doraemonabcd.xyz/",target:"_blank",rel:"noopener noreferrer"},b=s("https://doraemonabcd.xyz/"),g=n("p",null,[n("img",{src:"https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian\u626B\u7801_\u641C\u7D22\u8054\u5408\u4F20\u64AD\u6837\u5F0F-\u6807\u51C6\u8272\u7248.png",alt:""})],-1);function h(f,x){const a=c("ExternalLinkIcon");return o(),i("div",null,[d,n("p",null,[u,n("a",r,[m,e(a)])]),n("p",null,[v,n("a",k,[b,e(a)])]),g])}var _=t(p,[["render",h],["__file","\u5982\u4F55\u7528Golang\u5FEB\u901F\u6784\u5EFA\u4E00\u4E2ACLI\u5C0F\u5DE5\u5177.html.vue"]]);export{_ as default};
