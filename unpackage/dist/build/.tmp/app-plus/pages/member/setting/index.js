(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/member/setting/index"],{"36a6":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("view",{staticClass:"content-top"},[i("view",{staticClass:"cell-group right-img"},[i("view",{staticClass:"cell-item"},[i("view",{staticClass:"cell-item-hd",attrs:{eventid:"1688ccb3-0"},on:{click:function(e){t.navigateToHandle("./user_info/index")}}},[i("view",{staticClass:"cell-hd-title"},[t._v("个人信息")])]),t._m(0)]),i("view",{staticClass:"cell-item"},[i("view",{staticClass:"cell-item-hd",attrs:{eventid:"1688ccb3-1"},on:{click:t.clearCache}},[i("view",{staticClass:"cell-hd-title"},[t._v("清除缓存")])]),t._m(1)]),i("view",{staticClass:"cell-item"},[i("view",{staticClass:"cell-item-hd",attrs:{eventid:"1688ccb3-2"},on:{click:t.aboutUs}},[i("view",{staticClass:"cell-hd-title"},[t._v("关于我们")])]),t._m(2)]),i("view",{staticClass:"cell-item"},[i("view",{staticClass:"cell-item-hd",attrs:{eventid:"1688ccb3-3"},on:{click:t.logOff}},[i("view",{staticClass:"cell-hd-title"},[t._v("退出")])]),t._m(3)])])])])},c=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cell-item-ft"},[i("image",{staticClass:"cell-ft-next icon",attrs:{src:"../../../static/image/right.png"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cell-item-ft"},[i("image",{staticClass:"cell-ft-next icon",attrs:{src:"../../../static/image/right.png"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cell-item-ft"},[i("image",{staticClass:"cell-ft-next icon",attrs:{src:"../../../static/image/right.png"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cell-item-ft"},[i("image",{staticClass:"cell-ft-next icon",attrs:{src:"../../../static/image/right.png"}})])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return c})},"48a0":function(t,e,i){"use strict";i.r(e);var a=i("36a6"),c=i("d28d");for(var s in c)"default"!==s&&function(t){i.d(e,t,function(){return c[t]})}(s);var n=i("2877"),l=Object(n["a"])(c["default"],a["a"],a["b"],!1,null,null,null);e["default"]=l.exports},"6fc6":function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={methods:{navigateToHandle:function(t){this.$common.navigateTo(t)},clearCache:function(){var t=this;this.$api.shopConfig(function(e){t.$store.commit("config",e)}),this.$db.del("areaList"),setTimeout(function(){t.$common.successToShow("清除成功")},500)},aboutUs:function(){var t=this.$store.state.config.about_article_id;this.$common.navigateTo("/pages/article/index?id_type=1&id="+t)},logOff:function(){var e=this;this.$common.modelShow("退出","确认退出登录吗?",function(){e.$db.del("userToken"),t.reLaunch({url:"/pages/index/index"})})}}};e.default=i}).call(this,i("6e42")["default"])},d28d:function(t,e,i){"use strict";i.r(e);var a=i("6fc6"),c=i.n(a);for(var s in a)"default"!==s&&function(t){i.d(e,t,function(){return a[t]})}(s);e["default"]=c.a},f77a:function(t,e,i){"use strict";i("ab7f");var a=s(i("b0ce")),c=s(i("48a0"));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(c.default))}},[["f77a","common/runtime","common/vendor"]]]);