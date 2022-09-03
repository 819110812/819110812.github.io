import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.517c70f2.js";const t={},o=e(`<h1 id="leetcode\u5237\u989817-\u4E8C\u53C9\u6811\u7684\u955C\u50CF" tabindex="-1"><a class="header-anchor" href="#leetcode\u5237\u989817-\u4E8C\u53C9\u6811\u7684\u955C\u50CF" aria-hidden="true">#</a> Leetcode\u5237\u989817--\u4E8C\u53C9\u6811\u7684\u955C\u50CF</h1><p>\u8BF7\u5B8C\u6210\u4E00\u4E2A\u51FD\u6570\uFF0C\u8F93\u5165\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u8BE5\u51FD\u6570\u8F93\u51FA\u5B83\u7684\u955C\u50CF\u3002</p><p>\u4F8B\u5982\u8F93\u5165\uFF1A</p><pre><code> 	4
  /   \\
  2     7
 / \\   / \\
1   3 6   9
</code></pre><p>\u955C\u50CF\u8F93\u51FA\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>	 4
   /   \\
  7     2
 / \\   / \\
9   6 3   1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u200B</p><p>\u793A\u4F8B 1\uFF1A</p><p>\u8F93\u5165\uFF1Aroot = [4,2,7,1,3,6,9] \u8F93\u51FA\uFF1A[4,7,2,9,6,3,1]</p><p>\u5F88\u7B80\u5355\uFF0C\u8BBE\u8BA1\u4E00\u4E2A\u9012\u5F52\uFF0C\u5C06\u5DE6\u53F3\u5B50\u6811\u5BF9\u6362</p><p>\u4E00\u5B9A\u8981\u540C\u65F6\u8D4B\u503C\uFF0C\u5426\u5219\u4F1A\u91CD\u590D\uFF0C\u6216\u8005\u4F7F\u7528\u4E00\u4E2Atemp\u4E2D\u95F4\u53D8\u91CF</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">mirrorTree</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> TreeNode<span class="token punctuation">:</span>
        <span class="token keyword">if</span> root <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> root
        <span class="token keyword">if</span> root<span class="token punctuation">:</span>
            root<span class="token punctuation">.</span>left<span class="token punctuation">,</span>root<span class="token punctuation">.</span>right <span class="token operator">=</span> self<span class="token punctuation">.</span>mirrorTree<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span><span class="token punctuation">,</span>self<span class="token punctuation">.</span>mirrorTree<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
        <span class="token keyword">return</span> root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,12),p=[o];function c(i,l){return s(),a("div",null,p)}var d=n(t,[["render",c],["__file","Leetcode\u5237\u989817--\u4E8C\u53C9\u6811\u7684\u955C\u50CF.html.vue"]]);export{d as default};
