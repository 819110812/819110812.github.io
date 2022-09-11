import {sidebar} from "vuepress-theme-hope";

// 精选图标：https://vuepress-theme-hope.github.io/v2/zh/guide/interface/icon.html#iconfont-%E7%B2%BE%E9%80%89%E5%9B%BE%E6%A0%87
export default sidebar([
    {
        text: "博客文章",
        icon: "blog",
        prefix: "/_posts/",
        link: "/blog",
        collapsable: true,
        children: "structure",
    },
    {
        text: "阅读",
        icon: "",
        prefix: "/read/",
        link: "",
        collapsable: true,
        children: "structure",
    },
    {
        text: "Leetcode",
        icon: "",
        prefix: "/leetcode/",
        link: "",
        collapsable: true,
        children: "structure",
    },
    {
        text: "软件架构",
        icon: "",
        prefix: "/arch/",
        link: "",
        collapsable: true,
        children: "structure",
    },
    {
        text: "devops",
        icon: "",
        prefix: "/deploy/",
        link: "",
        collapsable: true,
        children: "structure",
    },
    {
        text: "k8s",
        icon: "",
        prefix: "/k8s/",
        link: "",
        collapsable: true,
        children: "structure",
    }
    ,
    {
        text: "acp",
        icon: "",
        prefix: "/acp/",
        link: "",
        collapsable: true,
        children: "structure",
    },
    {
        text: "java",
        icon: "",
        prefix: "/java/",
        link: "",
        collapsable: true,
        children: "structure",
    },
    {
        text: "go",
        icon: "",
        prefix: "/go/",
        link: "",
        collapsable: true,
        children: "structure",
    }
    ,
    {
        text: "eletron",
        icon: "",
        prefix: "/eletron/",
        link: "",
        collapsable: true,
        children: "structure",
    }
    // {
    //     text: "计划",
    //     icon: "blog",
    //     prefix: "/plans/",
    //     link: "",
    //     collapsable: true,
    //     children: "structure",
    // },
    // {
    //     text: "项目",
    //     icon: "project",
    //     prefix: "/projects/",
    //     collapsable: true,
    //     children: "structure",
    // }
]);
