import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as e,e as a}from"./app.552dc16b.js";const i={},l=a(`<h1 id="leetcode\u5237\u989808-\u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570" tabindex="-1"><a class="header-anchor" href="#leetcode\u5237\u989808-\u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570" aria-hidden="true">#</a> Leetcode\u5237\u989808 -- \u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570</h1><p>\u7ED9\u5B9A\u4E00\u4E2A\u6B63\u6574\u6570 num\uFF0C\u7F16\u5199\u4E00\u4E2A\u51FD\u6570\uFF0C\u5982\u679C num \u662F\u4E00\u4E2A\u5B8C\u5168\u5E73\u65B9\u6570\uFF0C\u5219\u8FD4\u56DE True\uFF0C\u5426\u5219\u8FD4\u56DE False\u3002</p><p>\u8BF4\u660E\uFF1A\u4E0D\u8981\u4F7F\u7528\u4EFB\u4F55\u5185\u7F6E\u7684\u5E93\u51FD\u6570\uFF0C\u5982 sqrt\u3002</p><p>\u793A\u4F8B 1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1A16
\u8F93\u51FA\uFF1ATrue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B 2\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1A14
\u8F93\u51FA\uFF1AFalse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u770B\u5230\u8FD9\u4E2A\u9898\u76EE\u7684\uFF0C\u7B2C\u4E00\u53CD\u5E94\u662F\u7528\u4E8C\u5206\u6CD5\uFF0C\u4E3A\u4EC0\u4E48\u662F\u4E8C\u5206\u6CD5\u5462? \u56E0\u4E3A\u5E73\u65B9\u6570\u7684\u8FD9\u4E2A\u7279\u6B8A\u7684\u5C5E\u6027\uFF0C\u662F\u540C\u4E00\u4E2A\u6570\u7684\u76F8\u4E58\uFF0C\u90A3\u4E48\u7528\u4E8C\u5206\u6765\u903C\u8FD1\u5C31\u5F88\u7B26\u5408\u8FD9\u4E2A\u573A\u666F\u3002 \u89E3\u6CD51\uFF1A \u4E8C\u5206\u6CD5\uFF1A</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>def isPerfectSquare(self, num: int) -&gt; bool:
        left,right = 0,num
        while left&lt;=right:
            mid = (left+right)//2
            if mid*mid &gt; num: right=mid-1
            elif mid*mid &lt;num: left = mid+1
            else: return True
        return False
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Java \u5199\u6CD5\uFF0C\u8FD9\u8FB9\u6709\u70B9\u4E0D\u540C\uFF0C\u5C31\u662F\u4E2D\u503C\u7684\u8BA1\u7B97</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>class Solution {
    public boolean isPerfectSquare(int num) {
        long left=0;
        long right=num;
        while(left&lt;=right){
            long mid = left+(right-left)/2;
            if(mid*mid==num){
                return true;
            }
            if(mid*mid&gt;num){
                right = mid-1;
            }else{
                left = mid+1;
            }
        }
        return false;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u6CD5\u4E8C\uFF0C\u5728\u770B\u5230\u5B98\u65B9\u89E3\u6CD5\u7684\u65F6\u5019\uFF0C\u7A81\u7136\u60F3\u5230\u4E86\u673A\u5668\u5B66\u4E60\u4E2D\u7684\u725B\u987F\u6CD5\uFF0C\u9644\u4E0A\u4E00\u4E2A\u725B\u987F\u6CD5\u7684\u8BB2\u89E3 \uFF08https://zhuanlan.zhihu.com/p/46536960\uFF09\uFF0C\u5927\u81F4\u7684\u601D\u60F3\u5C31\u662F\u4ECE\u4E00\u4E2A\u521D\u59CB\u503C\u5F00\u59CB\uFF0C\u4F5C\u4E00\u7CFB\u5217\u6539\u8FDB\u7684\u903C\u8FD1\u6839\u7684\u8FC7\u7A0B\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">isPerfectSquare</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> num<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> num <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">True</span>
        
        x <span class="token operator">=</span> num <span class="token operator">//</span> <span class="token number">2</span>
        <span class="token keyword">while</span> x <span class="token operator">*</span> x <span class="token operator">&gt;</span> num<span class="token punctuation">:</span>
            x <span class="token operator">=</span> <span class="token punctuation">(</span>x <span class="token operator">+</span> num <span class="token operator">//</span> x<span class="token punctuation">)</span> <span class="token operator">//</span> <span class="token number">2</span>
        <span class="token keyword">return</span> x <span class="token operator">*</span> x <span class="token operator">==</span> num

\u4F5C\u8005\uFF1ALeetCode
\u94FE\u63A5\uFF1Ahttps<span class="token punctuation">:</span><span class="token operator">//</span>leetcode<span class="token operator">-</span>cn<span class="token punctuation">.</span>com<span class="token operator">/</span>problems<span class="token operator">/</span>valid<span class="token operator">-</span>perfect<span class="token operator">-</span>square<span class="token operator">/</span>solution<span class="token operator">/</span>you<span class="token operator">-</span>xiao<span class="token operator">-</span>de<span class="token operator">-</span>wan<span class="token operator">-</span>quan<span class="token operator">-</span>ping<span class="token operator">-</span>fang<span class="token operator">-</span>shu<span class="token operator">-</span>by<span class="token operator">-</span>leetcode<span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian\u626B\u7801_\u641C\u7D22\u8054\u5408\u4F20\u64AD\u6837\u5F0F-\u6807\u51C6\u8272\u7248.png" alt="" loading="lazy"></p>`,14),t=[l];function o(r,p){return s(),e("div",null,t)}var u=n(i,[["render",o],["__file","Leetcode\u5237\u989808 -- \u6709\u6548\u7684\u5B8C\u5168\u5E73\u65B9\u6570.html.vue"]]);export{u as default};
