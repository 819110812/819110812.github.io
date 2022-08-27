import{_ as d}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as l,a as e,b as t,e as r,d as n,r as a}from"./app.efa633a7.js";const o={},c=r(`<h1 id="leetcode\u5237\u989803-\u5BF9\u79F0\u4E8C\u53C9\u6811" tabindex="-1"><a class="header-anchor" href="#leetcode\u5237\u989803-\u5BF9\u79F0\u4E8C\u53C9\u6811" aria-hidden="true">#</a> Leetcode\u5237\u989803-\u5BF9\u79F0\u4E8C\u53C9\u6811</h1><p>\u8BF7\u5B9E\u73B0\u4E00\u4E2A\u51FD\u6570\uFF0C\u7528\u6765\u5224\u65AD\u4E00\u68F5\u4E8C\u53C9\u6811\u662F\u4E0D\u662F\u5BF9\u79F0\u7684\u3002\u5982\u679C\u4E00\u68F5\u4E8C\u53C9\u6811\u548C\u5B83\u7684\u955C\u50CF\u4E00\u6837\uFF0C\u90A3\u4E48\u5B83\u662F\u5BF9\u79F0\u7684\u3002</p><p>\u4F8B\u5982\uFF0C\u4E8C\u53C9\u6811 [1,2,2,3,4,4,3] \u662F\u5BF9\u79F0\u7684\u3002</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    1
   / \\
  2   2
 / \\ / \\
3  4 4  3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4F46\u662F\u4E0B\u9762\u8FD9\u4E2A [1,2,2,null,3,null,3] \u5219\u4E0D\u662F\u955C\u50CF\u5BF9\u79F0\u7684:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    1
   / \\
  2   2
   \\   \\
   3    3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B 1\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Aroot = [1,2,2,3,4,4,3]
\u8F93\u51FA\uFF1Atrue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u793A\u4F8B 2\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u8F93\u5165\uFF1Aroot = [1,2,2,null,3,null,3]
\u8F93\u51FA\uFF1Afalse
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,10),u=n("\u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09 \u94FE\u63A5\uFF1A"),v={href:"https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof",target:"_blank",rel:"noopener noreferrer"},m=n("https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof"),h=r(`<p>\u9898\u76EE\u8981\u6C42\u5224\u65AD\u4E00\u4E2A\u4E8C\u53C9\u6811\u662F\u5426\u5E73\u8861\uFF0C\u770B\u5230\u4E8C\u53C9\u6811\uFF0C\u7B2C\u4E00\u60F3\u5230\u7684\u662F\u9012\u5F52\uFF0C\u7136\u540E\u662F\u6DF1\u5EA6\u4F18\u5148\u6216\u8005\u5E7F\u5EA6\u4F18\u5148\u3002\u5728\u6784\u5EFA\u9012\u5F52\u65B9\u6CD5\uFF0C\u4E09\u6B65\u8D70\uFF0C 1.\u786E\u5B9A\u6211\u4EEC\u7684\u9012\u5F52\u7A0B\u5E8F\u7684\u529F\u80FD\uFF1A\u5224\u65AD\u662F\u5426\u5BF9\u79F0\uFF0C\u5219\u8FD4\u56DE\u503C\u662Ffalse \u6216\u8005\u662Ftrue 2.\u51FD\u6570\u7684\u8F93\u5165\u662F\u4EC0\u4E48\uFF1F root.left,root.right. \u4E3A\u4EC0\u4E48\uFF1F \u6211\u7684\u7406\u89E3\u662F\uFF0C\u56E0\u4E3A\u8981\u5224\u65AD\u662F\u5426\u5BF9\u79F0\uFF0C\u90A3\u5C31\u8981\u8F93\u5165\u4E24\u8FB9\u7684\u5B50\u6811\u8FDB\u884C\u6BD4\u8F83\uFF0C\u5982\u679C\u53EA\u662F\u5355\u72EC\u7684root,\u9012\u5F52\u8FC7\u7A0B\u5F88\u96BE\u53BB\u5224\u65AD 3. \u4F55\u65F6\u7EC8\u6B62/\u8FB9\u754C\u6761\u4EF6\uFF1F \u5982\u679C\u90FD\u7A7A\uFF0C\u5219\u5B8C\u5168\u4E00\u6837\uFF0C\u8FD4\u56DEtrue,\u5982\u679C\u4F20\u5165\u7684\u5DE6\u53F3\u8282\u70B9\u6709\u4E00\u4E2A\u662F\u7A7A\u7684\uFF0C\u5219\u4E0D\u5BF9\u79F0\uFF0C\u5219\u8FD4\u56DEfalse\u3002 \u6B64\u5916\u8FD8\u8981\u5B9E\u73B0\u5224\u65AD\u5BF9\u79F0\u7684\u8FC7\u7A0B\uFF0C\u5373\uFF0C\u4F20\u5165\u7684\u4E24\u8282\u70B9\u503C\u4E00\u6837\uFF0C\u4E14\uFF081\uFF09\u5DE6\u8282\u70B9\u7684\u5DE6\u5B50\u6811\u503C\u7B49\u4E8E\u53F3\u8282\u70B9\u7684\u53F3\u5B50\u6811\u503C\uFF0C\uFF082\uFF09 \u5DE6\u8282\u70B9\u7684\u53F3\u5B50\u6811\u503C\u7B49\u4E8E\u53F3\u8282\u70B9\u7684\u5DE6\u5B50\u6811\u503C</p><p>\u5148\u8D34\u4E00\u4E0B\u672C\u83DC\u9E21\u7684\u5B9E\u73B0\u65B9\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>def isSymmetric(self, root: TreeNode) -&gt; bool:
        if not root:
            return True
        def dfs(left,right):
            if not left and not right:
                return True
            if not left or not right:
                return False
            return left.val==right.val and dfs(left.left,right.right) and dfs(left.right,right.left) 
        return dfs(root.left,root.right)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5B9A\u4E49\u4E86\u4E00\u4E2A\u8F85\u52A9\u51FD\u6570\u5BF9\u4F20\u5165\u8282\u70B9\u8FDB\u884C\u5224\u65AD\u5E76\u8FDB\u884C\u9012\u5F52\u3002 \u4E0B\u9762\u662F\u5B98\u65B9\u7684\u5199\u6CD5\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>def isSymmetric(self, root: TreeNode) -&gt; bool:
        def recur(L, R):
            if not L and not R: return True
            if not L or not R or L.val != R.val: return False
            return recur(L.left, R.right) and recur(L.right, R.left)

        return recur(root.left, root.right) if root else True
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),b=n("\u4F5C\u8005\uFF1Ajyd \u94FE\u63A5\uFF1A"),g={href:"https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/solution/mian-shi-ti-28-dui-cheng-de-er-cha-shu-di-gui-qing/",target:"_blank",rel:"noopener noreferrer"},f=n("https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/solution/mian-shi-ti-28-dui-cheng-de-er-cha-shu-di-gui-qing/"),p=n(" \u6765\u6E90\uFF1A\u529B\u6263\uFF08LeetCode\uFF09"),_=e("p",null,"\u601D\u8DEF\u5927\u81F4\u76F8\u540C\uFF0C\u4F46\u662F\u5B98\u65B9\u7684\u663E\u5F97\u66F4\u52A0\u7B80\u5355\u5E72\u7EC3\uFF0C\u5C06Python\u8BED\u8A00\u7279\u6027\u53D1\u6325\u7684\u6DCB\u6F13\u5C3D\u81F4\u3002",-1),x=e("p",null,"\u5927\u81F4\u603B\u7ED3\u4E00\u4E0B\u601D\u8DEF\u8FC7\u7A0B\uFF1A \u770B\u5230\u4E8C\u53C9\u6811\uFF0C\u60F3\u5230\u8981\u53BB\u5199\u4E2A\u9012\u5F52\uFF0C\u7136\u540E\u8003\u8651\u8FD9\u4E2A\u9012\u5F52\u7684\u8981\u7D20\u600E\u4E48\u8BBE\u8BA1\uFF0C\u9012\u5F52\u7684\u4E3B\u8981\u5B9E\u73B0\uFF0C\u6700\u540E\u518D\u53BB\u4F18\u5316\u3002",-1);function L(T,k){const i=a("ExternalLinkIcon");return s(),l("div",null,[c,e("p",null,[u,e("a",v,[m,t(i)])]),h,e("p",null,[b,e("a",g,[f,t(i)]),p]),_,x])}var y=d(o,[["render",L],["__file","Leetcode\u5237\u989803-\u5BF9\u79F0\u4E8C\u53C9\u6811.html.vue"]]);export{y as default};
