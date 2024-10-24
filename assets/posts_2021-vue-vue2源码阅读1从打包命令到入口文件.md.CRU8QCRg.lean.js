import{_ as o,o as r,e as s,i as n,j as a,v as i,H as t,q as u,s as d,E as c}from"./chunks/framework.CXoXy2UI.js";const B=JSON.parse('{"title":"vue2源码阅读1--从打包命令到入口文件","description":"","frontmatter":{"title":"vue2源码阅读1--从打包命令到入口文件","class":"vue","date":"2021-10-27"},"headers":[],"relativePath":"posts/2021-vue-vue2源码阅读1从打包命令到入口文件.md","filePath":"posts/2021-vue-vue2源码阅读1从打包命令到入口文件.md"}'),p={name:"posts/2021-vue-vue2源码阅读1从打包命令到入口文件.md"};function m(_,e,v,f,y,g){const l=u("ClientOnly");return r(),s("div",null,[e[1]||(e[1]=n("pre",{class:"mermaid-container",style:{visibility:"hidden"}},`graph TD
A[npm run build] -->|node scripts/build.js| B("require('./config').getAllBuilds()得到rollup打包所需配置")
B --> C{根据命令行参数判断打包那种类型的vue}
C -->|有参数指定打包类型| D(过滤留下指定类型的打包配置)
C -->|无参数| E(默认不打包weex类型的vue)
D -->|buildEntry| F("通过rollup.rollup(config)打包")
E -->|buildEntry| F
F --> G("bundle.generate(output)")
G -->|得到code| H{是否打包生产环境}
H -->|否| I(不压缩)
H -->|是| J("terser.minify(code)压缩code")
I --> End[写入磁盘]
J --> End
`,-1)),a(l,null,{default:i(()=>[(r(),d(c("script"),null,{default:i(()=>e[0]||(e[0]=[t(' (() => { const timer = setInterval(async () => { if (window.mermaid) { await window.mermaid.run({ querySelector: ".mermaid-container" }); const container = document.querySelector(".mermaid-container"); if (container) { container.style.visibility = "visible"; } clearInterval(timer); } }, 500); })(); ')])),_:1}))]),_:1}),e[2]||(e[2]=n("p",null,[t("通过"),n("strong",null,"require('./config').getAllBuilds()"),t(" 得到rollup打包配置，每个配置的"),n("strong",null,"input"),t(" 字段对应config.js中builds对象里，每个成员对象的"),n("strong",null,"entry"),t(" 字段，根据该字段可找到不同类型vue的打包入口文件")],-1))])}const C=o(p,[["render",m]]);export{B as __pageData,C as default};
