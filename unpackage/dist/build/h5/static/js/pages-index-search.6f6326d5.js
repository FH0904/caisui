(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-search"],{2492:function(t,e,a){"use strict";var s=a("a899"),i=a.n(s);i.a},"318a":function(t,e,a){"use strict";a.r(e);var s=a("ed85"),i=a.n(s);for(var n in s)"default"!==n&&function(t){a.d(e,t,function(){return s[t]})}(n);e["default"]=i.a},3408:function(t,e,a){"use strict";a.r(e);var s=a("dca6"),i=a("318a");for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);a("2492");var c=a("2877"),o=Object(c["a"])(i["default"],s["a"],s["b"],!1,null,"e552026c",null);e["default"]=o.exports},a899:function(t,e,a){var s=a("c3b8");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var i=a("4f06").default;i("90509a08",s,!0,{sourceMap:!1,shadowMode:!1})},c3b8:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,".search[data-v-e552026c]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.search-c[data-v-e552026c]{width:80%;margin-right:2%}.search-icon[data-v-e552026c]{left:%?30?%}.search-input[data-v-e552026c]{padding:%?10?% %?30?% %?10?% %?90?%}.search-input-p[data-v-e552026c]{padding:0!important}.search .btn[data-v-e552026c]{width:18%;border:none;background-color:#f1f1f1;font-size:%?28?%;color:#333;border-radius:%?6?%;line-height:%?72?%}.history-c[data-v-e552026c]{\n\t/* background-color: #fff; */padding:%?20?% %?26?%}.history-title[data-v-e552026c]{overflow:hidden}.ht-left[data-v-e552026c]{float:left;font-size:%?28?%;color:#333}.ht-right[data-v-e552026c]{float:right;color:#999;font-size:%?26?%}.history-body[data-v-e552026c]{overflow:hidden;margin-top:%?20?%;min-height:%?200?%}.hb-item[data-v-e552026c]{display:inline-block;float:left;background-color:#fff;color:#888;margin-right:%?20?%;margin-bottom:%?14?%;font-size:%?26?%;padding:%?10?% %?20?%}.square[data-v-e552026c]{border-radius:0}.radius[data-v-e552026c]{border-radius:%?12?%}",""])},dca6:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"search"},[a("v-uni-view",{staticClass:"search-c"},[a("v-uni-image",{staticClass:"icon search-icon",attrs:{src:"../../static/image/zoom.png"}}),a("v-uni-input",{staticClass:"search-input",class:t.$store.state.searchStyle,attrs:{"placeholder-class":"search-input-p",placeholder:"请输入关键字搜索",focus:"","auto-focus":t.focus,fixed:t.focus},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}})],1),a("v-uni-button",{staticClass:"btn btn-g",attrs:{"hover-class":"btn-hover2"},on:{click:function(e){e=t.$handleEvent(e),t.search(e)}}},[t._v("搜索")])],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.keys.length>0,expression:"keys.length > 0"}],staticClass:"history-c"},[a("v-uni-view",{staticClass:"history-title"},[a("v-uni-view",{staticClass:"ht-left"},[t._v("历史记录")]),a("v-uni-view",{staticClass:"ht-right",on:{click:function(e){e=t.$handleEvent(e),t.deleteKey(e)}}},[t._v("清除")])],1),a("v-uni-view",{staticClass:"history-body"},t._l(t.keys,function(e,s){return a("v-uni-view",{key:s,staticClass:"hb-item",on:{click:function(a){a=t.$handleEvent(a),t.toNav(e)}}},[t._v(t._s(e))])}),1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.recommend&&t.recommend.length>0,expression:"recommend && recommend.length > 0"}],staticClass:"history-c"},[a("v-uni-view",{staticClass:"history-title"},[a("v-uni-view",{staticClass:"ht-left"},[t._v("搜索发现")])],1),a("v-uni-view",{staticClass:"history-body"},t._l(t.recommend,function(e,s){return a("v-uni-view",{key:s,staticClass:"hb-item",on:{click:function(a){a=t.$handleEvent(a),t.toNav(e)}}},[t._v(t._s(e))])}),1)],1)],1)},i=[];a.d(e,"a",function(){return s}),a.d(e,"b",function(){return i})},ed85:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{keys:[],key:"",navType:"toNav",focus:!0}},computed:{recommend:function(){return this.$store.state.config.recommend_keys}},methods:{search:function(){var t=this.key;if(""!=t){var e=this.$db.get("search_key");e||(e=[]);var a=!0;for(var s in e)e[s]==t&&(a=!1);a&&e.unshift(t),this.$db.set("search_key",e),this.$db.set("search_term",t),this.$common.navigateTo("/pages/classify/index?key="+t)}},deleteKey:function(){this.keys=[],this.$db.del("search_key")},toNav:function(t){this.$db.set("search_term",t);var e=this.$db.get("search_key");e||(e=[]);var a=!0;for(var s in e)e[s]==t&&(a=!1);a&&e.unshift(t),this.$db.set("search_key",e),this.$common.navigateTo("/pages/classify/index?key="+t)}},onShow:function(t){this.keys=this.$db.get("search_key"),this.key=this.$db.get("search_term"),this.focus=!0},onUnload:function(){this.$db.set("search_term","")}};e.default=s}}]);