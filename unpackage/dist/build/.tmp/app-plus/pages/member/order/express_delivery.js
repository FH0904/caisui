(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/member/order/express_delivery"],{"01ae":function(t,e,s){"use strict";s.r(e);var i=s("39b1"),a=s("f5b0");for(var n in a)"default"!==n&&function(t){s.d(e,t,function(){return a[t]})}(n);s("c23a");var o=s("2877"),r=Object(o["a"])(a["default"],i["a"],i["b"],!1,null,null,null);e["default"]=r.exports},"39b1":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"content"},[t.add.length?s("view",{staticClass:"ed-head color-6"},[t._v("收货地址："+t._s(t.add))]):t._e(),s("view",{staticClass:"ed-body"},[t.isExpress?s("view",t._l(t.express.data,function(e,i){return s("view",{key:i,staticClass:"ed-body-item"},[s("view",{staticClass:"edbi-left"},[s("view",{staticClass:"edbi-date color-6"},[t._v(t._s(e.date))]),s("view",{staticClass:"edbi-time color-9"},[t._v(t._s(e.utime))])]),e.end?s("view",{staticClass:"edbi-circle last-circle"},[s("view",[t._v("收")])]):s("view",{staticClass:"edbi-circle"},[s("view")]),s("view",{staticClass:"edbi-right"},[s("view",{staticClass:"edbi-title color-3"},[t._v(t._s(e.title))]),s("view",{staticClass:"edbi-content color-9"},[t._v(t._s(e.content))])])])})):s("view",{staticClass:"ed-none"},[t._v("暂无物流信息")])])])},a=[];s.d(e,"a",function(){return i}),s.d(e,"b",function(){return a})},"70bb":function(t,e,s){},"8f19":function(t,e,s){"use strict";s("ab7f");var i=n(s("b0ce")),a=n(s("01ae"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},af67:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s={data:function(){return{add:"",express:{}}},onLoad:function(e){for(var s,i,a=e.params,n=decodeURIComponent(a).split("&"),o=0;o<n.length;o++){var r=n[o].split("=")[0];"code"==r&&(s=n[o].split("=")[1]),"no"==r&&(i=n[o].split("=")[1]),"add"==r&&(this.add=n[o].split("=")[1])}s&&i||this.$common.errorToShow("缺少物流查询参数",function(){t.navigateBack({delta:1})}),this.expressInfo(s,i)},computed:{isExpress:function(){return!!Object.keys(this.express).length}},methods:{expressInfo:function(t,e){var s=this,i={code:t,no:e};this.$api.logistics(i,function(t){if(t.status){var e=t.data.info;e.data.forEach(function(t,i){var a=t.time.split(" ");s.$set(t,"date",a[0].substring(5,a[0].length)),s.$set(t,"utime",a[1].substring(0,5));var n=t.context.split("，");s.$set(t,"title",n[0]),s.$set(t,"content",n[1]?n[1]:""),s.$set(t,"end",3===e.state&&0===i)}),s.express=e}else s.$common.errorToShow(t.msg)})}}};e.default=s}).call(this,s("6e42")["default"])},c23a:function(t,e,s){"use strict";var i=s("70bb"),a=s.n(i);a.a},f5b0:function(t,e,s){"use strict";s.r(e);var i=s("af67"),a=s.n(i);for(var n in i)"default"!==n&&function(t){s.d(e,t,function(){return i[t]})}(n);e["default"]=a.a}},[["8f19","common/runtime","common/vendor"]]]);