(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-member-distribution-apply_state"],{"0723":function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={data:function(){return{info:{}}},onLoad:function(){var t=this;t.$api.getDistributioninfo({check_condition:!0},function(a){a.status?(a.data.need_apply&&0==a.data.condition_status&&t.$common.redirectTo("/pages/member/distribution/index"),1==a.data.verify&&t.$common.redirectTo("/pages/member/distribution/user"),t.info=a.data):t.$common.errorToShow(a.msg)})},methods:{}};a.default=s},"3ac6":function(t,a,i){var s=i("efc9");"string"===typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);var e=i("4f06").default;e("0f197360",s,!0,{sourceMap:!1,shadowMode:!1})},"5a52":function(t,a,i){"use strict";var s=function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"apply-c"},[i("v-uni-view",{staticClass:"apply-top fsz36 color-o"},[t._v("恭喜，您的申请已提交！")]),i("v-uni-view",{staticClass:"apply-bot"},[i("v-uni-view",{staticClass:"apply-bot-sop"},[i("v-uni-view",{staticClass:"abs-img"},[i("v-uni-image",{staticClass:"icon",attrs:{src:"../../../static/image/del.png",mode:""}})],1),i("v-uni-view",{staticClass:"color-9 abs-mid"},[i("v-uni-image",{staticClass:"dot",attrs:{src:"../../../static/image/dot-o.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"../../../static/image/dot-o.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"../../../static/image/dot-o.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"../../../static/image/dot-o.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"../../../static/image/dot-o.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"../../../static/image/dot-o.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"../../../static/image/dot-g.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"../../../static/image/dot-g.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"../../../static/image/dot-g.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"../../../static/image/dot-g.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"../../../static/image/dot-g.png",mode:""}}),i("v-uni-image",{staticClass:"dot",attrs:{src:"../../../static/image/dot-g.png",mode:""}})],1),i("v-uni-view",{staticClass:"abs-img"},[i("v-uni-image",{staticClass:"icon",attrs:{src:"../../../static/image/close.png",mode:""}})],1)],1),i("v-uni-view",{staticClass:"apply-bot-text"},[i("v-uni-view",{staticClass:"abt-c"},[i("v-uni-view",{staticClass:"color-6 fsz30"},[t._v("申请提交成功")]),i("v-uni-view",{staticClass:"color-9 fsz24"},[t._v(t._s(t.info.ctime))])],1),i("v-uni-view",{staticClass:"abt-c"},[2==t.info.verify?i("v-uni-view",{staticClass:"color-6 fsz30"},[t._v("等待审核")]):t._e(),3==t.info.verify?i("v-uni-view",{staticClass:"color-6 fsz30"},[t._v("审核驳回")]):t._e(),1==t.info.verify?i("v-uni-view",{staticClass:"color-6 fsz30"},[t._v("审核通过")]):t._e()],1)],1)],1)],1)],1)},e=[];i.d(a,"a",function(){return s}),i.d(a,"b",function(){return e})},afd4:function(t,a,i){"use strict";i.r(a);var s=i("0723"),e=i.n(s);for(var o in s)"default"!==o&&function(t){i.d(a,t,function(){return s[t]})}(o);a["default"]=e.a},c2f0:function(t,a,i){"use strict";var s=i("3ac6"),e=i.n(s);e.a},e298:function(t,a,i){"use strict";i.r(a);var s=i("5a52"),e=i("afd4");for(var o in e)"default"!==o&&function(t){i.d(a,t,function(){return e[t]})}(o);i("c2f0");var n=i("2877"),c=Object(n["a"])(e["default"],s["a"],s["b"],!1,null,"7b270a4a",null);a["default"]=c.exports},efc9:function(t,a,i){a=t.exports=i("2350")(!1),a.push([t.i,".content[data-v-7b270a4a]{height:calc(100vh - 44px);padding-top:%?50?%}.apply-c[data-v-7b270a4a]{margin:%?40?% auto;text-align:center;padding:%?26?%;border-radius:%?30?%;-webkit-box-shadow:0 0 10px #aaa;box-shadow:0 0 10px #aaa;width:%?670?%;min-height:%?400?%;background-color:#fff}.apply-top[data-v-7b270a4a]{margin-top:%?40?%}.apply-bot[data-v-7b270a4a]{width:100%;text-align:center}.apply-bot-sop[data-v-7b270a4a]{position:relative;height:%?60?%;width:65%;margin:%?40?% auto %?20?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;line-height:1.7555\n\t/* vertical-align: middle; */}.apply-bot-sop>uni-view[data-v-7b270a4a]{display:inline-block}.abs-img[data-v-7b270a4a]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.abs-img uni-image[data-v-7b270a4a]{position:relative;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%)}.abs-mid[data-v-7b270a4a]{\n\t/* font-size: 70upx; */-webkit-box-flex:2;-webkit-flex:2;-ms-flex:2;flex:2;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.apply-bot-text[data-v-7b270a4a]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex}.abt-c[data-v-7b270a4a]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.dot[data-v-7b270a4a]{width:%?8?%;height:%?8?%;margin:0 %?4?%}",""])}}]);