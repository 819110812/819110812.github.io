import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e}from"./app.5db071fc.js";const t={},o=e(`<h1 id="leetcode\u5237\u989813-\u4E8C\u53C9\u6811\u7684\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#leetcode\u5237\u989813-\u4E8C\u53C9\u6811\u7684\u904D\u5386" aria-hidden="true">#</a> Leetcode\u5237\u989813 --\u4E8C\u53C9\u6811\u7684\u904D\u5386</h1><p>\u7ED9\u5B9A\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u8FD4\u56DE\u5B83\u7684\u4E2D\u5E8F \u904D\u5386\u3002</p><p>\u793A\u4F8B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165: [1,null,2,3]
   1
    \\
     2
    /
   3

\u8F93\u51FA: [1,3,2]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u6CD51\uFF1A\u501F\u52A9\u8F85\u52A9\u51FD\u6570</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">inorderTraversal</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> root<span class="token punctuation">:</span> TreeNode<span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        res <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        <span class="token keyword">if</span> root <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> res
        <span class="token keyword">def</span> <span class="token function">bfs</span><span class="token punctuation">(</span>root<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> root <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
                dfs<span class="token punctuation">(</span>root<span class="token punctuation">.</span>left<span class="token punctuation">)</span>
                res<span class="token punctuation">.</span>append<span class="token punctuation">(</span>root<span class="token punctuation">.</span>val<span class="token punctuation">)</span>
                dfs<span class="token punctuation">(</span>root<span class="token punctuation">.</span>right<span class="token punctuation">)</span>

        dfs<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
        <span class="token keyword">return</span> res
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u6CD5\u4E8C\uFF1A\u4F20\u7EDF\u9012\u5F52</p><div class="language-pytho ext-pytho line-numbers-mode"><pre class="language-pytho"><code>class Solution:
    def inorderTraversal(self, root: TreeNode) -&gt; List[int]:
        if root is None:
            return []
        if root is not None:
           return self.inorderTraversal(root.left) + [root.val] + self.inorderTraversal(root.right)

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BE5\u65B9\u6CD5\u867D\u7136\u770B\u8D77\u6765\u7B80\u6D01\uFF0C\u4F46\u662F\u8FD0\u884C\u65F6\u95F4\u6BD4\u7B2C\u4E00\u4E2A\u591A\u5F88\u591A</p><p><img src="https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian\u626B\u7801_\u641C\u7D22\u8054\u5408\u4F20\u64AD\u6837\u5F0F-\u6807\u51C6\u8272\u7248.png" alt="" loading="lazy"></p>`,10),i=[o];function l(p,c){return s(),a("div",null,i)}var u=n(t,[["render",l],["__file","Leetcode\u5237\u989813 --\u4E8C\u53C9\u6811\u7684\u4E2D\u5E8F\u904D\u5386.html.vue"]]);export{u as default};
