(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/choose/index"],{"3ead":function(e,t,o){"use strict";o.r(t);var n=o("5f64"),i=o("e060");for(var a in i)"default"!==a&&function(e){o.d(t,e,function(){return i[e]})}(a);o("c5ba");var r=o("2877"),s=Object(r["a"])(i["default"],n["a"],n["b"],!1,null,null,null);t["default"]=s.exports},"5f64":function(e,t,o){"use strict";var n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:"content"},[o("view",{staticClass:"login-m"},[o("view",{staticClass:"login-item"},[o("view",{staticClass:"logo"},[o("open-data",{attrs:{type:"userAvatarUrl",mpcomid:"4631bfd6-0"}})],1)]),e._m(0)]),o("view",{staticClass:"login-b flc"})])},i=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("view",{staticClass:"login-tip"},[o("view",{staticClass:"login-tip-big"},[e._v("申请获取以下权限")]),o("view",{staticClass:"login-tip-small"},[e._v("获得你的公开信息 （昵称、头像等）")])])}];o.d(t,"a",function(){return n}),o.d(t,"b",function(){return i})},"9a2c":function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={data:function(){return{open_id:""}},computed:{logoImage:function(){return this.$store.state.config.shop_logo}},onLoad:function(){},methods:{getCode:function(t){e.login({success:function(e){if(e.code)return t(e.code);this.$common.errorToShow("未取得code")},fail:function(e){this.$common.errorToShow("用户授权失败wx.login")}})},handleRefuse:function(){e.showToast({title:"未授权",icon:"none",duration:1e3}),setTimeout(function(){e.hideToast(),e.navigateBack(-1)},1e3)},getUserInfo:function(e){var t=this;if("getUserInfo:fail auth deny"==e.detail.errMsg)t.$common.errorToShow("未授权");else{var o={open_id:t.open_id,iv:e.detail.iv,edata:e.detail.encryptedData,signature:e.detail.signature},n=t.$db.get("invitecode");n&&(o.invitecode=n),t.toLogin(o)}},toLogin:function(t){var o=this;o.$api.login2(t,function(t){if(t.status){if("undefined"!=typeof t.data.token)return o.$db.set("userToken",t.data.token),e.navigateBack({delta:1}),!1;e.redirectTo({url:"/pages/login/login/index?user_wx_id="+t.data.user_wx_id})}else o.$common.errorToShow("登录失败，请重试")})},getALICode:function(){var t=this,o=this;e.login({scopes:"auth_user",success:function(e){e.authCode?o.aLiLoginStep1(e.authCode):t.$common.errorToShow("未取得code")},fail:function(e){this.$common.errorToShow("用户授权失败my.login")}})},aLiLoginStep1:function(t){var o=this;this.$api.alilogin1({code:t},function(t){if(t.status){if(o.open_id=t.data.user_wx_id,t.data.hasOwnProperty("token"))return o.$db.set("userToken",t.data.token),e.navigateBack({delta:1}),!1;o.$common.redirectTo("/pages/login/login/index?user_wx_id="+t.data.user_wx_id)}else o.$common.errorToShow(t.msg)})}}};t.default=o}).call(this,o("6e42")["default"])},c5ba:function(e,t,o){"use strict";var n=o("e266"),i=o.n(n);i.a},e060:function(e,t,o){"use strict";o.r(t);var n=o("9a2c"),i=o.n(n);for(var a in n)"default"!==a&&function(e){o.d(t,e,function(){return n[e]})}(a);t["default"]=i.a},e266:function(e,t,o){},f5a7:function(e,t,o){"use strict";o("ab7f");var n=a(o("b0ce")),i=a(o("3ead"));function a(e){return e&&e.__esModule?e:{default:e}}Page((0,n.default)(i.default))}},[["f5a7","common/runtime","common/vendor"]]]);