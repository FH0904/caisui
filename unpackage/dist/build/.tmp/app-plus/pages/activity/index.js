(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/activity/index"],{"1e8b":function(t,i,a){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{awardsConfig:{chance:!0,prize:[]},awardsList:{},animationData:{},btnDisabled:"",thanksarr:[],chishu:0,mold:1,r_flg:0,myPrizelist:[],jifen:0}},onLoad:function(){this.initdata(this)},onReady:function(t){},methods:{getmyPrize:function(){var t=this;this.$api.myLottery({page:1,limit:1e3},function(i){t.myPrizelist=i.data,t.r_flg=1})},openshadow:function(){this.r_flg=1},closeshadow:function(){this.r_flg=0},initdata:function(t){var i=this;this.$api.lotteryConfig(function(t){i.awardsConfig=t.data,i.chishu=t.data.user.day_remaining,i.jifen=t.data.user.jifen;i.awardsConfig.prize.length;i.awardsConfig.prize.forEach(function(t,i){t.index=i}),i.drawAwardRoundel()})},drawAwardRoundel:function(){for(var t=this.awardsConfig.prize,i=[],a=1/t.length*360,e=0;e<t.length;e++)i.push({turn:e*a+"deg",lineTurn:e*a+a/2+"deg",award:t[e].title,type:t[e].type,id:t[e].id});this.chishu<1&&this.jifen<this.awardsConfig.integral_exchange?this.btnDisabled="disabled":this.awardsConfig.user.lottery?this.btnDisabled="":this.btnDisabled="disabled",this.awardsList=i},playReward:function(){var t=this;if(this.chishu<1){if(this.jifen<this.awardsConfig.integral_exchange)return this.$common.errorToShow("抽奖次数已经用完"),!1;this.jifen>=this.awardsConfig.integral_exchange&&this.$common.modelShow("提示","本次抽奖将消耗"+this.awardsConfig.integral_exchange+"积分，确认吗？",function(i){t.lottery()})}else this.lottery()},lottery:function(){var i=this;this.$api.lottery(function(a){if(a.status){var e=0,s=a.data.result;i.awardsList.forEach(function(t,i){t.id==s.id&&(e=i)});var n=i.awardsConfig.prize,r=4,c=3686;i.runDeg=i.runDeg||0;i.runDeg;i.runDeg=i.runDeg+(360-i.runDeg%360)+(360*r-e*(360/n.length))+1;var o=t.createAnimation({duration:c,timingFunction:"ease"});o.rotate(i.runDeg).step(),i.animationData=o.export(),i.btnDisabled="disabled";var l=i.awardsConfig,d=l.prize[e].type;if(i.jifen=i.chishu<=0?i.jifen-l.integral_exchange>=0?i.jifen-l.integral_exchange:0:i.jifen,i.chishu=i.chishu>1?i.chishu-1:0,0!=d){var u=i.getPrizeMsg(l.prize[e].type,l.prize[e].val);setTimeout(function(){this.$common.modelShow("恭喜","获得"+l.prize[e].title+"，"+u,function(t){setTimeout(function(){document.getElementById("zhuanpano").style=""},1e3)},!1),a.data.is_lottery.lottery?this.btnDisabled="":this.btnDisabled="disabled"}.bind(i),c)}else setTimeout(function(){this.$common.modelShow("很遗憾","没中奖，再接再厉！",function(t){setTimeout(function(){document.getElementById("zhuanpano").style=""},1e3)},!1),a.data.is_lottery.lottery?this.btnDisabled="":this.btnDisabled="disabled"}.bind(i),c)}else i.$common.modelShow("提示",a.msg)})},getPrizeMsg:function(t,i){var a="";switch(t){case 1:a="积分："+i+"个";break;case 2:a="优惠券：“"+i+"” 一张";break;case 3:a="余额："+i+"元";break;case 4:a="商品：“"+i+"”";break;default:break}return a}}};i.default=a}).call(this,a("6e42")["default"])},4304:function(t,i,a){"use strict";a.r(i);var e=a("1e8b"),s=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(i,t,function(){return e[t]})}(n);i["default"]=s.a},"558a":function(t,i,a){"use strict";a.r(i);var e=a("dc84"),s=a("4304");for(var n in s)"default"!==n&&function(t){a.d(i,t,function(){return s[t]})}(n);a("7fca");var r=a("2877"),c=Object(r["a"])(s["default"],e["a"],e["b"],!1,null,"23816d17",null);i["default"]=c.exports},"7fca":function(t,i,a){"use strict";var e=a("cc34"),s=a.n(e);s.a},cc34:function(t,i,a){},dc84:function(t,i,a){"use strict";var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("view",{staticClass:"conbox"},[a("view",{staticClass:"container"},[a("image",{staticClass:"cont",attrs:{src:"../../static/img/bg.png",mode:""}}),a("image",{staticClass:"caidai",attrs:{src:"../../static/img/caidai.png",mode:""}}),a("view",{staticClass:"header"},[a("view",{staticClass:"header-title"},[a("view",{staticClass:"left"},[t._v("免费次数："),a("text",{staticStyle:{color:"#E4431A"}},[t._v(t._s(t.chishu))])]),a("view",{staticClass:"left"},[t._v("账户积分："),a("text",{staticStyle:{color:"#E4431A"}},[t._v(t._s(t.jifen))])]),a("view",{staticClass:"right",attrs:{eventid:"84e1beb2-0"},on:{click:t.getmyPrize}},[t._v("抽奖记录 >")])])]),a("view",{staticClass:"main"},[a("view",{staticClass:"canvas-container"},[a("view",{staticClass:"canvas-content",attrs:{animation:t.animationData,id:"zhuanpano"}},[a("view",{staticClass:"canvas-line"},t._l(t.awardsList,function(t,i){return a("view",{key:i,staticClass:"canvas-litem",style:[{transform:"rotate("+t.lineTurn+")"}]})})),a("view",{staticClass:"canvas-list"},t._l(t.awardsList,function(i,e){return a("view",{key:e,staticClass:"canvas-item",style:[{zIndex:e}]},[a("view",{staticClass:"canvas-item-text",style:[{transform:"rotate("+i.turn+")"}]},[a("text",[t._v(t._s(i.award))]),0==i.type?a("image",{staticClass:"canvas-item-text-img",attrs:{src:"../../static/img/kongjiang.png"}}):t._e(),1==i.type?a("image",{staticClass:"canvas-item-text-img",attrs:{src:"../../static/img/jifen.png"}}):t._e(),2==i.type?a("image",{staticClass:"canvas-item-text-img",attrs:{src:"../../static/img/youhuiquan.png"}}):t._e(),3==i.type?a("image",{staticClass:"canvas-item-text-img",attrs:{src:"../../static/img/yue.png"}}):t._e(),4==i.type?a("image",{staticClass:"canvas-item-text-img",attrs:{src:"../../static/img/shangpin.png"}}):t._e()])])}))]),a("view",{staticClass:"canvas-btn",class:t.btnDisabled,attrs:{eventid:"84e1beb2-1"},on:{tap:t.playReward}},[t._v("开始")])])]),a("view",{staticClass:"typecheckbox"}),a("view",{staticClass:"guize"},[a("view",{staticClass:"title"},[t._v("规则说明")]),t._l(t.awardsConfig.rule,function(i,e){return a("view",{key:e,staticClass:"g_item"},[t._v(t._s(i))])})],2),a("view",{staticClass:"typecheckbox2"}),t.r_flg?a("view",{staticClass:"shadowbox",attrs:{eventid:"84e1beb2-3"},on:{click:t.closeshadow}},[a("view",{staticClass:"myrewards",attrs:{eventid:"84e1beb2-2"},on:{click:function(i){i.stopPropagation(),t.openshadow(i)}}},[a("view",{staticClass:"title"},[t._v("抽奖记录")]),a("view",{staticClass:"itembox"},t._l(t.myPrizelist,function(i,e){return a("view",{key:e,staticClass:"item"},[a("div",{staticClass:"t"},[a("text",{staticClass:"left"},[t._v(t._s(i.name))]),a("text",{staticClass:"right"},[t._v(t._s(i.ctime_name))])]),a("div",{staticClass:"b"},[t._v(t._s(i.prize_content))])])}))])]):t._e()])])},s=[];a.d(i,"a",function(){return e}),a.d(i,"b",function(){return s})},ed13:function(t,i,a){"use strict";a("ab7f");var e=n(a("b0ce")),s=n(a("558a"));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(s.default))}},[["ed13","common/runtime","common/vendor"]]]);