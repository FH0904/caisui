(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/member/take_delivery/index"],{"0dad":function(t,s,e){"use strict";var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"content"},[e("view",{staticClass:"content-top"},[t._m(0),e("view",{staticClass:"search"},[e("view",{staticClass:"search-c"},[e("image",{staticClass:"icon search-icon",attrs:{src:"../../../static/image/zoom.png"}}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.key,expression:"key"}],staticClass:"search-input",attrs:{"placeholder-class":"search-input-p",placeholder:"请输入完整提货单号、订单号、提货手机号",eventid:"447ffbe2-0"},domProps:{value:t.key},on:{input:function(s){s.target.composing||(t.key=s.target.value)}}})]),e("button",{staticClass:"btn btn-g",attrs:{"hover-class":"btn-hover2",eventid:"447ffbe2-1"},on:{click:t.search}},[t._v("查询")])],1),t.allData.length?e("view",[e("checkbox-group",{attrs:{eventid:"447ffbe2-2",mpcomid:"447ffbe2-0"},on:{change:t.checkboxChange}},[e("view",{staticClass:"img-list"},t._l(t.allData,function(s,a){return e("view",{key:a,staticClass:"img-list-c"},[e("view",{staticClass:"img-list-title"},[e("view",{staticClass:"ilt-left"},[e("text",{staticClass:"color-6"},[t._v("订单号:")]),e("text",{staticClass:"color-9"},[t._v(t._s(s.order_id))])]),e("view",{staticClass:"ilt-right  color-9"},[t._v(t._s(s.status_name))])]),e("view",{staticClass:"img-list-bot"},[e("label",{staticClass:"uni-list-cell uni-list-cell-pd"},[s.disabled?t._e():e("view",{staticClass:"img-list-checkbox"},[s.disabled?e("checkbox",{staticClass:"checkboxNo",attrs:{color:"#FF7159",value:s.id,checked:s.checked,disabled:s.disabled}}):e("checkbox",{attrs:{color:"#FF7159",value:s.id,checked:s.checked,disabled:s.disabled}})],1)]),e("view",{staticClass:"img-list-right"},t._l(s.goods,function(s,a){return e("view",{key:a,staticClass:"img-list-content"},[e("view",{staticClass:"img-list-item"},[e("image",{staticClass:"img-list-item-l",attrs:{src:s.image_url,mode:"aspectFill"}}),e("view",{staticClass:"img-list-item-r"},[e("view",{staticClass:"goods-name list-goods-name"},[t._v(t._s(s.name))]),e("view",{staticClass:"goods-item-c"},[e("view",{staticClass:"goods-buy"},[e("view",{staticClass:"goods-salesvolume"},[t._v("规格："+t._s(s.addon))]),e("view",{staticClass:"goods-salesvolume"},[t._v("数量："+t._s(s.nums))]),e("view",{staticClass:"goods-salesvolume"},[t._v("SN码："+t._s(s.sn))]),e("view",{staticClass:"goods-salesvolume"},[t._v("BN码："+t._s(s.bn))])])])])])])}))],1)])}))])],1):t._e()]),t.allData.length?e("view",{staticClass:"button-bottom"},[t.checkedIds.length?e("button",{staticClass:"btn btn-b btn-square",attrs:{eventid:"447ffbe2-3"},on:{click:t.write}},[t._v("确认核销")]):e("button",{staticClass:"btn btn-b btn-square completed"},[t._v("请选择待核销订单")])],1):t._e()])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("view",{staticClass:"ad"},[e("image",{staticClass:"ad-img",attrs:{src:"../../../static/demo-img/banner.png",mode:"widthFix"}})])}];e.d(s,"a",function(){return a}),e.d(s,"b",function(){return i})},1308:function(t,s,e){"use strict";var a=e("1fc6"),i=e.n(a);i.a},"1fc6":function(t,s,e){},"75c8":function(t,s,e){"use strict";e.r(s);var a=e("0dad"),i=e("866d");for(var c in i)"default"!==c&&function(t){e.d(s,t,function(){return i[t]})}(c);e("1308");var n=e("2877"),o=Object(n["a"])(i["default"],a["a"],a["b"],!1,null,null,null);s["default"]=o.exports},"7c42":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var a={data:function(){return{key:"",isgo:!1,isgotext:"确认核销",allData:[]}},onLoad:function(t){t.id&&(this.key=t.id),this.getLadingInfo()},computed:{checkedIds:function(){var t=[];return this.allData.forEach(function(s){!s.disabled&&s.checked&&1===s.status&&t.push(s.id)}),t}},methods:{checkboxChange:function(t){var s=t.detail.value;this.allData.forEach(function(t){s.includes(t.id)?t.checked=!0:t.checked=!1})},getLadingInfo:function(){var t=this;if(this.key){var s={key:this.key};this.$api.ladingInfo(s,function(s){s.status?t.allData=t.formatData(s.data):(t.allData=[],t.$common.modelShow("提示",s.msg,function(){}))})}},search:function(){if(""==this.key)return this.$common.errorToShow("请输入查询关键字"),!1;this.getLadingInfo()},isGoWrite:function(t){var s=!1;2==t.order_info.pay_status&&3==t.order_info.ship_status?(s=!0,this.lading_id=t.id,this.goodsList=t.goods,this.allData=t):this.$common.modelShow("无法核销","订单必须支付并已发货才可以核销",function(){}),this.isgo=s},formatData:function(t){var s=this;return t.forEach(function(t){2===t.status?(s.$set(t,"checked",!1),s.$set(t,"disabled",!0)):(s.$set(t,"checked",!0),s.$set(t,"disabled",!1))}),t},write:function(){var t=this;this.$common.modelShow("提示","您确认核销吗？",function(s){var e={lading_ids:t.checkedIds.join()};t.$api.ladingExec(e,function(s){s.status&&t.$common.successToShow(s.msg,t.afterChangeDataStatus())})})},afterChangeDataStatus:function(){var t=this;this.allData.forEach(function(s){t.checkedIds.indexOf(s.id)>-1&&(s.status=2,s.checked=!1,s.disabled=!0)})}}};s.default=a},"866d":function(t,s,e){"use strict";e.r(s);var a=e("7c42"),i=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(s,t,function(){return a[t]})}(c);s["default"]=i.a},b3f6:function(t,s,e){"use strict";e("ab7f");var a=c(e("b0ce")),i=c(e("75c8"));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(i.default))}},[["b3f6","common/runtime","common/vendor"]]]);