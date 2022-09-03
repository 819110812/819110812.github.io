import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,e as d}from"./app.54385251.js";const s={},a=d(`<h1 id="leetcode\u5237\u989810-\u4ECE\u5C3E\u5230\u5934\u6253\u5370\u94FE\u8868" tabindex="-1"><a class="header-anchor" href="#leetcode\u5237\u989810-\u4ECE\u5C3E\u5230\u5934\u6253\u5370\u94FE\u8868" aria-hidden="true">#</a> Leetcode\u5237\u989810 -- \u4ECE\u5C3E\u5230\u5934\u6253\u5370\u94FE\u8868</h1><p>\u8F93\u5165\u4E00\u4E2A\u94FE\u8868\u7684\u5934\u8282\u70B9\uFF0C\u4ECE\u5C3E\u5230\u5934\u53CD\u8FC7\u6765\u8FD4\u56DE\u6BCF\u4E2A\u8282\u70B9\u7684\u503C\uFF08\u7528\u6570\u7EC4\u8FD4\u56DE\uFF09\u3002</p><p>\u793A\u4F8B 1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Ahead = [1,3,2]
\u8F93\u51FA\uFF1A[2,3,1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u6CD51\uFF1A \u66B4\u529B\u904D\u5386+\u5217\u8868\u5012\u7F6E</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>class Solution:
    def reversePrint(self, head: ListNode) -&gt; List[int]:
        if head is None:
            return []
        res = []
        cur = head
        while cur:
            res.append(cur.val)
            cur = cur.next
        return res[::-1]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u6CD52\uFF1A\u9012\u5F52</p><p>\u51FD\u6570\u529F\u80FD\uFF0C\u8FD4\u56DE\u4E0B\u4E00\u4E2A\u503C+\u5F53\u524D\u503C \u5224\u522B\u6761\u4EF6\uFF1A\u662F\u5426\u5B58\u5728head\uFF0C\u6CA1\u6709\u5C31\u4E3A\u7A7A</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>class Solution:
    def reversePrint(self, head: ListNode) -&gt; List[int]:
        return self.reversePrint(head.next) + [head.val] if head else []
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),r=[a];function l(t,c){return n(),i("div",null,r)}var o=e(s,[["render",l],["__file","Leetcode\u5237\u989810 -- \u4ECE\u5C3E\u5230\u5934\u6253\u5370\u94FE\u8868.html.vue"]]);export{o as default};
