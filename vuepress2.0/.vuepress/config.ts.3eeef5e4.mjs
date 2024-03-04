// vuepress2.0/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// vuepress2.0/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// vuepress2.0/.vuepress/navbar/en.ts
import { navbar } from "vuepress-theme-hope";
var enNavbar = navbar([
  "/",
  "/demo/",
  {
    text: "Posts",
    icon: "pen-to-square",
    prefix: "/posts/",
    children: [
      {
        text: "Apple",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "Apple1", icon: "pen-to-square", link: "1" },
          { text: "Apple2", icon: "pen-to-square", link: "2" },
          "3",
          "4"
        ]
      },
      {
        text: "Banana",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "Banana 1",
            icon: "pen-to-square",
            link: "1"
          },
          {
            text: "Banana 2",
            icon: "pen-to-square",
            link: "2"
          },
          "3",
          "4"
        ]
      },
      { text: "Cherry", icon: "pen-to-square", link: "cherry" },
      { text: "Dragon Fruit", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry"
    ]
  },
  {
    text: "V2 Docs",
    icon: "book",
    link: "https://theme-hope.vuejs.press/"
  }
]);

// vuepress2.0/.vuepress/navbar/zh.ts
import { navbar as navbar2 } from "vuepress-theme-hope";
var zhNavbar = navbar2([
  "/zh/",
  "/zh/demo/",
  {
    text: "\u535A\u6587",
    icon: "pen-to-square",
    prefix: "/zh/posts/",
    children: [
      {
        text: "\u82F9\u679C",
        icon: "pen-to-square",
        prefix: "apple/",
        children: [
          { text: "\u82F9\u679C1", icon: "pen-to-square", link: "1" },
          { text: "\u82F9\u679C2", icon: "pen-to-square", link: "2" },
          "3",
          "4"
        ]
      },
      {
        text: "\u9999\u8549",
        icon: "pen-to-square",
        prefix: "banana/",
        children: [
          {
            text: "\u9999\u8549 1",
            icon: "pen-to-square",
            link: "1"
          },
          {
            text: "\u9999\u8549 2",
            icon: "pen-to-square",
            link: "2"
          },
          "3",
          "4"
        ]
      },
      { text: "\u6A31\u6843", icon: "pen-to-square", link: "cherry" },
      { text: "\u706B\u9F99\u679C", icon: "pen-to-square", link: "dragonfruit" },
      "tomato",
      "strawberry"
    ]
  },
  {
    text: "V2 \u6587\u6863",
    icon: "book",
    link: "https://theme-hope.vuejs.press/zh/"
  }
]);

// vuepress2.0/.vuepress/sidebar/en.ts
import { sidebar } from "vuepress-theme-hope";
var enSidebar = sidebar({
  "/": [
    "",
    {
      text: "Demo",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure"
    },
    {
      text: "Articles",
      icon: "book",
      prefix: "posts/",
      children: "structure"
    },
    "intro",
    {
      text: "Slides",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/guide/content/revealjs/demo.html"
    }
  ]
});

// vuepress2.0/.vuepress/sidebar/zh.ts
import { sidebar as sidebar2 } from "vuepress-theme-hope";
var zhSidebar = sidebar2({
  "/zh/": [
    "",
    {
      text: "\u5982\u4F55\u4F7F\u7528",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure"
    },
    {
      text: "\u6587\u7AE0",
      icon: "book",
      prefix: "posts/",
      children: "structure"
    },
    "intro",
    {
      text: "\u5E7B\u706F\u7247",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html"
    }
  ]
});

// vuepress2.0/.vuepress/theme.ts
import { ribbon } from "@anyfork/vuepress-plugin-ribbon-next";
var theme_default = hopeTheme({
  hostname: "https://mister-hope.github.io",
  author: {
    name: "\u5C81\u676A\u4E8C\u56DB",
    url: "https://mister-hope.com"
  },
  iconAssets: "fontawesome-with-brands",
  logo: "https://theme-hope-assets.vuejs.press/logo.svg",
  repo: "vuepress-theme-hope/vuepress-theme-hope",
  docsDir: "src",
  blog: {
    description: "Lumos",
    //引入头像
    avatar: "/assets/images/avatar.png",
    roundAvatar: true,
    medias: {
      //Baidu: "https://example.com",
      //BiliBili: "https://example.com",
      //Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      //Discord: "https://example.com",
      //Dribbble: "https://example.com",
      Email: "mailto:info@example.com",
      //Evernote: "https://example.com",
      //Facebook: "https://example.com",
      //Flipboard: "https://example.com",
      //Gitee: "https://example.com",
      GitHub: "https://example.com",
      //Gitlab: "https://example.com",
      Gmail: "mailto:info@example.com",
      //Instagram: "https://example.com",
      //Lark: "https://example.com",
      //Lines: "https://example.com",
      //Linkedin: "https://example.com",
      //Pinterest: "https://example.com",
      //Pocket: "https://example.com",
      QQ: "https://example.com",
      //Qzone: "https://example.com",
      //Reddit: "https://example.com",
      //Rss: "https://example.com",
      //Steam: "https://example.com",
      //Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com"
      //Whatsapp: "https://example.com",
      //Youtube: "https://example.com",
      //Zhihu: "https://example.com",
      //MrHope: ["https://mister-hope.com", MR_HOPE_AVATAR],
    }
  },
  locales: {
    "/": {
      // navbar
      navbar: enNavbar,
      // sidebar
      sidebar: enSidebar,
      footer: "Default footer",
      displayFooter: true,
      blog: {
        description: "Lumos",
        intro: "/intro.html"
      },
      metaLocales: {
        editLink: "Edit this page on GitHub"
      }
    },
    /**
     * Chinese locale config
     */
    "/zh/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      footer: "\u9ED8\u8BA4\u9875\u811A",
      displayFooter: true,
      blog: {
        avatar: "/assets/images/avatar.png",
        roundAvatar: true,
        description: "Lumos",
        intro: "/zh/intro.html"
      },
      // page meta
      metaLocales: {
        editLink: "\u5728 GitHub \u4E0A\u7F16\u8F91\u6B64\u9875"
      }
    }
  },
  //加密文章的密码
  encrypt: {
    config: {
      "/demo/encrypt.html": ["1234"],
      "/zh/demo/encrypt.html": ["1234"]
    }
  },
  // enable it to preview all changes in time
  // hotReload: true,
  plugins: {
    blog: true,
    // install @waline/client before enabling it
    // WARNING: This is a test server for demo only.
    // You should create and use your own comment service in production.
    // comment: {
    //   provider: "Waline",
    //   serverURL: "https://waline-comment.vuejs.press",
    // },
    components: {
      components: ["Badge", "VPCard"]
    },
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      codetabs: true,
      component: true,
      demo: true,
      figure: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      mark: true,
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended"
              };
          }
        }
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      // install chart.js before enabling it
      // chart: true,
      // insert component easily
      // install echarts before enabling it
      // echarts: true,
      // install flowchart.ts before enabling it
      // flowchart: true,
      // gfm requires mathjax-full to provide tex support
      // gfm: true,
      katex: true
      //数学公式
      // install mermaid before enabling it
      // mermaid: true,
      // playground: {
      //   presets: ["ts", "vue"],
      // },
      // install reveal.js before enabling it
      // revealJs: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      // install @vue/repl before enabling it
      // vuePlayground: true,
      // install sandpack-vue3 before enabling it
      // sandpack: true,
    }
    // install vuepress-plugin-pwa2 and uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  }
});
module.exports = {
  plugins: [
    //彩带
    ribbon({
      size: 120,
      // 默认数据
      opacity: 0.3,
      //  透明度
      zIndex: -1,
      //  层级
      option: {
        // 色带HSL饱和度
        colorSaturation: "80%",
        // 色带HSL亮度量
        colorBrightness: "60%",
        // 带状颜色不透明度
        colorAlpha: 0.65,
        // 在HSL颜色空间中循环显示颜色的速度有多快
        colorCycleSpeed: 6,
        // 从哪一侧开始Y轴 (top|min, middle|center, bottom|max, random)
        verticalPosition: "max",
        // 到达屏幕另一侧的速度有多快
        horizontalSpeed: 200,
        // 在任何给定时间，屏幕上会保留多少条带
        ribbonCount: 3,
        // 添加笔划以及色带填充颜色
        strokeSize: 0,
        // 通过页面滚动上的因子垂直移动色带
        parallaxAmount: -0.5,
        // 随着时间的推移，为每个功能区添加动画效果
        animateSections: true
      },
      //  点击彩带  true显示  false为不显示
      ribbonShow: false,
      // 滑动彩带
      ribbonAnimationShow: true
    })
  ]
};

// vuepress2.0/.vuepress/config.ts
var config_default = defineUserConfig({
  base: "/",
  locales: {
    "/": {
      lang: "en-US",
      title: "Faina's Blog",
      description: "A blog demo for vuepress-theme-hope"
    },
    "/zh/": {
      lang: "zh-CN",
      title: "\u5C81\u676A\u4E8C\u56DB",
      description: "vuepress-theme-hope \u7684\u535A\u5BA2\u6F14\u793A"
    }
  },
  theme: theme_default
  // Enable it with pwa
  // shouldPrefetch: false,
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidnVlcHJlc3MyLjAvLnZ1ZXByZXNzL2NvbmZpZy50cyIsICJ2dWVwcmVzczIuMC8udnVlcHJlc3MvdGhlbWUudHMiLCAidnVlcHJlc3MyLjAvLnZ1ZXByZXNzL25hdmJhci9lbi50cyIsICJ2dWVwcmVzczIuMC8udnVlcHJlc3MvbmF2YmFyL3poLnRzIiwgInZ1ZXByZXNzMi4wLy52dWVwcmVzcy9zaWRlYmFyL2VuLnRzIiwgInZ1ZXByZXNzMi4wLy52dWVwcmVzcy9zaWRlYmFyL3poLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovYmxvZy1kb2NzL3Z1ZXByZXNzMi4wLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcYmxvZy1kb2NzXFxcXHZ1ZXByZXNzMi4wXFxcXC52dWVwcmVzc1xcXFxjb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2Jsb2ctZG9jcy92dWVwcmVzczIuMC8udnVlcHJlc3MvY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lVXNlckNvbmZpZyB9IGZyb20gXCJ2dWVwcmVzc1wiO1xuaW1wb3J0IHRoZW1lIGZyb20gXCIuL3RoZW1lLmpzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZVVzZXJDb25maWcoe1xuICBiYXNlOiBcIi9cIixcblxuICBsb2NhbGVzOiB7XG4gICAgXCIvXCI6IHtcbiAgICAgIGxhbmc6IFwiZW4tVVNcIixcbiAgICAgIHRpdGxlOiBcIkZhaW5hJ3MgQmxvZ1wiLFxuICAgICAgZGVzY3JpcHRpb246IFwiQSBibG9nIGRlbW8gZm9yIHZ1ZXByZXNzLXRoZW1lLWhvcGVcIixcbiAgICB9LFxuICAgIFwiL3poL1wiOiB7XG4gICAgICBsYW5nOiBcInpoLUNOXCIsXG4gICAgICB0aXRsZTogXCJcdTVDODFcdTY3NkFcdTRFOENcdTU2REJcIixcbiAgICAgIGRlc2NyaXB0aW9uOiBcInZ1ZXByZXNzLXRoZW1lLWhvcGUgXHU3Njg0XHU1MzVBXHU1QkEyXHU2RjE0XHU3OTNBXCIsXG4gICAgfSxcbiAgfSxcblxuICB0aGVtZSxcblxuICAvLyBFbmFibGUgaXQgd2l0aCBwd2FcbiAgLy8gc2hvdWxkUHJlZmV0Y2g6IGZhbHNlLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L2Jsb2ctZG9jcy92dWVwcmVzczIuMC8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkQ6XFxcXGJsb2ctZG9jc1xcXFx2dWVwcmVzczIuMFxcXFwudnVlcHJlc3NcXFxcdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2Jsb2ctZG9jcy92dWVwcmVzczIuMC8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuaW1wb3J0IHsgZW5OYXZiYXIsIHpoTmF2YmFyIH0gZnJvbSBcIi4vbmF2YmFyL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBlblNpZGViYXIsIHpoU2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXIvaW5kZXguanNcIjtcbmltcG9ydCB7IE1SX0hPUEVfQVZBVEFSIH0gZnJvbSBcIi4vbG9nby5qc1wiO1xuaW1wb3J0IHsgcmliYm9uIH0gZnJvbSAnQGFueWZvcmsvdnVlcHJlc3MtcGx1Z2luLXJpYmJvbi1uZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgaG9wZVRoZW1lKHtcbiAgaG9zdG5hbWU6IFwiaHR0cHM6Ly9taXN0ZXItaG9wZS5naXRodWIuaW9cIixcblxuICBhdXRob3I6IHtcbiAgICBuYW1lOiBcIlx1NUM4MVx1Njc2QVx1NEU4Q1x1NTZEQlwiLFxuICAgIHVybDogXCJodHRwczovL21pc3Rlci1ob3BlLmNvbVwiLFxuICB9LFxuXG4gIGljb25Bc3NldHM6IFwiZm9udGF3ZXNvbWUtd2l0aC1icmFuZHNcIixcblxuICBsb2dvOiBcImh0dHBzOi8vdGhlbWUtaG9wZS1hc3NldHMudnVlanMucHJlc3MvbG9nby5zdmdcIixcblxuICByZXBvOiBcInZ1ZXByZXNzLXRoZW1lLWhvcGUvdnVlcHJlc3MtdGhlbWUtaG9wZVwiLFxuXG4gIGRvY3NEaXI6IFwic3JjXCIsXG4gIFxuICBibG9nOiB7XG4gICAgZGVzY3JpcHRpb246IFwiTHVtb3NcIixcbiAgICAvL1x1NUYxNVx1NTE2NVx1NTkzNFx1NTBDRlxuICAgIGF2YXRhcjogJy9hc3NldHMvaW1hZ2VzL2F2YXRhci5wbmcnLFxuICAgIHJvdW5kQXZhdGFyOiB0cnVlLFxuICAgIG1lZGlhczoge1xuICAgICAgLy9CYWlkdTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvL0JpbGlCaWxpOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vQml0YnVja2V0OiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIERpbmdkaW5nOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vRGlzY29yZDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvL0RyaWJiYmxlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIEVtYWlsOiBcIm1haWx0bzppbmZvQGV4YW1wbGUuY29tXCIsXG4gICAgICAvL0V2ZXJub3RlOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vRmFjZWJvb2s6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy9GbGlwYm9hcmQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy9HaXRlZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBHaXRIdWI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy9HaXRsYWI6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgR21haWw6IFwibWFpbHRvOmluZm9AZXhhbXBsZS5jb21cIixcbiAgICAgIC8vSW5zdGFncmFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vTGFyazogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvL0xpbmVzOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vTGlua2VkaW46IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy9QaW50ZXJlc3Q6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy9Qb2NrZXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgUVE6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy9Rem9uZTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvL1JlZGRpdDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvL1JzczogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvL1N0ZWFtOiBcImh0dHBzOi8vZXhhbXBsZS5jb21cIixcbiAgICAgIC8vVHdpdHRlcjogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICBXZWNoYXQ6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgV2VpYm86IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy9XaGF0c2FwcDogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvL1lvdXR1YmU6IFwiaHR0cHM6Ly9leGFtcGxlLmNvbVwiLFxuICAgICAgLy9aaGlodTogXCJodHRwczovL2V4YW1wbGUuY29tXCIsXG4gICAgICAvL01ySG9wZTogW1wiaHR0cHM6Ly9taXN0ZXItaG9wZS5jb21cIiwgTVJfSE9QRV9BVkFUQVJdLFxuICAgIH0sXG4gIH0sXG5cbiAgbG9jYWxlczoge1xuICAgIFwiL1wiOiB7XG4gICAgICAvLyBuYXZiYXJcbiAgICAgIG5hdmJhcjogZW5OYXZiYXIsXG5cbiAgICAgIC8vIHNpZGViYXJcbiAgICAgIHNpZGViYXI6IGVuU2lkZWJhcixcblxuICAgICAgZm9vdGVyOiBcIkRlZmF1bHQgZm9vdGVyXCIsXG5cbiAgICAgIGRpc3BsYXlGb290ZXI6IHRydWUsXG5cbiAgICAgIGJsb2c6IHtcbiAgICAgICAgZGVzY3JpcHRpb246IFwiTHVtb3NcIixcblxuICAgICAgICBpbnRybzogXCIvaW50cm8uaHRtbFwiLFxuICAgICAgfSxcblxuICAgICAgbWV0YUxvY2FsZXM6IHtcbiAgICAgICAgZWRpdExpbms6IFwiRWRpdCB0aGlzIHBhZ2Ugb24gR2l0SHViXCIsXG4gICAgICB9LFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBDaGluZXNlIGxvY2FsZSBjb25maWdcbiAgICAgKi9cbiAgICBcIi96aC9cIjoge1xuICAgICAgLy8gbmF2YmFyXG4gICAgICBuYXZiYXI6IHpoTmF2YmFyLFxuXG4gICAgICAvLyBzaWRlYmFyXG4gICAgICBzaWRlYmFyOiB6aFNpZGViYXIsXG5cbiAgICAgIGZvb3RlcjogXCJcdTlFRDhcdThCQTRcdTk4NzVcdTgxMUFcIixcblxuICAgICAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcblxuICAgICAgYmxvZzoge1xuICAgICAgICBhdmF0YXI6ICcvYXNzZXRzL2ltYWdlcy9hdmF0YXIucG5nJyxcbiAgICAgICAgcm91bmRBdmF0YXI6IHRydWUsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkx1bW9zXCIsXG4gICAgICAgIGludHJvOiBcIi96aC9pbnRyby5odG1sXCIsXG4gICAgICB9LFxuXG4gICAgICAvLyBwYWdlIG1ldGFcbiAgICAgIG1ldGFMb2NhbGVzOiB7XG4gICAgICAgIGVkaXRMaW5rOiBcIlx1NTcyOCBHaXRIdWIgXHU0RTBBXHU3RjE2XHU4RjkxXHU2QjY0XHU5ODc1XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIC8vXHU1MkEwXHU1QkM2XHU2NTg3XHU3QUUwXHU3Njg0XHU1QkM2XHU3ODAxXG4gIGVuY3J5cHQ6IHtcbiAgICBjb25maWc6IHtcbiAgICAgIFwiL2RlbW8vZW5jcnlwdC5odG1sXCI6IFtcIjEyMzRcIl0sXG4gICAgICBcIi96aC9kZW1vL2VuY3J5cHQuaHRtbFwiOiBbXCIxMjM0XCJdLFxuICAgIH0sXG4gIH0sXG5cbiAgLy8gZW5hYmxlIGl0IHRvIHByZXZpZXcgYWxsIGNoYW5nZXMgaW4gdGltZVxuICAvLyBob3RSZWxvYWQ6IHRydWUsXG5cbiAgcGx1Z2luczoge1xuICAgIGJsb2c6IHRydWUsXG5cbiAgICAvLyBpbnN0YWxsIEB3YWxpbmUvY2xpZW50IGJlZm9yZSBlbmFibGluZyBpdFxuICAgIC8vIFdBUk5JTkc6IFRoaXMgaXMgYSB0ZXN0IHNlcnZlciBmb3IgZGVtbyBvbmx5LlxuICAgIC8vIFlvdSBzaG91bGQgY3JlYXRlIGFuZCB1c2UgeW91ciBvd24gY29tbWVudCBzZXJ2aWNlIGluIHByb2R1Y3Rpb24uXG4gICAgLy8gY29tbWVudDoge1xuICAgIC8vICAgcHJvdmlkZXI6IFwiV2FsaW5lXCIsXG4gICAgLy8gICBzZXJ2ZXJVUkw6IFwiaHR0cHM6Ly93YWxpbmUtY29tbWVudC52dWVqcy5wcmVzc1wiLFxuICAgIC8vIH0sXG5cbiAgICBjb21wb25lbnRzOiB7XG4gICAgICBjb21wb25lbnRzOiBbXCJCYWRnZVwiLCBcIlZQQ2FyZFwiXSxcbiAgICB9LFxuICBcbiAgICAvLyBhbGwgZmVhdHVyZXMgYXJlIGVuYWJsZWQgZm9yIGRlbW8sIG9ubHkgcHJlc2VydmUgZmVhdHVyZXMgeW91IG5lZWQgaGVyZVxuICAgIG1kRW5oYW5jZToge1xuICAgICAgYWxpZ246IHRydWUsXG4gICAgICBhdHRyczogdHJ1ZSxcbiAgICAgIGNvZGV0YWJzOiB0cnVlLFxuICAgICAgY29tcG9uZW50OiB0cnVlLFxuICAgICAgZGVtbzogdHJ1ZSxcbiAgICAgIGZpZ3VyZTogdHJ1ZSxcbiAgICAgIGltZ0xhenlsb2FkOiB0cnVlLFxuICAgICAgaW1nU2l6ZTogdHJ1ZSxcbiAgICAgIGluY2x1ZGU6IHRydWUsXG4gICAgICBtYXJrOiB0cnVlLFxuICAgICAgc3R5bGl6ZTogW1xuICAgICAgICB7XG4gICAgICAgICAgbWF0Y2hlcjogXCJSZWNvbW1lbmRlZFwiLFxuICAgICAgICAgIHJlcGxhY2VyOiAoeyB0YWcgfSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRhZyA9PT0gXCJlbVwiKVxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHRhZzogXCJCYWRnZVwiLFxuICAgICAgICAgICAgICAgIGF0dHJzOiB7IHR5cGU6IFwidGlwXCIgfSxcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgICBzdWI6IHRydWUsXG4gICAgICBzdXA6IHRydWUsXG4gICAgICB0YWJzOiB0cnVlLFxuICAgICAgdlByZTogdHJ1ZSxcblxuICAgICAgLy8gaW5zdGFsbCBjaGFydC5qcyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIGNoYXJ0OiB0cnVlLFxuXG4gICAgICAvLyBpbnNlcnQgY29tcG9uZW50IGVhc2lseVxuXG4gICAgICAvLyBpbnN0YWxsIGVjaGFydHMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBlY2hhcnRzOiB0cnVlLFxuXG4gICAgICAvLyBpbnN0YWxsIGZsb3djaGFydC50cyBiZWZvcmUgZW5hYmxpbmcgaXRcbiAgICAgIC8vIGZsb3djaGFydDogdHJ1ZSxcblxuICAgICAgLy8gZ2ZtIHJlcXVpcmVzIG1hdGhqYXgtZnVsbCB0byBwcm92aWRlIHRleCBzdXBwb3J0XG4gICAgICAvLyBnZm06IHRydWUsXG5cbiAgICAgIGthdGV4OiB0cnVlLCAgICAvL1x1NjU3MFx1NUI2Nlx1NTE2Q1x1NUYwRlxuXG4gICAgICAvLyBpbnN0YWxsIG1lcm1haWQgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBtZXJtYWlkOiB0cnVlLFxuXG4gICAgICAvLyBwbGF5Z3JvdW5kOiB7XG4gICAgICAvLyAgIHByZXNldHM6IFtcInRzXCIsIFwidnVlXCJdLFxuICAgICAgLy8gfSxcblxuICAgICAgLy8gaW5zdGFsbCByZXZlYWwuanMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyByZXZlYWxKczoge1xuICAgICAgLy8gICBwbHVnaW5zOiBbXCJoaWdobGlnaHRcIiwgXCJtYXRoXCIsIFwic2VhcmNoXCIsIFwibm90ZXNcIiwgXCJ6b29tXCJdLFxuICAgICAgLy8gfSxcblxuICAgICAgLy8gaW5zdGFsbCBAdnVlL3JlcGwgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyB2dWVQbGF5Z3JvdW5kOiB0cnVlLFxuXG4gICAgICAvLyBpbnN0YWxsIHNhbmRwYWNrLXZ1ZTMgYmVmb3JlIGVuYWJsaW5nIGl0XG4gICAgICAvLyBzYW5kcGFjazogdHJ1ZSxcbiAgICB9LFxuXG4gICAgLy8gaW5zdGFsbCB2dWVwcmVzcy1wbHVnaW4tcHdhMiBhbmQgdW5jb21tZW50IHRoZXNlIGlmIHlvdSB3YW50IGEgUFdBXG4gICAgLy8gcHdhOiB7XG4gICAgLy8gICBmYXZpY29uOiBcIi9mYXZpY29uLmljb1wiLFxuICAgIC8vICAgY2FjaGVIVE1MOiB0cnVlLFxuICAgIC8vICAgY2FjaGVQaWM6IHRydWUsXG4gICAgLy8gICBhcHBlbmRCYXNlOiB0cnVlLFxuICAgIC8vICAgYXBwbGU6IHtcbiAgICAvLyAgICAgaWNvbjogXCIvYXNzZXRzL2ljb24vYXBwbGUtaWNvbi0xNTIucG5nXCIsXG4gICAgLy8gICAgIHN0YXR1c0JhckNvbG9yOiBcImJsYWNrXCIsXG4gICAgLy8gICB9LFxuICAgIC8vICAgbXNUaWxlOiB7XG4gICAgLy8gICAgIGltYWdlOiBcIi9hc3NldHMvaWNvbi9tcy1pY29uLTE0NC5wbmdcIixcbiAgICAvLyAgICAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICAgIC8vICAgfSxcbiAgICAvLyAgIG1hbmlmZXN0OiB7XG4gICAgLy8gICAgIGljb25zOiBbXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay01MTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCI1MTJ4NTEyXCIsXG4gICAgLy8gICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtbWFzay0xOTIucG5nXCIsXG4gICAgLy8gICAgICAgICBzaXplczogXCIxOTJ4MTkyXCIsXG4gICAgLy8gICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICB0eXBlOiBcImltYWdlL3BuZ1wiLFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgc3JjOiBcIi9hc3NldHMvaWNvbi9jaHJvbWUtNTEyLnBuZ1wiLFxuICAgIC8vICAgICAgICAgc2l6ZXM6IFwiNTEyeDUxMlwiLFxuICAgIC8vICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICB9LFxuICAgIC8vICAgICAgIHtcbiAgICAvLyAgICAgICAgIHNyYzogXCIvYXNzZXRzL2ljb24vY2hyb21lLTE5Mi5wbmdcIixcbiAgICAvLyAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgIHR5cGU6IFwiaW1hZ2UvcG5nXCIsXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyAgICAgc2hvcnRjdXRzOiBbXG4gICAgLy8gICAgICAge1xuICAgIC8vICAgICAgICAgbmFtZTogXCJEZW1vXCIsXG4gICAgLy8gICAgICAgICBzaG9ydF9uYW1lOiBcIkRlbW9cIixcbiAgICAvLyAgICAgICAgIHVybDogXCIvZGVtby9cIixcbiAgICAvLyAgICAgICAgIGljb25zOiBbXG4gICAgLy8gICAgICAgICAgIHtcbiAgICAvLyAgICAgICAgICAgICBzcmM6IFwiL2Fzc2V0cy9pY29uL2d1aWRlLW1hc2thYmxlLnBuZ1wiLFxuICAgIC8vICAgICAgICAgICAgIHNpemVzOiBcIjE5MngxOTJcIixcbiAgICAvLyAgICAgICAgICAgICBwdXJwb3NlOiBcIm1hc2thYmxlXCIsXG4gICAgLy8gICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICAvLyAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgIF0sXG4gICAgLy8gICAgICAgfSxcbiAgICAvLyAgICAgXSxcbiAgICAvLyAgIH0sXG4gICAgLy8gfSxcbiAgfSxcbn0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcGx1Z2luczogW1xuICAgIC8vXHU1RjY5XHU1RTI2XG4gICAgcmliYm9uKHtcbiAgICAgIHNpemU6IDEyMCwgLy8gXHU5RUQ4XHU4QkE0XHU2NTcwXHU2MzZFXG4gICAgICBvcGFjaXR5OiAwLjMsIC8vICBcdTkwMEZcdTY2MEVcdTVFQTZcbiAgICAgIHpJbmRleDogLTEsIC8vICBcdTVDNDJcdTdFQTdcbiAgICAgIG9wdGlvbjoge1xuICAgICAgICAvLyBcdTgyNzJcdTVFMjZIU0xcdTk5NzFcdTU0OENcdTVFQTZcbiAgICAgICAgY29sb3JTYXR1cmF0aW9uOiAnODAlJyxcbiAgICAgICAgLy8gXHU4MjcyXHU1RTI2SFNMXHU0RUFFXHU1RUE2XHU5MUNGXG4gICAgICAgIGNvbG9yQnJpZ2h0bmVzczogJzYwJScsXG4gICAgICAgIC8vIFx1NUUyNlx1NzJCNlx1OTg5Q1x1ODI3Mlx1NEUwRFx1OTAwRlx1NjYwRVx1NUVBNlxuICAgICAgICBjb2xvckFscGhhOiAwLjY1LFxuICAgICAgICAvLyBcdTU3MjhIU0xcdTk4OUNcdTgyNzJcdTdBN0FcdTk1RjRcdTRFMkRcdTVGQUFcdTczQUZcdTY2M0VcdTc5M0FcdTk4OUNcdTgyNzJcdTc2ODRcdTkwMUZcdTVFQTZcdTY3MDlcdTU5MUFcdTVGRUJcbiAgICAgICAgY29sb3JDeWNsZVNwZWVkOiA2LFxuICAgICAgICAvLyBcdTRFQ0VcdTU0RUFcdTRFMDBcdTRGQTdcdTVGMDBcdTU5Q0JZXHU4Rjc0ICh0b3B8bWluLCBtaWRkbGV8Y2VudGVyLCBib3R0b218bWF4LCByYW5kb20pXG4gICAgICAgIHZlcnRpY2FsUG9zaXRpb246ICdtYXgnLFxuICAgICAgICAvLyBcdTUyMzBcdThGQkVcdTVDNEZcdTVFNTVcdTUzRTZcdTRFMDBcdTRGQTdcdTc2ODRcdTkwMUZcdTVFQTZcdTY3MDlcdTU5MUFcdTVGRUJcbiAgICAgICAgaG9yaXpvbnRhbFNwZWVkOiAyMDAsXG4gICAgICAgIC8vIFx1NTcyOFx1NEVGQlx1NEY1NVx1N0VEOVx1NUI5QVx1NjVGNlx1OTVGNFx1RkYwQ1x1NUM0Rlx1NUU1NVx1NEUwQVx1NEYxQVx1NEZERFx1NzU1OVx1NTkxQVx1NUMxMVx1Njc2MVx1NUUyNlxuICAgICAgICByaWJib25Db3VudDogMyxcbiAgICAgICAgLy8gXHU2REZCXHU1MkEwXHU3QjE0XHU1MjEyXHU0RUU1XHU1M0NBXHU4MjcyXHU1RTI2XHU1ODZCXHU1MTQ1XHU5ODlDXHU4MjcyXG4gICAgICAgIHN0cm9rZVNpemU6IDAsXG4gICAgICAgIC8vIFx1OTAxQVx1OEZDN1x1OTg3NVx1OTc2Mlx1NkVEQVx1NTJBOFx1NEUwQVx1NzY4NFx1NTZFMFx1NUI1MFx1NTc4Mlx1NzZGNFx1NzlGQlx1NTJBOFx1ODI3Mlx1NUUyNlxuICAgICAgICBwYXJhbGxheEFtb3VudDogLTAuNSxcbiAgICAgICAgLy8gXHU5NjhGXHU3NzQwXHU2NUY2XHU5NUY0XHU3Njg0XHU2M0E4XHU3OUZCXHVGRjBDXHU0RTNBXHU2QkNGXHU0RTJBXHU1MjlGXHU4MEZEXHU1MzNBXHU2REZCXHU1MkEwXHU1MkE4XHU3NTNCXHU2NTQ4XHU2NzlDXG4gICAgICAgIGFuaW1hdGVTZWN0aW9uczogdHJ1ZVxuICAgICAgfSxcbiAgICAgIC8vICBcdTcwQjlcdTUxRkJcdTVGNjlcdTVFMjYgIHRydWVcdTY2M0VcdTc5M0EgIGZhbHNlXHU0RTNBXHU0RTBEXHU2NjNFXHU3OTNBXG4gICAgICByaWJib25TaG93OiBmYWxzZSxcbiAgICAgIC8vIFx1NkVEMVx1NTJBOFx1NUY2OVx1NUUyNlxuICAgICAgcmliYm9uQW5pbWF0aW9uU2hvdzogdHJ1ZVxuICAgIH0pXG4gIF1cbn07XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L2Jsb2ctZG9jcy92dWVwcmVzczIuMC8udnVlcHJlc3MvbmF2YmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxibG9nLWRvY3NcXFxcdnVlcHJlc3MyLjBcXFxcLnZ1ZXByZXNzXFxcXG5hdmJhclxcXFxlbi50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRDovYmxvZy1kb2NzL3Z1ZXByZXNzMi4wLy52dWVwcmVzcy9uYXZiYXIvZW4udHNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgY29uc3QgZW5OYXZiYXIgPSBuYXZiYXIoW1xuICBcIi9cIixcbiAgXCIvZGVtby9cIixcbiAge1xuICAgIHRleHQ6IFwiUG9zdHNcIixcbiAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcbiAgICBwcmVmaXg6IFwiL3Bvc3RzL1wiLFxuICAgIGNoaWxkcmVuOiBbXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiQXBwbGVcIixcbiAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXG4gICAgICAgIHByZWZpeDogXCJhcHBsZS9cIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6IFwiQXBwbGUxXCIsIGljb246IFwicGVuLXRvLXNxdWFyZVwiLCBsaW5rOiBcIjFcIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJBcHBsZTJcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiMlwiIH0sXG4gICAgICAgICAgXCIzXCIsXG4gICAgICAgICAgXCI0XCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkJhbmFuYVwiLFxuICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcbiAgICAgICAgcHJlZml4OiBcImJhbmFuYS9cIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIkJhbmFuYSAxXCIsXG4gICAgICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcbiAgICAgICAgICAgIGxpbms6IFwiMVwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdGV4dDogXCJCYW5hbmEgMlwiLFxuICAgICAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXG4gICAgICAgICAgICBsaW5rOiBcIjJcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwiM1wiLFxuICAgICAgICAgIFwiNFwiLFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICAgIHsgdGV4dDogXCJDaGVycnlcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiY2hlcnJ5XCIgfSxcbiAgICAgIHsgdGV4dDogXCJEcmFnb24gRnJ1aXRcIiwgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsIGxpbms6IFwiZHJhZ29uZnJ1aXRcIiB9LFxuICAgICAgXCJ0b21hdG9cIixcbiAgICAgIFwic3RyYXdiZXJyeVwiLFxuICAgIF0sXG4gIH0sXG4gIHtcbiAgICB0ZXh0OiBcIlYyIERvY3NcIixcbiAgICBpY29uOiBcImJvb2tcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vdGhlbWUtaG9wZS52dWVqcy5wcmVzcy9cIixcbiAgfSxcbl0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOi9ibG9nLWRvY3MvdnVlcHJlc3MyLjAvLnZ1ZXByZXNzL25hdmJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcYmxvZy1kb2NzXFxcXHZ1ZXByZXNzMi4wXFxcXC52dWVwcmVzc1xcXFxuYXZiYXJcXFxcemgudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2Jsb2ctZG9jcy92dWVwcmVzczIuMC8udnVlcHJlc3MvbmF2YmFyL3poLnRzXCI7aW1wb3J0IHsgbmF2YmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGNvbnN0IHpoTmF2YmFyID0gbmF2YmFyKFtcbiAgXCIvemgvXCIsXG4gIFwiL3poL2RlbW8vXCIsXG4gIHtcbiAgICB0ZXh0OiBcIlx1NTM1QVx1NjU4N1wiLFxuICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxuICAgIHByZWZpeDogXCIvemgvcG9zdHMvXCIsXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTgyRjlcdTY3OUNcIixcbiAgICAgICAgaWNvbjogXCJwZW4tdG8tc3F1YXJlXCIsXG4gICAgICAgIHByZWZpeDogXCJhcHBsZS9cIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6IFwiXHU4MkY5XHU2NzlDMVwiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCIxXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU4MkY5XHU2NzlDMlwiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCIyXCIgfSxcbiAgICAgICAgICBcIjNcIixcbiAgICAgICAgICBcIjRcIixcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHRleHQ6IFwiXHU5OTk5XHU4NTQ5XCIsXG4gICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxuICAgICAgICBwcmVmaXg6IFwiYmFuYW5hL1wiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiXHU5OTk5XHU4NTQ5IDFcIixcbiAgICAgICAgICAgIGljb246IFwicGVuLXRvLXNxdWFyZVwiLFxuICAgICAgICAgICAgbGluazogXCIxXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlx1OTk5OVx1ODU0OSAyXCIsXG4gICAgICAgICAgICBpY29uOiBcInBlbi10by1zcXVhcmVcIixcbiAgICAgICAgICAgIGxpbms6IFwiMlwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgXCIzXCIsXG4gICAgICAgICAgXCI0XCIsXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICAgeyB0ZXh0OiBcIlx1NkEzMVx1Njg0M1wiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCJjaGVycnlcIiB9LFxuICAgICAgeyB0ZXh0OiBcIlx1NzA2Qlx1OUY5OVx1Njc5Q1wiLCBpY29uOiBcInBlbi10by1zcXVhcmVcIiwgbGluazogXCJkcmFnb25mcnVpdFwiIH0sXG4gICAgICBcInRvbWF0b1wiLFxuICAgICAgXCJzdHJhd2JlcnJ5XCIsXG4gICAgXSxcbiAgfSxcbiAge1xuICAgIHRleHQ6IFwiVjIgXHU2NTg3XHU2ODYzXCIsXG4gICAgaWNvbjogXCJib29rXCIsXG4gICAgbGluazogXCJodHRwczovL3RoZW1lLWhvcGUudnVlanMucHJlc3MvemgvXCIsXG4gIH0sXG5dKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiRDovYmxvZy1kb2NzL3Z1ZXByZXNzMi4wLy52dWVwcmVzcy9zaWRlYmFyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxibG9nLWRvY3NcXFxcdnVlcHJlc3MyLjBcXFxcLnZ1ZXByZXNzXFxcXHNpZGViYXJcXFxcZW4udHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L2Jsb2ctZG9jcy92dWVwcmVzczIuMC8udnVlcHJlc3Mvc2lkZWJhci9lbi50c1wiO2ltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgY29uc3QgZW5TaWRlYmFyID0gc2lkZWJhcih7XG4gIFwiL1wiOiBbXG4gICAgXCJcIixcbiAgICB7XG4gICAgICB0ZXh0OiBcIkRlbW9cIixcbiAgICAgIGljb246IFwibGFwdG9wLWNvZGVcIixcbiAgICAgIHByZWZpeDogXCJkZW1vL1wiLFxuICAgICAgbGluazogXCJkZW1vL1wiLFxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIkFydGljbGVzXCIsXG4gICAgICBpY29uOiBcImJvb2tcIixcbiAgICAgIHByZWZpeDogXCJwb3N0cy9cIixcbiAgICAgIGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuICAgIH0sXG4gICAgXCJpbnRyb1wiLFxuICAgIHtcbiAgICAgIHRleHQ6IFwiU2xpZGVzXCIsXG4gICAgICBpY29uOiBcInBlcnNvbi1jaGFsa2JvYXJkXCIsXG4gICAgICBsaW5rOiBcImh0dHBzOi8vcGx1Z2luLW1kLWVuaGFuY2UudnVlanMucHJlc3MvZ3VpZGUvY29udGVudC9yZXZlYWxqcy9kZW1vLmh0bWxcIixcbiAgICB9LFxuICBdLFxufSk7XG4iLCAiY29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2Rpcm5hbWUgPSBcIkQ6L2Jsb2ctZG9jcy92dWVwcmVzczIuMC8udnVlcHJlc3Mvc2lkZWJhclwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcYmxvZy1kb2NzXFxcXHZ1ZXByZXNzMi4wXFxcXC52dWVwcmVzc1xcXFxzaWRlYmFyXFxcXHpoLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9ibG9nLWRvY3MvdnVlcHJlc3MyLjAvLnZ1ZXByZXNzL3NpZGViYXIvemgudHNcIjtpbXBvcnQgeyBzaWRlYmFyIH0gZnJvbSBcInZ1ZXByZXNzLXRoZW1lLWhvcGVcIjtcblxuZXhwb3J0IGNvbnN0IHpoU2lkZWJhciA9IHNpZGViYXIoe1xuICBcIi96aC9cIjogW1xuICAgIFwiXCIsXG4gICAge1xuICAgICAgdGV4dDogXCJcdTU5ODJcdTRGNTVcdTRGN0ZcdTc1MjhcIixcbiAgICAgIGljb246IFwibGFwdG9wLWNvZGVcIixcbiAgICAgIHByZWZpeDogXCJkZW1vL1wiLFxuICAgICAgbGluazogXCJkZW1vL1wiLFxuICAgICAgY2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1NjU4N1x1N0FFMFwiLFxuICAgICAgaWNvbjogXCJib29rXCIsXG4gICAgICBwcmVmaXg6IFwicG9zdHMvXCIsXG4gICAgICBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcbiAgICB9LFxuICAgIFwiaW50cm9cIixcbiAgICB7XG4gICAgICB0ZXh0OiBcIlx1NUU3Qlx1NzA2Rlx1NzI0N1wiLFxuICAgICAgaWNvbjogXCJwZXJzb24tY2hhbGtib2FyZFwiLFxuICAgICAgbGluazogXCJodHRwczovL3BsdWdpbi1tZC1lbmhhbmNlLnZ1ZWpzLnByZXNzL3poL2d1aWRlL2NvbnRlbnQvcmV2ZWFsanMvZGVtby5odG1sXCIsXG4gICAgfSxcbiAgXSxcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtUixTQUFTLHdCQUF3Qjs7O0FDQW5DLFNBQVMsaUJBQWlCOzs7QUNBVixTQUFTLGNBQWM7QUFFalQsSUFBTSxXQUFXLE9BQU87QUFBQSxFQUM3QjtBQUFBLEVB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QjtBQUFBO0FBQUEsUUFFakIsa0JBQWtCO0FBQUE7QUFBQSxRQUVsQixpQkFBaUI7QUFBQTtBQUFBLFFBRWpCLGFBQWE7QUFBQTtBQUFBLFFBRWIsWUFBWTtBQUFBO0FBQUEsUUFFWixnQkFBZ0I7QUFBQTtBQUFBLFFBRWhCLGlCQUFpQjtBQUFBLE1BQ25CO0FBQUE7QUFBQSxNQUVBLFlBQVk7QUFBQTtBQUFBLE1BRVoscUJBQXFCO0FBQUEsSUFDdkIsQ0FBQztBQUFBLEVBQ0g7QUFDRjs7O0FEdlNBLElBQU8saUJBQVEsaUJBQWlCO0FBQUEsRUFDOUIsTUFBTTtBQUFBLEVBRU4sU0FBUztBQUFBLElBQ1AsS0FBSztBQUFBLE1BQ0gsTUFBTTtBQUFBLE1BQ04sT0FBTztBQUFBLE1BQ1AsYUFBYTtBQUFBLElBQ2Y7QUFBQSxJQUNBLFFBQVE7QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE9BQU87QUFBQSxNQUNQLGFBQWE7QUFBQSxJQUNmO0FBQUEsRUFDRjtBQUFBLEVBRUE7QUFBQTtBQUFBO0FBSUYsQ0FBQzsiLAogICJuYW1lcyI6IFsibmF2YmFyIiwgIm5hdmJhciIsICJzaWRlYmFyIiwgInNpZGViYXIiXQp9Cg==
