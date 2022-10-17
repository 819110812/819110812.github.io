import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,e as l}from"./app.ce40784b.js";const s={},a=l(`<h1 id="leetcode\u5237\u989809-\u4E8C\u7EF4\u6570\u7EC4\u4E2D\u7684\u67E5\u627E" tabindex="-1"><a class="header-anchor" href="#leetcode\u5237\u989809-\u4E8C\u7EF4\u6570\u7EC4\u4E2D\u7684\u67E5\u627E" aria-hidden="true">#</a> Leetcode\u5237\u989809--\u4E8C\u7EF4\u6570\u7EC4\u4E2D\u7684\u67E5\u627E</h1><p>\u5728\u4E00\u4E2A n * m \u7684\u4E8C\u7EF4\u6570\u7EC4\u4E2D\uFF0C\u6BCF\u4E00\u884C\u90FD\u6309\u7167\u4ECE\u5DE6\u5230\u53F3\u9012\u589E\u7684\u987A\u5E8F\u6392\u5E8F\uFF0C\u6BCF\u4E00\u5217\u90FD\u6309\u7167\u4ECE\u4E0A\u5230\u4E0B\u9012\u589E\u7684\u987A\u5E8F\u6392\u5E8F\u3002\u8BF7\u5B8C\u6210\u4E00\u4E2A\u51FD\u6570\uFF0C\u8F93\u5165\u8FD9\u6837\u7684\u4E00\u4E2A\u4E8C\u7EF4\u6570\u7EC4\u548C\u4E00\u4E2A\u6574\u6570\uFF0C\u5224\u65AD\u6570\u7EC4\u4E2D\u662F\u5426\u542B\u6709\u8BE5\u6574\u6570\u3002</p><p>\u793A\u4F8B:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u73B0\u6709\u77E9\u9635 matrix \u5982\u4E0B\uFF1A

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED9\u5B9A target = 5\uFF0C\u8FD4\u56DE <code>true</code>\u3002</p><p>\u7ED9\u5B9A target = 20\uFF0C\u8FD4\u56DE<code> false</code>\u3002</p><p>\u8FD9\u9898\u7528Python\u5199\u5C31\u5F88\u65E0\u804A\u4E86\uFF0C\u8FD9\u6B21\u76F4\u63A5\u653Ejava\u7684\u5199\u6CD5</p><div class="language-Java ext-Java line-numbers-mode"><pre class="language-Java"><code>class Solution {
    public boolean findNumberIn2DArray(int[][] matrix, int target) {
        if(matrix.length==0 || matrix == null){
            return false;
        }
        int m = matrix.length,n = matrix[0].length;
        int row =0,col = n-1;
        while (row&lt;m &amp;&amp; col&gt;=0){
            int num = matrix[row][col];  // \u4ECE\u77E9\u9635\u7684\u53F3\u4E0A\u89D2\u5F00\u59CB\u7684\u904D\u5386\uFF0C\u8FD9\u6837\u5B50\u597D\u6BD4\u8F83\u5927\u5C0F
            if(num==target){
                return true;
            }else if(num&lt;target){ //\u76EE\u6807\u6570\u5927\u4E8E\u5F53\u524D\u6570\u7684\u8BDD\uFF0C\u8BF4\u660E\u6211\u4EEC\u7684\u76EE\u6807\u6570\u5E94\u8BE5\u5728\u4E0B\u4E00\u884C\uFF0C\u56E0\u4E3A\u6211\u4EEC\u662F\u4ECE\u540E\u9762\u9A6C\u5F00\u59CB\u6BD4\u8F83\u7684
                row++;
            }else{ //\u53CD\u4E4B\uFF0C\u5219\u5728\u5F53\u524D\u884C\u7684\u5DE6\u8FB9
                col--;
            }
        }
        return false;
    }
}

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://golearning.oss-cn-shanghai.aliyuncs.com/obsidian\u626B\u7801_\u641C\u7D22\u8054\u5408\u4F20\u64AD\u6837\u5F0F-\u6807\u51C6\u8272\u7248.png" alt="" loading="lazy"></p>`,9),d=[a];function r(c,t){return n(),i("div",null,d)}var u=e(s,[["render",r],["__file","Leetcode\u5237\u989809--\u4E8C\u7EF4\u6570\u7EC4\u4E2D\u7684\u67E5\u627E.html.vue"]]);export{u as default};
