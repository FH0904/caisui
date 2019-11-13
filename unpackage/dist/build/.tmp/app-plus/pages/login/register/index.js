(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/register/index"],{"27a7":function(e,t,i){"use strict";var o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("view",{staticClass:"content"},[i("view",{staticClass:"reg-t"},[i("image",{staticClass:"reg-logo",attrs:{src:e.logoImage,mode:"aspectFill"}})]),i("view",{staticClass:"reg-m"},[i("view",{staticClass:"reg-item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.mobile,expression:"mobile"}],attrs:{type:"number",maxlength:e.maxMobile,placeholder:"请输入手机号码",focus:"","placeholder-class":"reg-item-i-p",eventid:"00e2463e-0"},domProps:{value:e.mobile},on:{input:function(t){t.target.composing||(e.mobile=t.target.value)}}})]),i("view",{staticClass:"reg-item flc"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.code,expression:"code"}],staticClass:"reg-item-input",attrs:{"placeholder-class":"reg-item-i-p",type:"text",placeholder:"请输入验证码",eventid:"00e2463e-1"},domProps:{value:e.code},on:{input:function(t){t.target.composing||(e.code=t.target.value)}}}),e.verification?i("view",{class:e.sendCodeBtn,attrs:{eventid:"00e2463e-2"},on:{click:e.sendCode}},[e._v("发送验证码")]):e._e(),e.verification?e._e():i("view",{staticClass:"btn btn-g"},[e._v(e._s(e.timer)+" 秒后重新获取")])]),i("view",{staticClass:"reg-item"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.pwd,expression:"pwd"}],staticClass:"login-item-input",attrs:{password:!0,"placeholder-class":"login-item-i-p",type:"text",placeholder:"请输入密码",eventid:"00e2463e-3"},domProps:{value:e.pwd},on:{input:function(t){t.target.composing||(e.pwd=t.target.value)}}})])]),i("view",{staticClass:"reg-b"},[i("button",{class:e.regButtonClass,attrs:{"hover-class":"btn-hover",eventid:"00e2463e-4"},on:{click:function(t){e.toReg()}}},[e._v("注册")])],1),i("view",{staticClass:"registered-item"},[i("view",{staticClass:"btn btn-g btn-square registered",attrs:{eventid:"00e2463e-5"},on:{click:e.toLogin}},[e._v("已有账号，立即登录")])])])},n=[];i.d(t,"a",function(){return o}),i.d(t,"b",function(){return n})},"37a9":function(e,t,i){},9464:function(e,t,i){"use strict";var o=i("37a9"),n=i.n(o);n.a},c09d:function(e,t,i){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i("4856"),n={mixins:[o.goBack],data:function(){return{maxMobile:11,mobile:"",code:"",pwd:"",verification:!0,timer:60,btnb:"btn btn-c btn-square btn-all"}},onLoad:function(e){var t=this;t.timer=parseInt(t.$db.get("timer")),null!=t.timer&&t.timer>0&&(t.countDown(),t.verification=!1),e.invitecode&&this.$db.set("invitecode",e.invitecode)},computed:{rightMobile:function(){var e={};return this.mobile?/^1[3456789]{1}\d{9}$/gi.test(this.mobile)?e.status=!0:(e.status=!1,e.msg="手机号格式不正确"):(e.status=!1,e.msg="请输入手机号"),e},regButtonClass:function(){return this.mobile&&11===this.mobile.length&&this.pwd&&this.code?this.btnb+" btn-b":this.btnb},sendCodeBtn:function(){var e="btn btn-g";return this.mobile.length===this.maxMobile&&this.rightMobile.status?e+" btn-b":e},logoImage:function(){return this.$store.state.config.shop_logo}},onShow:function(){var t=this,i=t.$db.get("userToken");if(i||""!=i)return e.switchTab({url:"/pages/member/index/index"}),!0;t.timer=parseInt(t.$db.get("timer")),null!=t.timer&&t.timer>0&&(t.countDown(),t.verification=!1)},methods:{sendCode:function(){var e=this;this.rightMobile.status?(this.$common.loadToShow("发送中..."),setTimeout(function(){e.$common.loadToHide(),e.$api.sms({mobile:e.mobile,code:"reg"},function(t){t.status?(e.timer=60,e.verification=!1,e.$common.successToShow(t.msg),e.countDown(),e.btnb="btn btn-square btn-all btn-b"):e.$common.errorToShow(t.msg)})},1e3)):this.$common.errorToShow(this.rightMobile.msg)},countDown:function(){var t=this,i=setInterval(function(){t.timer--,e.setStorage({key:"timer",data:t.timer,success:function(){}}),t.timer<=0&&(t.verification=!0,clearInterval(i))},1e3)},toReg:function(){var t=this;if(this.rightMobile.status)if(this.code)if(this.pwd){var i={mobile:this.mobile,code:this.code,password:this.pwd},o=this.$db.get("invitecode");o&&(i.invitecode=o),this.$api.smsLogin(i,function(i){i.status?(t.$db.set("userToken",i.data),t.$common.successToShow("注册成功",function(){t.$db.del("uuid"),t.$db.del("invitecode");var i=t.$store.state.redirectPage?t.$store.state.redirectPage:"/pages/member/index/index";t.$store.commit({type:"redirect",page:""}),e.reLaunch({url:i})})):t.$common.errorToShow(i.msg)})}else this.$common.errorToShow("请输入登录密码");else this.$common.errorToShow("请输入短信验证码");else this.$common.errorToShow(this.rightMobile.msg)},toLogin:function(){this.$common.navigateTo("/pages/login/login/index1")}}};t.default=n}).call(this,i("6e42")["default"])},cf0c:function(e,t,i){"use strict";i.r(t);var o=i("c09d"),n=i.n(o);for(var s in o)"default"!==s&&function(e){i.d(t,e,function(){return o[e]})}(s);t["default"]=n.a},dbaf:function(e,t,i){"use strict";i.r(t);var o=i("27a7"),n=i("cf0c");for(var s in n)"default"!==s&&function(e){i.d(t,e,function(){return n[e]})}(s);i("9464");var r=i("2877"),a=Object(r["a"])(n["default"],o["a"],o["b"],!1,null,null,null);t["default"]=a.exports},fae6:function(e,t,i){"use strict";i("ab7f");var o=s(i("b0ce")),n=s(i("dbaf"));function s(e){return e&&e.__esModule?e:{default:e}}Page((0,o.default)(n.default))}},[["fae6","common/runtime","common/vendor"]]]);