<template>
	<view class="index">
		<!-- header -->
		<view class="header">
			首页
		</view>
		<!-- 测试部分 -->
		<!-- <view class="test">
			<navigator url="../test/chooseImage">图片选择</navigator>
			<view></view>
			<view></view>
		</view> -->
		<!-- 轮播部分 -->
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" indicator-dots="true" autoplay="true" interval="100000" duration="500" circular="true">
						<swiper-item v-for="(item,index) in dataAll.bannerlist" :key="index">
							<image :src="item.img" mode="aspectFit"></image>
						</swiper-item>
					</swiper>
				</view>
			</view>
		</view>
		<!-- 轮播部分end -->

		<!-- navbar部分 -->
		<view class="imgnavbar bottom-cell-group">
			<view class="imgnavbar-list row4">
				<!-- <view class="imgnavbar-item"> -->
				<navigator url="/pages/index/register/register" class="imgnavbar-item" hover-class="none">
					<image class="imgnavbar-item-img" src="../../static/index/image/xm1.png" mode="aspectFill"></image>
					<view class="imgnavbar-item-text">公司注册</view>
				</navigator>

				<!-- </view> -->
				<!-- <view class="imgnavbar-item"> -->
				<navigator url="/pages/index/tally/tally" class="imgnavbar-item" hover-class="none">
					<image class="imgnavbar-item-img" src="../../static/index/image/xm2.png" mode="aspectFill"></image>
					<view class="imgnavbar-item-text">记账报税</view>
				</navigator>
				<!-- <view class="imgnavbar-item"> -->
				<navigator url="/pages/index/trademark/trademark" class="imgnavbar-item" hover-class="none">
					<image class="imgnavbar-item-img" src="../../static/index/image/xm3.png" mode="aspectFill"></image>
					<view class="imgnavbar-item-text">商标业务</view>
				</navigator>
				<!-- <view class="imgnavbar-item"> -->
				<navigator url="/pages/caishuiguanli/caishuiguanli" class="imgnavbar-item" hover-class="none">
					<image class="imgnavbar-item-img" src="../../static/index/image/xm4.png" mode="aspectFill"></image>
					<view class="imgnavbar-item-text">财税管理</view>
				</navigator>
			</view>
		</view>
  
		<!-- 资讯部分start -->
		<div class="aui-flex b-line">
			<div class="aui-flex-box">
				<text>资讯</text>
			</div>

			<navigator url="/pages/news/news" class="aui-arrow" hover-class="none">
				<text>更多</text>
			</navigator>
		</div>
		<div class="aui-platform-list">
			<!-- 资讯的每一条 -->
			<view class="a" v-for="(item,index) in dataAll.newslist" :key="index">

				<navigator :url="'/pages/news/news_detail?id=' + item.id" hover-class="none" class="b-line">
					<div class="aui-list-title">
						<h2>{{item.title}}</h2>
					</div>
					<div class="aui-flex">
						<div class="aui-flex-box">
							<h3>{{item.content}}</h3>
							<h4>{{item.ctime}}<em>置顶</em></h4>
						</div>
						<div class="aui-plat-img">
							<image :src="item.cover" mode=""></image>
						</div>
					</div>
				</navigator>
			</view>
			<!-- 资讯每一条end -->

		</div>

		<!-- 资讯部分end -->

		<!-- 活动专题部分 -->
		<!-- <div class="aui-head-title">活动专题</div> -->

		<view class="aui-flex b-line">
			<view class="aui-flex-box">
				<text>活动</text>
			</view>
			<navigator class="aui-arrow" url="../activity/activity_list" hover-class="none">
				<text>更多</text>
			</navigator>
		</view>
		<view class="aui-wells">
			<view class="b" v-for="(item,index) in dataAll.activelist" :key="index">
				<!-- <view :url="'../activity/activity_detail?id=' + item.id" class="aui-wells-box" @tap="goactivedeatil(item.id)"> -->
				<view class="aui-wells-box" @tap="goactivedeatil(item.id)">
					<view class="aui-wells-box-hb">

						<image :src="item.images[0]" mode="aspectFill"></image>
					</view>
					<view class="aui-wells-box-bd aui-box-bd">
						<h4>{{item.name}}</h4>
						<p class="aui-cell-title">参与人数：{{item.current_people}}人</p>
						<p class="aui-cell-text">{{item.status_text}} </p>
					</view>
					<span class="aui-cell-fr"></span>
				</view>
			</view>

		</view>





	</view>
</template>
<script>
	var _self
	export default {

		data() {
			return {
				dataAll: {
					newslist: [],
					activelist: [],
					bannerlist: []
				}
			}
		},
		created() {},
		onPullDownRefresh() {
			this.getDataList()

			setTimeout(() => {
				uni.stopPullDownRefresh();
				uni.showToast({
					title: '刷新成功'
				})
			}, 500)
		},
		onLoad() {
			_self = this
			this.getDataList()
		},
		methods: {
			// 
			async getDataList() {
				let res = await this.$httpRequest.init({
					method: 'pages.home'
				});
				if (true !== res.status) {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
				}
				_self.dataAll = res.data
			},
			// 去详情界面
			goactivedeatil(id) {
				// 判断是否已登录
				if (this.$db.get('userToken')) {
					// 登录的话跳转到详情界面
					uni.navigateTo({
						url: '../activity/activity_detail?id=' + id
					})
				} else {
					uni.showToast({
						title: '请先登录!',
						icon: 'none',
						duration: 800,
						success: function(res) {
							// #ifdef H5 || APP-PLUS
							setTimeout(() => {
								uni.hideToast()
								uni.navigateTo({
									url: '/pages/login/login/index1'
								})
							}, 800)
							// #endif
							// #ifdef MP-WEIXIN || MP-ALIPAY
							setTimeout(() => {
								uni.hideToast()
								uni.navigateTo({
									url: '/pages/login/choose/index',
									animationType: 'pop-in',
									animationDuration: 200
								})
							}, 500)
							// #endif
						}
					})

				}

			},
		},

		//分享
		onShareAppMessage() {
			let myInviteCode = this.myShareCode ? this.myShareCode : '';
			let ins = this.$common.shareParameterDecode('type=1&invite=' + myInviteCode);
			let path = '/pages/share/jump?scene=' + ins;
			return {
				title: this.$store.state.config.share_title,
				// #ifdef MP-ALIPAY
				desc: this.$store.state.config.share_desc,
				// #endif
				imageUrl: this.$store.state.config.share_image,
				path: path
			}
		}
	}
</script>

<style lang="less" scoped>
	* {
		margin: 0;
		padding: 0;
	}

	@import "../../static/index/style.css";
	// @import "../../static/index/style_zx.css";
	// 

	// 
	.aui-box-bd {
		margin-left: 20upx;
	}

	// 资讯专题
	.aui-head-title {
		position: relative;
		font-size: 0.7rem;
		color: #9b9b9b;
		padding: 10px 20px;
	}

	.aui-head-title:after {
		content: '';
		position: absolute;
		z-index: 0;
		bottom: 0;
		left: 20px;
		width: 90%;
		height: 1px;
		border-bottom: 1px solid #D9D9D9;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		-webkit-transform-origin: 0 100%;
		transform-origin: 0 100%;
	}





	// 流程部分-start
	html {
		font-size: 28upx;
	}

	.szzc {
		padding-left: 0px;
		padding-right: 0px;
	}

	ul,
	li {
		list-style: none;
		margin: 0;
		padding: 0;
	}

	.szzc ul {
		margin-top: 45upx;
		background: url(../../static/index/image/jtou3.png) no-repeat center 0.15*3rem;
		margin-bottom: 34upx;
		// background-size: 3.65rem 0.31rem;
		background-size: 400upx 36upx;
	}

	.szzc ul li {
		width: 25%;
		text-align: center;
		float: left
	}


	.szzc ul li image {
		// width: 0.64rem;
		width: 72upx;
		height: 72upx;
	}

	.rshi ul li img {
		width: auto;
		height: 0.64*3rem;
	}

	.szzc ul li h3 {
		color: #333333;
		font-size: 0.24*3rem;
		margin-top: 0.2*3rem;
		margin-top: 0.1*3rem;
	}

	.szzc ul li p {
		color: #999999;
		font-size: 0.18*3rem;
	}

	.szzc ul li .pictu {
		height: 0.64*3rem;
	}

	.bghse {
		background: #fff;
		padding: 0.6*3rem 0;
	}

	.bghse h2 {
		color: #444444;
		font-size: 40upx;
		text-align: center;
		font-weight: bold
	}

	.bgwhite {
		background: #ffffff;
		padding: 0.6*3rem 0.3*3rem;
	}

	.bgwhite h2 {
		color: #444444;
		font-size: 0.36*3rem;
		text-align: center;
		font-weight: bold
	}

	.bghse ul:after {
		display: table;
		content: "";
		line-height: 0;
		clear: both
	}

	.bgwhite ul:after {
		display: table;
		content: "";
		line-height: 0;
		clear: both
	}

	.bghse:after {
		display: table;
		content: "";
		line-height: 0;
		clear: both
	}

	.hzi {
		// color: #f04c53;
		color: #3b9ef3;
		font-size: 0.22*3rem;
		text-align: center
	}

	.m30 {
		margin-left: 0.3*3rem;
		margin-right: 0.3*3rem;
	}

	.hse {
		// background: url(../../static/index/image/teljb.png) no-repeat 0.72*3rem center #e84649;
		background: url(../../static/index/image/teljb.png) no-repeat 0.72*3rem center #3b9ef3;
		background-size: 0.35*3rem 0.32*3rem;
		border-radius: 10upx;
	}

	.hse span {
		color: #FFF
	}

	.hse font {
		color: #FFF
	}

	.mfrx {
		height: 0.7*3rem;
		// background: url(../../static/index/image/telj.png) no-repeat 0.72*3rem center #FFF;
		background-size: 0.35*3rem 0.32*3rem;
		padding-left: 1.18*3rem;
		line-height: 0.7*3rem;
		margin-top: 0.3*3rem;
	}

	a {
		text-decoration: none;
	}

	.mfrx span {
		// color: #e84649;
		font-size: 0.22*3rem;
	}

	.mfrx font {
		// color: #e84649;
		font-size: 0.3*3rem;
		margin-left: 0.1*3rem;
	}


	// 流程部分end




	// navbar-start
	.imgnavbar {
		width: 100%;
		background-color: #fff;
		// margin-top: 20upx;
	}

	.imgnavbar-list {
		overflow: hidden;
		padding: 24upx 0 0;
	}

	.imgnavbar-list .imgnavbar-item {
		height: auto;
		float: left;
		// padding: 0upx 10upx;
		margin-bottom: 20upx;
		text-align: center;
	}

	.imgnavbar-list .imgnavbar-item image {
		width: 90upx;
		height: 90upx;
		margin-bottom: 6upx;
	}

	.imgnavbar-item-text {
		font-size: 26upx;
		color: #666;
		width: 100%;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	/* #ifdef APP-PLUS */
	.imgnavbar-list.row4 .imgnavbar-item {
		width: 22%;
	}

	/* #endif */

	/* #ifdef H5 */
	.imgnavbar-list.row4 .imgnavbar-item {
		width: 25%;
	}

	/* #endif */

	// .imgnavbar-list.row4 .imgnavbar-item {
	// 	width: 22%;
	// }
	.header {
		width: 100%;
		height: 120upx;
		background-color: #fff;
		text-align: center;
		line-height: 150upx;
		font-size: 36upx;
		position: fixed;
		z-index: 1;
		top: 0;
		left: 0;
		background-color: #fff;
	}

	// navbar-end
	.index {
		width: 100%;
		// height: 600upx;
		// background-color: #28B8A1;
		// position:relative;
		margin-top: 120upx;


		.page-section-spacing {
			width: 100%;
			border-radius: 10upx;
			margin: 0 auto;
		}

		.swiper {
			height: 418rpx;
			overflow: hidden;

			// background-color: #A1A1A1;
			image {
				width: 100%;
				height: 418rpx;
				// opacity: 0;
			}
		}

		.navbar {
			margin-top: 10upx;
			width: 100%;
			height: 600upx;
			background-color: #00BFFF;

			.nav_name {
				height: 60upx;
				background-color: #fff;
				padding: 0 0 0 60upx;
				line-height: 60upx;
			}

			.nav_conter {
				display: flex;

				.box {
					flex: 1;
					text-align: center;
				}
			}
		}
	}


	// 资讯界面的部分


	html,
	body {
		color: #333;
		margin: 0;
		height: 100%;
		font-family: "Myriad Set Pro", "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-weight: normal;
	}

	* {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		color: #000;
	}

	a,
	label,
	button,
	input,
	select {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	img {
		border: 0;
	}

	body {
		background: #fff;
		color: #666;
	}

	html,
	body,
	div,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	button,
	fieldset,
	form,
	input,
	legend,
	textarea,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
		color: #08acee;
	}

	button {
		outline: 0;
	}

	img {
		width: 100%;
		height: auto;
		display: block;
		border: 0;
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		margin: 0;
		font: inherit;
		color: inherit;
		outline: none;
	}

	li {
		list-style: none;
	}

	a {
		color: #666;
	}

	.clearfix::after {
		clear: both;
		content: ".";
		display: block;
		height: 0;
		visibility: hidden;
	}

	.clearfix {}


	.divHeight {
		width: 100%;
		height: 10px;
		background: #f5f5f5;
		position: relative;
		overflow: hidden;
	}

	.r-line {
		position: relative;
	}

	.r-line:after {
		content: '';
		position: absolute;
		z-index: 0;
		top: 0;
		right: 0;
		height: 100%;
		border-right: 1px solid #D9D9D9;
		-webkit-transform: scaleX(0.5);
		transform: scaleX(0.5);
		-webkit-transform-origin: 100% 0;
		transform-origin: 100% 0;
	}

	.b-line {
		position: relative;
	}

	.b-line:after {
		content: '';
		position: absolute;
		z-index: 2;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		border-bottom: 1px solid #e6e6e6;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		-webkit-transform-origin: 0 100%;
		transform-origin: 0 100%;
	}

	.aui-flex {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		padding: 15px;
		position: relative;
		background-color: #fff;
	}

	.aui-flex-box {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		min-width: 0;
		font-size: 14px;
		color: #333;
		background-color: #fff;
	}

	.aui-flex-box image {
		width: 214upx;
		height: 136upx;
	}

	/* 必要布局样式css */

	.aui-flexView {
		width: 100%;
		height: 100%;
		margin: 0 auto;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
	}

	.aui-scrollView {
		width: 100%;
		height: 100%;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		overflow-y: auto;
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
		position: relative;
	}

	.aui-navBar {
		height: 44px;
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		z-index: 102;
		background: #fff;
	}


	.aui-navBar-item {
		height: 44px;
		min-width: 25%;
		-webkit-box-flex: 0;
		-webkit-flex: 0 0 25%;
		-ms-flex: 0 0 25%;
		flex: 0 0 25%;
		padding: 0 0.9*0.85rem;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		font-size: 0.7*0.85rem;
		white-space: nowrap;
		overflow: hidden;
		color: #808080;
		position: relative;
	}

	.aui-navBar-item:first-child {
		-webkit-box-ordinal-group: 2;
		-webkit-order: 1;
		-ms-flex-order: 1;
		order: 1;
		margin-right: -25%;
		font-size: 0.9*0.85rem;
		font-weight: bold;
	}

	.aui-navBar-item:last-child {
		-webkit-box-ordinal-group: 4;
		-webkit-order: 3;
		-ms-flex-order: 3;
		order: 3;
		-webkit-box-pack: end;
		-webkit-justify-content: flex-end;
		-ms-flex-pack: end;
		justify-content: flex-end;
	}

	.aui-center {
		-webkit-box-ordinal-group: 3;
		-webkit-order: 2;
		-ms-flex-order: 2;
		order: 2;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		height: 44px;
		width: 50%;
		margin-left: 25%;
	}

	.aui-center-title {
		text-align: center;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		display: block;
		text-overflow: ellipsis;
		font-size: 0.95*0.85rem;
		color: #333;
	}

	.icon {
		width: 20px;
		height: 20px;
		display: block;
		border: none;
		float: left;
		background-size: 20px;
		background-repeat: no-repeat;
	}

	.icon-return {
		background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACh0lEQVRoQ+3ZMW8TMRQH8PcOsTBQISExVCIRCwgWFvZ+hZYBpIrEcTYkBsTGlI2VDamL3YEBpWJoR1BJaOlXYEzyDYp0bMRGRjnJoDuWs/1e3EbKeHf55b33vzsb4YJ98IJ54RKce8XZV1gIcQ8AviDiD2vtC631pzZFYQ2WUt611p4CwM0VcqqU2soSXIN1ztdKqTfZgRuw75RSz9tg3bHsWjomlh04NpYVOAWWDbjf7z8oimLipbH7bUopJdvO7L/Hk8+wwyLiCSLe8H6cww4BwGYFTo0lbWkKLBmYCksCrsNaa99rrZ/FmFnS0GrCdrvd3mg0MqEDqu58yVKaAzZZSwshHgLAsX/rcW2csrJVtaNXeIWdIuL16qJU2OgVrsMCwEGn03mSamaThVYTtizLp+PxeJkioJKFFldslJbmjA0O5o4NCm7AHpZluUM5s1FCSwjxCAA++7ceADiczWaPJ5PJL6qAihJaUspdY8w+Il7xLsASG6SlhRA/EfGa91BxNJ/Pd7hVNtiT1mAwOAeADXdCa637Hi0Wi3zBUsptY8wHRLzqwIh/nlbzbWmna0roLEOrmo11QQd9W1oHdFDwOrR3cLCH/uuFn0uQRQE7dMPKJHl6RwNzRUcF/w9N9VIRHVyhazbLDihWP5KAHbphOzQ5OhmYCzopmAM6OZgaTQL20FMAuOUtHESfaTLwCn3HWnuWEk0KpkCTg1OjWYArtDHmKyJu+jMdeh+KDdghh8NhZ7lcfvPRoXcaWYFToNmBY6NZgj20m+nb3pr3W631yzY7GWzBDtXr9TaLojjz0N+VUvezBXvoPQBw0Fda649Zg9vg6o5l3dKhse58l+AY/yqnc/4GvNDoTFOq8FwAAAAASUVORK5CYII=");

	}


	.m-slider {
		overflow-x: hidden;
		width: 92%;
		margin: 0 auto;
		border-radius: 5px;
		position: relative;
	}

	.slider-wrapper {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		width: 100%;
		height: 100%;
		-webkit-transform: translate3d(0px, 0px, 0px);
		transform: translate3d(0px, 0px, 0px);
		position: relative;
		z-index: 1;
		-webkit-transition-property: -webkit-transform;
		transition-property: -webkit-transform;
		transition-property: transform;
		transition-property: transform, -webkit-transform;
	}

	.slider-item {
		width: 100%;
		height: 100%;
		-webkit-flex-shrink: 0;
		-ms-flex-negative: 0;
		flex-shrink: 0;
		background: #f6f6f6;
	}

	.slider-item img {
		width: 100%;
		height: auto;
		display: block;
		border: none;
	}

	.slider-pagination {
		text-align: right;
		position: absolute;
		width: 100%;
		z-index: 2;
		right: 0;
		bottom: 10px;
		pointer-events: none;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: end;
		-webkit-align-items: flex-end;
		-ms-flex-align: end;
		align-items: flex-end;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
	}

	.slider-pagination>.slider-pagination-item {
		margin: 0 .25*0.85rem;
		width: 9px;
		height: 4px;
		display: inline-block;
		border-radius: 4px;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.slider-pagination>.slider-pagination-item.slider-pagination-item-active {
		background-color: #fff;
		border-radius: 4px;
	}


	.aui-palace {
		padding: 0.5*0.85rem 0;
		position: relative;
		overflow: hidden;
	}

	.aui-palace-grid {
		position: relative;
		float: left;
		padding: 1px;
		width: 25%;
		box-sizing: border-box;
		margin: 5px 0;
	}

	.aui-palace-grid-icon {
		width: 35px;
		height: 35px;
		margin: 0 auto;
	}

	.aui-palace-grid-icon img {
		display: block;
		width: 100%;
		height: 100%;
		border: none;
	}

	.aui-palace-grid-text {
		display: block;
		text-align: center;
		color: #333;
		font-size: 0.85*0.85rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		padding-top: 0.2*0.85rem;
	}

	.aui-palace-grid-text h2 {
		font-size: 0.8*0.85rem;
		font-weight: normal;
		color: #666666;
	}


	.m-actionsheet {
		text-align: center;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 1000;
		background-color: #EFEFF4;
		-webkit-transform: translate(0, 100%);
		transform: translate(0, 100%);
		-webkit-transition: -webkit-transform .3s;
		transition: -webkit-transform .3s;
		transition: transform .3s;
		transition: transform .3s, -webkit-transform .3s;
	}

	.mask-black {
		background-color: rgba(0, 0, 0, 0.4);
		position: fixed;
		z-index: 500;
		bottom: 0;
		right: 0;
		left: 0;
		top: 0;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		z-index: 998;
	}

	.actionsheet-action {
		display: block;
		margin-top: .15*0.85rem;
		font-size: 0.28*0.85rem;
		color: #555;
		height: 1*0.85rem;
		line-height: 1*0.85rem;
		background-color: #FFF;
	}

	.m-actionsheet {
		text-align: center;
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		z-index: 10005;
		background-color: #ffffff;
		-webkit-transform: translate(0, 100%);
		transform: translate(0, 100%);
		-webkit-transition: -webkit-transform .3s;
		transition: -webkit-transform .3s;
		transition: transform .3s;
		transition: transform .3s, -webkit-transform .3s;
	}

	.actionsheet-toggle {
		-webkit-transform: translate(0, 0);
		transform: translate(0, 0);
	}

	.actionsheet-item {
		display: block;
		position: relative;
		font-size: 0.85*0.85rem;
		color: #555;
		height: 2*0.85rem;
		line-height: 2*0.85rem;
		background-color: #FFF;
	}

	.actionsheet-item {
		display: block;
		position: relative;
		font-size: 0.85*0.85rem;
		color: #555;
		height: 2*0.85rem;
		line-height: 2*0.85rem;
		background-color: #FFF;
	}

	.aui-coll-cancel a {
		height: 45px;
		line-height: 45px;
		font-size: 12px;
		background: #f9f9f9;
		display: block;
		text-align: center;
		width: 100%;
	}

	.aui-coll-share-img {
		width: 38px;
		height: 38px;
		margin: 0 auto;
	}

	.aui-coll-share-img img {
		width: 100%;
		height: auto;
		display: block;
		border: none;
	}

	.aui-coll-share-box {
		position: relative;
		overflow: hidden;
		padding: 10px 0;
	}

	.aui-coll-cancel a {
		height: 45px;
		line-height: 45px;
		font-size: 12px;
		background: #f9f9f9;
		display: block;
		text-align: center;
		width: 100%;
	}

	.aui-coll-share-item {
		position: relative;
		float: left;
		padding: 8px 10px;
		width: 33.333%;
		box-sizing: border-box;
		font-size: 12px;
		height: 85px;
	}

	.aui-rule {
		position: absolute;
		right: 0;
		top: 1*0.85rem;
		background: #54ca9a;
		border-radius: 50px 0 0 50px;
		font-size: 0.8*0.85rem;
		padding: 0.2*0.85rem 0.6*0.85rem;
		color: #fff;
	}

	.aui-flex-box text {
		position: relative;
		color: #555a5e;
		font-size: 0.85*0.85rem;
		padding-left: 0.5*0.85rem;
	}

	.aui-flex-box text:after {
		content: '';
		position: absolute;
		z-index: 0;
		top: 2px;
		left: 1px;
		width: 3px;
		height: 75%;
		background: #398def;
		border-radius: 20px;
	}


	.aui-arrow {
		text-align: right;
		color: #394154;
		padding-right: 12px;
		position: relative;
		font-size: 0.85*0.85rem;
	}

	.aui-arrow text {
		color: #b8b8b9;
		font-size: 0.8*0.85rem;
	}

	.aui-arrow:after {
		content: " ";
		display: inline-block;
		height: 6px;
		width: 6px;
		border-width: 2px 2px 0 0;
		border-color: #b8b8b9;
		border-style: solid;
		-webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
		transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
		position: relative;
		top: -2px;
		position: absolute;
		top: 50%;
		margin-top: -4px;
		right: 2px;
		border-radius: 1px;
	}

	.aui-platform-list {
		background-color: #fff;
	}

	.aui-platform-list a {
		display: block;
		position: relative;
	}

	.aui-list-title {
		padding: 15px 15px 0 15px;
	}

	.aui-list-title h2 {
		word-wrap: normal;
		text-overflow: ellipsis;
		white-space: nowrap;
		overflow: hidden;
		text-align: justify;
		height: 1.6*0.85rem;
		color: #505050;
		font-size: 0.9*0.85rem;
		font-weight: 800;
	}

	.aui-flex-box h3 {
		color: rgba(0, 0, 0, 0.4);
		font-size: 0.8*0.85rem;
		line-height: 1.4;
		padding-top: 4px;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		font-weight: normal;
		margin-bottom: 0.9*0.85rem;
	}

	.aui-plat-img {
		width: 110px;
		height: auto;
		border-radius: 2px;
		overflow: hidden;
		margin-left: 1*0.85rem;
	}

	.aui-plat-img image {
		width: 220upx;
		height: 140upx;
	}

	.aui-platform-list .aui-flex {
		padding-top: 0;
	}

	.aui-flex-box h4 {
		color: rgba(0, 0, 0, 0.2);
		font-weight: normal;
		font-size: 0.82*0.85rem;
	}


	.aui-flex-box h4 em {
		font-style: normal;
		color: #7b91f7;
		border-radius: 22px;
		padding: 0.01*0.85rem 0.35*0.85rem;
		border: 1px solid #7b91f7;
		font-size: 0.65*0.85rem;
		-webkit-transform: scale(0.85);
		-moz-transform: scale(0.85);
		-o-transform: scale(0.85);
		transform: scale(0.85);
		display: inline-block;
		// width:2.6*0.85rem;
		text-align: center;
		margin-left: 0.4*0.85rem;
	}

	.aui-platform-list a:hover {
		background-color: rgba(0, 0, 0, 0.04);
	}

	.aui-flex-mar {
		padding: 5px 15px 5px 8px;
	}

	.aui-flex-mar .aui-flex-box {
		margin-left: 10px;
		border-radius: 3px;
		overflow: hidden;
	}


	.aui-footer {
		width: 100%;
		position: relative;
		z-index: 100;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		padding: 7px 5px 7px 5px;
		background: #ffffff;
		box-shadow: 0 -5px 7px #f4f4f4;
	}


	.aui-tabBar-item {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		color: #979797;
	}

	.aui-tabBar-item-text {
		display: inline-block;
		font-size: 0.65*0.85rem;
		color: #868686;
		padding-top: 2px;
		font-weight: bold;
	}

	.aui-tabBar-item-active .aui-tabBar-item-text {
		color: #378eef;
	}

	.icon-loan {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QkU5Njg3QjA2OUFBMTFFOUFFM0VBOTc4N0E5MzAxN0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEUyMUYxNEU2OUFCMTFFOUFFM0VBOTc4N0E5MzAxN0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCRTk2ODdBRTY5QUExMUU5QUUzRUE5Nzg3QTkzMDE3QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCRTk2ODdBRjY5QUExMUU5QUUzRUE5Nzg3QTkzMDE3QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pj8vExIAAAvcSURBVHja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');
	}

	.icon-credit {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEUyMUYxNTE2OUFCMTFFOUFFM0VBOTc4N0E5MzAxN0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEUyMUYxNTI2OUFCMTFFOUFFM0VBOTc4N0E5MzAxN0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RTIxRjE0RjY5QUIxMUU5QUUzRUE5Nzg3QTkzMDE3QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RTIxRjE1MDY5QUIxMUU5QUUzRUE5Nzg3QTkzMDE3QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsdxHzUAAAWgSURBVHjatJnnUiM7EIWvB5O5BJtYZEx6/4ehiAWYDCbnvF/5bAkhaeTxwOqHSzMjtY46nG7Jhc/Pz/+8xstCoZD7pfnEL18jY9JaIQir4dpZ3mTfgN+SiJQv7B4C0zH9oCLzYaIVU9VYl2LEOZ339/ebent4eHh8fHx9feUNX1taWlpbW9vb2/+vt97eXt7Yc4Mb+AUjXl1dnZycXFxcfHx8pKlB/kQDU6lUGhkZ6evra0pbMVjOkufn5/v7+3d3d0HVpsnRp56enomJiXK5nBOWoNiA6D8/P29tbaEne2RXV1d/fz+W6uzsxGoohpeYksGY9fb2lvGY2J7C+Eql0tHR0RysoEXOzs7AhMk0kuUxyujoKNLjwcgj+I6Pj5Hw9vb2N8SSZGFhYXBwMB6kf2GlBfzu7i6GM+YADbZoa2vzlRppYKpWq+AzsxAyNTVlx5AjKuZb29vbBwcHhXpDN4uLi7hIPOAd69sL39/fr62toT+BYIdzc3Npu0qFhZ729vbQuXxiaWlJ3pOPIY1NVldXLy8v6SB5fHx8eno6KCrxGZLfWq2G7ZjJIxG+vLzsY8rIQPaSCEQUjiWFYQrcLigq8Vd6enrCx0U8wiSdBTfgsHmEIwwynAGxmri5uUnk+kISn3jAhJMyH3/Cds4Esy2/k5H/6INMNEGAgyymLX2AM8VPyAIT4OIFQiZu9CTgEgiXLliORR2BieOSuJT6Y2NjJu6CIOK5uWFDOMGoPrHlCPzmW6Re2BkNsRt4pdmIa7aogr3I6wiHOwjPsG/xe3R0BCbsDY/boRdJeQ3d309upg8tDw8PixdPT09dWBpKOsPMUgzqddJI3GQGd7CaSHtkCvvXXEoSlUauETGfPnR3d5N97YXNqpHa0Cb3jOzKFPK91sJEAPgGSxJNgUBt5FSCph/El73ICW6JFKLO9fX1V3VqDASLaj1qFX8Z8qMYGW+YmZmxGdL+OjQ0NDs761jK/2p7hVnOroKK5jNvNVpadXK28j/9w8NDwoJcZibu7OwQK+oraMBt51Z9ZTodIsmeSzMOQxYP+Bb1uEYTIH7JZQ4UjDEg1JwgoqS2H9mPVC7herQbJaQGACAAywSCqMHxIQGi4Zt2iszCbaa0Dw4wTBSORHtt28flT3ZU8mjPwmNsTzfcrQYFsBOzJR6zxEHRRq09kachX1sB8hWsg54oS0yRpEY1J0OLhyYnJ+2vGixDsx9nrq0k2whfsIrFoirul5cXwbJrBJARRGnl9Vy9BQ3KYrP1lqYkllNHi7pGJCJkBTsi0ir9CI83e4AmIdoh6cKC3CXOZlvbwyJsGUxEGbneHDxh/AAsDubaqHMe9Dm9qcTXsJnaAQABWLAt7kWw6FrBoYamaqns5SEWVHbBBcOwwEQ21LEC0nOgNFtLZWyKX4QPDAzYpdQ33qIi1SC4gADxHeu3mjYMrYv0dWwMFM0mmcvvMCWnJXN99esW1FaplU0pxdLhollriwyVVnGyfFeMWRoBaFTlMPC36lQIyuWyCiD6nM3Zzb/AhNj19XXjVf4FU+KwOQ2+xvvoEI8bGxv/wtPBpMsI2vz8fKa7U9i2UqlIhTrB/dC1nQ5GoHJXH0wqbDJd6VIU2BVzbkzOyRvbrays1Go1BRMHMlUf/kKpV7qmGvlJuNnI8HHZzlyVpV3XZLppzh2JJj2wQwprU6ZKT3aF48svZuSYHP8G8AjFwMwAku75JZcQUsZ2adNTYRGMlF8Mvbm5IVvFMeE0Sh0QN+mBNHddb/ZhhoXhguCVburdqd+IF3zTnql0mc+U8DiGc25yg3eZDbQF81LhmONQviKCnZRKJWpl9NSUk8QWI2qq1ar+sIjD0oUKY+hwnoP5UI/+XInckOX/c+XnYZhvepIFU3bzOX+Y5aa9JH6j0mwN+PMbTbU/AgwAq56yFPAJjNAAAAAASUVORK5CYII=');
	}

	.icon-ions {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NEUyMUYxNTU2OUFCMTFFOUFFM0VBOTc4N0E5MzAxN0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NEUyMUYxNTY2OUFCMTFFOUFFM0VBOTc4N0E5MzAxN0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RTIxRjE1MzY5QUIxMUU5QUUzRUE5Nzg3QTkzMDE3QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RTIxRjE1NDY5QUIxMUU5QUUzRUE5Nzg3QTkzMDE3QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvYJXqcAAAO/SURBVHjatFldTyoxEGUrSJTwIiCKBi7xCR545//HX2Cij4KJgh8vih9RUe6RyR3nbne7s93Sh83SbadnptMzMyVarValpIb+KIpKxZotJNaTtopJk1gQE2lrC6Ee+urQ3CSK23TL1Llsw7q9vb27u3t9ff36+sL87+/vvJaTZojWrVartVqtg4MD7nc7SSTN8/HxcXFxsVgsjDE0DZjovYhX4YUkANxgMKhWqzl8CyPOz88ZE8/x29aYX9Pz5eUFakPVzOllnjmfzzGNMJ2cnDQajUqlEuQMLpfL+/v7y8tLAMIScJLDw0OVy+Mz/ImG9vt9OEG5XA7i1BAIURDY7XbJ9g8PD5mO/7uJ0IOsvb+/HzvJxW2GJ5DRCy/kaMYWsbW1FYpRpWvCZiSNDngGLBu4fYL8uNRmVL00I6elkbKfkTRukPbVyG9B4qBtcgeUtOXKSjszh7ENvBXAxNPTU3JiEGyz2ZTsnxx8Ett0Or2+vpag3UEJ/UdHR71ez83mkPD4+Pj09AQmGw6H29vbPMxoYAETJjAODkoOj5nNZo49jZkclIEAw/J/qE4DC6pLa9F8hy/jK3jcTq34OR6P8YnZn+ISsT/NUsHqrVvBEESpxGrdqBNMBhygMTgJfgIiftIYo+chD/qRIYifMiXBC/ydgMJgrInJS9Z6MovxDrNr7KwQ+5PvsnCTV2/vjDmRWdJ81PhxT66glHk+PGHljYzuakfTVCfx6uqKqEu/2PHxcezw5tJNS6fST2UUSmuSTiWFhoTV6XQQv+RRclA802mRCk+1iX/Wza/s1pjW/yRKPpRM7Vdbh4ElU3J6V67kXRB48lYuEvHIm/MFHw4jUjrvlGbJWEAsai15yDkXcEQVh1H5FDvGq07iZDIBD3EolRcTtAznohpwmmJfZa2bmxsu7ggHiyZ8GKDBtLe3hyeS9zC8RdmpnajwEwM0dhoMBm9vbzs7O5nMp4LV7XbtAOfHk4xJewfhkWx5lN2eBJGLJz0YXEmwpqD2Ya96k2HZmMKilEl9Yqbv8q1NXEkkcrJji4y9g6Coze2pHbU+Pz9pLb5X+w9WrVYjDfi2slT4TwN3ikZqYzmKHLu7uwmw2u02DUX1PZ/PUYkH9/eY+bEECnyU1AS31Wr9juRx2Luzs7Pn52e/i/iCQLFXo9GIo/ivtbC1w+GwXq/LamITvhX726f0728EWR9Etg9iB2Hb9/f3je4j/+mCyE03IhJ3HFZYH8/0+tScrGB2GzbJ5k4TsMbPFRPtCwHJtH8FGABtrywIFz4BdAAAAABJRU5ErkJggg==');
	}

	.icon-meTo {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAIAAACRXR/mAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQ1IDc5LjE2MzQ5OSwgMjAxOC8wOC8xMy0xNjo0MDoyMiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NjI1Mjg3OEM2OUFCMTFFOUFFM0VBOTc4N0E5MzAxN0MiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NjI1Mjg3OEQ2OUFCMTFFOUFFM0VBOTc4N0E5MzAxN0MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0RTIxRjE1NzY5QUIxMUU5QUUzRUE5Nzg3QTkzMDE3QyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0RTIxRjE1ODY5QUIxMUU5QUUzRUE5Nzg3QTkzMDE3QyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PnD4bu8AAAWySURBVHjavJlVU+xKFIXvDIO7yymk8EJe4P//BOABBq/C3d3hfJVFbZokk2Tk3H6gMknL6i2r125SX19f/xXUGJhKpezBfpakpQsDxF8DEcRU8FaLgiUcEQjcDoW1TGHDZJuXl5ezs7Pr6+vn5+e3tzdeVlZWlpeXNzU1tbW1VVVVFQyrwG0BaGdn5/z83AIr2Ke9vb2/vx+g/xOsy8vLtbW1z8/PWEeXlZUNDQ2B75/DOjw83N7elpFA1tzc3NLSwl9ZBSviU6x4c3Nj+AYGBnp6ekLzt0BY7mCesdPq6qp+VldXDw8PNzQ0hI66vb3d3NwEpeYfHx9vbW0NnTZvWD5CYo35+XksxM+6urrJyUl8FDGEntlsFnwpr83MzMiiSRguHZtuNgUxrngixaampgyTuzF3G+l0emJiAqPyhoG4PiGmeN6yJcUFesZ3LGmffMu4P4E+MjKi54uLCyaxwCoclrszw0R019fX2/K+BYLr0Rka+/KaTRLLt/FOVFNm8YbIdd9HmMoa1Kr3lp65euZ9+Dw+PvKXEGlsbExy9rmfNAQcmqSUZ+LHxwcrEVIua0cRj/OJIUpMDqjSwHKPZDB9eq0w0cHw5OIinVAskFN6sB3nEhHB9ySgHjjFE4qLeCfKHbW1taIizhafm3w6x33vpgufampqSsNbtmkdMjxDP9GSMGg/jkiL/RJbq6OjQ+thrbu7uyCg4BB1oLPxgqREEmRJM5FsMvrhDCYxY31BB7rRWSAYnlx75SGa0ScKfOhnZWWFJaOTlw50E1cxkOEJudSvIGLjkdNjY2NDQziDkXiES+goHOcKm7GxMaxVuAyMRXZwcCApoW6S7YCrqKhg7OvrK8F0enoKLFGoZOCfP3/yqvO+YeVV5SEGsdn7+7s7MBjI/ISoBgcHk4vmn9lCKSdCShhDop8gi4hduSWGTwUVpU4h9FOvKWzpiXzo6+sTtQocnHR1dUVBhvvE43yF5JR3Op5xOhuQROMrcDs7O0mCvLU8MUEpQRjJUxYlKmaYtLe3FwSx+2ZLW1tbmsRNQ1p3dzcBp0nCYfnqCLZOHWEixDD9qnozGczW1dWVyykYkkzUSaVzOrh/RV5ohvqtRR4tLy/b/rA522IkRnp6emIlSgaDC0cQPRRkPmRHR0c4TlpI3UZHR6lKeIM3+Xp/f28rsjeIxrexX7CIj4WFBTDRg/2xJJh8A5iXYMei35mcSsEOlIHSeuxqd3eXvzYtn5hH1rJ5mATnshx+4BPIMFuItTQG3+kkhoQoWiy0gxcyhB3Bx7yu930ORS9QjEj4B1ObxnJ4WQKOQtL15o+18BFloLxDDeiK49CFydO9vb2TkxOfMFQsEnmkRcS9l9bldAIZzxhidnZWUvEXrF2vqYgAe0Lqx5vHx8dwBLuSpIb3cRwPEYDsPdE2Nzen2x5Mi07R14xbnqu3S8oWQKF1tkrZAa9Fy/lQ2cMDmQRN6FKDvbH0d+lrXdmuVXbRpWmEU/K9IVPhqQfS016mXU43Tkp+PubaQK6eQfR2O6dzIlxv5aK+JIVXkp7B/sYdbuqkXc4VJrxZwjvj2KZcAZOrXX9gwcIK59AiIok3k/d0n2050aS+/sCya7H9/f2Hh4fQeiH6djk2FYJVCaZiOXE9AH4uoVx5xOElLllaWoInc8VQXi6OGMgSi4uLqlbwoLGD//DBSNlslpRUkJEjdNVVdqmiTQoFlUZZgKm+yTOTmZ6edotbv4KAPNbX1xnpihmygTHYEnycEuyszGtAl+/SXpNQoynOePjwGiKH5GdOcKCX3AsSxjInBYidvzkrHyZCe5gG/HcNI0HxiJTgHWyUaL7wGjWMS3TFN+yNDmj1WlH38njhyWs4Qh6Rd1x/WZa5npWv5XecVe21JLV1fuVrSUI+yTGVzpXMxf/zLTmpBl+m8x1ZZMtVkrhMy9+/AgwANFDr1leL2m8AAAAASUVORK5CYII=');
	}

	.aui-footer-fixed {
		position: fixed;
		bottom: 0;
		left: 0;
		z-index: 49;
	}





	// 资讯界面end
</style>
