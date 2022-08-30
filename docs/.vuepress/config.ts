import {defineUserConfig} from "vuepress";
//import { webpackBundler } from "@vuepress/bundler-webpack";
//import { defineUserConfig } from "@vuepress/cli";
import {searchPlugin} from "@vuepress/plugin-search";
import {googleAnalyticsPlugin} from "@vuepress/plugin-google-analytics";
import {feedPlugin} from "vuepress-plugin-feed2";
import {path} from "@vuepress/utils";
import theme from "./theme";

export default defineUserConfig({
    //网站语言，默认为中文
    lang: "zh-CN",
    //网站标题
    title: "阿秋的blog",
    //网站描述
    description: "菜鸡阿秋的博客。",

    //网站路径，默认为 /，如果非主域名，需改为
    base: "/",

    theme,
    //是否开启页面预拉取，如果服务器宽带足够，可改为 true，会提升其他页面加载速度
    shouldPrefetch: false,

    //修改页面模板，@vuepress-theme-hope/templates/index.build.html
    templateBuild: path.resolve(__dirname, "templateBuild.html"),

    //侧边栏配置
    sidebar: "heading",


    plugins: [
        // copyCodePlugin({
        //     // 插件选项
        //     selector: ".theme-default-content div[class*=\"language-\"] pre",
        //     showInMobile: true, // 是否在移动端显示代码复制按钮
        //     duration: 3000, // 复制按钮提示的延迟时间，单位：毫秒
        // }),
        //algolia 全文搜索：没设置爬虫的话，需删除 docsearchPlugin 区块以使用节点搜索
        // docsearchPlugin({
        //   indexName: 'newzone',
        //   appId: 'M4EXXEZIEG',
        //   apiKey: 'fd8891a9c4cc21e0ef4f11bf44f7a11e',
        // }),
        //本地搜索：默认情况下，该插件会将页面标题和小标题作为搜索索引。
        searchPlugin({
            // 你的选项
        }),
        //谷歌分析 ID
        googleAnalyticsPlugin({
            id: "G-RWKZTY2P9R",
        }),
        // rss 订阅描述
        feedPlugin({
          hostname: "https://newzone.top",
          rss: true,
          count: 10,
        }),
    ],
});
