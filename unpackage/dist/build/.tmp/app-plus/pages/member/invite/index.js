(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/member/invite/index"],{"1e60":function(t,e,i){"use strict";i.r(e);var a=i("f416"),s=i("d444");for(var n in s)"default"!==n&&function(t){i.d(e,t,function(){return s[t]})}(n);i("7cf9");var o=i("2877"),c=Object(o["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=c.exports},"7cf9":function(t,e,i){"use strict";var a=i("8ca3"),s=i.n(a);s.a},"8ca3":function(t,e,i){},"9b57":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;i("99f4");var a={data:function(){return{myShareCode:"",code:"",money:0,number:0,is_superior:!1,inviteKey:"",imageUrl:"/static/image/share_image.png"}},computed:{appTitle:function(){return this.$store.state.config.shop_name}},onShow:function(){this.getInviteData(),this.getMyShareCode()},methods:{getInviteData:function(){var t=this;this.$api.myInvite(function(e){t.code=e.data.code,t.money=e.data.money,t.number=e.data.number,t.is_superior=e.data.is_superior})},toMoney:function(){this.$common.navigateTo("../balance/details?status=5")},toList:function(){this.$common.navigateTo("./list")},setMyInvite:function(){var t=this,e={code:this.inviteKey};this.$api.setMyInvite(e,function(e){e.status?(t.$common.successToShow("邀请码填写成功"),t.is_superior=!0):t.$common.errorToShow(e.msg)})},createPoster:function(){var t=this,e={type:2},i=getCurrentPages(),a=(i[i.length-1],this.$db.get("userToken"));a&&(e.token=a),this.$api.createPoster(e,function(e){e.status?t.$common.navigateTo("/pages/share?poster="+e.data):t.$common.errorToShow(e.msg)})},getMyShareCode:function(){var t=this,e=this.$db.get("userToken");e&&""!=e&&this.$api.shareCode({},function(e){e.status&&(t.myShareCode=e.data?e.data:"")})}},onShareAppMessage:function(){var t=this.myShareCode?this.myShareCode:"",e=this.$common.shareParameterDecode("type=3&invite="+t),i="/pages/share/jump?scene="+e;return{title:this.$store.state.config.share_title,imageUrl:this.$store.state.config.share_image,path:i}}};e.default=a},d128:function(t,e,i){"use strict";i("ab7f");var a=n(i("b0ce")),s=n(i("1e60"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},d444:function(t,e,i){"use strict";i.r(e);var a=i("9b57"),s=i.n(a);for(var n in a)"default"!==n&&function(t){i.d(e,t,function(){return a[t]})}(n);e["default"]=s.a},f416:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("image",{staticClass:"invite-bg",attrs:{src:"../../../static/image/invite-bg.png",mode:""}}),i("view",{staticClass:"invite-c"},[i("view",{staticClass:"invite-w"},[i("view",{staticClass:"invite-w-t"},[t._v("我的专属邀请码")]),i("text",{staticClass:"invite-w-num"},[t._v(t._s(t.code))]),i("view",{staticClass:"invite-w-detail"},[t._v("快去分享您的邀请码吧，让更多的好友加入到【"+t._s(t.appTitle)+"】，您也可以获得丰厚的奖励！")]),i("view",{staticClass:"invite-w-bot"},[i("view",{attrs:{bindtap:"commission",eventid:"4c5419ec-0"},on:{click:t.toMoney}},[i("image",{staticClass:"invite-w-bot-ic",attrs:{src:"../../../static/image/ic-earnings.png"}}),i("text",{staticClass:"invite-w-bot-red"},[t._v("￥"+t._s(t.money)+"元")]),i("text",{staticClass:"invite-w-bot-gray"},[t._v("邀请收益")])]),i("view",{attrs:{bindtap:"recommendlist",eventid:"4c5419ec-1"},on:{click:t.toList}},[i("image",{staticClass:"invite-w-bot-ic",attrs:{src:"../../../static/image/ic-number.png"}}),i("text",{staticClass:"invite-w-bot-red"},[t._v(t._s(t.number)+"人")]),i("text",{staticClass:"invite-w-bot-gray"},[t._v("邀请人数")])])])]),t.is_superior?t._e():i("view",{staticClass:"invite-w"},[i("text",{staticClass:"invite-w-t-blue"},[t._v("谁推荐你的？")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.inviteKey,expression:"inviteKey"}],staticClass:"invite-w-input",attrs:{placeholder:"请输入推荐人邀请码",eventid:"4c5419ec-2"},domProps:{value:t.inviteKey},on:{input:function(e){e.target.composing||(t.inviteKey=e.target.value)}}}),i("view",{staticClass:"invite-w-btn",attrs:{eventid:"4c5419ec-3"},on:{click:t.setMyInvite}},[t._v("提交")])]),i("view",{staticClass:"invite-btn"},[i("button",{staticClass:"share btn",attrs:{eventid:"4c5419ec-4"},on:{click:function(e){t.createPoster()}}},[i("image",{attrs:{src:"../../../static/image/ic-img.png"}})])],1)])])},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})}},[["d128","common/runtime","common/vendor"]]]);