(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-f6edfe34"],{"02f4":function(e,t,r){var a=r("4588"),i=r("be13");e.exports=function(e){return function(t,r){var o,s,n=String(i(t)),l=a(r),c=n.length;return l<0||l>=c?e?"":void 0:(o=n.charCodeAt(l),o<55296||o>56319||l+1===c||(s=n.charCodeAt(l+1))<56320||s>57343?e?n.charAt(l):o:e?n.slice(l,l+2):s-56320+(o-55296<<10)+65536)}}},"0390":function(e,t,r){"use strict";var a=r("02f4")(!0);e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},"0a49":function(e,t,r){var a=r("9b43"),i=r("626a"),o=r("4bf8"),s=r("9def"),n=r("cd1c");e.exports=function(e,t){var r=1==e,l=2==e,c=3==e,u=4==e,d=6==e,p=5==e||d,m=t||n;return function(t,n,f){for(var h,g,b=o(t),v=i(b),F=a(n,f,3),y=s(v.length),x=0,_=r?m(t,y):l?m(t,0):void 0;y>x;x++)if((p||x in v)&&(h=v[x],g=F(h,x,b),e))if(r)_[x]=g;else if(g)switch(e){case 3:return!0;case 5:return h;case 6:return x;case 2:_.push(h)}else if(u)return!1;return d?-1:c||u?u:_}}},"0bfb":function(e,t,r){"use strict";var a=r("cb7c");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},1169:function(e,t,r){var a=r("2d95");e.exports=Array.isArray||function(e){return"Array"==a(e)}},"11e9":function(e,t,r){var a=r("52a7"),i=r("4630"),o=r("6821"),s=r("6a99"),n=r("69a8"),l=r("c69a"),c=Object.getOwnPropertyDescriptor;t.f=r("9e1e")?c:function(e,t){if(e=o(e),t=s(t,!0),l)try{return c(e,t)}catch(r){}if(n(e,t))return i(!a.f.call(e,t),e[t])}},"15ed":function(e,t,r){},"214f":function(e,t,r){"use strict";r("b0c5");var a=r("2aba"),i=r("32e9"),o=r("79e5"),s=r("be13"),n=r("2b4c"),l=r("520a"),c=n("species"),u=!o(function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}),d=function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2===r.length&&"a"===r[0]&&"b"===r[1]}();e.exports=function(e,t,r){var p=n(e),m=!o(function(){var t={};return t[p]=function(){return 7},7!=""[e](t)}),f=m?!o(function(){var t=!1,r=/a/;return r.exec=function(){return t=!0,null},"split"===e&&(r.constructor={},r.constructor[c]=function(){return r}),r[p](""),!t}):void 0;if(!m||!f||"replace"===e&&!u||"split"===e&&!d){var h=/./[p],g=r(s,p,""[e],function(e,t,r,a,i){return t.exec===l?m&&!i?{done:!0,value:h.call(t,r,a)}:{done:!0,value:e.call(r,t,a)}:{done:!1}}),b=g[0],v=g[1];a(String.prototype,e,b),i(RegExp.prototype,p,2==t?function(e,t){return v.call(e,this,t)}:function(e){return v.call(e,this)})}}},"22e2":function(e,t,r){"use strict";var a=r("15ed"),i=r.n(a);i.a},"28a5":function(e,t,r){"use strict";var a=r("aae3"),i=r("cb7c"),o=r("ebd6"),s=r("0390"),n=r("9def"),l=r("5f1b"),c=r("520a"),u=r("79e5"),d=Math.min,p=[].push,m="split",f="length",h="lastIndex",g=4294967295,b=!u(function(){RegExp(g,"y")});r("214f")("split",2,function(e,t,r,u){var v;return v="c"=="abbc"[m](/(b)*/)[1]||4!="test"[m](/(?:)/,-1)[f]||2!="ab"[m](/(?:ab)*/)[f]||4!="."[m](/(.?)(.?)/)[f]||"."[m](/()()/)[f]>1||""[m](/.?/)[f]?function(e,t){var i=String(this);if(void 0===e&&0===t)return[];if(!a(e))return r.call(i,e,t);var o,s,n,l=[],u=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),d=0,m=void 0===t?g:t>>>0,b=new RegExp(e.source,u+"g");while(o=c.call(b,i)){if(s=b[h],s>d&&(l.push(i.slice(d,o.index)),o[f]>1&&o.index<i[f]&&p.apply(l,o.slice(1)),n=o[0][f],d=s,l[f]>=m))break;b[h]===o.index&&b[h]++}return d===i[f]?!n&&b.test("")||l.push(""):l.push(i.slice(d)),l[f]>m?l.slice(0,m):l}:"0"[m](void 0,0)[f]?function(e,t){return void 0===e&&0===t?[]:r.call(this,e,t)}:r,[function(r,a){var i=e(this),o=void 0==r?void 0:r[t];return void 0!==o?o.call(r,i,a):v.call(String(i),r,a)},function(e,t){var a=u(v,e,this,t,v!==r);if(a.done)return a.value;var c=i(e),p=String(this),m=o(c,RegExp),f=c.unicode,h=(c.ignoreCase?"i":"")+(c.multiline?"m":"")+(c.unicode?"u":"")+(b?"y":"g"),F=new m(b?c:"^(?:"+c.source+")",h),y=void 0===t?g:t>>>0;if(0===y)return[];if(0===p.length)return null===l(F,p)?[p]:[];var x=0,_=0,w=[];while(_<p.length){F.lastIndex=b?_:0;var k,$=l(F,b?p:p.slice(_));if(null===$||(k=d(n(F.lastIndex+(b?0:_)),p.length))===x)_=s(p,_,f);else{if(w.push(p.slice(x,_)),w.length===y)return w;for(var S=1;S<=$.length-1;S++)if(w.push($[S]),w.length===y)return w;_=x=k}}return w.push(p.slice(x)),w}]})},"520a":function(e,t,r){"use strict";var a=r("0bfb"),i=RegExp.prototype.exec,o=String.prototype.replace,s=i,n="lastIndex",l=function(){var e=/a/,t=/b*/g;return i.call(e,"a"),i.call(t,"a"),0!==e[n]||0!==t[n]}(),c=void 0!==/()??/.exec("")[1],u=l||c;u&&(s=function(e){var t,r,s,u,d=this;return c&&(r=new RegExp("^"+d.source+"$(?!\\s)",a.call(d))),l&&(t=d[n]),s=i.call(d,e),l&&s&&(d[n]=d.global?s.index+s[0].length:t),c&&s&&s.length>1&&o.call(s[0],r,function(){for(u=1;u<arguments.length-2;u++)void 0===arguments[u]&&(s[u]=void 0)}),s}),e.exports=s},"5dbc":function(e,t,r){var a=r("d3f4"),i=r("8b97").set;e.exports=function(e,t,r){var o,s=t.constructor;return s!==r&&"function"==typeof s&&(o=s.prototype)!==r.prototype&&a(o)&&i&&i(e,o),e}},"5f1b":function(e,t,r){"use strict";var a=r("23c6"),i=RegExp.prototype.exec;e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var o=r.call(e,t);if("object"!==typeof o)throw new TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==a(e))throw new TypeError("RegExp#exec called on incompatible receiver");return i.call(e,t)}},6762:function(e,t,r){"use strict";var a=r("5ca1"),i=r("c366")(!0);a(a.P,"Array",{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")("includes")},7514:function(e,t,r){"use strict";var a=r("5ca1"),i=r("0a49")(5),o="find",s=!0;o in[]&&Array(1)[o](function(){s=!1}),a(a.P+a.F*s,"Array",{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),r("9c6c")(o)},7973:function(e,t,r){"use strict";var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",[r("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.items,function(t,a){return r("el-breadcrumb-item",{key:a},[e._v(e._s(t))])}),1),r("el-divider")],1)},i=[],o={name:"BasicHeader",data:function(){return{}},props:{items:{type:Array,required:!0}},methods:{},mounted:function(){}},s=o,n=r("2877"),l=Object(n["a"])(s,a,i,!1,null,"39925274",null);t["a"]=l.exports},"8b97":function(e,t,r){var a=r("d3f4"),i=r("cb7c"),o=function(e,t){if(i(e),!a(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,a){try{a=r("9b43")(Function.call,r("11e9").f(Object.prototype,"__proto__").set,2),a(e,[]),t=!(e instanceof Array)}catch(i){t=!0}return function(e,r){return o(e,r),t?e.__proto__=r:a(e,r),e}}({},!1):void 0),check:o}},9093:function(e,t,r){var a=r("ce10"),i=r("e11e").concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return a(e,i)}},a0fa:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("el-row",[r("basic-header",{attrs:{items:["水司管理","商品管理"]}}),r("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[r("el-tab-pane",{attrs:{label:"商品列表",name:"list"}},[r("el-form",{ref:"searchForm",attrs:{inline:!0,model:e.searchForm}},[r("el-row",[r("el-form-item",{attrs:{label:"商品名",prop:"name"}},[r("el-input",{model:{value:e.searchForm.name,callback:function(t){e.$set(e.searchForm,"name",t)},expression:"searchForm.name"}})],1),r("el-form-item",{attrs:{label:"价格区间"}},[r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{type:"number"},model:{value:e.searchForm.price_low,callback:function(t){e.$set(e.searchForm,"price_low",e._n(t))},expression:"searchForm.price_low"}})],1),r("el-col",{attrs:{span:1}},[e._v("---")]),r("el-col",{attrs:{span:8}},[r("el-input",{attrs:{type:"number"},model:{value:e.searchForm.price_high,callback:function(t){e.$set(e.searchForm,"price_high",e._n(t))},expression:"searchForm.price_high"}})],1)],1)],1),r("el-row",[r("el-form-item",{attrs:{label:"审核状态"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.searchForm.audit,callback:function(t){e.$set(e.searchForm,"audit",t)},expression:"searchForm.audit"}})],1),r("el-form-item",{attrs:{label:"上架状态"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.searchForm.state,callback:function(t){e.$set(e.searchForm,"state",t)},expression:"searchForm.state"}})],1),r("el-form-item",{attrs:{label:"库存状态"}},[r("el-switch",{attrs:{"active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:e.searchForm.storage,callback:function(t){e.$set(e.searchForm,"storage",t)},expression:"searchForm.storage"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",circle:"",icon:"el-icon-search"},on:{click:e.handleSearch}}),r("el-button",{attrs:{type:"primary",circle:"",icon:"el-icon-refresh-left"},on:{click:e.handleReset}})],1)],1)],1),r("el-table",{attrs:{data:e.goodsData}},[r("el-table-column",{attrs:{label:"id",prop:"id"}}),r("el-table-column",{attrs:{label:"名称",prop:"name"}}),r("el-table-column",{attrs:{label:"分类",prop:"catname"}}),r("el-table-column",{attrs:{label:"价格",prop:"price"}}),r("el-table-column",{attrs:{label:"审核状态",prop:"audit"},scopedSlots:e._u([{key:"default",fn:function(t){return[0===t.row.audit?r("span",[e._v("未审核")]):e._e(),1===t.row.audit?r("span",[e._v("审核通过")]):e._e(),2===t.row.audit?r("span",[e._v("未通过")]):e._e()]}}])}),r("el-table-column",{attrs:{label:"上架状态",prop:"state"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-switch",{attrs:{value:1===t.row.state,"active-color":"#13ce66","inactive-color":"#ff4949"},nativeOn:{click:function(r){return e.changeState(t.row.id,t.row.state)}}})]}}])}),r("el-table-column",{attrs:{label:"库存量",prop:"storage"}}),r("el-table-column",{attrs:{label:"库存状态"},scopedSlots:e._u([{key:"default",fn:function(t){return[t.row.storage<=t.row.storage_alert?r("span",[e._v("库存紧张")]):r("span",[e._v("正常")])]}}])}),r("el-table-column",{attrs:{label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.del(t.row.id)}}},[e._v("删除")]),r("el-button",{attrs:{type:"text"},on:{click:function(r){return e.edit(t.row.id)}}},[e._v("编辑")])]}}])})],1),r("el-pagination",{staticStyle:{"margin-top":"30px"},attrs:{background:"",layout:"prev,pager,next","current-page":e.page,"page-size":e.pageSize,total:e.total},on:{"update:currentPage":function(t){e.page=t},"update:current-page":function(t){e.page=t},"update:pageSize":function(t){e.pageSize=t},"update:page-size":function(t){e.pageSize=t},"current-change":e.handleChange}})],1),r("el-tab-pane",{attrs:{label:"商品发布",name:"add"}},[r("el-col",{attrs:{span:12}},[r("el-form",{ref:"addForm",attrs:{"label-width":"100px",model:e.addForm,rules:e.addRules}},[r("el-form-item",{attrs:{label:"分类",prop:"cid"}},[r("el-select",{attrs:{placeholder:"请选择"},model:{value:e.addForm.cid,callback:function(t){e.$set(e.addForm,"cid",t)},expression:"addForm.cid"}},e._l(e.categories,function(t){return r("el-option-group",{key:t.label,attrs:{label:t.label}},e._l(t.children,function(e){return r("el-option",{key:e.id,attrs:{label:e.label,value:e.id}})}),1)}),1)],1),r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{model:{value:e.addForm.name,callback:function(t){e.$set(e.addForm,"name",t)},expression:"addForm.name"}})],1),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.addForm.description,callback:function(t){e.$set(e.addForm,"description",t)},expression:"addForm.description"}})],1),r("el-form-item",{attrs:{label:"价格",prop:"price"}},[r("el-input",{attrs:{type:"number"},model:{value:e.addForm.price,callback:function(t){e.$set(e.addForm,"price",t)},expression:"addForm.price"}})],1),r("el-form-item",{attrs:{label:"优惠价",prop:"benefit"}},[r("el-input",{attrs:{type:"number"},model:{value:e.addForm.benefit,callback:function(t){e.$set(e.addForm,"benefit",t)},expression:"addForm.benefit"}})],1),r("el-form-item",{attrs:{label:"缩略图",prop:"thumb"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.upload,"show-file-list":!1,"before-upload":e.beforeAvatarUpload,"on-success":e.handleAvatarSuccess1}},[e.addForm.thumb?r("img",{staticClass:"avatar",attrs:{src:e.addForm.thumb}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"详情图片",prop:"content"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.upload,"show-file-list":!1,"before-upload":e.beforeAvatarUpload,"on-success":e.handleAvatarSuccess2}},[e.addForm.content?r("img",{staticClass:"avatar",attrs:{src:e.addForm.content}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"多图片",prop:"pictures"}},[r("el-upload",{staticClass:"upload-demo",attrs:{action:e.upload,"list-type":"picture","before-upload":e.beforeAvatarUpload,"on-success":e.handleAvatarSuccess3,"on-remove":e.handleRemove,"file-list":e.fileList0}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),r("el-form-item",{attrs:{label:"库存量",prop:"storage"}},[r("el-input",{attrs:{type:"number"},model:{value:e.addForm.storage,callback:function(t){e.$set(e.addForm,"storage",t)},expression:"addForm.storage"}})],1),r("el-form-item",{attrs:{label:"库存临界量",prop:"storage_alert"}},[r("el-input",{attrs:{type:"number"},model:{value:e.addForm.storage_alert,callback:function(t){e.$set(e.addForm,"storage_alert",t)},expression:"addForm.storage_alert"}})],1),r("el-form-item",{attrs:{label:"运费",prop:"fare"}},[r("el-input",{attrs:{type:"number"},model:{value:e.addForm.fare,callback:function(t){e.$set(e.addForm,"fare",t)},expression:"addForm.fare"}})],1),r("el-form-item",{attrs:{label:"关键词",prop:"keywords"}},[r("el-input",{model:{value:e.addForm.keywords,callback:function(t){e.$set(e.addForm,"keywords",t)},expression:"addForm.keywords"}})],1),r("el-form-item",{attrs:{label:"上架状态",prop:"state"}},[r("el-switch",{attrs:{"active-color":"#1ce66","inactive-color":"#ff4949"},model:{value:e.addForm.state,callback:function(t){e.$set(e.addForm,"state",t)},expression:"addForm.state"}})],1),r("el-form-item",[r("el-button",{attrs:{type:"primary"},on:{click:e.submit}},[e._v("确认发布")])],1)],1)],1)],1)],1),r("el-dialog",{attrs:{title:"商品编辑",visible:e.dialogVisible,width:"50%"},on:{"update:visible":function(t){e.dialogVisible=t}}},[r("el-form",{ref:"editForm",attrs:{"label-width":"100px",model:e.editForm,rules:e.editRules}},[r("el-form-item",{attrs:{label:"名称",prop:"name"}},[r("el-input",{model:{value:e.editForm.name,callback:function(t){e.$set(e.editForm,"name",t)},expression:"editForm.name"}})],1),r("el-form-item",{attrs:{label:"描述",prop:"description"}},[r("el-input",{attrs:{type:"textarea"},model:{value:e.editForm.description,callback:function(t){e.$set(e.editForm,"description",t)},expression:"editForm.description"}})],1),r("el-form-item",{attrs:{label:"价格",prop:"price"}},[r("el-input",{attrs:{type:"number"},model:{value:e.editForm.price,callback:function(t){e.$set(e.editForm,"price",t)},expression:"editForm.price"}})],1),r("el-form-item",{attrs:{label:"优惠价",prop:"benefit"}},[r("el-input",{attrs:{type:"number"},model:{value:e.editForm.benefit,callback:function(t){e.$set(e.editForm,"benefit",t)},expression:"editForm.benefit"}})],1),r("el-form-item",{attrs:{label:"缩略图",prop:"thumb"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.upload,"show-file-list":!1,"before-upload":e.beforeAvatarUpload,"on-success":e.handleAvatarSuccess4}},[e.editForm.thumb?r("img",{staticClass:"avatar",attrs:{src:e.editForm.thumb}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"详情图片",prop:"content"}},[r("el-upload",{staticClass:"avatar-uploader",attrs:{action:e.upload,"show-file-list":!1,"before-upload":e.beforeAvatarUpload,"on-success":e.handleAvatarSuccess5}},[e.editForm.content?r("img",{staticClass:"avatar",attrs:{src:e.editForm.content}}):r("i",{staticClass:"el-icon-plus avatar-uploader-icon"})])],1),r("el-form-item",{attrs:{label:"多图片",prop:"pictures"}},[r("el-upload",{staticClass:"upload-demo",attrs:{action:e.upload,duo:"","list-type":"picture","before-upload":e.beforeAvatarUpload,"on-success":e.handleAvatarSuccess6,"on-remove":e.handleRemove1,"file-list":e.fileList}},[r("el-button",{attrs:{size:"small",type:"primary"}},[e._v("点击上传")]),r("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[e._v("只能上传jpg/png文件，且不超过500kb")])],1)],1),r("el-form-item",{attrs:{label:"库存量",prop:"storage"}},[r("el-input",{attrs:{type:"number"},model:{value:e.editForm.storage,callback:function(t){e.$set(e.editForm,"storage",t)},expression:"editForm.storage"}})],1),r("el-form-item",{attrs:{label:"库存临界量",prop:"storage_alert"}},[r("el-input",{attrs:{type:"number"},model:{value:e.editForm.storage_alert,callback:function(t){e.$set(e.editForm,"storage_alert",t)},expression:"editForm.storage_alert"}})],1),r("el-form-item",{attrs:{label:"运费",prop:"fare"}},[r("el-input",{attrs:{type:"number"},model:{value:e.editForm.fare,callback:function(t){e.$set(e.editForm,"fare",t)},expression:"editForm.fare"}})],1),r("el-form-item",{attrs:{label:"关键词",prop:"keywords"}},[r("el-input",{model:{value:e.editForm.keywords,callback:function(t){e.$set(e.editForm,"keywords",t)},expression:"editForm.keywords"}})],1)],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.dialogVisible=!1}}},[e._v("取消")]),r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"修改之后会重新提交审核",placement:"top-start"}},[r("el-button",{attrs:{type:"primary"},on:{click:e.update}},[e._v("确定")])],1)],1)],1)],1)},i=[],o=(r("28a5"),r("7514"),r("ac6a"),r("6762"),r("c5f6"),r("7f7f"),r("7973")),s={name:"GoodsManage",data:function(){return{activeName:"list",total:0,page:1,pageSize:5,goodsData:[],searchForm:{name:"",price_low:0,price_high:0,state:!1,audit:!1,storage:!1},dialogVisible:!1,addForm:{name:"",description:"",price:"",benefit:"",thumb:"",pictures:"",content:"",storage:"",storage_alert:"",fare:"",keywords:"",state:"",cid:"",sid:sessionStorage.getItem("shopid")},editForm:{},addRules:{name:{required:!0,message:"请输入商品名称",trigger:"blur"},description:{required:!0,message:"请输入商品描述",trigger:"blur"},price:{required:!0,message:"请输入商品价格",trigger:"blur"},benefit:{required:!0,message:"请输入商品优惠价",trigger:"blur"},thumb:{required:!0,message:"请选择商品缩略图",trigger:"blur"},pictures:{required:!0,message:"请选择商品图片",trigger:"blur"},content:{required:!0,message:"请选择详情图片",trigger:"blur"},storage:{required:!0,message:"请输入库存量",trigger:"blur"},storage_alert:{required:!0,message:"请输入库存警报值",trigger:"blur"},fare:{required:!0,message:"请输入商品运费",trigger:"blur"},keywords:{required:!0,message:"请输入商品关键词",trigger:"blur"},cid:{required:!0,message:"请输入商品分类",trigger:"change"}},editRules:{name:{required:!0,message:"请输入商品名称",trigger:"blur"},description:{required:!0,message:"请输入商品描述",trigger:"blur"},price:{required:!0,message:"请输入商品价格",trigger:"blur"},benefit:{required:!0,message:"请输入商品优惠价",trigger:"blur"},thumb:{required:!0,message:"请选择商品缩略图",trigger:"blur"},pictures:{required:!0,message:"请选择商品图片",trigger:"blur"},content:{required:!0,message:"请选择详情图片",trigger:"blur"},storage:{required:!0,message:"请输入库存量",trigger:"blur"},storage_alert:{required:!0,message:"请输入库存警报值",trigger:"blur"},fare:{required:!0,message:"请输入商品运费",trigger:"blur"},keywords:{required:!0,message:"请输入商品关键词",trigger:"blur"}},upload:"",categories:[],fileList:[],fileList0:[]}},methods:{fetchData:function(){var e=this,t={page:this.page,pageSize:this.pageSize,sid:sessionStorage.getItem("shopid")};""!==this.searchForm.name&&(t.name=this.searchForm.name),this.searchForm.price_low>0&&(t.price_low=this.searchForm.price_low),this.searchForm.price_high>0&&(t.price_high=this.searchForm.price_high),this.searchForm.audit&&(t.audit=1),this.searchForm.state&&(t.state=1),this.searchForm.storage&&(t.storage=1),this.$axios.get(this.$api.GOODS,t).then(function(t){200===t.data.code&&(e.goodsData=t.data.data,e.total=t.data.total)})},handleChange:function(){this.fetchData()},handleSearch:function(){this.page=1,this.fetchData()},handleReset:function(){this.searchForm={name:"",price_low:0,price_high:0,state:!1,audit:!1,storage:!1}},changeState:function(e,t){var r=this;this.$axios.put(this.$api.GOODS,{id:e,state:0===t?1:0}).then(function(e){200===e.data.code&&(r.fetchData(),r.$message.success("修改成功"))})},del:function(e){var t=this;this.$confirm("此操作将永久删除该商品, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then(function(){t.$axios.delete(t.$api.GOODS,{id:e}).then(function(e){200===e.data.code&&(t.$message.success("删除成功"),t.fetchData())})}).catch(function(){t.$message({type:"info",message:"已取消删除"})})},submit:function(){var e=this;this.$refs.addForm.validate(function(t){if(!t)return!1;e.addForm.state=Number(e.addForm.state),e.$axios.post(e.$api.GOODS,e.addForm).then(function(t){200===t.data.code&&(e.$message.success("发布成功"),e.activeName="list",e.fetchData(),e.$refs.addForm.resetFields())})})},dialogVisible1:function(){this.dialogVisible=!0},beforeAvatarUpload:function(e){var t=["image/png","image/gif","image/jpg","image/jpeg"];return t.includes(e.type)?!(e.size>2e5)||(this.$message.error("文件大小超出闲置"),!1):(this.$message.error("请选择正确的图片类型"),!1)},handleAvatarSuccess1:function(e){"error"!==e?(this.addForm.thumb=e,this.$refs.addForm.validateField("thumb")):this.$message.error("图片上传失败")},handleAvatarSuccess2:function(e){"error"!==e?(this.addForm.content=e,this.$refs.addForm.validateField("content")):this.$message.error("图片上传失败")},handleAvatarSuccess3:function(e,t,r){this.addForm.pictures=r.map(function(e){return e.response}).join(";"),this.$refs.addForm.validateField("pictures")},handleAvatarSuccess4:function(e){"error"!==e?(this.editForm.thumb=e,this.$refs.editForm.validateField("thumb")):this.$message.error("图片上传失败")},handleAvatarSuccess5:function(e){"error"!==e?(this.editForm.content=e,this.$refs.editForm.validateField("content")):this.$message.error("图片上传失败")},handleAvatarSuccess6:function(e,t,r){this.editForm.pictures=r.map(function(e){return e.response}).join(";"),this.$refs.editForm.validateField("pictures")},handleRemove:function(e,t){this.addForm.pictures=t.map(function(e){return e.response}).join(";"),this.$refs.addForm.validateField("pictures")},handleRemove1:function(e,t){console.log(t),this.editForm.pictures=t.map(function(e){return e.response}).join(";"),this.$refs.editForm.validateField("pictures")},handleClick:function(){var e=this;"add"===this.activeName&&0===this.categories.length&&this.$axios.get(this.$api.CATEGORY).then(function(t){var r=t.data.data,a=[];r.forEach(function(e){if(0===e.pid){var t={};t.label=e.name,t.children=[],t.id=e.id,a.push(t)}else{var r={};r.label=e.name,r.id=e.id;var i=a.find(function(t){return t.id===e.pid});i.children.push(r)}}),e.categories=a})},edit:function(e){var t=this;this.$axios.get(this.$api.GOODS,{id:e}).then(function(e){200===e.data.code&&(t.editForm=e.data.data,t.dialogVisible=!0,t.fileList=e.data.data.pictures.split(";").map(function(e,t){return{name:"图片"+(t+1),url:e,response:e}}))})},update:function(){var e=this;this.$refs.editForm.validate(function(t){if(!t)return!1;e.editForm.audit=0,e.$axios.put(e.$api.GOODS,e.editForm).then(function(t){200===t.data.code&&(e.$message.success("修改成功"),e.dialogVisible=!1,e.fetchData())})})}},components:{"basic-header":o["a"]},mounted:function(){this.fetchData(),this.upload=this.$api.UPLOAD}},n=s,l=(r("22e2"),r("2877")),c=Object(l["a"])(n,a,i,!1,null,"0535e87a",null);t["default"]=c.exports},aa770:function(e,t,r){var a=r("5ca1"),i=r("be13"),o=r("79e5"),s=r("fdef"),n="["+s+"]",l="​",c=RegExp("^"+n+n+"*"),u=RegExp(n+n+"*$"),d=function(e,t,r){var i={},n=o(function(){return!!s[e]()||l[e]()!=l}),c=i[e]=n?t(p):s[e];r&&(i[r]=c),a(a.P+a.F*n,"String",i)},p=d.trim=function(e,t){return e=String(i(e)),1&t&&(e=e.replace(c,"")),2&t&&(e=e.replace(u,"")),e};e.exports=d},aae3:function(e,t,r){var a=r("d3f4"),i=r("2d95"),o=r("2b4c")("match");e.exports=function(e){var t;return a(e)&&(void 0!==(t=e[o])?!!t:"RegExp"==i(e))}},b0c5:function(e,t,r){"use strict";var a=r("520a");r("5ca1")({target:"RegExp",proto:!0,forced:a!==/./.exec},{exec:a})},c5f6:function(e,t,r){"use strict";var a=r("7726"),i=r("69a8"),o=r("2d95"),s=r("5dbc"),n=r("6a99"),l=r("79e5"),c=r("9093").f,u=r("11e9").f,d=r("86cc").f,p=r("aa770").trim,m="Number",f=a[m],h=f,g=f.prototype,b=o(r("2aeb")(g))==m,v="trim"in String.prototype,F=function(e){var t=n(e,!1);if("string"==typeof t&&t.length>2){t=v?t.trim():p(t,3);var r,a,i,o=t.charCodeAt(0);if(43===o||45===o){if(r=t.charCodeAt(2),88===r||120===r)return NaN}else if(48===o){switch(t.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+t}for(var s,l=t.slice(2),c=0,u=l.length;c<u;c++)if(s=l.charCodeAt(c),s<48||s>i)return NaN;return parseInt(l,a)}}return+t};if(!f(" 0o1")||!f("0b1")||f("+0x1")){f=function(e){var t=arguments.length<1?0:e,r=this;return r instanceof f&&(b?l(function(){g.valueOf.call(r)}):o(r)!=m)?s(new h(F(t)),r,f):F(t)};for(var y,x=r("9e1e")?c(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),_=0;x.length>_;_++)i(h,y=x[_])&&!i(f,y)&&d(f,y,u(h,y));f.prototype=g,g.constructor=f,r("2aba")(a,m,f)}},cd1c:function(e,t,r){var a=r("e853");e.exports=function(e,t){return new(a(e))(t)}},e853:function(e,t,r){var a=r("d3f4"),i=r("1169"),o=r("2b4c")("species");e.exports=function(e){var t;return i(e)&&(t=e.constructor,"function"!=typeof t||t!==Array&&!i(t.prototype)||(t=void 0),a(t)&&(t=t[o],null===t&&(t=void 0))),void 0===t?Array:t}},fdef:function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"}}]);
//# sourceMappingURL=chunk-f6edfe34.2a8e0b46.js.map