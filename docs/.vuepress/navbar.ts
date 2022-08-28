import {navbar} from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
    {text: "博客", icon: "blog", link: "/blog"},
    {text: "leetcode", icon: "", prefix: "/leetcode/", link: "", collapsable: true, children: "structure"},
    {text: "代码", icon: "", prefix: "/code/", link: "", collapsable: true, children: "structure"},
    {text: "devops", icon: "", prefix: "/deploy/", link: "", collapsable: true, children: "structure"},
    {text: "计划", icon: "", prefix: "/plans/", link: "", collapsable: true, children: "structure"},
    {text: "软件架构", icon: "", prefix: "/arch/", link: "", collapsable: true, children: "structure"},
    {text: "阅读", icon: "", prefix: "/Read/", link: "", collapsable: true, children: "structure"},
    // { text: "工具收藏", icon: "tool", link: "https://nav.newzone.top/" },
]);
