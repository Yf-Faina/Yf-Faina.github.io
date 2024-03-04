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

  theme: theme({
    plugins:{
      mdEnhance: {
        katex: true,
      }
    },
  }),

  // Enable it with pwa
  // shouldPrefetch: false,
});
