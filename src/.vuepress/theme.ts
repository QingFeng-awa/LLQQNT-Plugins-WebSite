import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  //hostname: "https://llqqnt.org.cn",
  author: {
    name: "QingFeng",
    url: "https://qingf.me",
  },
  repo: "QingFeng-awa/LLQQNT-Plugins-WebSite",
  docsDir: "src",
  navbar,
  sidebar,
  footer: "GPL-3.0 Licensed",
  displayFooter: true,
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },
  markdown: {
    align: true,
    attrs: true,
    codeTabs: true,
    component: true,
    demo: true,
    figure: true,
    gfm: true,
    imgLazyload: true,
    imgSize: true,
    include: true,
    mark: true,
    plantuml: true,
    spoiler: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
    sub: true,
    sup: true,
    tabs: true,
    tasklist: true,
    vPre: true,
  },
  plugins: {
    components: {
      components: ["Badge", "VPCard"],
    },
  },
});
