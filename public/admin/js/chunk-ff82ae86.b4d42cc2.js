(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-ff82ae86"],{"4c90":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-aside",{attrs:{width:"200px"}},[n("el-menu",t._l(t.routeData,function(e){return n("el-submenu",{key:e.name,attrs:{index:e.name},scopedSlots:t._u([{key:"title",fn:function(){return[n("i",{class:e.meta.icon}),n("span",[t._v(t._s(e.meta.title))])]},proxy:!0}],null,!0)},t._l(e.children,function(e){return n("el-menu-item",{key:e.name,attrs:{index:e.name}},[n("router-link",{attrs:{to:{name:e.name}}},[t._v(t._s(e.meta.title))])],1)}),1)}),1)],1),n("el-main",[n("el-header",[n("el-menu",{staticStyle:{float:"right"},attrs:{mode:"horizontal"}},[n("el-menu-item",{attrs:{index:"logout"},on:{click:t.logout}},[t._v("退出登录")])],1)],1),n("router-view")],1)],1)},o=[],i={name:"AdminMain",data:function(){return{routeData:[]}},methods:{logout:function(){sessionStorage.removeItem("login"),this.$router.push({name:"login"})}},mounted:function(){this.routeData=this.$store.state.routeData[0].children}},r=i,u=(n("b4aa"),n("2877")),l=Object(u["a"])(r,a,o,!1,null,"5ae09b5f",null);e["default"]=l.exports},"832c":function(t,e,n){},b4aa:function(t,e,n){"use strict";var a=n("832c"),o=n.n(a);o.a}}]);
//# sourceMappingURL=chunk-ff82ae86.b4d42cc2.js.map