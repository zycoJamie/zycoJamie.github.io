import{d as k,u as M,p as q,h as W,a as E,b as I,c as _,e as p,F as h,r as N,o as r,n as T,f,t as m,_ as j,g as x,i as o,j as U,w as K,k as D,l as S,m as Y,q as Q,s as $,v as X,x as A,y as J,z as G,A as R,T as z,B as Z,C as ee,D as B,E as L}from"./framework.CXoXy2UI.js";const w=Symbol("themeConfig"),te=s=>k(()=>{const{theme:e}=M();return q(w,e.value),()=>W(s,null,{})}),se={text:s=>`查看全部(${s}篇)文章`,route:"articles",default:!0},O=()=>({posts:{all:[{title:"vitepress主题开发--开发环境下动态导入UMD模块出现差异化报错",class:"vite",date:"2024-10-23",fileName:"2024-vite-vitepress开发环境下动态导入UMD模块出现差异化报错",brief:" 不同项目出现差异化本地测试项目1通过link链接本地包vitepress-pure-theme-zyco包中有如下逻辑在测试项目1中生产和开发环境皆正常。本地测试项目2通过install安装依赖，生...",year:"2024",url:"/posts/2024-vite-vitepress开发环境下动态导入UMD模块出现差异化报错"},{title:"vitepress主题开发--站点配置config.mts导入主题配置ts文件报错Unknown file extension",class:"vite",date:"2024-10-09",fileName:"2024-vite-vitepress站点配置导入主题配置ts文件报错",brief:" 发现问题最近开发vitepress-pure-theme-zyco主题时，主题侧的site-config文件是用ts写的，用户使用主题时，需要引入相应的配置文件。\0 主题包在package.json...",year:"2024",url:"/posts/2024-vite-vitepress站点配置导入主题配置ts文件报错"},{title:"vscode #include Qt header 报错",class:"c++",date:"2024-07-20",fileName:"2024-c++-vscode.include.Qt.header",brief:' <code>include QApplication</code>  <code>error: 无法打开源文件 "QApplication"</code> \0 error: 检测到 include 错误。请更新...',year:"2024",url:"/posts/2024-c++-vscode.include.Qt.header"},{title:"优化hook-按需（依赖字段）render",class:"react",date:"2023-06-01",fileName:"2023-react-优化hook按需render",brief:" <code>收集使用的字段，当依赖的字段更新时，才通过forceUpdate强制render</code> \0 Object.defineProperties代理字段，用于收集依赖 ...",year:"2023",url:"/posts/2023-react-优化hook按需render"},{title:"判断泛型参数是否是any",class:"ts",date:"2023-06-01",fileName:"2023-ts-判断泛型参数是否是any",brief:"泛型参数使用' [ ] '包裹住，那么当泛型参数T是any时，满足extends，此时 type B = number <code>假如是如下定义</code>  <code>那么当泛型参数T是any时，此时</code> ...",year:"2023",url:"/posts/2023-ts-判断泛型参数是否是any"},{title:"web3项目npm安装依赖ethereumjs-abi失败",class:"node.js",date:"2022-05-27",fileName:"2022-node.js-web3项目npm安装依赖ethereumjsabi失败",brief:' <code>连接钱包的npm库</code> @walletconnect/web3-provider 依赖了 ethereumjs-abi，而依赖方式是 "e...',year:"2022",url:"/posts/2022-node.js-web3项目npm安装依赖ethereumjsabi失败"},{title:'多行文本省略号，且末尾包含"展开或更多"',class:"css",date:"2022-05-23",fileName:"2022-css-多行文本省略号",brief:"实现关键点 1 父元素-webkit-box保证内部文字多行省略 2 div中的文字环绕float元素 3 clear:both 4 line-height相关的设置与计算...",year:"2022",url:"/posts/2022-css-多行文本省略号"},{title:"vue2源码阅读2--响应式原理",class:"vue",date:"2021-11-09",fileName:"2021-vue-vue2源码阅读2响应式原理",brief:"",year:"2021",url:"/posts/2021-vue-vue2源码阅读2响应式原理"},{title:"vue2源码阅读1--从打包命令到入口文件",class:"vue",date:"2021-10-27",fileName:"2021-vue-vue2源码阅读1从打包命令到入口文件",brief:"通过require('./config').getAllBuilds() 得到rollup打包配置，每个配置的input 字段对应config.js中builds对象里，每个成员对象的entry 字段...",year:"2021",url:"/posts/2021-vue-vue2源码阅读1从打包命令到入口文件"},{title:"umi中引入babel-plugin-react-css-modules简化css模块化",class:"react",date:"2020-11-29",fileName:"2020-react-umi中简化css模块化",brief:` <code>环境</code> umi + dva + react + ts <code>问题</code> 1. 在ts中使用styleName出现 "property 'styleName' does not ...`,year:"2020",url:"/posts/2020-react-umi中简化css模块化"},{title:"使用echarts绘制某个省份地图时，地图上总是会出现“海南诸岛”，导致省份地图不是位于正中间",class:"小程序",date:"2020-02-05",fileName:"2020-小程序-使用echarts绘制某个省份地图时",brief:" <code>解决方式</code> series中的mapType和echarts.registerMap( ) 函数第一个参数不要设置成“china”，否则会自动添加“海南诸岛”到地图中 <code>解决后</code> ...",year:"2020",url:"/posts/2020-小程序-使用echarts绘制某个省份地图时"},{title:"element-ui自定义上传图片",class:"js",date:"2019-05-28",fileName:"2019-js-ui自定义上传图片",brief:" <code>利用el-upload的http-request属性实现自定义上传逻辑，下面的上传是把图片转换成字节数组</code> ...",year:"2019",url:"/posts/2019-js-ui自定义上传图片"},{title:"原型链",class:"js",date:"2019-04-13",fileName:"2019-js-原型链",brief:"Function.prototype也是唯一一个typeof XXX.prototype为 function的prototype。其它的构造器的prototype都是一个对象 疑点解惑\0 Object...",year:"2019",url:"/posts/2019-js-原型链"},{title:"协程",class:"kotlin",date:"2019-02-19",fileName:"2019-kotlin-协程",brief:" 协程的作用提升CPU利用率，当I/O操作阻塞协程时，会让出CPU，将CPU交由其他协程占用，当I/O任务结束时，返回挂起的协程继续执行；减少线程切换的资源消耗；可控制，轻量，将异步写法同步化 协程的...",year:"2019",url:"/posts/2019-kotlin-协程"},{title:"ContentProvider工作过程",class:"android",date:"2017-02-26",fileName:"2017-android-ContentProvider工作过程",brief:"ContentProvider所在进程启动时，ContentProvider的onCreate方法先于Application的onCreate方法执行 启动过程 从getContentResolver...",year:"2017",url:"/posts/2017-android-ContentProvider工作过程"}],date:{2017:[{title:"ContentProvider工作过程",class:"android",date:"2017-02-26",fileName:"2017-android-ContentProvider工作过程",brief:"ContentProvider所在进程启动时，ContentProvider的onCreate方法先于Application的onCreate方法执行 启动过程 从getContentResolver...",year:"2017",url:"/posts/2017-android-ContentProvider工作过程"}],2019:[{title:"element-ui自定义上传图片",class:"js",date:"2019-05-28",fileName:"2019-js-ui自定义上传图片",brief:" <code>利用el-upload的http-request属性实现自定义上传逻辑，下面的上传是把图片转换成字节数组</code> ...",year:"2019",url:"/posts/2019-js-ui自定义上传图片"},{title:"原型链",class:"js",date:"2019-04-13",fileName:"2019-js-原型链",brief:"Function.prototype也是唯一一个typeof XXX.prototype为 function的prototype。其它的构造器的prototype都是一个对象 疑点解惑\0 Object...",year:"2019",url:"/posts/2019-js-原型链"},{title:"协程",class:"kotlin",date:"2019-02-19",fileName:"2019-kotlin-协程",brief:" 协程的作用提升CPU利用率，当I/O操作阻塞协程时，会让出CPU，将CPU交由其他协程占用，当I/O任务结束时，返回挂起的协程继续执行；减少线程切换的资源消耗；可控制，轻量，将异步写法同步化 协程的...",year:"2019",url:"/posts/2019-kotlin-协程"}],2020:[{title:"umi中引入babel-plugin-react-css-modules简化css模块化",class:"react",date:"2020-11-29",fileName:"2020-react-umi中简化css模块化",brief:` <code>环境</code> umi + dva + react + ts <code>问题</code> 1. 在ts中使用styleName出现 "property 'styleName' does not ...`,year:"2020",url:"/posts/2020-react-umi中简化css模块化"},{title:"使用echarts绘制某个省份地图时，地图上总是会出现“海南诸岛”，导致省份地图不是位于正中间",class:"小程序",date:"2020-02-05",fileName:"2020-小程序-使用echarts绘制某个省份地图时",brief:" <code>解决方式</code> series中的mapType和echarts.registerMap( ) 函数第一个参数不要设置成“china”，否则会自动添加“海南诸岛”到地图中 <code>解决后</code> ...",year:"2020",url:"/posts/2020-小程序-使用echarts绘制某个省份地图时"}],2021:[{title:"vue2源码阅读2--响应式原理",class:"vue",date:"2021-11-09",fileName:"2021-vue-vue2源码阅读2响应式原理",brief:"",year:"2021",url:"/posts/2021-vue-vue2源码阅读2响应式原理"},{title:"vue2源码阅读1--从打包命令到入口文件",class:"vue",date:"2021-10-27",fileName:"2021-vue-vue2源码阅读1从打包命令到入口文件",brief:"通过require('./config').getAllBuilds() 得到rollup打包配置，每个配置的input 字段对应config.js中builds对象里，每个成员对象的entry 字段...",year:"2021",url:"/posts/2021-vue-vue2源码阅读1从打包命令到入口文件"}],2022:[{title:"web3项目npm安装依赖ethereumjs-abi失败",class:"node.js",date:"2022-05-27",fileName:"2022-node.js-web3项目npm安装依赖ethereumjsabi失败",brief:' <code>连接钱包的npm库</code> @walletconnect/web3-provider 依赖了 ethereumjs-abi，而依赖方式是 "e...',year:"2022",url:"/posts/2022-node.js-web3项目npm安装依赖ethereumjsabi失败"},{title:'多行文本省略号，且末尾包含"展开或更多"',class:"css",date:"2022-05-23",fileName:"2022-css-多行文本省略号",brief:"实现关键点 1 父元素-webkit-box保证内部文字多行省略 2 div中的文字环绕float元素 3 clear:both 4 line-height相关的设置与计算...",year:"2022",url:"/posts/2022-css-多行文本省略号"}],2023:[{title:"优化hook-按需（依赖字段）render",class:"react",date:"2023-06-01",fileName:"2023-react-优化hook按需render",brief:" <code>收集使用的字段，当依赖的字段更新时，才通过forceUpdate强制render</code> \0 Object.defineProperties代理字段，用于收集依赖 ...",year:"2023",url:"/posts/2023-react-优化hook按需render"},{title:"判断泛型参数是否是any",class:"ts",date:"2023-06-01",fileName:"2023-ts-判断泛型参数是否是any",brief:"泛型参数使用' [ ] '包裹住，那么当泛型参数T是any时，满足extends，此时 type B = number <code>假如是如下定义</code>  <code>那么当泛型参数T是any时，此时</code> ...",year:"2023",url:"/posts/2023-ts-判断泛型参数是否是any"}],2024:[{title:"vitepress主题开发--开发环境下动态导入UMD模块出现差异化报错",class:"vite",date:"2024-10-23",fileName:"2024-vite-vitepress开发环境下动态导入UMD模块出现差异化报错",brief:" 不同项目出现差异化本地测试项目1通过link链接本地包vitepress-pure-theme-zyco包中有如下逻辑在测试项目1中生产和开发环境皆正常。本地测试项目2通过install安装依赖，生...",year:"2024",url:"/posts/2024-vite-vitepress开发环境下动态导入UMD模块出现差异化报错"},{title:"vitepress主题开发--站点配置config.mts导入主题配置ts文件报错Unknown file extension",class:"vite",date:"2024-10-09",fileName:"2024-vite-vitepress站点配置导入主题配置ts文件报错",brief:" 发现问题最近开发vitepress-pure-theme-zyco主题时，主题侧的site-config文件是用ts写的，用户使用主题时，需要引入相应的配置文件。\0 主题包在package.json...",year:"2024",url:"/posts/2024-vite-vitepress站点配置导入主题配置ts文件报错"},{title:"vscode #include Qt header 报错",class:"c++",date:"2024-07-20",fileName:"2024-c++-vscode.include.Qt.header",brief:' <code>include QApplication</code>  <code>error: 无法打开源文件 "QApplication"</code> \0 error: 检测到 include 错误。请更新...',year:"2024",url:"/posts/2024-c++-vscode.include.Qt.header"}]},class:{android:[{title:"ContentProvider工作过程",class:"android",date:"2017-02-26",fileName:"2017-android-ContentProvider工作过程",brief:"ContentProvider所在进程启动时，ContentProvider的onCreate方法先于Application的onCreate方法执行 启动过程 从getContentResolver...",year:"2017",url:"/posts/2017-android-ContentProvider工作过程"}],js:[{title:"element-ui自定义上传图片",class:"js",date:"2019-05-28",fileName:"2019-js-ui自定义上传图片",brief:" <code>利用el-upload的http-request属性实现自定义上传逻辑，下面的上传是把图片转换成字节数组</code> ...",year:"2019",url:"/posts/2019-js-ui自定义上传图片"},{title:"原型链",class:"js",date:"2019-04-13",fileName:"2019-js-原型链",brief:"Function.prototype也是唯一一个typeof XXX.prototype为 function的prototype。其它的构造器的prototype都是一个对象 疑点解惑\0 Object...",year:"2019",url:"/posts/2019-js-原型链"}],kotlin:[{title:"协程",class:"kotlin",date:"2019-02-19",fileName:"2019-kotlin-协程",brief:" 协程的作用提升CPU利用率，当I/O操作阻塞协程时，会让出CPU，将CPU交由其他协程占用，当I/O任务结束时，返回挂起的协程继续执行；减少线程切换的资源消耗；可控制，轻量，将异步写法同步化 协程的...",year:"2019",url:"/posts/2019-kotlin-协程"}],react:[{title:"优化hook-按需（依赖字段）render",class:"react",date:"2023-06-01",fileName:"2023-react-优化hook按需render",brief:" <code>收集使用的字段，当依赖的字段更新时，才通过forceUpdate强制render</code> \0 Object.defineProperties代理字段，用于收集依赖 ...",year:"2023",url:"/posts/2023-react-优化hook按需render"},{title:"umi中引入babel-plugin-react-css-modules简化css模块化",class:"react",date:"2020-11-29",fileName:"2020-react-umi中简化css模块化",brief:` <code>环境</code> umi + dva + react + ts <code>问题</code> 1. 在ts中使用styleName出现 "property 'styleName' does not ...`,year:"2020",url:"/posts/2020-react-umi中简化css模块化"}],小程序:[{title:"使用echarts绘制某个省份地图时，地图上总是会出现“海南诸岛”，导致省份地图不是位于正中间",class:"小程序",date:"2020-02-05",fileName:"2020-小程序-使用echarts绘制某个省份地图时",brief:" <code>解决方式</code> series中的mapType和echarts.registerMap( ) 函数第一个参数不要设置成“china”，否则会自动添加“海南诸岛”到地图中 <code>解决后</code> ...",year:"2020",url:"/posts/2020-小程序-使用echarts绘制某个省份地图时"}],vue:[{title:"vue2源码阅读2--响应式原理",class:"vue",date:"2021-11-09",fileName:"2021-vue-vue2源码阅读2响应式原理",brief:"",year:"2021",url:"/posts/2021-vue-vue2源码阅读2响应式原理"},{title:"vue2源码阅读1--从打包命令到入口文件",class:"vue",date:"2021-10-27",fileName:"2021-vue-vue2源码阅读1从打包命令到入口文件",brief:"通过require('./config').getAllBuilds() 得到rollup打包配置，每个配置的input 字段对应config.js中builds对象里，每个成员对象的entry 字段...",year:"2021",url:"/posts/2021-vue-vue2源码阅读1从打包命令到入口文件"}],css:[{title:'多行文本省略号，且末尾包含"展开或更多"',class:"css",date:"2022-05-23",fileName:"2022-css-多行文本省略号",brief:"实现关键点 1 父元素-webkit-box保证内部文字多行省略 2 div中的文字环绕float元素 3 clear:both 4 line-height相关的设置与计算...",year:"2022",url:"/posts/2022-css-多行文本省略号"}],"node.js":[{title:"web3项目npm安装依赖ethereumjs-abi失败",class:"node.js",date:"2022-05-27",fileName:"2022-node.js-web3项目npm安装依赖ethereumjsabi失败",brief:' <code>连接钱包的npm库</code> @walletconnect/web3-provider 依赖了 ethereumjs-abi，而依赖方式是 "e...',year:"2022",url:"/posts/2022-node.js-web3项目npm安装依赖ethereumjsabi失败"}],ts:[{title:"判断泛型参数是否是any",class:"ts",date:"2023-06-01",fileName:"2023-ts-判断泛型参数是否是any",brief:"泛型参数使用' [ ] '包裹住，那么当泛型参数T是any时，满足extends，此时 type B = number <code>假如是如下定义</code>  <code>那么当泛型参数T是any时，此时</code> ...",year:"2023",url:"/posts/2023-ts-判断泛型参数是否是any"}],"c++":[{title:"vscode #include Qt header 报错",class:"c++",date:"2024-07-20",fileName:"2024-c++-vscode.include.Qt.header",brief:' <code>include QApplication</code>  <code>error: 无法打开源文件 "QApplication"</code> \0 error: 检测到 include 错误。请更新...',year:"2024",url:"/posts/2024-c++-vscode.include.Qt.header"}],vite:[{title:"vitepress主题开发--开发环境下动态导入UMD模块出现差异化报错",class:"vite",date:"2024-10-23",fileName:"2024-vite-vitepress开发环境下动态导入UMD模块出现差异化报错",brief:" 不同项目出现差异化本地测试项目1通过link链接本地包vitepress-pure-theme-zyco包中有如下逻辑在测试项目1中生产和开发环境皆正常。本地测试项目2通过install安装依赖，生...",year:"2024",url:"/posts/2024-vite-vitepress开发环境下动态导入UMD模块出现差异化报错"},{title:"vitepress主题开发--站点配置config.mts导入主题配置ts文件报错Unknown file extension",class:"vite",date:"2024-10-09",fileName:"2024-vite-vitepress站点配置导入主题配置ts文件报错",brief:" 发现问题最近开发vitepress-pure-theme-zyco主题时，主题侧的site-config文件是用ts写的，用户使用主题时，需要引入相应的配置文件。\0 主题包在package.json...",year:"2024",url:"/posts/2024-vite-vitepress站点配置导入主题配置ts文件报错"}]},dateTags:["2024","2023","2022","2021","2020","2019","2017"],classTags:["android","js","kotlin","react","小程序","vue","css","node.js","ts","c++","vite"]}}),H=()=>{const s=E();return e=>s.path===e},oe=()=>{const s=E(),{theme:e}=M();return{matchPostPath:()=>s.path.startsWith(e.value.postDir??"/posts/")}},ae=(s,e=1)=>{const a=document.createRange();a.setStart(s,0),a.setEnd(s,s.childNodes.length);const i=Math.floor(a.getBoundingClientRect().width),c=Math.floor(a.getBoundingClientRect().height),d=Math.ceil(s.clientWidth*e),t=Math.ceil(s.clientHeight*e),{paddingLeft:n,paddingRight:l,paddingTop:v,paddingBottom:y}=getComputedStyle(s);return d<i+parseInt(n,10)+parseInt(l,10)||t<c+parseInt(v,10)+parseInt(y,10)},ne={class:"nav"},re=["onClick"],ie=k({name:"Nav"}),le=k({...ie,props:{nav:{}},setup(s){const e=s,a=I(),i=H(),c=_(()=>e.nav),d=({path:t})=>{a.go(t)};return(t,n)=>(r(),p("dl",ne,[(r(!0),p(h,null,N(c.value,l=>(r(),p("dd",{class:T({menu:!0,active:f(i)(l.path)}),onClick:v=>d(l),key:l.name},m(l.name),11,re))),128))]))}}),ce=j(le,[["__scopeId","data-v-dd6a5f2b"]]),de={class:"header-container"},ue={class:"profile"},pe=["src"],ve={class:"info"},me={class:"name"},fe={class:"brief"},he=k({name:"Header"}),_e=k({...he,props:{nav:{}},setup(s){const e=s,a=I(),i=D(w),c=_(()=>i.name),d=_(()=>i.brief),t=_(()=>e.nav),n=x(!1),l=()=>{n.value=!0},v=()=>{n.value=!1},y=()=>{a.go("/")};return(b,u)=>(r(),p("header",de,[o("div",ue,[o("img",{class:T({rotate:n.value}),src:f(K)(f(i).avatar),onMouseenter:l,onMouseleave:v,onClick:y},null,42,pe),o("div",ve,[o("div",me,m(c.value),1),o("div",fe,m(d.value),1)])]),o("div",null,[U(ce,{nav:t.value},null,8,["nav"])])]))}}),ye=j(_e,[["__scopeId","data-v-e9d35454"]]),be={"01":"Jan","02":"Feb","03":"Mar","04":"Apr","05":"May","06":"Jun","07":"Jul","08":"Aug","09":"Sep",10:"Oct",11:"Nov",12:"Dec"},V=()=>{const s=/^\d{4}/gi,e=/[/\-.](\d{1,2})[/\-.]/gi,a=/\d{1,2}$/gi,i=(c,d)=>{s.lastIndex=0,e.lastIndex=0,a.lastIndex=0;let t="",n=e.exec(d)??["01","01"];return t+=be[(n[1]??"01").padStart(2,"0")],n=a.exec(d)??["01"],t+=` ${n[0].padStart(2,"0")}`,c&&(n=s.exec(d)??["2000"],t+=`, ${n[0]}`),t};return{formatPostDate:i.bind(null,!0),formatPostDateWithoutYear:i.bind(null,!1)}},F=()=>{const s=I();return{goToArticle:e=>{s.go(e)}}},ge=()=>{S(()=>{const{theme:s}=M();Y(async()=>{const{default:e}=await import("./Valine.min.D2P8ZDAp.js").then(a=>a.V);return{default:e}},[]).then(({default:e})=>{var a,i,c,d,t;if((a=s.value)!=null&&a.valine)return!((c=(i=s.value)==null?void 0:i.valine)!=null&&c.appId)||!((t=(d=s.value)==null?void 0:d.valine)!=null&&t.appKey)?(console.error("请配置valine的appId和appKey"),null):new e({appId:s.value.valine.appId,appKey:s.value.valine.appKey,visitor:!0})})})},Ce={class:"content"},ke={class:"post"},Ne={class:"title"},je=["onClick"],Pe=["innerHTML"],$e=k({__name:"HomeContent",setup(s){const{posts:e}=O(),a=I(),i=_(()=>e.all.slice(0,7)),{formatPostDate:c}=V(),{goToArticle:d}=F(),{footer:t=se}=D(w),n=_(()=>t.default?t.text(e.all.length):t.text),l=()=>{a.go(`/${t.route}`)};return(v,y)=>(r(),p("div",Ce,[y[1]||(y[1]=o("h1",{class:"main-title"},"Recent Articles",-1)),(r(!0),p(h,null,N(i.value,(b,u)=>(r(),p(h,{key:u},[o("article",ke,[o("h2",Ne,[o("div",{onClick:C=>f(d)(b.url)},m(b.title),9,je)]),o("time",null,m(f(c)(b.date)),1),o("div",{class:"brief","home-content":"",innerHTML:b.brief},null,8,Pe)]),y[0]||(y[0]=o("hr",null,null,-1))],64))),128)),o("footer",{onClick:l},m(n.value),1)]))}}),xe=j($e,[["__scopeId","data-v-8d70cf45"]]),we="data:image/svg+xml,%3csvg%20t='1729152814934'%20class='icon'%20viewBox='0%200%201024%201024'%20version='1.1'%20xmlns='http://www.w3.org/2000/svg'%20p-id='9860'%20width='16'%20height='16'%3e%3cpath%20d='M512%20923.136c-372.352%200-512-418.901333-512-418.901333S139.648%2085.333333%20512%2085.333333s512%20418.901333%20512%20418.901334-139.648%20418.986667-512%20418.901333z%20m0-85.333333c296.533333%200.042667%20407.722667-333.568%20407.722667-333.568S808.490667%20170.666667%20512%20170.666667c-296.533333%200-407.722667%20333.568-407.722667%20333.568S215.509333%20837.802667%20512%20837.802667z%20m75.392-570.538667a128%20128%200%201%200%20169.344%20169.386667%20256%20256%200%201%201-169.344-169.344z'%20fill='%23616e7c'%20p-id='9861'%3e%3c/path%3e%3c/svg%3e",Te={class:"post-title"},Ae=["datetime"],Me=["id"],Ie=k({__name:"PostContent",setup(s){const{page:e}=M();console.log("page",e);const{formatPostDate:a}=V(),i=D(w);ge();const c=_(()=>decodeURI(window.location.pathname));return(d,t)=>{var v;const n=Q("ClientOnly"),l=Q("Content");return r(),p(h,null,[o("header",Te,[o("h1",null,m(f(e).title),1),o("time",{datetime:f(e).frontmatter.date},m(f(a)(f(e).frontmatter.date)),9,Ae),(v=f(i))!=null&&v.valine?(r(),$(n,{key:0},{default:X(()=>[t[1]||(t[1]=o("img",{class:"reading-icon",src:we},null,-1)),o("span",{id:c.value,class:"leancloud_visitors"},t[0]||(t[0]=[o("span",{class:"leancloud-visitors-count"},"-",-1)]),8,Me)]),_:1})):A("",!0)]),U(l,{class:"pure-doc"})],64)}}}),Ue=j(Ie,[["__scopeId","data-v-e511b4a1"]]),De=k({__name:"index",props:{modelValue:{type:Boolean,default:!1},offsetY:{default:0},offsetX:{default:0},content:{}},setup(s){const e=Z(),a=s,i={position:"fixed"},c=x({...i});J(()=>a.modelValue,()=>{a.modelValue?d():t()});const d=()=>{const n=(e==null?void 0:e.vnode.el).nextElementSibling;if(n){const{top:l,left:v,height:y}=n.getBoundingClientRect();c.value.top=`${l-y+a.offsetY}px`,c.value.left=`${v+a.offsetX}px`}},t=()=>{c.value={...i}};return(n,l)=>(r(),p(h,null,[G(n.$slots,"default",{},void 0),(r(),$(z,{to:"body"},[n.modelValue?(r(),p("div",{key:0,class:"popover",style:R(c.value)},m(a.content),5)):A("",!0)]))],64))}}),Be=j(De,[["__scopeId","data-v-174b74f1"]]),Re={class:"post-class-container"},Oe=["onClick","onMouseenter","onMouseleave"],Ve=k({__name:"index",props:{tag:{}},emits:["update:tag"],setup(s,{emit:e}){const a=s,i=e,{posts:c}=O(),d=_(()=>c.classTags),t=_(()=>u=>a.tag===u),n=Object.create(null);d.value.map(u=>n[u]=!1);const l=ee(n),v=u=>{i("update:tag",u)},y=(u,C)=>{ae(u.target,1.2)&&(l[C]=!0)},b=u=>{l[u]=!1};return(u,C)=>(r(),$(z,{to:"body"},[o("aside",Re,[o("div",{class:T({tag:!0,active:t.value("date"),inactive:!t.value("date")}),onClick:C[0]||(C[0]=g=>v("date"))}," 全部 ",2),(r(!0),p(h,null,N(d.value,g=>(r(),$(Be,{modelValue:l[g],"onUpdate:modelValue":P=>l[g]=P,content:g,key:g},{default:X(()=>[o("div",{class:T({tag:!0,active:t.value(g),inactive:!t.value(g)}),onClick:P=>v(g),onMouseenter:P=>y(P,g),onMouseleave:P=>b(g)},m(g),43,Oe)]),_:2},1032,["modelValue","onUpdate:modelValue","content"]))),128))])]))}}),Qe=j(Ve,[["__scopeId","data-v-b6924f5e"]]),Le={class:"content"},Ee={class:"year"},Se=["onClick"],Xe=["datetime"],ze=["onClick"],He=["datetime"],Fe=k({__name:"ArticlesContent",setup(s){const{posts:e}=O(),{goToArticle:a}=F(),{formatPostDateWithoutYear:i,formatPostDate:c}=V();console.log("ArticlesContent ",e);const d=_(()=>e.class),t=_(()=>e.date),n=_(()=>e.dateTags),l=_(()=>v.value==="date"),v=x("date");return(y,b)=>(r(),p(h,null,[o("div",Le,[o("h1",{class:"main-title",style:R({marginBottom:l.value?"0px":"40px"})}," Articles ",4),l.value?(r(!0),p(h,{key:0},N(n.value,u=>(r(),p(h,{key:u},[o("h2",Ee,m(u),1),(r(!0),p(h,null,N(t.value[u],(C,g)=>(r(),p("article",{class:"article",key:g},[o("div",{class:"title",onClick:P=>f(a)(C.url)},m(C.title),9,Se),b[1]||(b[1]=o("div",{class:"divider"},null,-1)),o("time",{datetime:C.date},m(f(i)(C.date)),9,Xe)]))),128))],64))),128)):(r(!0),p(h,{key:1},N(d.value[v.value],(u,C)=>(r(),p("article",{class:"article",key:C},[o("div",{class:"title",onClick:g=>f(a)(u.url)},m(u.title),9,ze),b[2]||(b[2]=o("div",{class:"divider"},null,-1)),o("time",{datetime:u.date},m(f(c)(u.date)),9,He)]))),128))]),U(Qe,{tag:v.value,"onUpdate:tag":b[0]||(b[0]=u=>v.value=u)},null,8,["tag"])],64))}}),qe=j(Fe,[["__scopeId","data-v-6f38402b"]]),We={class:"content"},Ke={class:"brief"},Ye={class:"links"},Je=["onClick"],Ge=["src"],Ze={class:"desc"},et=k({__name:"AboutContent",setup(s){S(()=>{setTimeout(()=>{c.value=!0},500)});const{about:e}=D(w),a=_(()=>e.brief),i=_(()=>e.links??[]),c=x(!1),d=t=>{t&&window.open(t,"_blank")};return(t,n)=>(r(),p("div",We,[n[0]||(n[0]=o("h1",null,"About",-1)),o("p",Ke,m(a.value),1),o("ul",Ye,[(r(!0),p(h,null,N(i.value,(l,v)=>(r(),p("li",{onClick:y=>d(l.url),style:R({cursor:l.url?"pointer":"default",transform:c.value?"translateX(0px)":`translateX(${v*700+700}px)`}),key:v},[o("img",{src:l.icon,alt:"icon"},null,8,Ge),o("div",Ze,m(l.description),1)],12,Je))),128))])]))}}),tt=j(et,[["__scopeId","data-v-a33d2c6a"]]),st=k({__name:"index",setup(s){const e=x([{name:"Home",path:"/",component:B(xe)},{name:"Articles",path:"/articles",component:B(qe)},{name:"About",path:"/about",component:B(tt)}]),a=H(),{matchPostPath:i}=oe();return(c,d)=>(r(),p(h,null,[U(ye,{nav:e.value},null,8,["nav"]),(r(!0),p(h,null,N(e.value,t=>(r(),p(h,{key:t.name},[f(a)(t.path)?(r(),$(L(t.component),{key:0})):A("",!0)],64))),128)),f(i)()?(r(),$(L(Ue),{key:0})):A("",!0)],64))}}),at={Layout:te(st)};export{at as p};
