(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/member/order/invitation_group"],{1187:function(t,e,i){"use strict";i.r(e);var a=i("1d61"),s=i("d276");for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i("1868");var n=i("2877"),r=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},1868:function(t,e,i){"use strict";var a=i("8775"),s=i.n(a);s.a},"1d61":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticStyle:{width:"100%",height:"300rpx",background:"#FFFFFF",position:"absolute",left:"0",bottom:"0"}},[i("view",{staticClass:"share-pop"},t._l(t.providerList,function(e,a){return i("view",{key:a,staticClass:"share-item",attrs:{eventid:"77ca82e0-0-"+a},on:{click:function(i){t.clickHandler(e)}}},[i("image",{attrs:{src:e.img,mode:""}}),i("view",{},[t._v(t._s(e.name))])])})),i("view",{staticClass:"button-bottom"},[i("button",{staticClass:"btn btn-w btn-square",attrs:{eventid:"77ca82e0-1"},on:{click:function(e){t.close()}}},[t._v("关闭")])],1)])},s=[];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},"3cda":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"content"},[i("view",{staticClass:"ig-top"},[i("view",{staticClass:"ig-top-t"},[i("view",{},[t._v("剩余时间："),i("uni-countdown",{attrs:{day:t.lasttime.day,hour:t.lasttime.hour,minute:t.lasttime.minute,second:t.lasttime.second,mpcomid:"6db61a9a-0"}})],1)]),i("view",{staticClass:"ig-top-m"},[t._l(t.teamInfo.list,function(e,a){return i("view",{key:a,staticClass:"user-head-img-c"},[e.id==e.team_id?i("view",{staticClass:"user-head-img-tip"},[t._v("拼主")]):t._e(),i("image",{staticClass:"user-head-img cell-hd-icon have-none",attrs:{src:e.user_avatar,mode:""}})])}),t._l(t.teamInfo.team_nums,function(e,a){return t.teamInfo.team_nums?i("view",{key:e,staticClass:"user-head-img-c uhihn"},[i("text",[t._v("?")])]):t._e()})],2),i("view",{staticClass:"ig-top-b"},[i("view",{staticClass:"igtb-top"},[t._v("还差"),i("text",{staticClass:"red-price"},[t._v(t._s(t.teamInfo.team_nums))]),t._v("人，赶快邀请好友来拼单吧")]),i("view",{staticClass:"igtb-mid"},[i("button",{staticClass:"btn",attrs:{eventid:"6db61a9a-0"},on:{click:function(e){t.goShare()}}},[t._v("邀请好友拼单")])],1),i("view",{staticClass:"igtb-bot"},[t._v("分享好友越多，成团越快")])])]),i("lvv-popup",{ref:"share",attrs:{position:"bottom",mpcomid:"6db61a9a-2"}},[i("shareByApp",{attrs:{shareType:3,goodsId:t.goodsInfo.goods_id,teamId:t.teamInfo.team_id,groupId:t.teamInfo.rule_id,shareImg:t.goodsInfo.image_url,shareTitle:t.goodsInfo.name,shareContent:t.goodsInfo.brief,shareHref:t.shareHref,eventid:"6db61a9a-1",mpcomid:"6db61a9a-1"},on:{close:function(e){t.closeShare()}}})],1),i("view",{staticClass:"cell-group margin-cell-group"},[i("view",{staticClass:"cell-item"},[t._m(0),i("view",{staticClass:"cell-item-ft"},[i("text",{staticClass:"cell-ft-text"},[t._v(t._s(t.goodsInfo.name))])])]),i("view",{staticClass:"cell-item"},[t._m(1),i("view",{staticClass:"cell-item-ft"},[i("text",{staticClass:"cell-ft-text"},[t._v(t._s(t.orderInfo.ctime))])])]),t._m(2)])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cell-item-hd"},[i("view",{staticClass:"cell-hd-title"},[t._v("商品名称")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cell-item-hd"},[i("view",{staticClass:"cell-hd-title"},[t._v("拼单时间")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",{staticClass:"cell-item"},[i("view",{staticClass:"cell-item-hd"},[i("view",{staticClass:"cell-hd-title"},[t._v("拼单须知")])]),i("view",{staticClass:"cell-item-ft group-notice"},[i("text",{staticClass:"cell-ft-text"},[t._v("* 好友拼单")]),i("text",{staticClass:"cell-ft-text"},[t._v("* 人满发货")]),i("text",{staticClass:"cell-ft-text"},[t._v("* 人不满退款")])])])}];i.d(e,"a",function(){return a}),i.d(e,"b",function(){return s})},"525e":function(t,e,i){"use strict";var a=i("5c81"),s=i.n(a);s.a},"5c81":function(t,e,i){},8668:function(t,e,i){"use strict";i.r(e);var a=i("a283"),s=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=s.a},8775:function(t,e,i){},a283:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=c(i("67a2")),s=c(i("4b73")),o=(i("7214"),i("99f4")),n=c(i("1187")),r=c(i("120e"));c(i("2508"));function c(t){return t&&t.__esModule?t:{default:t}}var l={components:{lvvPopup:a.default,uniCountdown:s.default,share:n.default,shareByApp:r.default},data:function(){return{myShareCode:"",shareType:3,providerList:[],swiper:{indicatorDots:!0,autoplay:!0,interval:3e3,duration:800},goodsInfo:[],teamInfo:[],favLogo:["../../../static/image/ic-me-collect.png","../../../static/image/ic-me-collect2.png"],horizontal:"right",vertical:"bottom",direction:"vertical",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#FF7159"},query:"",indicatorDots:!1,autoplay:!1,interval:2e3,duration:500,lasttime:{day:0,hour:0,minute:0,second:0},userToken:0,time:0,order_id:"",orderInfo:{}}},onLoad:function(t){var e,i;t.order_id?this.order_id=t.order_id:this.$common.errorToShow("参数错误");var a=getCurrentPages(),s=a[a.length-2];"undefined"!=typeof s&&(e=s.$vm.teamInfo,i=s.$vm.orderInfo),e&&i?(this.teamInfo=e,this.orderInfo=i,this.goodsInfo=i.items[0]):(this.orderDetail(),this.getTeam());var o=Date.parse(new Date)/1e3;this.lasttime=this.$common.timeToDateObj(t.close_time-o),this.getMyShareCode()},computed:{shareHref:function(){var t=getCurrentPages(),e=t[t.length-1];return o.apiBaseUrl+"wap/#/"+e.route+"?scene="+this.query}},onReachBottom:function(){2===this.current&&"more"===this.goodsComments.loadStatus&&this.getGoodsComments()},methods:{getTeam:function(){var t=this;this.$api.getOrderPintuanTeamInfo({order_id:this.order_id},function(e){e.status?(t.teamInfo={list:e.data.teams,current_count:e.data.teams.length,people_number:e.data.people_number,team_nums:e.data.team_nums,close_time:e.data.close_time,id:e.data.id,team_id:e.data.team_id,rule_id:e.data.rule_id},console.log(t.lasttime)):t.$common.errorToShow(e.msg)})},orderDetail:function(){var t=this,e={order_id:t.order_id};t.$api.orderDetail(e,function(e){if(e.status){var i=e.data;null!==i.ctime&&(i.ctime=t.$common.timeToDate(i.ctime)),t.orderInfo=i,t.goodsInfo=i.items[0]}else t.$common.errorToShow(e.msg)})},close:function(){this.$emit("close")},clickHandler:function(t){"poster"===t.cate?this.createPoster():this.share(t)},toshow:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;1==t&&(this.lvvpopref_type=1),0!==e&&(this.team_id=e),this.$refs.lvvpopref.show()},toclose:function(){this.$refs.lvvpopref.close()},goShare:function(){this.$refs.share.show()},closeShare:function(){this.$refs.share.close()},getMyShareCode:function(){var t=this,e=this.$db.get("userToken");e&&""!=e&&this.$api.shareCode({},function(e){e.status&&(t.myShareCode=e.data?e.data:"")})}},onShareAppMessage:function(){var t=this.myShareCode?this.myShareCode:"",e=this.teamInfo.list[0].team_id,i=this.$common.shareParameterDecode("type=5&invite="+t+"&id="+this.goodsInfo.goods_id+"&team_id="+e),a="/pages/share/jump?scene="+i;return console.log(a),{title:this.goodsInfo.name,imageUrl:this.goodsInfo.image_url,path:a}}};e.default=l},ad70:function(t,e,i){"use strict";i.r(e);var a=i("3cda"),s=i("8668");for(var o in s)"default"!==o&&function(t){i.d(e,t,function(){return s[t]})}(o);i("525e");var n=i("2877"),r=Object(n["a"])(s["default"],a["a"],a["b"],!1,null,null,null);e["default"]=r.exports},ba82:function(t,e,i){"use strict";i("ab7f");var a=o(i("b0ce")),s=o(i("ad70"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},c110:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=s(i("a34a"));i("99f4");function s(t){return t&&t.__esModule?t:{default:t}}function o(t,e,i,a,s,o,n){try{var r=t[o](n),c=r.value}catch(l){return void i(l)}r.done?e(c):Promise.resolve(c).then(a,s)}function n(t){return function(){var e=this,i=arguments;return new Promise(function(a,s){var n=t.apply(e,i);function r(t){o(n,a,s,r,c,"next",t)}function c(t){o(n,a,s,r,c,"throw",t)}r(void 0)})}}var r={props:{goodsId:{type:Number,default:0},shareImg:{type:String,default:""},shareTitle:{type:String,default:""},shareContent:{type:String,default:""},shareHref:{type:String,default:""}},data:function(){return{shareType:0,providerList:[]}},mounted:function(){var e=this;t.getProvider({service:"share",success:function(t){for(var i=[],a=0;a<t.provider.length;a++)switch(t.provider[a]){case"weixin":i.push({name:"分享到微信好友",cate:"share",id:"weixin",img:"../../../static/image/ic-wechat.png",sort:0}),i.push({name:"分享到微信朋友圈",cate:"share",id:"weixin",type:"WXSenceTimeline",img:"../../../static/image/circle-of-friends.png",sort:1});break;case"qq":i.push({name:"分享到QQ",cate:"share",id:"qq",img:"../../../static/image/qq.png",sort:3});break;default:break}i.push({name:"生成海报",cate:"poster",id:"poster",img:"../../../static/image/poster.png",sort:5}),e.providerList=i.sort(function(t,e){return t.sort-e.sort})},fail:function(t){}})},methods:{close:function(){this.$emit("close")},clickHandler:function(t){"poster"===t.cate?this.createPoster():this.share(t)},createPoster:function(){var t=this,e={id:this.goodsId,type:1},i=getCurrentPages(),a=(i[i.length-1],this.$db.get("userToken"));a&&(e.user_id=a),this.$api.createPoster(e,function(e){e.status?(t.close(),t.$common.navigateTo("/pages/share?poster="+e.data)):t.$common.errorToShow(e.msg)})},share:function(){var e=n(a.default.mark(function e(i){var s;return a.default.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(s={provider:i.id,scene:i.type&&"WXSenceTimeline"===i.type?"WXSenceTimeline":"WXSceneSession",type:this.shareType,success:function(e){t.showModal({content:"分享成功",showCancel:!1})},fail:function(e){t.showModal({content:e.errMsg,showCancel:!1})},complete:function(){}},s.summary=this.shareContent?this.shareContent:"",s.imageUrl=this.shareImg?this.shareImg:"",s.title=this.shareTitle?this.shareTitle:"",s.href=this.shareHref?this.shareHref:"",0!==s.type||"iOS"!==plus.os.name){e.next=9;break}return e.next=8,this.compress();case 8:s.imageUrl=e.sent;case 9:1===s.type&&"qq"===s.provider&&(s.href=this.shareHref,s.title=this.shareTitle),t.share(s);case 11:case"end":return e.stop()}},e,this)}));function i(t){return e.apply(this,arguments)}return i}(),compress:function(){var e=this.shareImg;return new Promise(function(i){var a=plus.io.convertAbsoluteFileSystem(e.replace("file://",""));plus.io.resolveLocalFileSystemURL(a,function(a){a.file(function(a){a.size>20480&&plus.zip.compressImage({src:e,dst:e.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG"),width:"10%",height:"10%",quality:1,overwrite:!0},function(t){var a=e.replace(".jpg","2222.jpg").replace(".JPG","2222.JPG");i(a)},function(e){t.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})})})},function(e){t.showModal({content:"分享图片太大,需要请重新选择图片!",showCancel:!1})})})}}};e.default=r}).call(this,i("6e42")["default"])},d276:function(t,e,i){"use strict";i.r(e);var a=i("c110"),s=i.n(a);for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);e["default"]=s.a}},[["ba82","common/runtime","common/vendor"]]]);