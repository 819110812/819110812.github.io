import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as i,c as n,e as s}from"./app.d99a6c81.js";const d={},l=s(`<h1 id="leetcode\u5237\u989804-\u80A1\u7968\u7684\u6700\u5927\u5229\u6DA6" tabindex="-1"><a class="header-anchor" href="#leetcode\u5237\u989804-\u80A1\u7968\u7684\u6700\u5927\u5229\u6DA6" aria-hidden="true">#</a> Leetcode\u5237\u989804-\u80A1\u7968\u7684\u6700\u5927\u5229\u6DA6</h1><p>\u5047\u8BBE\u628A\u67D0\u80A1\u7968\u7684\u4EF7\u683C\u6309\u7167\u65F6\u95F4\u5148\u540E\u987A\u5E8F\u5B58\u50A8\u5728\u6570\u7EC4\u4E2D\uFF0C\u8BF7\u95EE\u4E70\u5356\u8BE5\u80A1\u7968\u4E00\u6B21\u53EF\u80FD\u83B7\u5F97\u7684\u6700\u5927\u5229\u6DA6\u662F\u591A\u5C11\uFF1F</p><p>\u793A\u4F8B 1:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165: [7,1,5,3,6,4]
\u8F93\u51FA: 5
\u89E3\u91CA: \u5728\u7B2C 2 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 1\uFF09\u7684\u65F6\u5019\u4E70\u5165\uFF0C\u5728\u7B2C 5 \u5929\uFF08\u80A1\u7968\u4EF7\u683C = 6\uFF09\u7684\u65F6\u5019\u5356\u51FA\uFF0C
\u6700\u5927\u5229\u6DA6 = 6-1 = 5 \u3002 \u6CE8\u610F\u5229\u6DA6\u4E0D\u80FD\u662F 7-1 = 6, \u56E0\u4E3A\u5356\u51FA\u4EF7\u683C\u9700\u8981\u5927\u4E8E\u4E70\u5165\u4EF7\u683C\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B 2:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165: [7,6,4,3,1]
\u8F93\u51FA: 0
\u89E3\u91CA: \u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B, \u6CA1\u6709\u4EA4\u6613\u5B8C\u6210, \u6240\u4EE5\u6700\u5927\u5229\u6DA6\u4E3A 0\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E00\u770B\u5230\u8FD9\u9898\uFF0C\u7B2C\u4E00\u53CD\u5E94\u5C31\u662F\u52A8\u6001\u89C4\u5212\uFF0C\u4E3A\u4EC0\u4E48\u662F\u52A8\u6001\u89C4\u5212\u5462\uFF1F\u56E0\u4E3A\u8FD9\u9898\u662F\u5C31\u6700\u503C\uFF0C\u4E00\u822C\u6C42\u6700\u503C\u95EE\u9898\uFF0C\u52A8\u6001\u89C4\u5212\u6765\u89E3\u4F1A\u5F97\u5FC3\u5E94\u624B\u3002\u65E2\u7136\u662F\u52A8\u6001\u89C4\u5212\uFF0C\u90A3\u4E48\u5C31\u8981\u8003\u8651\u5230\u6211\u4EEC\u7684\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B\u662F\u4EC0\u4E48\u3002 \u4ECE\u9898\u76EE\u4E2D\u53EF\u4EE5\u5F97\u5230\u8FD9\u4E48\u4E00\u4E2A\u4FE1\u606F\uFF0C\u80A1\u7968\u662F\u4F4E\u4E70\u9AD8\u5356\uFF0C\u90A3\u4E48\u5C31\u9700\u8981\u8BB0\u5F55\u4E0B\u4E00\u4E2A\u6781\u5C0F\u503C\uFF0C\u5E76\u4E14\u8981\u505A\u4E00\u4E2A\u53D6\u820D\uFF0C\u5F53\u524D\u7684\u4EF7\u683C\u51CF\u53BB\u6700\u5C0F\u503C\u7684\u5229\u6DA6\u662F\u5426\u6BD4\u4E4B\u524D\u7684\u6700\u5927\u5229\u6DA6\u591A\u3002 \u5927\u81F4\u7684\u4E00\u4E2A\u601D\u8DEF\u5C31\u662F\u8FD9\u6837\uFF0C\u90A3\u4E48\u6211\u4EEC\u7684\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B\u5219\u662F\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>dp[i] = max(prices[i]-temp,dp[i-1])
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>dp[i] \u5219\u662F\u8BB0\u5F55\u6211\u4EEC\u7684\u5F53\u524D\u6700\u5927\u503C\uFF0C max(prices[i]-temp,dp[i-1])\u5219\u662F\u5728\u53D6\u6700\u5927\u7684\u60C5\u51B5\u5B58\u8FDB\u6211\u4EEC\u7684dp\u5217\u8868\u4E2D\u3002 \u5B8C\u6574\u7684\u4EE3\u7801\u662F\u8FD9\u6837\u7684\uFF1A</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>from typing import List


class Solution:
    def maxProfit(self, prices: List[int]) -&gt; int:
        dp = [0]*len(prices)  # \u521D\u59CB\u5316\u6211\u4EEC\u7684dp\u5217\u8868
        temp = prices[0] #\u5C06\u7B2C\u4E00\u5929\u7684\u4EF7\u683C\u8BB0\u505A\u6682\u65F6\u7684\u6700\u5C0F\u503C
        for i in range(1,len(prices)):
            if prices[i]&lt;=temp: #\u5982\u679C\u6709\u66F4\u5C0F\u7684\u5219\u66F4\u65B0
                temp = prices[i]
            dp[i] = max(prices[i]-temp,dp[i-1])
        return dp[len(prices)-1] #\u8FD4\u56DE\u6700\u7EC8\u7684\u7ED3\u679C 



if __name__ == &#39;__main__&#39;:
    stock = [7,6,4,3,1]
    sol = Solution()
    print(sol.maxProfit(stock)) #\u8FD4\u56DE5
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7684\u5199\u6CD5\u7B97\u662F\u5F88\u4E2D\u89C4\u4E2D\u77E9\u7684\u52A8\u6001\u89C4\u5212\u5199\u6CD5\uFF0C\u6765\u770B\u4E0B\u5B98\u65B9\u7ED9\u51FA\u7684\u89E3\u6CD5</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>class Solution:
    def maxProfit(self, prices: List[int]) -&gt; int:
        cost, profit = float(&quot;+inf&quot;), 0
        for price in prices:
            cost = min(cost, price)
            profit = max(profit, price - cost)
        return profit

\u4F5C\u8005\uFF1Ajyd
\u94FE\u63A5\uFF1Ahttps://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/solution/mian-shi-ti-63-gu-piao-de-zui-da-li-run-dong-tai-2/
\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u57FA\u672C\u601D\u8DEF\u662F\u4E00\u81F4\u7684\uFF0C\u90FD\u662F\u8BB0\u5F55\u4E0B\u5F53\u524D\u7684\u6700\u5C0F\u503C\u548C\u6700\u5927\u5229\u6DA6\uFF0C\u7136\u540E\u8BA1\u7B97\u5224\u65AD\uFF0C\u4E0D\u8FC7\u5B98\u65B9\u7684\u660E\u663E\u8981\u6BD4\u6211\u81EA\u5DF1\u5199\u7684\u7B80\u7EC3\u5F88\u591A\uFF0Chmmmm\uFF0C\u8FD8\u6709\u597D\u591A\u8981\u8D70\u5462\uFF0C\u5965\u5229\u7ED9\uFF01</p>`,13),r=[l];function a(c,t){return i(),n("div",null,r)}var u=e(d,[["render",a],["__file","Leetcode\u5237\u989804-\u80A1\u7968\u7684\u6700\u5927\u5229\u6DA6.html.vue"]]);export{u as default};
