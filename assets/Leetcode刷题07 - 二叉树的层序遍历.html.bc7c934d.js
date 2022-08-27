import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,e as d}from"./app.b93fde7a.js";const l={},s=d(`<h1 id="leetcode\u5237\u989807-\u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386" tabindex="-1"><a class="header-anchor" href="#leetcode\u5237\u989807-\u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386" aria-hidden="true">#</a> Leetcode\u5237\u989807 - \u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386</h1><p>\u7ED9\u4F60\u4E00\u4E2A\u4E8C\u53C9\u6811\uFF0C\u8BF7\u4F60\u8FD4\u56DE\u5176\u6309 \u5C42\u5E8F\u904D\u5386 \u5F97\u5230\u7684\u8282\u70B9\u503C\u3002 \uFF08\u5373\u9010\u5C42\u5730\uFF0C\u4ECE\u5DE6\u5230\u53F3\u8BBF\u95EE\u6240\u6709\u8282\u70B9\uFF09\u3002</p><p>\u793A\u4F8B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u4E8C\u53C9\u6811\uFF1A[3,9,20,null,null,15,7],

    3
   / \\
  9  20
    /  \\
   15   7
\u8FD4\u56DE\u5176\u5C42\u6B21\u904D\u5386\u7ED3\u679C\uFF1A

[
  [3],
  [9,20],
  [15,7]
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u7684\u89E3\u6CD5\uFF1A</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>def levelOrder(self, root: TreeNode) -&gt; List[List[int]]:
        if not root : 
            return []
        arr , res = [root],[]
        while arr:
            temp = []
            temp_res = []
            for node in arr:
                temp_res.append(node.val)
                if node.left: temp.append(node.left)
                if node.right:temp.append(node.right)
            arr = temp
            res.append(temp_res)
        return res
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E7F\u5EA6\u4F18\u5148\u904D\u5386\uFF0C\u4F46\u662F\u5F88\u660E\u663E\uFF0C\u8FD9\u4E2A\u5199\u6CD5\u7684\u5185\u5B58\u6D88\u8017\u5F88\u662F\u4E25\u91CD\u554A\u3002\u4F18\u5316\u65B9\u6CD5\u6682\u65F6\u8FD8\u6CA1\u60F3\u5230\uFF0C\u770B\u5230\u7684\u5F88\u591A\u5199\u6CD5\u90FD\u548C\u8FD9\u4E2A\u7C7B\u4F3C\uFF0C\u533A\u522B\u5728\u4E8E\u90E8\u5206\u4F7F\u7528\u5230\u4E86\u961F\u5217\u6765\u5B9E\u73B0\uFF0C\u4F46\u662F\u8DD1\u4E0B\u6765\u6548\u679C\u6CA1\u5DEE\uFF0Chmmmm\uFF0C\u4F18\u5316\u65B9\u6CD5\u6682\u4E14\u653E\u5230\u4E00\u8FB9\uFF0C\u5F85\u65E5\u540E\u518D\u6574\u3002 \u8D34\u4E00\u6CE2\u4F7F\u7528\u961F\u5217\u7684\u65B9\u6CD5\uFF1A</p><div class="language-Python ext-Python line-numbers-mode"><pre class="language-Python"><code>def levelOrder(self, root):
		queue = collections.deque()
        queue.append(root)
        res = []
        while queue:
            size = len(queue)
            level = []
            for _ in range(size):
                cur = queue.popleft()
                if not cur:
                    continue
                level.append(cur.val)
                queue.append(cur.left)
                queue.append(cur.right)
            if level:
                res.append(level)
        return res

\u4F5C\u8005\uFF1Afuxuemingzhu
\u94FE\u63A5\uFF1Ahttps://leetcode-cn.com/problems/binary-tree-level-order-traversal/solution/tao-mo-ban-bfs-he-dfs-du-ke-yi-jie-jue-by-fuxuemin/
\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09
\u8457\u4F5C\u6743\u5F52\u4F5C\u8005\u6240\u6709\u3002\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u8054\u7CFB\u4F5C\u8005\u83B7\u5F97\u6388\u6743\uFF0C\u975E\u5546\u4E1A\u8F6C\u8F7D\u8BF7\u6CE8\u660E\u51FA\u5904\u3002
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),r=[s];function v(a,u){return n(),i("div",null,r)}var m=e(l,[["render",v],["__file","Leetcode\u5237\u989807 - \u4E8C\u53C9\u6811\u7684\u5C42\u5E8F\u904D\u5386.html.vue"]]);export{m as default};
