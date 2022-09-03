import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as r}from"./app.517c70f2.js";const s={},a=r(`<h1 id="leetcode\u5237\u989814-\u5224\u65AD\u80FD\u5426\u5F62\u6210\u7B49\u5DEE\u6570\u5217" tabindex="-1"><a class="header-anchor" href="#leetcode\u5237\u989814-\u5224\u65AD\u80FD\u5426\u5F62\u6210\u7B49\u5DEE\u6570\u5217" aria-hidden="true">#</a> Leetcode\u5237\u989814 --- \u5224\u65AD\u80FD\u5426\u5F62\u6210\u7B49\u5DEE\u6570\u5217</h1><p>\u7ED9\u4F60\u4E00\u4E2A\u6570\u5B57\u6570\u7EC4 arr \u3002</p><p>\u5982\u679C\u4E00\u4E2A\u6570\u5217\u4E2D\uFF0C\u4EFB\u610F\u76F8\u90BB\u4E24\u9879\u7684\u5DEE\u603B\u7B49\u4E8E\u540C\u4E00\u4E2A\u5E38\u6570\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u6570\u5217\u5C31\u79F0\u4E3A \u7B49\u5DEE\u6570\u5217 \u3002</p><p>\u5982\u679C\u53EF\u4EE5\u91CD\u65B0\u6392\u5217\u6570\u7EC4\u5F62\u6210\u7B49\u5DEE\u6570\u5217\uFF0C\u8BF7\u8FD4\u56DE true \uFF1B\u5426\u5219\uFF0C\u8FD4\u56DE false \u3002</p><p>\u793A\u4F8B 1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Aarr = [3,5,1]
\u8F93\u51FA\uFF1Atrue
\u89E3\u91CA\uFF1A\u5BF9\u6570\u7EC4\u91CD\u65B0\u6392\u5E8F\u5F97\u5230 [1,3,5] \u6216\u8005 [5,3,1] \uFF0C\u4EFB\u610F\u76F8\u90BB\u4E24\u9879\u7684\u5DEE\u5206\u522B\u4E3A 2 \u6216 -2 \uFF0C\u53EF\u4EE5\u5F62\u6210\u7B49\u5DEE\u6570\u5217\u3002
\u793A\u4F8B 2\uFF1A

\u8F93\u5165\uFF1Aarr = [1,2,4]
\u8F93\u51FA\uFF1Afalse
\u89E3\u91CA\uFF1A\u65E0\u6CD5\u901A\u8FC7\u91CD\u65B0\u6392\u5E8F\u5F97\u5230\u7B49\u5DEE\u6570\u5217\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u6CD51\uFF1A \u6734\u7D20\u7684\u89E3\u6CD5\uFF0C\u5148\u6392\u5E8F\uFF0C\u7136\u540E\u901A\u8FC7\u51CF\u6CD5\u5224\u65AD\u662F\u5426\u5DEE\u76F8\u7B49\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution:
    def canMakeArithmeticProgression(self, arr: List[int]) -&gt; bool:
        if len(arr)&lt;=2:
            return True
        arr.sort()
        p = 1 #\u5B9A\u4E49\u4E86\u4E00\u4E2A\u4ECE\u4F4D\u7F6E1\u5F00\u59CB\u7684\u6307\u9488
        while p+1&lt;len(arr):
            if arr[p]-arr[p-1] != arr[p+1]-arr[p]: # \u5224\u65AD\u662F\u5426\u7B49\u5DEE
                return False
            p+=1
        return True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u6CD52: \u5229\u7528\u4E86\u7B49\u5DEE\u6570\u5217\u7684\u6027\u8D28\uFF0C<code> arr[i] * 2 != arr[i - 1] + arr[i + 1]</code></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution:
    def canMakeArithmeticProgression(self, arr: List[int]) -&gt; bool:
        arr.sort()
        for i in range(1, len(arr) - 1):
            if arr[i] * 2 != arr[i - 1] + arr[i + 1]:
                return False
        return True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[a];function d(t,c){return i(),n("div",null,l)}var o=e(s,[["render",d],["__file","Leetcode\u5237\u989814 --- \u5224\u65AD\u80FD\u5426\u5F62\u6210\u7B49\u5DEE\u6570\u5217.html.vue"]]);export{o as default};
