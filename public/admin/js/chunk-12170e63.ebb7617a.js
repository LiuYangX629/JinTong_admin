(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12170e63"],{"02f4":function(e,t,a){var r=a("4588"),i=a("be13");e.exports=function(e){return function(t,a){var n,o,l=String(i(t)),c=r(a),s=l.length;return c<0||c>=s?e?"":void 0:(n=l.charCodeAt(c),n<55296||n>56319||c+1===s||(o=l.charCodeAt(c+1))<56320||o>57343?e?l.charAt(c):n:e?l.slice(c,c+2):o-56320+(n-55296<<10)+65536)}}},"0390":function(e,t,a){"use strict";var r=a("02f4")(!0);e.exports=function(e,t,a){return t+(a?r(e,t).length:1)}},"0bfb":function(e,t,a){"use strict";var r=a("cb7c");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},1895:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("basic-header",{attrs:{items:["商家管理","商品管理"]}}),a("el-tabs",{model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"审核通过",name:"audit"}},[a("el-form",{ref:"searchForm",attrs:{inline:!0,model:e.searchForm}},[a("el-row",[a("el-form-item",{attrs:{label:"商品名",prop:"name"}},[a("el-input",{model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),a("el-form-item",{attrs:{label:"价格区间"}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{type:"number"},model:{value:e.searchForm.price_low,callback:function(t){e.$set(e.searchForm,"price_low",e._n(t))},expression:"searchForm.price_low"}})],1),a("el-col",{attrs:{span:1}},[e._v("---")]),a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{type:"number"},model:{value:e.searchForm.price_high,callback:function(t){e.$set(e.searchForm,"price_high",e._n(t))},expression:"searchForm.price_high"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",circle:"",icon:"el-icon-search"},on:{click:e.handleSearch}}),a("el-button",{attrs:{type:"primary",circle:"",icon:"el-icon-refresh-left"},on:{click:e.handleReset}})],1)],1)],1),a("el-table",{attrs:{data:e.goodsData}},[a("el-table-column",{attrs:{label:"id",prop:"id"}}),a("el-table-column",{attrs:{label:"名称",prop:"name"}}),a("el-table-column",{attrs:{label:"分类",prop:"catname"}}),a("el-table-column",{attrs:{label:"所属店铺",prop:"shop"}}),a("el-table-column",{attrs:{label:"价格",prop:"price"}}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.edit(t.row.id)}}},[e._v("查看")])]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"30px"},attrs:{background:"",layout:"prev,pager,next","current-page":e.page,"page-size":e.pageSize,total:e.total},on:{"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"current-change":e.handleChange}})],1),a("el-tab-pane",{attrs:{label:"未审核/审核未通过",name:"unaudit"}},[a("el-form",{ref:"searchForm2",attrs:{inline:!0,model:e.searchForm2}},[a("el-row",[a("el-form-item",{attrs:{label:"商品名",prop:"name"}},[a("el-input",{model:{value:e.searchForm2.name,callback:function(t){e.$set(e.searchForm2,"name",t)},expression:"searchForm2.name"}})],1),a("el-form-item",{attrs:{label:"价格区间"}},[a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{type:"number"},model:{value:e.searchForm2.price_low,callback:function(t){e.$set(e.searchForm2,"price_low",e._n(t))},expression:"searchForm2.price_low"}})],1),a("el-col",{attrs:{span:1}},[e._v("---")]),a("el-col",{attrs:{span:8}},[a("el-input",{attrs:{type:"number"},model:{value:e.searchForm2.price_high,callback:function(t){e.$set(e.searchForm2,"price_high",e._n(t))},expression:"searchForm2.price_high"}})],1)],1),a("el-form-item",[a("el-button",{attrs:{type:"primary",circle:"",icon:"el-icon-search"},on:{click:e.handleSearch2}}),a("el-button",{attrs:{type:"primary",circle:"",icon:"el-icon-refresh-left"},on:{click:e.handleReset2}})],1)],1)],1),a("el-table",{attrs:{data:e.goodsData2}},[a("el-table-column",{attrs:{label:"id",prop:"id"}}),a("el-table-column",{attrs:{label:"名称",prop:"name"}}),a("el-table-column",{attrs:{label:"分类",prop:"catname"}}),a("el-table-column",{attrs:{label:"所属店铺",prop:"shop"}}),a("el-table-column",{attrs:{label:"价格",prop:"price"}}),a("el-table-column",{attrs:{label:"审核状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.audit?a("span",[e._v("未审核")]):2===t.row.audit?a("span",[e._v("审核失败")]):e._e()]}}])}),a("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.edit(t.row.id)}}},[e._v("查看")]),a("el-button",{attrs:{type:"text"},on:{click:function(a){return e.audit(t.row.id)}}},[e._v("审核")])]}}])})],1),a("el-pagination",{staticStyle:{"margin-top":"30px"},attrs:{background:"",layout:"prev,pager,next","current-page":e.page2,"page-size":e.pageSize2},on:{"update:currentPage":function(t){e.page2=t},"update:current-page":function(t){e.page2=t},"update:pageSize":function(t){e.pageSize2=t},"update:page-size":function(t){e.pageSize2=t},"current-change":e.handleChange}})],1)],1),a("el-dialog",{attrs:{title:"商品编辑",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[a("el-form",{ref:"editForm",attrs:{"label-width":"100px",model:e.editForm}},[a("el-form-item",{attrs:{label:"名称",prop:"name"}},[a("el-input",{attrs:{readOnly:""},model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),a("el-form-item",{attrs:{label:"描述",prop:"description"}},[a("el-input",{attrs:{type:"textarea",readOnly:""},model:{value:e.editForm.description,callback:function(t){e.$set(e.editForm,"description",t)},expression:"editForm.description"}})],1),a("el-form-item",{attrs:{label:"价格",prop:"price"}},[a("el-input",{attrs:{type:"number",readOnly:""},model:{value:e.editForm.price,callback:function(t){e.$set(e.editForm,"price",t)},expression:"editForm.price"}})],1),a("el-form-item",{attrs:{label:"优惠价",prop:"benefit"}},[a("el-input",{attrs:{type:"number",readOnly:""},model:{value:e.editForm.benefit,callback:function(t){e.$set(e.editForm,"benefit",t)},expression:"editForm.benefit"}})],1),a("el-form-item",{attrs:{label:"缩略图",prop:"thumb"}},[e.editForm.thumb?a("img",{staticClass:"avatar",attrs:{src:e.editForm.thumb}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),a("el-form-item",{attrs:{label:"详情图片",prop:"content"}},[e.editForm.content?a("img",{staticClass:"avatar",attrs:{src:e.editForm.content}}):a("i",{staticClass:"el-icon-plus avatar-uploader-icon"})]),a("el-form-item",{attrs:{label:"多图片",prop:"pictures"}},[a("el-upload",{staticClass:"upload-demo",attrs:{"list-type":"picture","file-list":e.fileList,disabled:!0}},[a("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),a("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),a("el-form-item",{attrs:{label:"运费",prop:"fare"}},[a("el-input",{attrs:{type:"number",readOnly:""},model:{value:e.editForm.fare,callback:function(t){e.$set(e.editForm,"fare",t)},expression:"editForm.fare"}})],1),a("el-form-item",{attrs:{label:"关键词",prop:"keywords"}},[a("el-input",{attrs:{readOnly:""},model:{value:e.editForm.keywords,callback:function(t){e.$set(e.editForm,"keywords",t)},expression:"editForm.keywords"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){e.dialogVisible=!1}}},[e._v("确定")])],1)],1)],1)},i=[],n=(a("28a5"),a("7f7f"),a("7973")),o={name:"GoodsManage",data:function(){return{activeName:"audit",total:0,page:1,page2:1,pageSize:5,pageSize2:5,goodsData:[],goodsData2:[],searchForm:{name:"",price_low:0,price_high:0},searchForm2:{name:"",price_low:0,price_high:0},dialogVisible:!1,editForm:{},fileList:[]}},methods:{fetchData1:function(){var e=this,t={page:this.page,pageSize:this.pageSize,audit:1};""!==this.searchForm.name&&(t.name=this.searchForm.name),this.searchForm.price_low>0&&(t.price_low=this.searchForm.price_low),this.searchForm.price_high>0&&(t.price_high=this.searchForm.price_high),this.$axios.get(this.$api.GOODS,t).then(function(t){200===t.data.code&&(e.goodsData=t.data.data,e.total=t.data.total)})},fetchData2:function(){var e=this,t={page:this.page2,pageSize:this.pageSize2,audit:0};""!==this.searchForm2.name&&(t.name=this.searchForm2.name),this.searchForm2.price_low>0&&(t.price_low=this.searchForm2.price_low),this.searchForm2.price_high>0&&(t.price_high=this.searchForm2.price_high),this.$axios.get(this.$api.GOODS,t).then(function(t){200===t.data.code&&(e.goodsData2=t.data.data,e.total2=t.data.total)})},handleChange:function(){this.fetchData1()},handleChange2:function(){this.fetchData2()},handleSearch:function(){this.page=1,this.fetchData1()},handleSearch2:function(){this.page2=1,this.fetchData2()},handleReset:function(){this.searchForm={name:"",price_low:0,price_high:0,state:!1,audit:!1,storage:!1}},handleReset2:function(){this.searchForm2={name:"",price_low:0,price_high:0,state:!1,audit:!1,storage:!1}},edit:function(e){var t=this;this.$axios.get(this.$api.GOODS,{id:e}).then(function(e){200===e.data.code&&(t.editForm=e.data.data,t.dialogVisible=!0,t.fileList=e.data.data.pictures.split(";").map(function(e,t){return{name:"图片"+(t+1),url:e,response:e}}))})},audit:function(e){var t=this;this.$confirm("修改当前商品的审核状态","提示",{confirmButtonText:"通过",cancelButtonText:"未通过",type:"warning"}).then(function(){t.$axios.put(t.$api.GOODS,{id:e,audit:1}).then(function(e){200===e.data.code&&(t.$message.success("操作成功"),t.fetchData1(),t.fetchData2())})}).catch(function(){t.$axios.put(t.$api.GOODS,{id:e,audit:2}).then(function(e){200===e.data.code&&(t.$message.success("操作成功"),t.fetchData1(),t.fetchData2())})})}},components:{"basic-header":n["a"]},mounted:function(){this.fetchData1(),this.fetchData2()}},l=o,c=(a("2ad1"),a("2877")),s=Object(c["a"])(l,r,i,!1,null,"2d3f9483",null);t["default"]=s.exports},"214f":function(e,t,a){"use strict";a("b0c5");var r=a("2aba"),i=a("32e9"),n=a("79e5"),o=a("be13"),l=a("2b4c"),c=a("520a"),s=l("species"),u=!n(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),p=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2===a.length&&"a"===a[0]&&"b"===a[1]}();e.exports=function(e,t,a){var d=l(e),m=!n(function(){var t={};return t[d]=function(){return 7},7!=""[e](t)}),h=m?!n(function(){var t=!1,a=/a/;return a.exec=function(){return t=!0,null},"split"===e&&(a.constructor={},a.constructor[s]=function(){return a}),a[d](""),!t}):void 0;if(!m||!h||"replace"===e&&!u||"split"===e&&!p){var f=/./[d],g=a(o,d,""[e],function(e,t,a,r,i){return t.exec===c?m&&!i?{done:!0,value:f.call(t,a,r)}:{done:!0,value:e.call(a,t,r)}:{done:!1}}),b=g[0],v=g[1];r(String.prototype,e,b),i(RegExp.prototype,d,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}}},"28a5":function(e,t,a){"use strict";var r=a("aae3"),i=a("cb7c"),n=a("ebd6"),o=a("0390"),l=a("9def"),c=a("5f1b"),s=a("520a"),u=a("79e5"),p=Math.min,d=[].push,m="split",h="length",f="lastIndex",g=4294967295,b=!u(function(){RegExp(g,"y")});a("214f")("split",2,function(e,t,a,u){var v;return v="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[h]||2!="ab"[m](/(?:ab)*/)[h]||4!="."[m](/(.?)(.?)/)[h]||"."[m](/()()/)[h]>1||""[m](/.?/)[h]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!r(e))return a.call(i,e,t);var n,o,l,c=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),p=0,m=void 0===t?g:t>>>0,b=new RegExp(e.source,u+"g");while(n=s.call(b,i)){if(o=b[f],o>p&&(c.push(i.slice(p,n.index)),n[h]>1&&n.index<i[h]&&d.apply(c,n.slice(1)),l=n[0][h],p=o,c[h]>=m))break;b[f]===n.index&&b[f]++}return p===i[h]?!l&&b.test("")||c.push(""):c.push(i.slice(p)),c[h]>m?c.slice(0,m):c}:"0"[m](void 0,0)[h]?function(e,t){return void 0===e&&0===t?[]:a.call(this,e,t)}:a,[function(a,r){var i=e(this),n=void 0==a?void 0:a[t];return void 0!==n?n.call(a,i,r):v.call(String(i),a,r)},function(e,t){var r=u(v,e,this,t,v!==a);if(r.done)return r.value;var s=i(e),d=String(this),m=n(s,RegExp),h=s.unicode,f=(s.ignoreCase?"i":"")+(s.multiline?"m":"")+(s.unicode?"u":"")+(b?"y":"g"),x=new m(b?s:"^(?:"+s.source+")",f),F=void 0===t?g:t>>>0;if(0===F)return[];if(0===d.length)return null===c(x,d)?[d]:[];var y=0,_=0,w=[];while(_<d.length){x.lastIndex=b?_:0;var k,S=c(x,b?d:d.slice(_));if(null===S||(k=p(l(x.lastIndex+(b?0:_)),d.length))===y)_=o(d,_,h);else{if(w.push(d.slice(y,_)),w.length===F)return w;for(var $=1;$<=S.length-1;$++)if(w.push(S[$]),w.length===F)return w;_=y=k}}return w.push(d.slice(y)),w}]})},"2ad1":function(e,t,a){"use strict";var r=a("9777"),i=a.n(r);i.a},"520a":function(e,t,a){"use strict";var r=a("0bfb"),i=RegExp.prototype.exec,n=String.prototype.replace,o=i,l="lastIndex",c=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e[l]||0!==t[l]}(),s=void 0!==/()??/.exec("")[1],u=c||s;u&&(o=function(e){var t,a,o,u,p=this;return s&&(a=new RegExp("^"+p.source+"$(?!\\s)",r.call(p))),c&&(t=p[l]),o=i.call(p,e),c&&o&&(p[l]=p.global?o.index+o[0].length:t),s&&o&&o.length>1&&n.call(o[0],a,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(o[u]=void 0)}),o}),e.exports=o},"5f1b":function(e,t,a){"use strict";var r=a("23c6"),i=RegExp.prototype.exec;e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var n=a.call(e,t);if("object"!==typeof n)throw new TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==r(e))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},7973:function(e,t,a){"use strict";var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("el-row",[a("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.items,function(t,r){return a("el-breadcrumb-item",{key:r},[e._v(e._s(t))])}),1),a("el-divider")],1)},i=[],n={name:"BasicHeader",data:function(){return{}},props:{items:{type:Array,required:!0}},methods:{},mounted:function(){}},o=n,l=a("2877"),c=Object(l["a"])(o,r,i,!1,null,"39925274",null);t["a"]=c.exports},9777:function(e,t,a){},aae3:function(e,t,a){var r=a("d3f4"),i=a("2d95"),n=a("2b4c")("match");e.exports=function(e){var t;return r(e)&&(void 0!==(t=e[n])?!!t:"RegExp"==i(e))}},b0c5:function(e,t,a){"use strict";var r=a("520a");a("5ca1")({target:"RegExp",proto:!0,forced:r!==/./.exec},{exec:r})}}]);
//# sourceMappingURL=chunk-12170e63.ebb7617a.js.map