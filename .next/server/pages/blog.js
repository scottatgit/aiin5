"use strict";(()=>{var e={};e.id=195,e.ids=[195,660],e.modules={1323:(e,t)=>{Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},5547:(e,t,r)=>{r.r(t),r.d(t,{config:()=>A,default:()=>h,getServerSideProps:()=>y,getStaticPaths:()=>x,getStaticProps:()=>j,reportWebVitals:()=>E,routeModule:()=>M,unstable_getServerProps:()=>w,unstable_getServerSideProps:()=>I,unstable_getStaticParams:()=>q,unstable_getStaticPaths:()=>O,unstable_getStaticProps:()=>G});var n={};r.r(n),r.d(n,{default:()=>m,getStaticProps:()=>v});var a=r(7093),l=r(5244),s=r(1323),i=r(2899),o=r.n(i),u=r(6958),d=r.n(u),p=r(997);let c=require("fs");var P=r.n(c),f=r(1017),g=r.n(f);let S=require("gray-matter");var b=r.n(S);let _=g().join(process.cwd(),"posts");function m({allPostsData:e}){return(0,p.jsxs)("div",{children:[p.jsx("h1",{children:"Blog"}),p.jsx("ul",{children:e.map(({id:e,date:t,title:r})=>(0,p.jsxs)("li",{children:[p.jsx("h2",{children:r}),p.jsx("small",{children:t})]},e))})]})}async function v(){return{props:{allPostsData:P().readdirSync(_).map(e=>{let t=e.replace(/\.md$/,""),r=g().join(_,e),n=P().readFileSync(r,"utf8");return{id:t,...b()(n).data}}).sort((e,t)=>new Date(t.date)-new Date(e.date))}}}let h=(0,s.l)(n,"default"),j=(0,s.l)(n,"getStaticProps"),x=(0,s.l)(n,"getStaticPaths"),y=(0,s.l)(n,"getServerSideProps"),A=(0,s.l)(n,"config"),E=(0,s.l)(n,"reportWebVitals"),G=(0,s.l)(n,"unstable_getStaticProps"),O=(0,s.l)(n,"unstable_getStaticPaths"),q=(0,s.l)(n,"unstable_getStaticParams"),w=(0,s.l)(n,"unstable_getServerProps"),I=(0,s.l)(n,"unstable_getServerSideProps"),M=new a.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/blog",pathname:"/blog",bundlePath:"",filename:""},components:{App:d(),Document:o()},userland:n})},6958:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return o}});let n=r(167),a=r(997),l=n._(r(6689)),s=r(7201);async function i(e){let{Component:t,ctx:r}=e;return{pageProps:await (0,s.loadGetInitialProps)(t,r)}}class o extends l.default.Component{render(){let{Component:e,pageProps:t}=this.props;return(0,a.jsx)(e,{...t})}}o.origGetInitialProps=i,o.getInitialProps=i,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},5244:(e,t)=>{var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},2785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{e.exports=require("react")},997:e=>{e.exports=require("react/jsx-runtime")},1017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[899],()=>r(5547));module.exports=n})();