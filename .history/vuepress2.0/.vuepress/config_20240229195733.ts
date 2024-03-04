import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Faina's Blog",
      description: "A blog demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "岁杪二四",
      description: "vuepress-theme-hope 的博客演示",
    },
  },
  
  theme,
  
  plugins: [
    shikiPlugins({
      // 你的选项

      // 例子
      themes: {
        light: "github-light",
        dark: "one-dark-pro",
      },
    }),
  ],
  // Enable it with pwa
  // shouldPrefetch: false,
});
