import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as e,c as n,e as d}from"./app.7cb39b8c.js";const l={},s=d(`<h1 id="leetcode\u5237\u989805-\u793C\u7269\u7684\u6700\u5927\u4EF7\u503C" tabindex="-1"><a class="header-anchor" href="#leetcode\u5237\u989805-\u793C\u7269\u7684\u6700\u5927\u4EF7\u503C" aria-hidden="true">#</a> Leetcode\u5237\u989805---\u793C\u7269\u7684\u6700\u5927\u4EF7\u503C</h1><p>\u672C\u9898\u6765\u81EA\u5251\u6307offer\u768447\u9898</p><p>\u5728\u4E00\u4E2A m*n \u7684\u68CB\u76D8\u7684\u6BCF\u4E00\u683C\u90FD\u653E\u6709\u4E00\u4E2A\u793C\u7269\uFF0C\u6BCF\u4E2A\u793C\u7269\u90FD\u6709\u4E00\u5B9A\u7684\u4EF7\u503C\uFF08\u4EF7\u503C\u5927\u4E8E 0\uFF09\u3002\u4F60\u53EF\u4EE5\u4ECE\u68CB\u76D8\u7684\u5DE6\u4E0A\u89D2\u5F00\u59CB\u62FF\u683C\u5B50\u91CC\u7684\u793C\u7269\uFF0C\u5E76\u6BCF\u6B21\u5411\u53F3\u6216\u8005\u5411\u4E0B\u79FB\u52A8\u4E00\u683C\u3001\u76F4\u5230\u5230\u8FBE\u68CB\u76D8\u7684\u53F3\u4E0B\u89D2\u3002\u7ED9\u5B9A\u4E00\u4E2A\u68CB\u76D8\u53CA\u5176\u4E0A\u9762\u7684\u793C\u7269\u7684\u4EF7\u503C\uFF0C\u8BF7\u8BA1\u7B97\u4F60\u6700\u591A\u80FD\u62FF\u5230\u591A\u5C11\u4EF7\u503C\u7684\u793C\u7269\uFF1F</p><p>\u793A\u4F8B 1:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165: 
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
\u8F93\u51FA: 12
\u89E3\u91CA: \u8DEF\u5F84 1\u21923\u21925\u21922\u21921 \u53EF\u4EE5\u62FF\u5230\u6700\u591A\u4EF7\u503C\u7684\u793C\u7269
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5206\u6790\u4E00\u4E0B\u89E3\u9898\u601D\u8DEF\uFF0C\u8FD9\u4E2A\u9898\u76EE\u7684\u7C7B\u578B\u5F88\u660E\u786E\uFF0C\u6C42\u6781\u503C\uFF0C\u53EA\u4E0D\u8FC7\u52A0\u4E86\u4E00\u70B9\u7C7B\u4F3C\u8DEF\u5F84\u7684\u5185\u5BB9\uFF0C\u672C\u8D28\u8FD8\u662F\u4E00\u4E2A\u6C42\u6781\u503C\u7684\u95EE\u9898\uFF0C\u90A3\u4E48\u5C31\u7ACB\u9A6C\u60F3\u5230\u7528\u52A8\u6001\u89C4\u5212\u53BB\u505A\u3002\u5C06\u95EE\u9898\u7EC6\u5206\u81F3\u6700\u5C0F\u5B50\u95EE\u9898\uFF0C\u6211\u4EEC\u8981\u6C42\u6700\u503C\uFF0C\u90A3\u4E48\u5728\u6700\u540E\u4E00\u4E2A\u65F6\u523B\u7684\u6700\u503C\u5C31\u5E94\u8BE5\u662F\u7531\u524D\u4E00\u65F6\u523B\u7684\u6700\u5927\u503C+\u5F53\u524D\u7684\u503C\u3002\u90A3\u4E48\u72B6\u6001\u8F6C\u79FB\u65B9\u7A0B\u5C31\u662F <code> dp[i][j] = max(dp[i][j-1],dp[i-1][j]) + grid[i][j]</code>\uFF0C\u8FD9\u4E48\u76F4\u63A5\u5199\u8FDB\u53BB\u4F1A\u51FA\u73B0\u4E00\u4E2A\u95EE\u9898\uFF0C\u5C31\u662F\u8FB9\u754C\u503C\u7684\u95EE\u9898\uFF0C\u5728\u8FB9\u754C\u7684\u5904\u7406\u4E0A\u9700\u8981\u505A\u4E00\u4E9B\u989D\u5916\u7684\u5224\u65AD\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5C06\u6211\u4EEC\u7684dp\u77E9\u9635\u6269\u5F20\u4E00\u4E0B\uFF0C\u4E3A\u4EC0\u4E48\u8FD9\u4E48\u505A\u5462\uFF1F\u56E0\u4E3A\u6211\u4EEC\u8981\u8003\u8651\u5230\u5DE6\u4E0A\u89D2\u7684\u60C5\u51B5\uFF0C\u8FD9\u4E2A\u65F6\u5019 i,j\u90FD\u662F0\uFF0C\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u6211\u4EEC\u53EF\u4EE5\u5C06\u904D\u5386\u7684\u8303\u56F4\u4ECE1\u5F00\u59CB\u8BA1\uFF0C\u90A3\u4E48dp[1]][1] \u5C31\u5BF9\u5E94\u4E86grid[0][0]\u7684\u503C\uFF0C\u6240\u4EE5\u5728\u5199\u7684\u65F6\u5019 \u5E94\u8BE5\u662F <code> dp[i][j] = max(dp[i][j-1],dp[i-1][j])+grid[i-1][j-1]</code>\u3002\u540C\u65F6\u6211\u4EEC\u7684\u904D\u5386\u8303\u56F4\u4E5F\u9700\u8981\u8DDF\u7740\u6269\u5C55\uFF0C\u5B8C\u6574\u7684\u4EE3\u7801\u662F</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>class Solution:
    def maxValue(self, grid: List[List[int]]) -&gt; int:
       dp = [[0]*(len(grid[0])+1)]*(len(grid)+1)
       for i in range(1,len(grid)+1):
           for j in range(1,len(grid[0])+1):
               dp[i][j] = max(dp[i][j-1],dp[i-1][j])+grid[i-1][j-1]
        return dp[-1][-1]


if __name__ == &#39;__main__&#39;:
    arr = [[1,2,5],[3,2,1]]
    sol = Solution()
    print(sol.maxValue(arr)) #\u8FD4\u56DE9  dp\u77E9\u9635\u4E3A[[0, 4, 6, 9], [0, 4, 6, 9], [0, 4, 6, 9]]

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6574\u4F53\u4EE3\u7801\uFF0C\u989D\u5916\u7A7A\u95F4 O\uFF08mn\uFF09\uFF0C\u65F6\u95F4O\uFF08mn\uFF09 \u65E5\u5E38\u770B\u4E00\u773C\u5B98\u65B9\u7ED9\u51FA\u7684\u4EE3\u7801\uFF1A</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>class Solution:
    def maxValue(self, grid: List[List[int]]) -&gt; int:
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if i == 0 and j == 0: continue
                if i == 0: grid[i][j] += grid[i][j - 1]
                elif j == 0: grid[i][j] += grid[i - 1][j]
                else: grid[i][j] += max(grid[i][j - 1], grid[i - 1][j])
        return grid[-1][-1]

\u4F5C\u8005\uFF1Ajyd
\u94FE\u63A5\uFF1Ahttps://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/solution/mian-shi-ti-47-li-wu-de-zui-da-jie-zhi-dong-tai-gu/
\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u89E3\u91CA\u6027\u5F88\u5F3A\uFF0C\u8003\u8651\u4E86\u5F88\u7EC6\u81F4\u7684\u60C5\u51B5</p><ul><li>\u901A\u7528\u60C5\u51B5\uFF1A \u6570\u503C\u4E0D\u5728\u8FB9\u754C\u4E0A\uFF0C\u90A3\u4E48\u5C31\u662F\u5B83\u7684\u4E0A\u9762\u4E00\u4E2A\u5143\u7D20\u548C\u5DE6\u8FB9\u4E00\u4E2A\u5143\u7D20\u6BD4\u5927\u5C0F\uFF0C\u53D6\u6700\u5927\u7684\u548C\u81EA\u5DF1\u76F8\u52A0\uFF0C\u5373 <code> max(dp[i-1] [j],dp[i][j-1])+grid[i][j]</code></li><li>\u8003\u8651\u5230\u8FB9\u754C\u60C5\u51B5\uFF0C\u5982\u679C\u662F\u7B2C\u4E00\u4E2A\u70B9\uFF0C\u5373\u5DE6\u4E0A\u89D2\u90A3\u4E2A\u70B9\uFF0C\u5219\u662F\u76F4\u63A5\u8D4B\u503C\uFF1A<code> dp[i][j]=0</code></li><li>\u5982\u679C\u5728\u7B2C\u4E00\u884C\uFF0C\u5219\u53EA\u80FD\u5728\u5DE6\u8FB9\u5BFB\u627E\u5230\u6781\u503C\uFF0C \u5373 <code> dp[i][j] = dp[i][j-1]+grid[i][j]</code></li><li>\u5982\u679C\u5728\u7B2C\u4E00\u5217\u5374\u4E0D\u5728\u7B2C\u4E00\u884C\uFF0C\u5C31\u662F\u5728\u6700\u5DE6\u8FB9\u7684\u8FB9\u8FB9\u4E0A\uFF0C\u6211\u4EEC\u7684\u6781\u503C\u5C31\u662F\u4E0A\u9762\u90A3\u4E2A\u5143\u7D20\uFF0C\u5373 <code>dp[i][j] = dp[i-1][j]+grid[i][j]</code> \u5F88\u5999\u7684\u662F\uFF0C\u8FD9\u8FB9\u7528\u7684\u539F\u5730\u4FEE\u6539\uFF0C\u8FD9\u6837\u989D\u5916\u7A7A\u95F4\u5C31\u4E0D\u4F1A\u5F88\u5927\u3002</li></ul><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>class Solution:
    def maxValue(self, grid: List[List[int]]) -&gt; int:
        m, n = len(grid), len(grid[0])
        for j in range(1, n): # \u521D\u59CB\u5316\u7B2C\u4E00\u884C
            grid[0][j] += grid[0][j - 1]
        for i in range(1, m): # \u521D\u59CB\u5316\u7B2C\u4E00\u5217
            grid[i][0] += grid[i - 1][0]
        for i in range(1, m):
            for j in range(1, n):
                grid[i][j] += max(grid[i][j - 1], grid[i - 1][j])
        return grid[-1][-1]

\u4F5C\u8005\uFF1Ajyd
\u94FE\u63A5\uFF1Ahttps://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/solution/mian-shi-ti-47-li-wu-de-zui-da-jie-zhi-dong-tai-gu/
\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u662F\u5B98\u65B9\u7ED9\u51FA\u7684\u7B2C\u4E8C\u79CD\u89E3\u6CD5\uFF0C\u63D0\u524D\u521D\u59CB\u5316\uFF0C\u51CF\u5C11\u4E86\u5224\u65AD\u7684\u5197\u4F59\uFF0Chmmmm\uFF0C\u5999\u554A\uFF01 \u56DE\u987E\u4E00\u4E0B\u81EA\u5DF1\u7684\u5199\u6CD5\uFF0C\u76F8\u6BD4\u4E4B\u4E0B\uFF0C\u89E3\u91CA\u6027\u4E0D\u662F\u90A3\u4E48\u7684\u901A\u4FD7\u6613\u61C2\uFF0C\u989D\u5916\u7A7A\u95F4\u504F\u5927\u3002</p><p><img src="https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian\u626B\u7801_\u641C\u7D22\u8054\u5408\u4F20\u64AD\u6837\u5F0F-\u6807\u51C6\u8272\u7248.png" alt="" loading="lazy"></p>`,14),r=[s];function a(c,v){return e(),n("div",null,r)}var o=i(l,[["render",a],["__file","Leetcode\u5237\u989805---\u793C\u7269\u7684\u6700\u5927\u4EF7\u503C.html.vue"]]);export{o as default};
