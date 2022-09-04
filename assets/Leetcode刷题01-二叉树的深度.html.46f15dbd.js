import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,e as d}from"./app.fd83d584.js";const l={},r=d(`<h1 id="leetcode\u5237\u9898\u8BB0\u5F5501-\u4E8C\u53C9\u6811\u7684\u6DF1\u5EA6" tabindex="-1"><a class="header-anchor" href="#leetcode\u5237\u9898\u8BB0\u5F5501-\u4E8C\u53C9\u6811\u7684\u6DF1\u5EA6" aria-hidden="true">#</a> Leetcode\u5237\u9898\u8BB0\u5F5501-\u4E8C\u53C9\u6811\u7684\u6DF1\u5EA6</h1><p>\u8F93\u5165\u4E00\u68F5\u4E8C\u53C9\u6811\u7684\u6839\u8282\u70B9\uFF0C\u6C42\u8BE5\u6811\u7684\u6DF1\u5EA6\u3002\u4ECE\u6839\u8282\u70B9\u5230\u53F6\u8282\u70B9\u4F9D\u6B21\u7ECF\u8FC7\u7684\u8282\u70B9\uFF08\u542B\u6839\u3001\u53F6\u8282\u70B9\uFF09\u5F62\u6210\u6811\u7684\u4E00\u6761\u8DEF\u5F84\uFF0C\u6700\u957F\u8DEF\u5F84\u7684\u957F\u5EA6\u4E3A\u6811\u7684\u6DF1\u5EA6\u3002</p><p>\u4F8B\u5982\uFF1A</p><p>\u7ED9\u5B9A\u4E8C\u53C9\u6811 [3,9,20,null,null,15,7]\uFF0C</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    3
   / \\
  9  20
    /  \\
   15   7
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD4\u56DE\u5B83\u7684\u6700\u5927\u6DF1\u5EA6 3 \u3002</p><h3 id="python\u89E3\u6CD5" tabindex="-1"><a class="header-anchor" href="#python\u89E3\u6CD5" aria-hidden="true">#</a> <em>Python\u89E3\u6CD5</em></h3><ol><li>\u6DF1\u5EA6\u4F18\u5148\u904D\u5386</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>    def maxDepth(self, root: TreeNode) -&gt; int:
        if root is None:
            return 0
        return max(self.maxDepth(root.left),self.maxDepth(root.right))+1  #\u6BD4\u8F83\u5DE6\u53F3\u5B50\u6811\u54EA\u4E2A\u6700\u6DF1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u5E7F\u5EA6\u4F18\u5148\u904D\u5386 \u4F7F\u7528\u4E00\u4E2A\u5217\u8868\u548C\u8BA1\u6570\u5668\u6765\u904D\u5386\u6574\u4E2A\u4E8C\u53C9\u6811\uFF0C\u6BCF\u904D\u5386\u4E00\u6B21\u8BA1\u6570\u5668\u52A01\uFF0C\u5E76\u5C06\u5217\u8868\u66F4\u65B0</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>def maxDepth(self, root: TreeNode) -&gt; int:
        if root is None:
            return 0
        arr,res = [root],0
        while arr:
            temp = []
            for node in arr:
                if node.left :temp.append(node.left)
                if node.right: temp.append(node.right)
            arr = temp
            res+=1
        return res
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5E7F\u5EA6\u4F18\u5148\u7684\u65B9\u6CD5\u5229\u7528\u7684\u7A7A\u95F4\u53BB\u7F6E\u6362\u51FA\u4E86\u9012\u5F52\u65F6\u7684\u65F6\u95F4\uFF0C\u4F7F\u5F97\u904D\u5386\u66F4\u5FEB</p><p>\u518D\u7528Java\u8BED\u8A00\u5C06\u4E8C\u8005\u5B9E\u73B0\u4E00\u904D</p><p>2.Java\u7248 \u5199\u6CD5\u4E00\u81F4\uFF0C\u53EA\u662F\u7528\u6765\u5F53\u505A\u5B66\u4E60Java\u7684\u4E00\u4E2A\u9014\u5F84 <em>DFS</em></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int maxDepth(TreeNode root) {
        if(root==null){
            return 0;
        }
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em>BFS</em></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>class Solution {
    public int maxDepth(TreeNode root) {
        if(root == null) return 0;
        List&lt;TreeNode&gt; arr = new ArrayList&lt;&gt;() {{ add(root); }}, tmp;
        int res = 0;
        while(!arr.isEmpty()) {
            tmp = new LinkedList&lt;&gt;();
            for(TreeNode node : arr) {
                if(node.left != null) tmp.add(node.left);
                if(node.right != null) tmp.add(node.right);
            }
            arr = tmp;
            res++;
        }
        return res;
    }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,17),s=[r];function a(t,v){return n(),i("div",null,s)}var u=e(l,[["render",a],["__file","Leetcode\u5237\u989801-\u4E8C\u53C9\u6811\u7684\u6DF1\u5EA6.html.vue"]]);export{u as default};
