(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-goods-index-index"],{"23d1":function(t,e,i){var o=i("8fd2");"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var s=i("4f06").default;s("afb26eb2",o,!0,{sourceMap:!1,shadowMode:!1})},3285:function(t,e,i){"use strict";var o=i("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("7f7f"),i("28a5");var s=o(i("f499")),a=o(i("75fc"));i("ac6a");var n=o(i("a4bb")),d=o(i("934b")),c=o(i("df88")),l=o(i("510b")),r=o(i("2f88")),u=o(i("3492")),v=o(i("57a7")),m=(i("7c6e"),i("9c72")),g=o(i("8bca")),p=o(i("32f5")),h=o(i("526a")),f={components:{uniSegmentedControl:d.default,lvvPopup:c.default,uniNumberBox:l.default,uniRate:r.default,uniLoadMore:u.default,uniFab:v.default,spec:g.default,shareByH5:p.default},data:function(){return{myShareCode:"",swiper:{indicatorDots:!0,autoplay:!0,interval:3e3,duration:800},items:["图文详情","商品参数","买家评论"],current:0,goodsId:0,goodsInfo:{},cartNums:0,product:{},goodsParams:[],goodsComments:{loadStatus:"more",page:1,limit:5,list:[]},buyNum:1,minBuyNum:1,type:2,isfav:!1,favLogo:["../../../static/image/ic-me-collect.png","../../../static/image/ic-me-collect2.png"],horizontal:"right",vertical:"bottom",direction:"vertical",pattern:{color:"#7A7E83",backgroundColor:"#fff",selectedColor:"#007AFF",buttonColor:"#FF7159"},content:[{iconPath:"../../../static/image/tab-ic-hom-selected.png",selectedIconPath:"../../../static/image/tab-ic-hom-unselected.png",active:!1,url:"/pages/index/index"},{iconPath:"../../../static/image/tab-ic-me-selected.png",selectedIconPath:"../../../static/image/tab-ic-me-unselected.png",active:!1,url:"/pages/member/index/index"}],submitStatus:!1}},onLoad:function(t){""!=t.id&&(this.goodsId=t.id),this.goodsId?(this.getGoodsDetail(),this.getGoodsParams(),this.getGoodsComments()):this.$common.errorToShow("获取失败",function(){uni.navigateBack({delta:1})}),this.getCartNums(),this.getMyShareCode()},computed:{minNums:function(){return this.product.stock>this.minBuyNum?this.minBuyNum:this.product.stock},isSpes:function(){return!(!this.product.hasOwnProperty("default_spes_desc")||!(0,n.default)(this.product.default_spes_desc).length)},promotion:function(){var t=[];if(this.product.promotion_list)for(var e in this.product.promotion_list)t.push(this.product.promotion_list[e]);return t},shareHref:function(){var t=getCurrentPages(),e=t[t.length-1];return m.apiBaseUrl+"wap/#/"+e.route+"?id="+this.goodsId}},onReachBottom:function(){2===this.current&&"more"===this.goodsComments.loadStatus&&this.getGoodsComments()},methods:{backBtn:function(){uni.navigateBack({delta:1})},getGoodsDetail:function(){var t=this,e={id:this.goodsId},i=this.$db.get("userToken");i&&(e["token"]=i),this.$api.goodsDetail(e,function(e){if(1==e.status){var o=e.data,s=e.data.product,a=o.intro;o.intro=(0,h.default)(a),t.goodsInfo=o,t.isfav="true"===t.goodsInfo.isfav,t.product=t.spesClassHandle(s),i&&t.goodsBrowsing()}else t.$common.errorToShow(e.msg,function(){uni.navigateBack({delta:1})})})},getCartNums:function(){var t=this,e=this.$db.get("userToken");e&&""!=e&&this.$api.getCartNum({},function(e){e.status&&(t.cartNums=e.data)})},toshow:function(t){this.type=t,this.$refs.lvvpopref.show()},toclose:function(){this.$refs.lvvpopref.close()},changeSpes:function(t){var e=this,i=t.v,o=t.k;if(this.product.default_spes_desc[i][o].hasOwnProperty("product_id")&&this.product.default_spes_desc[i][o].product_id){var s={id:this.product.default_spes_desc[i][o].product_id},a=this.$db.get("userToken");a&&(s["token"]=a),this.$api.getProductInfo(s,function(t){1==t.status&&(e.buyNum=t.data.stock>e.minBuyNum?e.minBuyNum:t.data.stock,e.product=e.spesClassHandle(t.data))}),uni.showLoading({title:"加载中"}),setTimeout(function(){uni.hideLoading()},1e3)}},spesClassHandle:function(t){if(t.hasOwnProperty("default_spes_desc")){var e=t.default_spes_desc;for(var i in e)for(var o in e[i])e[i][o].hasOwnProperty("is_default")&&!0===e[i][o].is_default?this.$set(e[i][o],"cla","pop-m-item selected"):e[i][o].hasOwnProperty("product_id")&&e[i][o].product_id?this.$set(e[i][o],"cla","pop-m-item not-selected"):this.$set(e[i][o],"cla","pop-m-item none");t.default_spes_desc=e}return t},bindChange:function(t){this.buyNum=t},collection:function(){var t=this,e={goods_id:this.goodsInfo.id};this.$api.goodsCollection(e,function(e){e.status?(t.isfav=!t.isfav,t.$common.successToShow(e.msg)):t.$common.errorToShow(e.msg)})},onClickItem:function(t){this.current!==t&&(this.current=t)},getGoodsParams:function(){var t=this;this.$api.goodsParams({id:this.goodsId},function(e){1==e.status&&(t.goodsParams=e.data)})},getGoodsComments:function(){var t=this,e={page:this.goodsComments.page,limit:this.goodsComments.limit,goods_id:this.goodsId};this.goodsComments.loadStatus="loading",this.$api.goodsComment(e,function(e){if(1==e.status){var i=e.data.list,o=e.data.count;t.items=["图文详情","商品参数","买家评论("+o+")"],i.forEach(function(e){e.ctime=t.$common.timeToDate(e.ctime,!0),e.hasOwnProperty("images_url")||t.$set(e,"images_url",[])}),t.goodsComments.list=[].concat((0,a.default)(t.goodsComments.list),(0,a.default)(i)),e.data.count>t.goodsComments.list.length?(t.goodsComments.loadStatus="more",t.goodsComments.page++):t.goodsComments.loadStatus="noMore"}else t.$common.errorToShow(e.msg)})},goodsBrowsing:function(){var t={goods_id:this.goodsInfo.id};this.$api.addGoodsBrowsing(t,function(t){})},addToCart:function(){var t=this;if(this.buyNum>0){var e={product_id:this.product.id,nums:this.buyNum};this.$api.addCart(e,function(e){e.status?(t.toclose(),t.getCartNums(),t.$common.successToShow(e.msg)):t.$common.errorToShow(e.msg),t.submitStatus=!1})}else this.submitStatus=!1},buyNow:function(){var t=this;if(this.buyNum>0){var e={product_id:this.product.id,nums:this.buyNum,type:2};this.$api.addCart(e,function(e){if(e.status){t.toclose();var i=e.data;t.$common.navigateTo("/pages/goods/place-order/index?cart_ids="+(0,s.default)(i))}t.submitStatus=!1})}else this.submitStatus=!1},redirectCart:function(){uni.switchTab({url:"/pages/cart/index/index"})},clickHandle:function(){this.submitStatus=!0,1===this.type?this.addToCart():this.buyNow()},trigger:function(t){this.content[t.index].active=!t.item.active,uni.switchTab({url:t.item.url})},goShare:function(){this.$refs.share.show()},closeShare:function(){this.$refs.share.close()},clickImg:function(t){uni.previewImage({urls:t.split()})},getMyShareCode:function(){var t=this,e=this.$db.get("userToken");e&&""!=e&&this.$api.shareCode({},function(e){e.status&&(t.myShareCode=e.data?e.data:"")})}},onShareAppMessage:function(){var t=this.myShareCode?this.myShareCode:"",e=this.$common.shareParameterDecode("type=2&id="+this.goodsInfo.id+"&invite="+t),i="/pages/share/jump?scene="+e;return{title:this.goodsInfo.name,imageUrl:this.goodsInfo.album[0],path:i}}};e.default=f},3343:function(t,e,i){"use strict";var o=i("23d1"),s=i.n(o);s.a},"35b7":function(t,e,i){"use strict";i.r(e);var o=i("e388"),s=i("9b65");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("3343");var n=i("2877"),d=Object(n["a"])(s["default"],o["a"],o["b"],!1,null,"05d8102e",null);e["default"]=d.exports},"8fd2":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".swiper[data-v-05d8102e]{height:%?750?%}.goods-top[data-v-05d8102e]{border-bottom:0}.goods-top .goods-price[data-v-05d8102e]{font-size:%?38?%}.cost-price[data-v-05d8102e]{font-size:%?28?%!important;bottom:%?-10?%;color:#999;text-decoration:line-through}.goods-top .cell-item-ft[data-v-05d8102e]{font-size:%?20?%;color:#666}.goods-details[data-v-05d8102e]{padding-top:0}.goods-details .cell-hd-title[data-v-05d8102e]{width:%?620?%}.goods-details .cell-hd-title .cell-hd-title-view[data-v-05d8102e]{width:100%;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.goods-details .cell-hd-title .cell-hd-title-view[data-v-05d8102e]:last-child{margin-top:%?10?%}.goods-details .cell-item-ft[data-v-05d8102e]{top:%?24?%}.goods-title-item .cell-item-hd[data-v-05d8102e]{min-width:%?60?%;color:#666;font-size:%?24?%}.goods-title-item .cell-item-bd[data-v-05d8102e]{color:#333;font-size:%?24?%}.goods-title-item .cell-bd-text[data-v-05d8102e]{bottom:0}.cell-bd-view[data-v-05d8102e]{position:relative;overflow:hidden}.cell-bd-view[data-v-05d8102e]:first-child{margin-bottom:%?8?%}.goods-title-item-ic[data-v-05d8102e]{width:%?22?%;height:%?22?%;position:absolute;top:50%;-webkit-transform:translateY(-50%);-ms-transform:translateY(-50%);transform:translateY(-50%);\n\t}.cell-bd-view .cell-bd-text[data-v-05d8102e]{margin-left:%?30?%}.goods-content[data-v-05d8102e]{margin-top:%?26?%;background-color:#fff;padding:%?26?% 0}.goods-content-c[data-v-05d8102e]{margin-top:%?20?%}.goods-parameter[data-v-05d8102e]{padding:%?10?% %?26?%}.goods-bottom[data-v-05d8102e],.pop-b[data-v-05d8102e]{background-color:#fff;position:fixed;bottom:0;height:%?90?%;width:100%;overflow:hidden;-webkit-box-shadow:0 0 %?20?% #ccc;box-shadow:0 0 %?20?% #ccc}.goods-bottom uni-button[data-v-05d8102e]{height:100%;width:35%}.goods-bottom-ic[data-v-05d8102e]{display:inline-block;position:relative;text-align:center;height:100%;width:15%;float:left;font-size:%?22?%;color:#666}.goods-bottom-ic .icon[data-v-05d8102e]{position:relative;top:%?6?%;\n\t/* left: -6upx; */\n\t}.goods-bottom .btn-g[data-v-05d8102e]{color:#333;background-color:#d9d9d9}.goods-parameter .cell-item[data-v-05d8102e]{border-bottom:none;margin-left:0}.goods-parameter .cell-item-hd[data-v-05d8102e]{color:#333;font-size:%?24?%}.goods-parameter .cell-item-bd[data-v-05d8102e]{color:#999}.goods-parameter .cell-item-bd .cell-bd-text[data-v-05d8102e]{bottom:0}.goods-parameter .cell-bd-text[data-v-05d8102e]{margin-left:0}.pop-t[data-v-05d8102e]{position:relative;padding:%?30?% %?26?%;border-bottom:%?2?% solid #f3f3f3\n\t/* box-shadow: 0 0 20upx #ccc; */}.goods-img[data-v-05d8102e]{width:%?160?%;height:%?160?%;position:absolute;top:%?-20?%;background-color:#fff;border-radius:%?6?%;border:%?2?% solid #fff}.goods-img uni-image[data-v-05d8102e]{height:100%;width:100%}.goods-information[data-v-05d8102e]{width:%?420?%;display:inline-block;margin-left:%?180?%}.pop-goods-name[data-v-05d8102e]{width:100%;overflow:hidden;white-space:nowrap;-o-text-overflow:ellipsis;text-overflow:ellipsis;display:block;font-size:%?24?%;margin-bottom:%?20?%}.pop-goods-price[data-v-05d8102e]{font-size:%?30?%}.close-btn[data-v-05d8102e]{width:%?40?%;height:%?40?%;border-radius:50%;display:inline-block;position:absolute;right:%?30?%}.close-btn uni-image[data-v-05d8102e]{width:100%;height:100%}.pop-m[data-v-05d8102e]{font-size:%?28?%;margin-bottom:%?90?%}.goods-number[data-v-05d8102e],.goods-specs[data-v-05d8102e]{padding:%?26?%;border-top:1px solid #f3f3f3}.goods-specs[data-v-05d8102e]:first-child{border:none}.pop-m-title[data-v-05d8102e]{margin-right:%?10?%;color:#666}.pop-m-bd[data-v-05d8102e]{overflow:hidden;margin-top:%?10?%}.pop-m-item[data-v-05d8102e]{display:inline-block;float:left;padding:%?6?% %?16?%;background-color:#fff;color:#333;margin-right:%?16?%;margin-bottom:%?10?%}.selected[data-v-05d8102e]{border:%?2?% solid #333;background-color:#333;color:#fff}.not-selected[data-v-05d8102e]{border:%?2?% solid #ccc}.none[data-v-05d8102e]{border:%?2?% dashed #ccc;color:#888}.pop-m-bd-in[data-v-05d8102e]{display:inline-block}.badge[data-v-05d8102e]{top:%?2?%;left:%?62?%}.goods-assess .user-head-img[data-v-05d8102e]{width:%?80?%;height:%?80?%;border-radius:50%}.goods-assess .cell-item-bd[data-v-05d8102e]{padding-right:0}.goods-assess .cell-bd-text[data-v-05d8102e]{margin:0}.goods-assess .cell-bd-text.color-9[data-v-05d8102e]{overflow:hidden;-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap;max-width:%?440?%}.gai-body-text[data-v-05d8102e]{font-size:%?26?%;color:#333;padding:0 %?26?%}.gai-body-img[data-v-05d8102e]{overflow:hidden;padding:%?20?% %?26?%}.gai-body-img uni-image[data-v-05d8102e]{width:%?220?%;height:%?220?%;float:left;margin-right:%?19?%;margin-bottom:%?18?%}.gai-body-img uni-image[data-v-05d8102e]:nth-child(3n){margin-right:0}.redstar[data-v-05d8102e]{width:%?24?%;height:%?24?%;padding:%?2?%}.mask-share-wechat[data-v-05d8102e]{display:inline-block;background-color:#fff;padding:0}.mask-share-wechat[data-v-05d8102e]:after{border:none}.right-ball[data-v-05d8102e]{position:fixed;right:%?30?%;bottom:%?300?%;z-index:999;text-align:center;padding:%?14?% 0;\n\t/* line-height: 80upx; */width:%?80?%;height:%?80?%;font-size:%?24?%;color:#fff;background-color:rgba(0,0,0,.5);border-radius:50%}.comment-none[data-v-05d8102e]{text-align:center;padding:%?200?% 0}.comment-none-img[data-v-05d8102e]{width:%?274?%;height:%?274?%}.price-salesvolume[data-v-05d8102e]{width:100%;padding:0 0 0 %?26?%;overflow:hidden;color:#a5a5a5;background-color:#fce250;position:relative}.commodity-price[data-v-05d8102e]{width:%?224?%;display:inline-block;float:left}.current-price[data-v-05d8102e]{font-size:%?40?%;color:#ff7159;display:block;line-height:1.5}.cost-price[data-v-05d8102e]{font-size:%?26?%;text-decoration:line-through;\n\t/* margin-left: 8rpx; */display:block}.commodity-salesvolume[data-v-05d8102e]{width:%?240?%;display:inline-block;font-size:%?22?%;float:left;padding:%?16?% 0}.commodity-salesvolume>uni-text[data-v-05d8102e]{display:block}.commodity-time-img[data-v-05d8102e]{display:block;width:0;height:0;border-width:%?48?% %?28?% %?50?% 0;border-style:solid;border-color:rgba(0,0,0,0) #ff7159 rgba(0,0,0,0) rgba(0,0,0,0);\n\t/*透明 黄 透明 透明 */position:absolute;top:0;left:%?462?%}.commodity-time[data-v-05d8102e]{display:inline-block;width:%?260?%;text-align:center;font-size:%?24?%;background-color:#ff7159;padding:%?16?% 0 %?18?%;color:#fae900}.commodity-time>uni-text[data-v-05d8102e]{display:block}.commodity-day[data-v-05d8102e]{font-size:%?22?%}.commodity-day>uni-text[data-v-05d8102e]{display:inline-block;background-color:#ffd4b0;color:#ff7300;padding:0 %?6?%;border-radius:%?6?%}.nav-back[data-v-05d8102e]{width:100%;height:44px;padding:12px 12px 0;position:fixed;top:0;background-color:hsla(0,0%,100%,0);z-index:99}.back-btn[data-v-05d8102e]{height:32px;width:32px;border-radius:50%;background-color:rgba(0,0,0,.5)}.back-btn .icon[data-v-05d8102e]{height:20px;width:20px;position:relative;top:50%;left:46%;-webkit-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.seller-content[data-v-05d8102e]{background-color:#f8f8f8;margin:0 13px 15px;padding:10px;color:#6e6e6e;border-radius:4px}.seller-content-top[data-v-05d8102e]{font-weight:700;margin-bottom:6px}.seller-content-img[data-v-05d8102e]{width:20px;height:20px;vertical-align:middle;margin-right:4px}",""])},"9b65":function(t,e,i){"use strict";i.r(e);var o=i("3285"),s=i.n(o);for(var a in o)"default"!==a&&function(t){i.d(e,t,function(){return o[t]})}(a);e["default"]=s.a},e388:function(t,e,i){"use strict";var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"nav-back"},[i("v-uni-view",{staticClass:"back-btn",on:{click:function(e){e=t.$handleEvent(e),t.backBtn()}}},[i("v-uni-image",{staticClass:"icon",attrs:{src:"../../../static/image/back-img.png",mode:""}})],1)],1),i("v-uni-view",{staticClass:"content-top"},[i("v-uni-view",{staticClass:"swiper"},[i("v-uni-swiper",{staticClass:"swiper-c",attrs:{"indicator-dots":t.swiper.indicatorDots,autoplay:t.swiper.autoplay,interval:t.swiper.interval,duration:t.swiper.duration}},t._l(t.goodsInfo.album,function(e,o){return i("v-uni-swiper-item",{key:o,staticClass:"have-none",on:{click:function(i){i=t.$handleEvent(i),t.clickImg(e)}}},[i("v-uni-image",{attrs:{src:e,mode:"aspectFill"}})],1)}),1)],1),i("v-uni-view",{staticClass:"cell-group"},[i("v-uni-view",{staticClass:"cell-item goods-top"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title goods-price red-price"},[t._v("￥"+t._s(t.product.price))]),i("v-uni-view",{staticClass:"cell-hd-title goods-price cost-price"},[t._v("￥"+t._s(t.product.mktprice))])],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-text",[t._v(t._s(t.goodsInfo.buy_count)+" 人已购买")])],1)],1),i("v-uni-view",{staticClass:"cell-item goods-details"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[i("v-uni-view",{staticClass:"color-3 fsz28 cell-hd-title-view"},[t._v(t._s(t.product.name))]),t.goodsInfo.brief?i("v-uni-text",{staticClass:"color-9 fsz24 "},[t._v(t._s(t.goodsInfo.brief))]):t._e()],1)],1),i("v-uni-view",{staticClass:"cell-item-ft"},[i("v-uni-image",{staticClass:"cell-ft-next icon",attrs:{src:"../../../static/image/share.png"},on:{click:function(e){e=t.$handleEvent(e),t.goShare()}}})],1)],1),t.promotion.length?i("v-uni-view",{staticClass:"cell-item goods-title-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("促销")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"romotion-tip"},t._l(t.promotion,function(e,o){return i("v-uni-view",{key:o,staticClass:"romotion-tip-item",class:2!==e.type?"bg-gray":""},[t._v(t._s(e.name))])}),1)],1)],1):t._e(),t.isSpes?i("v-uni-view",{staticClass:"cell-item goods-title-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("规格")])],1),i("v-uni-view",{staticClass:"cell-item-bd",on:{click:function(e){e=t.$handleEvent(e),t.toshow()}}},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v(t._s(t.product.spes_desc))])],1)],1):t._e(),i("v-uni-view",{staticClass:"cell-item goods-title-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v("说明")])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-image",{staticClass:"goods-title-item-ic",attrs:{src:"../../../static/image/ic-dui.png",mode:""}}),i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("24小时内发货")])],1),i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-image",{staticClass:"goods-title-item-ic",attrs:{src:"../../../static/image/ic-dui.png",mode:""}}),i("v-uni-text",{staticClass:"cell-bd-text"},[t._v("7天拆封无条件退货")])],1)],1)],1)],1),i("v-uni-view",{staticClass:"goods-content"},[i("uni-segmented-control",{attrs:{current:t.current,values:t.items,"style-type":"text","active-color":"#333"},on:{clickItem:function(e){e=t.$handleEvent(e),t.onClickItem(e)}}}),i("v-uni-view",{staticClass:"goods-content-c"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:0===t.current,expression:"current === 0"}],staticClass:"goods-detail"},[i("v-uni-rich-text",{attrs:{nodes:t.goodsInfo.intro}})],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:1===t.current,expression:"current === 1"}],staticClass:"goods-parameter"},[t.goodsParams.length?i("v-uni-view",{staticClass:"cell-group"},t._l(t.goodsParams,function(e,o){return i("v-uni-view",{key:o,staticClass:"cell-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-view",{staticClass:"cell-hd-title"},[t._v(t._s(e.name))])],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v(t._s(e.value))])],1)],1)}),1):t._e()],1),i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:2===t.current,expression:"current === 2"}],staticClass:"goods-assess"},[t.goodsComments.list.length?i("v-uni-view",[t._l(t.goodsComments.list,function(e,o){return i("v-uni-view",{key:o,staticClass:"goods-assess-item"},[i("v-uni-view",{staticClass:"cell-group"},[i("v-uni-view",{staticClass:"cell-item goods-title-item"},[i("v-uni-view",{staticClass:"cell-item-hd"},[i("v-uni-image",{staticClass:"user-head-img",attrs:{src:e.user.avatar,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"cell-item-bd"},[i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text"},[t._v(t._s(e.user.nickname&&""!=e.user.nickname?e.user.nickname:e.user.mobile))]),i("v-uni-view",{staticClass:"cell-bd-text-right"},[i("uni-rate",{attrs:{size:"16",disabled:"true",value:e.score}})],1)],1),i("v-uni-view",{staticClass:"cell-bd-view"},[i("v-uni-text",{staticClass:"cell-bd-text color-9",staticStyle:{"margin-right":"16upx"}},[t._v(t._s(e.ctime))]),i("v-uni-text",{staticClass:"cell-bd-text color-9"},[t._v(t._s(e.addon))])],1)],1)],1)],1),i("v-uni-view",{staticClass:"gai-body"},[i("v-uni-view",{staticClass:"gai-body-text"},[t._v(t._s(e.content))]),e.images_url.length?i("v-uni-view",{staticClass:"gai-body-img"},t._l(e.images_url,function(e,o){return i("v-uni-image",{key:o,attrs:{src:e,mode:"aspectFill"},on:{click:function(i){i=t.$handleEvent(i),t.clickImg(e)}}})}),1):t._e(),e.seller_content?i("v-uni-view",{staticClass:"seller-content"},[i("v-uni-view",{staticClass:"seller-content-top"},[i("v-uni-image",{staticClass:"seller-content-img",attrs:{src:"../../../static/image/seller-content.png"}}),t._v("掌柜回复")],1),t._v(t._s(e.seller_content))],1):t._e()],1)],1)}),i("uni-load-more",{attrs:{status:t.goodsComments.loadStatus}})],2):i("v-uni-view",{staticClass:"comment-none"},[i("v-uni-image",{staticClass:"comment-none-img",attrs:{src:"../../../static/image/order.png",mode:""}})],1)],1)],1)],1)],1),i("lvv-popup",{ref:"share",attrs:{position:"bottom"}},[i("shareByH5",{attrs:{goodsId:t.goodsInfo.id,shareImg:t.goodsInfo.image_url,shareTitle:t.goodsInfo.name,shareContent:t.goodsInfo.brief,shareHref:t.shareHref},on:{close:function(e){e=t.$handleEvent(e),t.closeShare()}}})],1),i("lvv-popup",{ref:"lvvpopref",attrs:{position:"bottom"}},[i("v-uni-view",{staticStyle:{width:"100%","max-height":"804upx",background:"#FFFFFF",position:"absolute",left:"0",bottom:"0"}},[i("v-uni-view",{staticClass:"pop-c"},[i("v-uni-view",{staticClass:"pop-t"},[i("v-uni-view",{staticClass:"goods-img"},[i("v-uni-image",{attrs:{src:t.product.image_path,mode:"aspectFill"}})],1),i("v-uni-view",{staticClass:"goods-information"},[i("v-uni-view",{staticClass:"pop-goods-name"},[t._v(t._s(t.product.name))]),i("v-uni-view",{staticClass:"pop-goods-price red-price"},[t._v("￥ "+t._s(t.product.price))])],1),i("v-uni-view",{staticClass:"close-btn",on:{click:function(e){e=t.$handleEvent(e),t.toclose()}}},[i("v-uni-image",{attrs:{src:"../../../static/image/close.png"}})],1)],1),i("v-uni-scroll-view",{staticClass:"pop-m",staticStyle:{"max-height":"560upx"},attrs:{"scroll-y":"true"}},[i("spec",{ref:"spec",attrs:{spesData:t.product.default_spes_desc},on:{changeSpes:function(e){e=t.$handleEvent(e),t.changeSpes(e)}}}),i("v-uni-view",{staticClass:"goods-number"},[i("v-uni-text",{staticClass:"pop-m-title"},[t._v("数量")]),i("v-uni-view",{staticClass:"pop-m-bd-in"},[i("uni-number-box",{attrs:{min:t.minNums,max:t.product.stock,value:t.buyNum},on:{change:function(e){e=t.$handleEvent(e),t.bindChange(e)}}})],1)],1)],1),i("v-uni-view",{staticClass:"pop-b"},[t.product.stock?i("v-uni-button",{staticClass:"btn btn-square btn-b btn-all",attrs:{"hover-class":"btn-hover2",disabled:t.submitStatus,loading:t.submitStatus},on:{click:function(e){e=t.$handleEvent(e),t.clickHandle()}}},[t._v("确定")]):i("v-uni-button",{staticClass:"btn btn-square btn-g btn-all"},[t._v("已售罄")])],1)],1)],1)],1),i("div",{ref:"qrCodeDiv",attrs:{id:"qrCode"}}),i("v-uni-view",{staticClass:"goods-bottom"},[i("v-uni-view",{staticClass:"goods-bottom-ic",on:{click:function(e){e=t.$handleEvent(e),t.collection(e)}}},[i("v-uni-image",{staticClass:"icon",attrs:{src:t.isfav?t.favLogo[1]:t.favLogo[0],mode:""}}),t.isfav?t._e():i("v-uni-view",[t._v("收藏")]),t.isfav?i("v-uni-view",[t._v("已收藏")]):t._e()],1),i("v-uni-view",{staticClass:"goods-bottom-ic",on:{click:function(e){e=t.$handleEvent(e),t.redirectCart(e)}}},[t.cartNums?i("v-uni-view",{staticClass:"badge color-f"},[t._v(t._s(t.cartNums))]):t._e(),i("v-uni-image",{staticClass:"icon",attrs:{src:"../../../static/image/ic-me-car.png",mode:""}}),i("v-uni-view",[t._v("购物车")])],1),i("v-uni-button",{staticClass:"btn btn-square btn-g",attrs:{"hover-class":"btn-hover2"},on:{click:function(e){e=t.$handleEvent(e),t.toshow(1)}}},[t._v("加入购物车")]),i("v-uni-button",{staticClass:"btn btn-square btn-b",attrs:{"hover-class":"btn-hover2"},on:{click:function(e){e=t.$handleEvent(e),t.toshow(2)}}},[t._v("立即购买")])],1),i("uni-fab",{attrs:{pattern:t.pattern,content:t.content,horizontal:t.horizontal,vertical:t.vertical,direction:t.direction},on:{trigger:function(e){e=t.$handleEvent(e),t.trigger(e)}}})],1)},s=[];i.d(e,"a",function(){return o}),i.d(e,"b",function(){return s})}}]);