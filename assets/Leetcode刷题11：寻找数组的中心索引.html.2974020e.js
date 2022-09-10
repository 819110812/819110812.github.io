import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,e as s}from"./app.7888183d.js";const l={},d=s(`<h1 id="leetcode\u5237\u989811-\u5BFB\u627E\u6570\u7EC4\u7684\u4E2D\u5FC3\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#leetcode\u5237\u989811-\u5BFB\u627E\u6570\u7EC4\u7684\u4E2D\u5FC3\u7D22\u5F15" aria-hidden="true">#</a> Leetcode\u5237\u989811\uFF1A\u5BFB\u627E\u6570\u7EC4\u7684\u4E2D\u5FC3\u7D22\u5F15</h1><p>\u7ED9\u5B9A\u4E00\u4E2A\u6574\u6570\u7C7B\u578B\u7684\u6570\u7EC4 nums\uFF0C\u8BF7\u7F16\u5199\u4E00\u4E2A\u80FD\u591F\u8FD4\u56DE\u6570\u7EC4 \u201C\u4E2D\u5FC3\u7D22\u5F15\u201D \u7684\u65B9\u6CD5\u3002</p><p>\u6211\u4EEC\u662F\u8FD9\u6837\u5B9A\u4E49\u6570\u7EC4 \u4E2D\u5FC3\u7D22\u5F15 \u7684\uFF1A\u6570\u7EC4\u4E2D\u5FC3\u7D22\u5F15\u7684\u5DE6\u4FA7\u6240\u6709\u5143\u7D20\u76F8\u52A0\u7684\u548C\u7B49\u4E8E\u53F3\u4FA7\u6240\u6709\u5143\u7D20\u76F8\u52A0\u7684\u548C\u3002</p><p>\u5982\u679C\u6570\u7EC4\u4E0D\u5B58\u5728\u4E2D\u5FC3\u7D22\u5F15\uFF0C\u90A3\u4E48\u6211\u4EEC\u5E94\u8BE5\u8FD4\u56DE -1\u3002\u5982\u679C\u6570\u7EC4\u6709\u591A\u4E2A\u4E2D\u5FC3\u7D22\u5F15\uFF0C\u90A3\u4E48\u6211\u4EEC\u5E94\u8BE5\u8FD4\u56DE\u6700\u9760\u8FD1\u5DE6\u8FB9\u7684\u90A3\u4E00\u4E2A\u3002</p><p>\u793A\u4F8B 1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1A
nums = [1, 7, 3, 6, 5, 6]
\u8F93\u51FA\uFF1A3
\u89E3\u91CA\uFF1A
\u7D22\u5F15 3 (nums[3] = 6) \u7684\u5DE6\u4FA7\u6570\u4E4B\u548C (1 + 7 + 3 = 11)\uFF0C\u4E0E\u53F3\u4FA7\u6570\u4E4B\u548C (5 + 6 = 11) \u76F8\u7B49\u3002
\u540C\u65F6, 3 \u4E5F\u662F\u7B2C\u4E00\u4E2A\u7B26\u5408\u8981\u6C42\u7684\u4E2D\u5FC3\u7D22\u5F15\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B 2\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1A
nums = [1, 2, 3]
\u8F93\u51FA\uFF1A-1
\u89E3\u91CA\uFF1A
\u6570\u7EC4\u4E2D\u4E0D\u5B58\u5728\u6EE1\u8DB3\u6B64\u6761\u4EF6\u7684\u4E2D\u5FC3\u7D22\u5F15\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u6CD51\uFF1A\u66B4\u529B\u7834\u89E3\uFF0C\u7EBF\u6027\u65F6\u95F4\u7684\u904D\u5386\uFF1A</p><p>\u7ED3\u679C\u8D85\u65F6~~</p><p>\u65B9\u6CD5\u5F88\u76F4\u767D\uFF0C\u8BA1\u7B97\u5DE6\u53F3\u7684\u548C\uFF0C\u5C0F\u767D\u5199\u6CD5\uFF0C\u4F46\u662F\u8FD9\u4E48\u5199\u5B8C\u5168\u57CB\u6CA1\u4E86python\u7684\u7279\u70B9\u3002\u8FD9\u8FB9\u6709\u8FD9\u4E2A\u51E0\u4E2A\u70B9\u5199\u7684\u5F88\u70C2\uFF0C</p><ul><li>\u4F7F\u7528range\u548C\u7D22\u5F15\u6765 \u904D\u5386\uFF0C\u8FD9\u4E48\u5199\u5F88\u4E0D\u65B9\u4FBF\uFF0C\u53EF\u4EE5\u662F\u7528\u679A\u4E3E\u7684\u65B9\u6CD5\u6765\u5199\uFF0C\u4E5F\u5C31\u662Fenumerate</li><li>\u8FD9\u8FB9\u8FD8\u81EA\u5DF1\u5199\u4E86\u4E2Asum\u7684\u529F\u80FD\uFF0C\u91CD\u590D\u9020\u8F6E\u5B50\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528sum\u51FD\u6570\u6765\u5B9E\u73B0</li><li>\u601D\u8DEF\u4E0A\u5F88\u7B80\u5355\u7684\uFF0C\u5355\u7EAF\u7684\u5206\u522B\u8BA1\u7B97\u5DE6\u53F3\u548C\uFF0C\u91CD\u590D\u8BA1\u7B97\uFF0C\u964D\u4F4E\u6548\u7387</li></ul><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution:
    def pivotIndex(self, nums: List[int]) -&gt; int:
        for i in range(0,len(nums)):
            if self.compute_sum(nums,0,i) == self.compute_sum(nums,i+1,len(nums)):
                return i
        return -1
    
    def compute_sum(self,nums,start,end):
        res = 0
        for i in nums[start:end]:
            res+=i
        return res
            
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u6CD52\uFF1A</p><p>\u5148\u8BA1\u7B97\u51FA\u603B\u548C\uFF0C\u904D\u5386\u8FC7\u7A0B\u4E2D\u52A8\u6001\u8BA1\u7B97\u5DE6\u8FB9\u7684\u548C\uFF0C\u5229\u7528\u51CF\u6CD5\u8BA1\u7B97\u53F3\u4FA7\u7684\u548C\uFF0C\u518D\u6BD4\u8F83\u3002\u65B9\u6CD5\u65F6\u95F4\u901A\u8FC7\uFF0C\u4F46\u662F\u5185\u5B58\u6709\u70B9\u5C0F\u9AD8</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution:
    def pivotIndex(self, nums: List[int]) -&gt; int:
        total = sum(nums)
        leftsum =  0 
        for idx,i in enumerate(nums):
            if leftsum == (total-leftsum-i):
                return idx
            leftsum += i
        return -1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian\u626B\u7801_\u641C\u7D22\u8054\u5408\u4F20\u64AD\u6837\u5F0F-\u6807\u51C6\u8272\u7248.png" alt="" loading="lazy"></p>`,17),a=[d];function r(u,t){return n(),i("div",null,a)}var m=e(l,[["render",r],["__file","Leetcode\u5237\u989811\uFF1A\u5BFB\u627E\u6570\u7EC4\u7684\u4E2D\u5FC3\u7D22\u5F15.html.vue"]]);export{m as default};
