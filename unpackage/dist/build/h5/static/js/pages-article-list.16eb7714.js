(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-article-list"],{"0e6f":function(t,a,i){"use strict";var e=i("a061"),n=i.n(e);n.a},"2d3a":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"cell-group margin-cell-group"},t._l(t.list,function(a){return i("v-uni-view",{key:a.id,staticClass:"cell-item",on:{click:function(i){i=t.$handleEvent(i),t.articleDetail(a.id)}}},[i("v-uni-view",{staticClass:"cell-title-img"},[i("v-uni-image",{attrs:{src:a.cover,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"article-title "},[t._v(t._s(a.title))]),i("v-uni-view",{staticClass:"article-time"},[t._v(t._s(a.ctime))])],1)],1)}),1),i("uni-load-more",{attrs:{status:t.loadStatus}})],1)},n=[];i.d(a,"a",function(){return e}),i.d(a,"b",function(){return n})},3492:function(t,a,i){"use strict";i.r(a);var e=i("57a8"),n=i("ff01");for(var o in n)"default"!==o&&function(t){i.d(a,t,function(){return n[t]})}(o);i("56fc");var d=i("2877"),r=Object(d["a"])(n["default"],e["a"],e["b"],!1,null,"bab5f1da",null);a["default"]=r.exports},"373d":function(t,a,i){"use strict";var e=i("288e");Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n=e(i("75fc")),o=e(i("3492")),d={components:{uniLoadMore:o.default},data:function(){return{cid:0,page:1,limit:10,list:[],loadStatus:"more"}},onLoad:function(t){this.cid=t.cid,this.cid?this.articleList():this.$common.errorToShow("未指定文章分类",function(){uni.navigateBack({delta:1})})},onReachBottom:function(){"more"===this.loadStatus&&this.articleList()},methods:{articleList:function(){var t=this,a={page:this.page,limit:this.limit,type_id:this.cid};this.loadStatus="loading",this.$api.articleList(a,function(a){if(a.status){var i=a.data.list;t.list=[].concat((0,n.default)(t.list),(0,n.default)(i)),a.data.count>t.list.length?(t.loadStatus="more",t.page++):t.loadStatus="noMore"}else t.$common.errorToShow(a.msg)})},articleDetail:function(t){this.$common.navigateTo("/pages/article/index?id="+t+"&id_type=1")}}};a.default=d},"56fc":function(t,a,i){"use strict";var e=i("b7af"),n=i.n(e);n.a},"57a8":function(t,a,i){"use strict";var e=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"uni-load-more"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[i("v-uni-view",{staticClass:"load1"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1)],1),i("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},n=[];i.d(a,"a",function(){return e}),i.d(a,"b",function(){return n})},"58da":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var e={name:"uni-load-more",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#999"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};a.default=e},"5c34":function(t,a,i){"use strict";i.r(a);var e=i("373d"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,function(){return e[t]})}(o);a["default"]=n.a},6447:function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-load-more[data-v-bab5f1da]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;height:%?80?%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.uni-load-more__text[data-v-bab5f1da]{font-size:%?26?%;color:#999}.uni-load-more__img[data-v-bab5f1da]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-bab5f1da]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-bab5f1da]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;-ms-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-bab5f1da 1.56s ease infinite;animation:load-data-v-bab5f1da 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-bab5f1da]:first-child{-webkit-transform:rotate(90deg);-ms-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-bab5f1da]:nth-child(2){-webkit-transform:rotate(180deg);-ms-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-bab5f1da]:nth-child(3){-webkit-transform:rotate(270deg);-ms-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-bab5f1da]:nth-child(4){top:11px;left:0}.load1[data-v-bab5f1da],.load2[data-v-bab5f1da],.load3[data-v-bab5f1da]{height:24px;width:24px}.load2[data-v-bab5f1da]{-webkit-transform:rotate(30deg);-ms-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-bab5f1da]{-webkit-transform:rotate(60deg);-ms-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-bab5f1da]:first-child{-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-bab5f1da]:first-child{-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-bab5f1da]:first-child{-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-bab5f1da]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-bab5f1da]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-bab5f1da]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-bab5f1da]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-bab5f1da]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-bab5f1da]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-bab5f1da]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-bab5f1da]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-bab5f1da]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-bab5f1da{0%{opacity:1}to{opacity:.2}}',""])},"75fc":function(t,a,i){"use strict";i.r(a);var e=i("a745"),n=i.n(e);function o(t){if(n()(t)){for(var a=0,i=new Array(t.length);a<t.length;a++)i[a]=t[a];return i}}var d=i("774e"),r=i.n(d),l=i("c8bb"),s=i.n(l);function c(t){if(s()(Object(t))||"[object Arguments]"===Object.prototype.toString.call(t))return r()(t)}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function f(t){return o(t)||c(t)||u()}i.d(a,"default",function(){return f})},a061:function(t,a,i){var e=i("d984");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("f3b066f8",e,!0,{sourceMap:!1,shadowMode:!1})},a8da:function(t,a,i){"use strict";i.r(a);var e=i("2d3a"),n=i("5c34");for(var o in n)"default"!==o&&function(t){i.d(a,t,function(){return n[t]})}(o);i("0e6f");var d=i("2877"),r=Object(d["a"])(n["default"],e["a"],e["b"],!1,null,"d95534d6",null);a["default"]=r.exports},b7af:function(t,a,i){var e=i("6447");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var n=i("4f06").default;n("0492b525",e,!0,{sourceMap:!1,shadowMode:!1})},d984:function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,".cell-title-img[data-v-d95534d6]{width:%?160?%;height:%?160?%}.cell-title-img uni-image[data-v-d95534d6]{width:100%;height:100%}.cell-item-bd[data-v-d95534d6]{padding-right:0;vertical-align:top;position:relative}.article-title[data-v-d95534d6]{font-size:%?28?%;color:#333;width:100%;min-height:%?80?%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.article-time[data-v-d95534d6]{font-size:%?24?%;color:#999;display:inline-block;min-width:%?220?%;min-height:%?32?%;position:absolute;bottom:0}",""])},ff01:function(t,a,i){"use strict";i.r(a);var e=i("58da"),n=i.n(e);for(var o in e)"default"!==o&&function(t){i.d(a,t,function(){return e[t]})}(o);a["default"]=n.a}}]);