(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/member/collection/index"],{"1f9b":function(t,i,e){"use strict";e.r(i);var s=e("2c46"),n=e("2276");for(var o in n)"default"!==o&&function(t){e.d(i,t,function(){return n[t]})}(o);e("6597");var a=e("2877"),c=Object(a["a"])(n["default"],s["a"],s["b"],!1,null,"5cfa7269",null);i["default"]=c.exports},2276:function(t,i,e){"use strict";e.r(i);var s=e("c23b"),n=e.n(s);for(var o in s)"default"!==o&&function(t){e.d(i,t,function(){return s[t]})}(o);i["default"]=n.a},"2c46":function(t,i,e){"use strict";var s=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"content"},[t.list.length?e("view",{staticClass:"collection"},[t._l(t.list,function(i,s){return e("view",{key:s,staticClass:"container_of_slide"},[i.goods?e("view",{staticClass:"slide_list",style:{transform:"translate3d("+i.slide_x+"px, 0, 0)"},attrs:{eventid:"60bff47e-2-"+s},on:{touchstart:function(i){t.touchStart(i,s)},touchend:function(i){t.touchEnd(i,s)},touchmove:function(i){t.touchMove(i,s)},tap:function(i){t.recover(s)}}},[e("view",{staticClass:"now-message-info",style:{width:t.Screen_width+"px"},attrs:{"hover-class":"uni-list-cell-hover",eventid:"60bff47e-0-"+s},on:{click:function(e){t.goodsDetail(i.goods_id)}}},[e("view",{staticClass:"icon-circle"},[e("image",{staticClass:"goods-img",attrs:{src:i.goods.image_url,mode:"aspectFill"}})]),e("view",{staticClass:"list-right"},[e("view",{staticClass:"list-title"},[t._v(t._s(i.goods.name))]),e("view",{staticClass:"red-price"},[t._v("￥"+t._s(i.goods.price))]),e("view",{staticClass:"list-detail"},[t._v(t._s(i.ctime))])]),t._m(0,!0)]),e("view",{staticClass:"group-btn"},[e("view",{staticClass:"removeM btn-div",attrs:{eventid:"60bff47e-1-"+s},on:{tap:function(i){t.collect(s)}}},[t._v("取消")])]),e("view",{staticStyle:{clear:"both"}})]):t._e()])}),e("uni-load-more",{attrs:{status:t.loadStatus,mpcomid:"60bff47e-0"}})],2):e("view",{staticClass:"collection-none"},[e("image",{staticClass:"collection-none-img",attrs:{src:"../../../static/image/order.png",mode:""}})])])},n=[function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",{staticClass:"list-right-1"},[e("image",{staticClass:"cell-ft-next icon",attrs:{src:"../../../static/image/right.png"}})])}];e.d(i,"a",function(){return s}),e.d(i,"b",function(){return n})},3683:function(t,i,e){"use strict";e("ab7f");var s=o(e("b0ce")),n=o(e("1f9b"));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(n.default))},"57b6":function(t,i,e){},6597:function(t,i,e){"use strict";var s=e("57b6"),n=e.n(s);n.a},c23b:function(t,i,e){"use strict";(function(t){Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var s=o(e("0b96")),n=e("4856");function o(t){return t&&t.__esModule?t:{default:t}}function a(t){return r(t)||l(t)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function l(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function r(t){if(Array.isArray(t)){for(var i=0,e=new Array(t.length);i<t.length;i++)e[i]=t[i];return e}}var u={mixins:[n.goods],components:{uniLoadMore:s.default},computed:{Screen_width:function(){return t.getSystemInfoSync().windowWidth}},data:function(){return{visible:!1,start_slide_x:0,btnWidth:0,startX:0,LastX:0,startTime:0,screenName:"",page:1,limit:10,list:[],loadStatus:"more"}},onLoad:function(){this.goodsCollectionList()},onShow:function(){t.getSystemInfoSync()},onReachBottom:function(){"more"===this.loadStatus&&this.goodsCollectionList()},methods:{goodsCollectionList:function(){var t=this,i={page:this.page,limit:this.limit};this.loadStatus="loading",this.$api.goodsCollectionList(i,function(i){if(i.status){var e=i.data.list;e.forEach(function(i){t.$set(i,"slide_x",0),i.ctime=t.$common.timeToDate(i.ctime)}),t.list=[].concat(a(t.list),a(e)),i.data.count>t.list.length?(t.page++,t.loadStatus="more"):t.loadStatus="noMore"}else t.$common.errorToShow(i.msg)})},cancelEvent:function(){this.visible=!1},touchStart:function(i,e){var s=this;this.startCilentY=i.touches[0].clientY,this.startTime=i.timeStamp,this.start_slide_x=this.list[e].slide_x,t.createSelectorQuery().selectAll(".group-btn").boundingClientRect().exec(function(t){null!=t[0]&&(s.btnWidth=-1*t[0][e].width)}),this.startX=i.touches[0].pageX,this.lastX=this.startX,this.list.forEach(function(t,i){i!==e&&(t.slide_x=0)})},touchMove:function(t,i){var e=t.touches[0].clientY,s=e-this.startCilentY;if("Y"===this.direction||Math.abs(s)>20||!0===t.currentTarget.dataset.disabled)this.direction="";else{var n=t.touches[0].pageX,o=n-this.lastX,a=this.list[i].slide_x+o;a<=0&&a>=this.btnWidth&&(this.list[i].slide_x=a),this.lastX=n}},touchEnd:function(t,i){var e=10,s=t.timeStamp,n=this.startX-this.lastX;Math.abs(s-this.startTime)>200&&(e=this.btnWidth/-2),this.list[i].slide_x=n>e?this.btnWidth:n<-1*e?0:this.start_slide_x},recover:function(t){this.list[t].slide_x=0},collect:function(t){var i=this,e={goods_id:this.list[t].goods_id};this.$api.goodsCollection(e,function(e){e.status?i.$common.successToShow(e.msg,function(){i.$nextTick(function(){i.list.splice(t,1)})}):i.$common.errorToShow(e.msg)})}}};i.default=u}).call(this,e("6e42")["default"])}},[["3683","common/runtime","common/vendor"]]]);