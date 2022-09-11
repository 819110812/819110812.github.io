import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.0d043642.js";const t={},e=p(`<h1 id="leetcode27-\u79FB\u9664\u5143\u7D20" tabindex="-1"><a class="header-anchor" href="#leetcode27-\u79FB\u9664\u5143\u7D20" aria-hidden="true">#</a> Leetcode27 -- \u79FB\u9664\u5143\u7D20</h1><p><strong>\u9898\u76EE\uFF1A</strong> <strong>\u96BE\u5EA6\uFF1A</strong> \u7B80\u5355</p><p>\u7ED9\u4F60\u4E00\u4E2A\u6570\u7EC4 <code>nums</code>\xA0\u548C\u4E00\u4E2A\u503C <code>val</code>\uFF0C\u4F60\u9700\u8981 \u539F\u5730 \u79FB\u9664\u6240\u6709\u6570\u503C\u7B49\u4E8E\xA0<code>val</code>\xA0\u7684\u5143\u7D20\uFF0C\u5E76\u8FD4\u56DE\u79FB\u9664\u540E\u6570\u7EC4\u7684\u65B0\u957F\u5EA6\u3002</p><p>\u4E0D\u8981\u4F7F\u7528\u989D\u5916\u7684\u6570\u7EC4\u7A7A\u95F4\uFF0C\u4F60\u5FC5\u987B\u4EC5\u4F7F\u7528 O(1) \u989D\u5916\u7A7A\u95F4\u5E76 \u539F\u5730 \u4FEE\u6539\u8F93\u5165\u6570\u7EC4\u3002</p><p>\u5143\u7D20\u7684\u987A\u5E8F\u53EF\u4EE5\u6539\u53D8\u3002\u4F60\u4E0D\u9700\u8981\u8003\u8651\u6570\u7EC4\u4E2D\u8D85\u51FA\u65B0\u957F\u5EA6\u540E\u9762\u7684\u5143\u7D20\u3002</p><p></p><p>\u8BF4\u660E:</p><p>\u4E3A\u4EC0\u4E48\u8FD4\u56DE\u6570\u503C\u662F\u6574\u6570\uFF0C\u4F46\u8F93\u51FA\u7684\u7B54\u6848\u662F\u6570\u7EC4\u5462?</p><p>\u8BF7\u6CE8\u610F\uFF0C\u8F93\u5165\u6570\u7EC4\u662F\u4EE5\u300C\u5F15\u7528\u300D\u65B9\u5F0F\u4F20\u9012\u7684\uFF0C\u8FD9\u610F\u5473\u7740\u5728\u51FD\u6570\u91CC\u4FEE\u6539\u8F93\u5165\u6570\u7EC4\u5BF9\u4E8E\u8C03\u7528\u8005\u662F\u53EF\u89C1\u7684\u3002</p><p>\u4F60\u53EF\u4EE5\u60F3\u8C61\u5185\u90E8\u64CD\u4F5C\u5982\u4E0B:</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token comment">// nums \u662F\u4EE5\u201C\u5F15\u7528\u201D\u65B9\u5F0F\u4F20\u9012\u7684\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E0D\u5BF9\u5B9E\u53C2\u4F5C\u4EFB\u4F55\u62F7\u8D1D</span>
<span class="token keyword">int</span> len <span class="token operator">=</span> <span class="token function">removeElement</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// \u5728\u51FD\u6570\u91CC\u4FEE\u6539\u8F93\u5165\u6570\u7EC4\u5BF9\u4E8E\u8C03\u7528\u8005\u662F\u53EF\u89C1\u7684\u3002</span>
<span class="token comment">// \u6839\u636E\u4F60\u7684\u51FD\u6570\u8FD4\u56DE\u7684\u957F\u5EA6, \u5B83\u4F1A\u6253\u5370\u51FA\u6570\u7EC4\u4E2D \u8BE5\u957F\u5EA6\u8303\u56F4\u5185 \u7684\u6240\u6709\u5143\u7D20\u3002</span>
<span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> len<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token function">print</span><span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B 1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Anums = [3,2,2,3], val = 3
\u8F93\u51FA\uFF1A2, nums = [2,2]
\u89E3\u91CA\uFF1A\u51FD\u6570\u5E94\u8BE5\u8FD4\u56DE\u65B0\u7684\u957F\u5EA6 2, \u5E76\u4E14 nums \u4E2D\u7684\u524D\u4E24\u4E2A\u5143\u7D20\u5747\u4E3A 2\u3002\u4F60\u4E0D\u9700\u8981\u8003\u8651\u6570\u7EC4\u4E2D\u8D85\u51FA\u65B0\u957F\u5EA6\u540E\u9762\u7684\u5143\u7D20\u3002\u4F8B\u5982\uFF0C\u51FD\u6570\u8FD4\u56DE\u7684\u65B0\u957F\u5EA6\u4E3A 2 \uFF0C\u800C nums = [2,2,3,3] \u6216 nums = [2,2,0,0]\uFF0C\u4E5F\u4F1A\u88AB\u89C6\u4F5C\u6B63\u786E\u7B54\u6848\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B 2\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Anums = [0,1,2,2,3,0,4,2], val = 2
\u8F93\u51FA\uFF1A5, nums = [0,1,4,0,3]
\u89E3\u91CA\uFF1A\u51FD\u6570\u5E94\u8BE5\u8FD4\u56DE\u65B0\u7684\u957F\u5EA6 5, \u5E76\u4E14 nums \u4E2D\u7684\u524D\u4E94\u4E2A\u5143\u7D20\u4E3A 0, 1, 3, 0, 4\u3002\u6CE8\u610F\u8FD9\u4E94\u4E2A\u5143\u7D20\u53EF\u4E3A\u4EFB\u610F\u987A\u5E8F\u3002\u4F60\u4E0D\u9700\u8981\u8003\u8651\u6570\u7EC4\u4E2D\u8D85\u51FA\u65B0\u957F\u5EA6\u540E\u9762\u7684\u5143\u7D20\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u9898\u76EE\u5206\u6790</strong></p><ol><li><p>\u8F93\u51FA\u662F\u4EC0\u4E48\uFF1F</p><p>\u8FD9\u9898\u5F88\u660E\u786E\uFF0C\u8F93\u51FA\u7684\u7684\u79FB\u9664\u5143\u7D20\u540E\u7684\u6570\u7EC4\u957F\u5EA6\uFF0C\u5E76\u4E14\u8FD9\u4E2A\u6570\u7EC4\u662F\u88AB\u539F\u5730\u4FEE\u6539</p></li><li><p>\u539F\u5730\u4FEE\u6539\u5982\u4F55\u53BB\u505A\uFF1F</p></li></ol><p>\u7ED3\u5408\u6211\u4EEC\u8FD9\u9898\u7684\u9700\u6C42\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6307\u9488\u7684\u601D\u60F3\uFF0C\u7528\u6307\u9488\u6765\u4E0D\u505C\u7684\u628A\u76EE\u6807\u6570\u5B57\u5F80\u540E\u653E\uFF0C\u6700\u7EC8\u8FD4\u56DE\u6700\u53F3\u4FA7\u6307\u9488\u7684\u4F4D\u7F6E\uFF0C\u5C31\u662F\u6211\u4EEC\u7684\u957F\u5EA6</p><ol start="3"><li>\u6211\u4EEC\u7684\u6307\u9488\u5982\u4F55\u505A\u5462\uFF1F</li></ol><p>\u6211\u4EEC\u53EF\u4EE5\u5B9A\u4E00\u4E2A\u6307\u9488\uFF0C\u7528\u6765\u8BB0\u5F55\u6211\u4EEC\u7684\u9700\u8981\u4EA4\u6362\u5143\u7D20\u7684\u4F4D\u7F6E\uFF0C\u7136\u540E\u904D\u5386\u8FC7\u7A0B\u4E2D\u7684<code>index</code>\u5C31\u662F\u6211\u4EEC\u62FF\u6765\u4EA4\u6362\u7684\u5143\u7D20\uFF0C \u5982\u56FE\uFF1A</p><p><img src="https://golearning.oss-cn-shanghai.aliyuncs.com/obsidianleetcode27.png" alt="" loading="lazy"></p><p>\u7ED3\u5408\u6211\u4EEC\u7684\u9898\u89E3\u4EE3\u7801\u770B\u4F1A\u66F4\u52A0\u5BB9\u6613\u663E\u773C\u4E00\u4E0B\uFF0C\u4E0Acode\uFF01</p><p><strong>\u9898\u89E3\uFF1A</strong></p><p>java\u7248\u672C\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">RemoveElementTest</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">removeElement</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums<span class="token punctuation">,</span> <span class="token keyword">int</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> nums<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> val<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                <span class="token keyword">continue</span><span class="token punctuation">;</span>
            <span class="token punctuation">}</span>
            nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span>
            left<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">return</span> left<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">should_remove_element_successfully_01</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> val <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token function">removeElement</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> expected <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token function">assertThat</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span>expected<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token annotation punctuation">@Test</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">should_remove_element_successfully_02</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span> nums <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token keyword">int</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> val <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> res <span class="token operator">=</span> <span class="token function">removeElement</span><span class="token punctuation">(</span>nums<span class="token punctuation">,</span> val<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> expected <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token function">assertThat</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">isEqualTo</span><span class="token punctuation">(</span>expected<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>golang\u7248\u672C\uFF1A</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">func</span> <span class="token function">removeElement</span><span class="token punctuation">(</span>nums <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">,</span> val <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	left <span class="token operator">:=</span> <span class="token number">0</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token function">len</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		<span class="token keyword">if</span> val <span class="token operator">==</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token punctuation">{</span>
			<span class="token keyword">continue</span>
		<span class="token punctuation">}</span>
		nums<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> nums<span class="token punctuation">[</span>i<span class="token punctuation">]</span>
		left<span class="token operator">++</span>
	<span class="token punctuation">}</span>
	<span class="token keyword">return</span> left
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">Test_Should_Get_Correct_Answer</span><span class="token punctuation">(</span>t <span class="token operator">*</span>testing<span class="token punctuation">.</span>T<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	origin <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>
	val <span class="token operator">:=</span> <span class="token number">3</span>
	res <span class="token operator">:=</span> <span class="token function">removeElement</span><span class="token punctuation">(</span>origin<span class="token punctuation">,</span> val<span class="token punctuation">)</span>
	<span class="token keyword">if</span> res <span class="token operator">!=</span> <span class="token number">2</span> <span class="token punctuation">{</span>
		t<span class="token punctuation">.</span><span class="token function">Errorf</span><span class="token punctuation">(</span><span class="token string">&quot;Expected 2, got %d&quot;</span><span class="token punctuation">,</span> res<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr><p><strong>\u603B\u7ED3\uFF1A</strong></p><p>\u770B\u5230\u6570\u7EC4\u7684\u9898\u76EE\uFF0C\u4E60\u60EF\u6027\u7684\u601D\u8003\u6211\u4EEC\u662F\u5426\u53EF\u4EE5\u7528\u53CC\u6307\u9488\u7684\u601D\u60F3\u6765\u505A\u3002\u9898\u76EE\u8981\u6C42\u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u957F\u5EA6\uFF0C\u8FD9\u79CD\u60C5\u51B5\u5927\u6982\u7387\u662F\u53EF\u4EE5\u901A\u8FC7\u6307\u9488\u7684\u6807\u8BB0\u4F4D\u7F6E\u6765\u8FD4\u56DE\u7ED3\u679C\u7684\u3002\u90A3\u4E48\u6211\u4EEC\u5E94\u8BE5\u8981\u89E3\u51B3\u7684\u95EE\u9898\u5C31\u662F\u5982\u4F55\u4F7F\u7528\u8FD9\u4E2A\u6307\u9488\uFF0C\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u6211\u4EEC\u9898\u76EE\u7684\u89E3\u7B54\u81EA\u7136\u800C\u7136\u5C31\u51FA\u6765\u4E86\u3002</p>`,30),o=[e];function c(l,i){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","Leetcode27 -- \u79FB\u9664\u5143\u7D20.html.vue"]]);export{r as default};
