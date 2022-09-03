import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as s,e as a}from"./app.45122251.js";const i={},l=a(`<h1 id="k8s\u7EC3\u4E6001" tabindex="-1"><a class="header-anchor" href="#k8s\u7EC3\u4E6001" aria-hidden="true">#</a> k8s\u7EC3\u4E6001</h1><ol><li>\u4F7F\u7528\u547D\u4EE4\u884C\u521B\u5EFA\u4E00\u4E2A\u53EB<code>mynamespace</code>\u7684\u547D\u540D\u7A7A\u95F4\uFF0C\u5E76\u4E14\u5728\u8FD9\u4E2A\u547D\u540D\u4E2D\u95F4\u4E2D\u521B\u5EFA\u4E00\u4E2A\u53EB\u505Anginx\u7684nginx\u955C\u50CFpod</li></ol><details><summary>answer</summary><pre><code>kubectl create namespace mynamespace</code></pre><pre><code>kubectl run nginx --image=nginx --restart=Never -n mynamespace</code></pre></details><ol start="2"><li>\u4F7F\u7528yaml\u6587\u4EF6\u521B\u5EFA\u4E0A\u4E00\u9898\u7684\u5185\u5BB9</li></ol><details><summary>answer</summary><pre><code>apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: null
  labels:
    run: nginx
  name: nginx
  namespace: mynamespace
spec:
  containers:
  - image: nginx
    imagePullPolicy: IfNotPresent
    name: nginx
    resources: {}
  dnsPolicy: ClusterFirst
  restartPolicy: Never
status: {}kubectl create namespace mynamespace</code></pre></details><ol start="3"><li>\u4F7F\u7528<code>kubectl</code> \u547D\u4EE4\u884C\u521B\u5EFA\u4E00\u4E2A\u8FD0\u884C\u7740<code>env</code>\u547D\u4EE4\u7684busybox\u7684pod</li></ol><details><summary>answer</summary><pre><code>kubectl run busybox --image=busybox --command --restart=Never -it --rm -- env 
kubectl run busybox --image=busybox --command --restart=Never -- env
kubectl logs busybox</code></pre></details><ol start="4"><li>\u4F7F\u7528yaml\u521B\u5EFA\u4E0A\u4E00\u9898</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>apiVersion: v1
kind: Pod
metadata:
  creationTimestamp: null
  labels:
    run: busybox
  name: busybox
spec:
  containers:
  - command:
    - env
    image: busybox
    name: busybox
    resources: {}
  dnsPolicy: ClusterFirst
  restartPolicy: Never
status: {}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>\u521B\u5EFA\u4E00\u4E2A<code>myns</code>\u7684\u547D\u540D\u7A7A\u95F4\u7684yaml\uFF0C\u4F46\u662F\u4E0D\u521B\u5EFA\u5BF9\u5E94\u7684\u547D\u540D\u7A7A\u95F4</li></ol><p><code>kubectl create namespace myns --dry-run=client -o yaml &gt; myns.yaml</code></p><ol start="6"><li><p>\u521B\u5EFA\u4E00\u4E2A<code>hard limit</code> 1 G cpu\uFF0C 1G\u5185\u5B58\u548C2pod\u7684\u540D\u53EB<code>myrq</code>\u7684\u8D44\u6E90\u9650\u5236\u7684yaml\uFF0C\u4F46\u662F\u4E0D\u521B\u5EFA\u5BF9\u5E94\u7684\u8D44\u6E90</p><p><code>kubectl create quota myrq --hard=cpu=1,memeory=1,pods=2 --dry-run=client -o yaml</code></p></li></ol>`,12),r=[l];function c(d,o){return n(),s("div",null,r)}var u=e(i,[["render",c],["__file","k8s\u7EC3\u4E6001.html.vue"]]);export{u as default};
