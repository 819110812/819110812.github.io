import {navbar} from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default navbar([
    {text: "首页", link: "/home", icon: "home"},
    {text: "博客", icon: "blog", link: "/blog"},
    {text: "计划", icon: "plan", link: "/plans/TodoList"},
    {text: "工具", icon: "tool", link: "/tools"},
    // {text: "代码", icon: "blog", prefix: "/code/", link: "", collapsable: true, children: "structure"},
    // {text: "devops", icon: "blog", prefix: "/deploy/", link: "", collapsable: true, children: "structure"},
    // {text: "计划", icon: "blog", prefix: "/plans/", link: "", collapsable: true, children: "structure"},
    // {text: "软件架构", icon: "blog", prefix: "/arch/", link: "", collapsable: true, children: "structure"},
    // {text: "阅读", icon: "blog", prefix: "/Read/", link: "", collapsable: true, children: "structure"},
    // { text: "工具收藏", icon: "tool", link: "https://nav.newzone.top/" },
]);
