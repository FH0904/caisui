(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/member/coupon/index"],{"097a":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("view",{staticClass:"content"},[a("uni-segmented-control",{attrs:{current:t.current,values:t.items,"style-type":"text","active-color":"#333",eventid:"bd528d6e-0",mpcomid:"bd528d6e-0"},on:{clickItem:t.onClickItem}}),a("view",{},[t._l(t.listData,function(e,i){return a("view",{key:i,staticClass:"coupon-c-item"},[a("view",{staticClass:"cci-l"},[0==t.current?a("view",{staticClass:"cci-l-c color-f"},[t._v("coupon")]):t._e(),0!=t.current?a("view",{staticClass:"cci-l-c color-f color-b"},[t._v("coupon")]):t._e()]),a("view",{staticClass:"cci-r"},[a("view",{staticClass:"cci-r-c"},[a("view",{staticClass:"ccirc-t color-9"},[t._v(t._s(e.name))]),a("view",{staticClass:"ccirc-b"},[a("view",{staticClass:"ccirc-b-l"},[a("view",{staticClass:"ccirc-b-tip"},[t._v(t._s(e.expression1+e.expression2))]),a("view",{staticClass:"ccirc-b-time color-9"},[t._v("有效期："+t._s(e.stime)+" - "+t._s(e.etime))])]),0==t.current?a("view",{staticClass:"ccirc-b-r color-f",attrs:{eventid:"bd528d6e-1-"+i},on:{click:t.goIndex}},[t._v("立即使用")]):t._e()])])])])}),a("uni-load-more",{attrs:{status:t.loadStatus,mpcomid:"bd528d6e-1"}})],2)],1)},c=[];a.d(e,"a",function(){return i}),a.d(e,"b",function(){return c})},"1db15":function(t,e,a){},2745:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("0b96")),c=n(a("2886"));function n(t){return t&&t.__esModule?t:{default:t}}var s={components:{uniSegmentedControl:c.default,uniLoadMore:i.default},data:function(){return{items:["未使用","已使用","已失效"],current:0,page:1,limit:10,listData:[],loadStatus:"more"}},onLoad:function(){this.getData()},onReachBottom:function(){"more"===this.loadStatus&&this.getData()},methods:{onClickItem:function(t){this.current!==t&&(this.current=t,this.page=1,this.listData=[],this.getData())},getData:function(){var t=this;this.loadStatus="loading";var e={page:this.page,limit:this.limit};0==this.current&&(e["display"]="no_used"),1==this.current&&(e["display"]="yes_used"),2==this.current&&(e["display"]="invalid"),this.$api.userCoupon(e,function(e){if(e.status){var a="no_used";if(1==t.current&&(a="yes_used"),2==t.current&&(a="invalid"),a==e.data.q_type&&e.data.page>=t.page){var i=t.listData.concat(e.data.list);t.listData=i,e.data.count>t.listData.length?(t.page++,t.loadStatus="more"):t.loadStatus="noMore"}}else t.$common.errorToShow(e.msg)})},goIndex:function(){t.switchTab({url:"/pages/index/index"})}}};e.default=s}).call(this,a("6e42")["default"])},cada:function(t,e,a){"use strict";var i=a("1db15"),c=a.n(i);c.a},d3fe:function(t,e,a){"use strict";a("ab7f");var i=n(a("b0ce")),c=n(a("ef2f"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(c.default))},ef2f:function(t,e,a){"use strict";a.r(e);var i=a("097a"),c=a("fbe9");for(var n in c)"default"!==n&&function(t){a.d(e,t,function(){return c[t]})}(n);a("cada");var s=a("2877"),o=Object(s["a"])(c["default"],i["a"],i["b"],!1,null,null,null);e["default"]=o.exports},fbe9:function(t,e,a){"use strict";a.r(e);var i=a("2745"),c=a.n(i);for(var n in i)"default"!==n&&function(t){a.d(e,t,function(){return i[t]})}(n);e["default"]=c.a}},[["d3fe","common/runtime","common/vendor"]]]);