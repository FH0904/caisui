<template>
	<!-- ream -->
	<view>
		<view class="aui-flexView">
			<view class="aui-scrollView">
				<view class="aui-tab" data-ydui-tab>

					<!-- tabbar部分 -->
					<ul class="tab-nav">
						<!-- <li :class="tab-nav-item tab-active" @click="flag = true"> -->
						<li :class="['tab-nav-item',flag ? 'tab-active' : ''] " @click="flag = true">
							<view class="a" hover-class="none">
								<span>朋友圈</span>
							</view>
						</li>
						<li :class="['tab-nav-item',flag ? '' : 'tab-active' ] " @click="flag = false">
							<view class="a" hover-class="none">
								<span>广场</span>
							</view>
						</li>
						<view url="../issue/issue" class="aui-navBar-item" @tap="goissue">
							<span class="active">发布</span>
						</view>
					</ul>


					<view class="tab-panel">
						<!-- 第一页部分 -->
						<view :class="['tab-panel-item',flag ? 'tab-active' : '']">

							<!-- item start -->
							<view class="aui-item-list" v-for="(item,index) in ringDate" :key="index">
								<!-- header -->
								<view class="aui-flex">
									<view class="aui-user-one">

										<image :src="item.avatar" mode="aspectFill" lazy-load="true" ></image>
									</view>
									<view class="aui-flex-box">
										<h2><i>{{item.nickname}}</i><em>
												<!-- <image src="../../static/ring/images/male-info.png" mode=""></image> -->
											</em></h2>
										<p>{{item.create_time}}</p>
									</view>
									<!-- <view class="aui-icon-more">
										<i class="icon icon-more"></i>
									</view> -->
								</view>
								<!-- content -->
								<view class="aui-item-title">
									<h2>{{item.title}}</h2>
								</view>
								
								<!-- 图片部分 -->
								<view class="aui-flex aui-flex-two aui-flex-img">
									<view class="aui-flex-box" v-for="(itemImg,index1) in item.images" :key="index1">
										<image :src="itemImg" :data-url="itemImg" mode="aspectFill" @tap="showimgs1(item.id,itemImg)"></image>
									</view>
								</view>
								
								<!-- 点赞与评论 -->
								<view class="aui-pus">
									<span>
										<i class="iconfont icon-pinglun"></i>
										{{ item.review.length }}
									</span>
									<!-- 点赞功能 -->
									<span @click="flagvo1(item.id)">
										<i :class="['iconfont',likes[item.id].is_like ? 'icon-dianzan':'icon-duomeitiicon-']"></i>
										{{likes[item.id].like_num}}
									</span>

									<!-- <span><i class="icon icon-no"></i>109</span> -->
								</view>
								
								<view class="review">
									<ul>
										<li v-for="(review,rindex) in item.review" :key="rindex">
											<!-- 普通评论 -->
											<view v-if="review.reply_id === 0" >
												<span style="color:#2196f3"> {{ review.send_nick }}: </span>
												<span style="padding-left: 5px;"> {{ review.content }} </span>
											</view>
											<!-- 带回复的评论 -->
											<view v-else >
												<span style="color:#2196f3"> {{ review.send_nick }} </span>
												<span> 回复 </span>
												<span style="color:#2196f3"> {{ review.reply_nick }}: </span>
												<span style="padding-left: 5px;"> {{ review.content }} </span>
											</view>
										</li>
									</ul>
								</view>
								
								<view class="divHeight"></view>
							</view>
							<!-- item end -->


						</view>
						<!-- 第一页end -->

						<!-- 第二页部分 -->
						<view :class="['tab-panel-item',flag ? '':'tab-active' ]">
							<!-- item start -->
							<view class="aui-item-list" hover-class="none" v-for="(item,index) in ringDate" :key="index">
								<view class="aui-flex">
									<view class="aui-user-one">

										<image :src="item.avatar" mode="aspectFill"></image>
									</view>
									<view class="aui-flex-box">
										<h2><i>{{item.nickname}}</i><em>
												<!-- <image src="../../static/ring/images/male-info.png" mode=""></image> -->
											</em></h2>
										<p>{{item.create_time}}</p>
									</view>
									<!-- <view class="aui-icon-more">
											<i class="icon icon-more"></i>
										</view> -->
								</view>
								<view class="aui-item-title">
									<h2>{{item.title}}</h2>
								</view>

								<view class="aui-flex aui-flex-two aui-flex-img">
									<view class="aui-flex-box" v-for="(itemImg,index1) in item.images" :key="index1">
										<image :src="itemImg" mode="aspectFill"></image>
									</view>
								</view>

								<view class="aui-pus">
									<span><i class="iconfont icon-pinglun"></i>{{item.comment_num}}</span>
									<!-- 点赞功能 -->
									<span @click="flagvo1(item.id)"><i :class="['iconfont',item.is_like ? 'icon-dianzan':'icon-duomeitiicon-']"></i>{{item.like_num}}</span>

									
								</view>
								<view class="divHeight"></view>
							</view>
						</view>
						<!-- 第二页 end -->

					</view>

				</view>

			</view>
		</view>
	</view>
</template>

<script>
	var _self, page=1
	export default {
		data() {
			return {
				flag: true,
				flagvoo: false,
				memberLike: 501,
				ringDate: [],
				likes: []
			}
		},
		onLoad() {
			_self = this;
			// this.getRingDate()
		},
		onShow() {
			this.getRingDate()
		},
		// 下拉刷新
		onPullDownRefresh() {
			this.ringDate = []
			page = 1
			this.getRingDate()
			setTimeout(function() {
				if(_self.ringDate.length >= 1){
					uni.stopPullDownRefresh()
					uni.showToast({
						title:"刷新成功",
						icon: "none"
					})
				}
			}, 1000);
			
			
		},
		// 上拉加载
		onReachBottom() {
			console.log(1)
			// uni.showLoading({
			// 	title:'加载中'
			// })
			this.getRingDate()
		},
		methods: {
			// 图片预览功能
			showimgs1 : function(id,currenturl){		
				var imgsNeedShow = [];
				for(var i = 0; i < this.ringDate.length; i++){
					if(this.ringDate[i].id == id){
						 imgsNeedShow.push(...this.ringDate[i].images)
					}
				}
				uni.previewImage({
					urls    :imgsNeedShow,
					current :currenturl,
					indicator: 'default',
					// loop: true,
					
				});
			},
			
			// 去发表内容界面
			goissue() {
				// 判断是否已登录
				if (this.$db.get('userToken')) {
					// 登录的话跳转到详情界面
					uni.navigateTo({
						url:'/pages/issue/issue'
					})
				} else{
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
			
			// 数据的获取
			async getRingDate() {
				var token = this.$db.get('userToken')
			
				let res = await this.$httpRequest.init({
				    method: '' !== token ? 'pages.lmoments' : 'pages.moments',
				    token: token || '',
				    page: page,
				    size: 5
				});
				page++;
				console.log(res)
				if (res.status) {
					this.ringDate.push(...res.data)
				}
				// 实现点赞功能
				res.data.forEach((item) => {
					this.$set(this.likes, item.id, {
						is_like: item.is_like,
						like_num: item.like_num
					})
				})
			},
			
			// 点赞功能
			async flagvo1(id) {
				var token = this.$db.get('userToken')
				
				let res = await this.$httpRequest.init({
					method: 'pages.likemoments',
					moment_id: id,
					token: token
				});
				
				// like只从本地更新状态，不要从服务器拉取
				if (true === res.status) {
					const current = this.likes[id]
					this.$set(this.likes, id, {
						is_like: !current.is_like,
						like_num: current.is_like === true ? current.like_num -1 : current.like_num + 1
					})
				}
			},
		},
		components: {

		},
	}
</script>

<style lang="less" scoped>
	html,
	body {
		color: #333;
		margin: 0;
		height: 100%;
		font-family: "Myriad Set Pro", "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-weight: normal;
		// font-size: 32rpx;
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
		width: 100%;
		height: auto;
		display: block;
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

	/* .clearfix {
} */


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
		border-bottom: 1px solid #e2e2e2;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		-webkit-transform-origin: 0 100%;
		transform-origin: 0 100%;
	}


	.aui-arrow {
		position: relative;
		padding-right: 0.8*0.8rem;
	}

	.aui-arrow span {
		font-size: 0.8*0.8rem;
		color: #9b9b9b;
	}

	.aui-arrow:after {
		content: " ";
		display: inline-block;
		height: 6px;
		width: 6px;
		border-width: 2px 2px 0 0;
		border-color: #848484;
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


	.aui-flex {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		padding: 15px;
		position: relative;
		flex-wrap: wrap;
	}

	.aui-flex-box {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		min-width: 0;
		font-size: 14px;
		color: #333;
	}

	.aui-flex-box .ad-005 {
		width: 690upx;
		height: 690upx;
	}

	.aui-flex-box image {
		// width: 170upx;
		// height: 170upx;
		width: 190upx;
		height: 190upx;
		margin-top: 10upx;
	}

	.aui-flex-box .male>image {
		width: 32upx;
		height: 32upx;
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
		padding: 0 0.9*0.8rem;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		font-size: 0.7*0.8rem;
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
		font-size: 0.9*0.8rem;
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
		font-size: 0.95*0.8rem;
		color: #333;
	}

	.icon {
		width: 20px;
		height: 20px;
		display: block;
		border: none;
		float: left;
		background-size: 20px;
		margin-right: 4upx;
		background-repeat: no-repeat;
	}

	.icon-return {
		background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACh0lEQVRoQ+3ZMW8TMRQH8PcOsTBQISExVCIRCwgWFvZ+hZYBpIrEcTYkBsTGlI2VDamL3YEBpWJoR1BJaOlXYEzyDYp0bMRGRjnJoDuWs/1e3EbKeHf55b33vzsb4YJ98IJ54RKce8XZV1gIcQ8AviDiD2vtC631pzZFYQ2WUt611p4CwM0VcqqU2soSXIN1ztdKqTfZgRuw75RSz9tg3bHsWjomlh04NpYVOAWWDbjf7z8oimLipbH7bUopJdvO7L/Hk8+wwyLiCSLe8H6cww4BwGYFTo0lbWkKLBmYCksCrsNaa99rrZ/FmFnS0GrCdrvd3mg0MqEDqu58yVKaAzZZSwshHgLAsX/rcW2csrJVtaNXeIWdIuL16qJU2OgVrsMCwEGn03mSamaThVYTtizLp+PxeJkioJKFFldslJbmjA0O5o4NCm7AHpZluUM5s1FCSwjxCAA++7ceADiczWaPJ5PJL6qAihJaUspdY8w+Il7xLsASG6SlhRA/EfGa91BxNJ/Pd7hVNtiT1mAwOAeADXdCa637Hi0Wi3zBUsptY8wHRLzqwIh/nlbzbWmna0roLEOrmo11QQd9W1oHdFDwOrR3cLCH/uuFn0uQRQE7dMPKJHl6RwNzRUcF/w9N9VIRHVyhazbLDihWP5KAHbphOzQ5OhmYCzopmAM6OZgaTQL20FMAuOUtHESfaTLwCn3HWnuWEk0KpkCTg1OjWYArtDHmKyJu+jMdeh+KDdghh8NhZ7lcfvPRoXcaWYFToNmBY6NZgj20m+nb3pr3W631yzY7GWzBDtXr9TaLojjz0N+VUvezBXvoPQBw0Fda649Zg9vg6o5l3dKhse58l+AY/yqnc/4GvNDoTFOq8FwAAAAASUVORK5CYII=");

	}


	.m-slider {
		overflow-x: hidden;
		width: 100%;
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
		margin: 0 .25*0.8rem;
		width: 8px;
		height: 8px;
		display: inline-block;
		border-radius: 100%;
		background-color: rgba(255, 255, 255, 0.4);
	}

	.slider-pagination>.slider-pagination-item.slider-pagination-item-active {
		background-color: #fff;
		border-radius: 100%;
	}


	.aui-palace {
		padding: 0.5*0.8rem 0;
		position: relative;
		overflow: hidden;
	}

	.aui-palace-grid {
		position: relative;
		float: left;
		padding: 1px;
		width: 20%;
		box-sizing: border-box;
		margin: 5px 0;
	}

	.aui-palace-grid-icon {
		width: 30px;
		height: 30px;
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
		font-size: 0.85*0.8rem;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		padding-top: 0.2*0.8rem;
	}

	.aui-palace-grid-text h2 {
		font-size: 0.8*0.8rem;
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
		margin-top: .15*0.8rem;
		font-size: 0.28*0.8rem;
		color: #555;
		height: 1*0.8rem;
		line-height: 1*0.8rem;
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
		font-size: 0.85*0.8rem;
		color: #555;
		height: 2*0.8rem;
		line-height: 2*0.8rem;
		background-color: #FFF;
	}

	.actionsheet-item {
		display: block;
		position: relative;
		font-size: 0.85*0.8rem;
		color: #555;
		height: 2*0.8rem;
		line-height: 2*0.8rem;
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

	.icon-vo {}

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
		top: 1*0.8rem;
		background: #54ca9a;
		border-radius: 50px 0 0 50px;
		font-size: 0.8*0.8rem;
		padding: 0.2*0.8rem 0.6*0.8rem;
		color: #fff;
	}

	.active {
		background: -webkit-linear-gradient(left, #55eef4, #10c6fb);
		background: -o-linear-gradient(right, #55eef4, #10c6fb);
		background: -moz-linear-gradient(right, #55eef4, #10c6fb);
		background: linear-gradient(to right, #55eef4, #10c6fb);
		color: #fff;
		border-radius: 44upx;
		padding: 0.3*0.8rem 1*0.8rem;
		font-size: 0.85;
		// margin-top: 1*0.8rem;
		height: 58upx;
		line-height:58upx;
	}


	.tab-nav {
		height: 55px;
		line-height: 55px;
		display: block;
		position: relative;
		background: #fff;
		z-index: 1;
		width: 100%;
		margin: 0 auto 0.5*0.8rem;
	}

	.tab-nav-item {
		height: 55px;
		line-height: 55px;
		position: relative;
		text-align: center;
		color: #585858;
		font-size: 0.9*0.8rem;
		display: block;
		float: left;
		width: auto;
		margin-left: 1*0.8rem;
	}

	/* .tab-nav-item.tab-active {
	background-color: #51bd03;
} */

	.tab-nav-item.tab-active .a {
		color: #333333;
		font-size: 1.5*0.8rem;
	}

	.tab-nav-item .a {
		display: inherit;
		font-size: 1.5*0.8rem;
		color: #999999;
		font-weight: bold;
	}

	.tab-panel {
		position: relative;
		overflow: hidden;
	}

	.tab-panel .tab-panel-item {
		width: 100%;
		position: absolute;
		top: 0;
		-webkit-transform: translateX(-100%);
		transform: translateX(-100%);
	}

	.tab-panel .tab-panel-item.tab-active~.tab-panel-item {
		-webkit-transform: translateX(100%);
		transform: translateX(100%);
	}

	.tab-panel .tab-panel-item.tab-active {
		position: relative;
		-webkit-transition: -webkit-transform .15s;
		transition: -webkit-transform .15s;
		transition: transform .15s;
		transition: transform .15s, -webkit-transform .15s;
		-webkit-transform: translateX(0);
		transform: translateX(0);
	}

	.tab-nav-item.tab-active:before {
		content: '';
		width: 100%;
		height: 6px;
		position: absolute;
		left: 50%;
		bottom: 6px;
		margin-left: -50%;
		z-index: -1;
		background-color: #fed231;
	}


	.aui-dis-user {
		width: 92%;
		margin: 0 auto 1.2*0.8rem;
		overflow: hidden;
		border-radius: 5px;
		position: relative;
	}

	.aui-dis-user .banner {
		width: 760upx;
		height: 300upx;
		position: none;
	}

	.aui-flex-one {
		position: absolute;
		left: 0;
		top: 0;
	}

	.aui-user-sml {
		overflow: hidden;
		padding-left: 0.8*0.8rem;
		margin-right: 0.5*0.8rem;
	}

	.aui-user-sml image {
		float: left;
		width: 80upx;
		height: 80upx;
		border-radius: 100%;
		border: 1px solid #fff;
		margin-left: -10px;
	}

	.aui-flex-box h2 {
		color: white;
		font-weight: normal;
		font-size: 1.1*0.8rem;
		line-height: 1;
		width: 100%;
		overflow: hidden;
		margin-bottom: 0.39*0.8rem;
	}

	.aui-flex-box h2 i {
		float: left;
		font-style: normal;
	}

	.aui-flex-box h2 em {
		margin-top: 1px;
		float: left;
		margin-left: 0.25*0.8rem;

	}

	.aui-flex-box h2 em img {
		width: 16px;
		display: inline-block;
	}

	.aui-flex-box .title {
		margin-bottom: 0;
	}

	.aui-flex-box .title i {
		color: rgba(255, 255, 255, 0.6);
		font-size: 0.85*0.8rem;
	}

	.aui-flex-box .title em {
		margin-top: -2px;
	}

	.aui-flex-box .title em image {
		width: 26upx;
		height: 26upx;
		display: inline-block;
	}

	// .aui-flex-img {
	// 	display: flex;
	// 	justify-content: center;
	// }
	.aui-title-head {
		position: absolute;
		left: 0;
		top: 4.6*0.8rem;
		width: 100%;
		text-align: center;
		color: #fff;
		font-weight: normal;
		font-size: 1*0.8rem;
	}

	.aui-arrow-white {
		position: absolute;
		right: 1*0.8rem;
		bottom: .5*0.8rem;
		color: #fff;
	}

	.aui-arrow-white span {
		color: white;
	}

	.aui-arrow-white:after {
		border-color: #fff;
		margin-top: -3px;
	}


	.aui-flex-box h3 {
		color: #47becf;
		font-weight: normal;
		font-size: 0.95*0.8rem;
	}

	.aui-flex-box h4 {
		color: #333333;
		font-weight: normal;
		font-size: 0.95*0.8rem;
	}

	// .aui-flex-two {
	// 	padding-top: 0;
	// }

	.aui-flex-two .aui-flex-box {
		// width: 170upx;
		// height: 170upx;
		margin-right: 0.8*0.8rem;
		// width: 22%;
		float: left;
		-webkit-box-flex: inherit;
		-webkit-flex: inherit;
		flex: inherit;
		// text-align: center;
		// margin: 0 auto;	
	}

	.aui-item-list {
		position: relative;
		display: block;
	}

	.aui-user-one {
		width: 60upx;
		height: 60upx;
		border-radius: 100%;
		overflow: hidden;
		margin-right: 1rem;
	}

	.aui-user-one image {
		width: 60upx;
		height: 60upx;
	}

	.aui-item-list .aui-flex-box h2 i {
		color: #333333;
		font-weight: bold;
		font-size: 0.85*0.8rem;
	}

	.aui-item-list .aui-flex-box h2 {
		margin-bottom: 0.1*0.8rem;
		line-height: 1.2;
	}

	.aui-item-list h2 em {
		margin-top: -2px;
	}

	.aui-item-list h2 em image {
		width: 26upx;
		height: 26upx;
		display: inline-block;
	}

	.aui-item-list p {
		color: #999;
		font-size: 0.7*0.8rem;
	}

	.icon-more {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABoElEQVRoQ+2bMU7EMBBFM+ki4AzUETRJDgM9iFNBDZeJ04BSc4dduYuRUaJdIYi8lr+xNz91PJ4/zx5bX4kUEZ+maZ5F5E5ELu20xphdURSvSqmnWGlIjInqur6uqup9EfpzTitca307juMnOp8ogtu23YnIxZoYK1opdZW9YLuMy7J8cBEyTdPLMAyPLu/6vgMn7EJ3ST4GZbjgruvMKTT6vofmBA1uhW5O8IlLeq+U+j6yUA+c8OaaliXlQtkYA6drc4ETtpPMF4+Pv85iK1ZrfXM2F49lP85Xy/tFuBVqjHlDn73H/SAKYVQD8olLwT5Vy2kMCedEyydXEvapWk5jSDgnWj65krBP1XIaQ8JIWvSl5+rSlwYuM/ge3pzF42Lv0JfOeUnTl16hF8O5ZNNCbB+XxhWDLn1pBN3jmPSl0RX+JT68af2DptUpKTg1IqHzIeHQFU0tHgmnRiR0PiQcuqKpxSPh1IiEzicqYfrS9KX5vXToLYz/Es/F3qEvHZzrISC8S9OXpi99qMBZ/ORh5bg0LvrSoMYFb1qp+dJf1V0vTHw5yOcAAAAASUVORK5CYII=');
	}

	.aui-item-title {
		padding: 0 1*0.8rem;
	}

	.aui-item-title h2 {
		color: #464646;
		font-weight: normal;
		font-size: 0.95*0.8rem;
	}

	.aui-six-sml {
		width: 80px;
		margin-right: 1*0.8rem;
	}

	.aui-six-sml image {
		width: 160upx;
		height: 160upx;
	}

	.aui-flex-three {
		background: #f4f4f4;
		padding: 0;
		margin: 0.1*0.8rem 1*0.8rem;
	}

	.aui-flex-three h4 {
		font-size: 1*0.8rem;
		margin-bottom: 1*0.8rem;
	}

	/* .aui-flex-three p {

} */


	.aui-pus {
		overflow: hidden;
		// margin: 1*0.8rem 0;
		margin-bottom: 1*0.8rem;
	}
	
	.review {
		padding: 10px;
		background-color: #d6d6d6;
		span {
			font-size: 0.6rem;
		}
	}

	.aui-pus span {
		float: right;
		font-size: 0.7rem;
		color: #666666;
		// display: block;
		margin-right: 1*0.8rem;
		width: 15%;
	}

	.icon-vo {
		width: 18px;
		height: 18px;
		background-size: 18px;
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAFOElEQVRoQ+1a3W3cOBCeEex9ja+Cy1VwSQWxO0gquDVgEX6LU8E5FcR+M0gDt6kgvgqSVJBsBbE7iF8lWHMYgRIoLimRErUX/xAwYKyoT/NxhjPDGSI8soGPjC88EX7oGn/ScIyG8zx/AQDPEHHfeO+aiNZKqe8xWPbcPM9fIeJzAOC/ehDRFwC4nYIdreHj4+PnVVW9BYDXpjAOctcAsMqy7OPFxQX/PzgY++7u7m/GRsS9nhcY7yrLsvNQ7AYrmPByudxbLBYszMmg5JsTTouiOF+tVj9d7zL27u7uB0RcxmAT0U9EPOvDtvGCCGvT/Tyw6r2yEhGb+KFtjimwAYC30ZsQUx8knOc5rzqvvm1iazZZ3lfmh7S22NyXiPjKXAXWCAAcNPMZGxH/sVeKiL4ydlmWV6ZVHB0d7WdZxn6DZfqzD9u3+r2E9Qc+W8A3RLS8vLxkB9I7+H1EXCHi74bjqUkT0V6WZR1sAFhXVXUyFbtP017CWlM/LM1+lFJG7TO9988A4C/Lk+9Z2O+llKdDi2g/F0KsTGzeOmVZHvj8hZdwnue8Z81wE03WFM5nvjrc8N5mwUcNB+lzpZTTuToJO0x5XRTFvm/VQqV0kL4lov0QZzP0DSEEO8V2X2dZ9ocrZDkJ29olopcphGKhTdJENEmz5iLo/OCH8ZvTIjcIc5hAxG+Gk/mqlDJNe2ixB5/neX6GiNdSSt7byYZt2i4tuwizMJxJNeONlPIqmVQzAjm0/M5eVBfhb4jIsa4eUsrBWD0jh2hocy8T0b9KKc4J2rFBRghBc5pzNIPIF/R2qS2UEx2l1G9ewg7vPCo2RsqYdLoQgjX6yWehHQ0/BMI2BzvCDBG+Nw6r0ahNuKqqAzNV7SVsT05qezOCWX6ok0M8eA3bUabXSwPAvXNatkmHEObj2zPt1jfi2IyWmARaCMEnLq7McFjayBJdGm6PW644lkSqGUHyPDcTp+FMy45jKRP8GXnW0PY5ICiX5heFEKZZcwnnYG5hU+Bbh4e1lLJNkRt8Z55s7gM98ZePx46Ew3n0dBLWZRmu/dbOi6uCRVG8nFoASKFFH4a5d4noRinVFvC9ubT5QAjBJZIPzW9E5C2bzEkkBNuWFQC8Ftl79LPLJikrHyFEQubobgV75rqM7DoSBmnY5fWGKoIhAqaeY5Wjbrlu3dd+GTzc2w6MiFZKqcPUgo/BM8+++v2NuGvjDhLWYapTEQSAQeAxBGLesSugQ6bcG5bsD+taEZNuvDbvlWQVxxiizVYDgLbXxV65LMsXIVEkSMP8EUec6/SJYoUeO9/RfIuqbQcT1ivbaX7ZzbGxJELfc7V/Ys/sUYQ16U4Zd1ukNVk24zZdHLOtoglrJ2Y3sGY171RkWfZRhLdJ2tMwH12YGE14G6Q9ZCd1MScR9pFGxMOp7RndTP80tT89KvEY8qJ2E0vntKPjtKuXPMZBueSerOEG1EUaAE6llO+HFsx8LoTgelTnJkAqspOclouE45jGGVlQ7u27upSSbHLCruREm3fvvQt9xOP9apZkbquqeh1ywSXGgpKZtGWW3NDiWG3m3s5Y7XFOUeni/064SfARka82taS1YPWtPP5/sVhwW9O+uZPkPolvEWbRcPMxXRtj0p1LZD5h+IhXluUy5NQTo1Vz7qyE+UOee1ob8m6rZjY7YSNstS0Qiy3v15Mp97RitL01wiyUPlPzBZmmd3XDV4VTXYkKIb5Vwo2J7+zs1OEndcj5JQmHCDXnnK1reE4yIdhPhENW6T7PeXQa/g+MkDFq+VNMnwAAAABJRU5ErkJggg==');

	}

	.icon-votrue {
		width: 18px;
		height: 18px;
		background-size: 18px;
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAFOElEQVRoQ+1a3W3cOBCeEex9ja+Cy1VwSQWxO0gquDVgEX6LU8E5FcR+M0gDt6kgvgqSVJBsBbE7iF8lWHMYgRIoLimRErUX/xAwYKyoT/NxhjPDGSI8soGPjC88EX7oGn/ScIyG8zx/AQDPEHHfeO+aiNZKqe8xWPbcPM9fIeJzAOC/ehDRFwC4nYIdreHj4+PnVVW9BYDXpjAOctcAsMqy7OPFxQX/PzgY++7u7m/GRsS9nhcY7yrLsvNQ7AYrmPByudxbLBYszMmg5JsTTouiOF+tVj9d7zL27u7uB0RcxmAT0U9EPOvDtvGCCGvT/Tyw6r2yEhGb+KFtjimwAYC30ZsQUx8knOc5rzqvvm1iazZZ3lfmh7S22NyXiPjKXAXWCAAcNPMZGxH/sVeKiL4ydlmWV6ZVHB0d7WdZxn6DZfqzD9u3+r2E9Qc+W8A3RLS8vLxkB9I7+H1EXCHi74bjqUkT0V6WZR1sAFhXVXUyFbtP017CWlM/LM1+lFJG7TO9988A4C/Lk+9Z2O+llKdDi2g/F0KsTGzeOmVZHvj8hZdwnue8Z81wE03WFM5nvjrc8N5mwUcNB+lzpZTTuToJO0x5XRTFvm/VQqV0kL4lov0QZzP0DSEEO8V2X2dZ9ocrZDkJ29olopcphGKhTdJENEmz5iLo/OCH8ZvTIjcIc5hAxG+Gk/mqlDJNe2ixB5/neX6GiNdSSt7byYZt2i4tuwizMJxJNeONlPIqmVQzAjm0/M5eVBfhb4jIsa4eUsrBWD0jh2hocy8T0b9KKc4J2rFBRghBc5pzNIPIF/R2qS2UEx2l1G9ewg7vPCo2RsqYdLoQgjX6yWehHQ0/BMI2BzvCDBG+Nw6r0ahNuKqqAzNV7SVsT05qezOCWX6ok0M8eA3bUabXSwPAvXNatkmHEObj2zPt1jfi2IyWmARaCMEnLq7McFjayBJdGm6PW644lkSqGUHyPDcTp+FMy45jKRP8GXnW0PY5ICiX5heFEKZZcwnnYG5hU+Bbh4e1lLJNkRt8Z55s7gM98ZePx46Ew3n0dBLWZRmu/dbOi6uCRVG8nFoASKFFH4a5d4noRinVFvC9ubT5QAjBJZIPzW9E5C2bzEkkBNuWFQC8Ftl79LPLJikrHyFEQubobgV75rqM7DoSBmnY5fWGKoIhAqaeY5Wjbrlu3dd+GTzc2w6MiFZKqcPUgo/BM8+++v2NuGvjDhLWYapTEQSAQeAxBGLesSugQ6bcG5bsD+taEZNuvDbvlWQVxxiizVYDgLbXxV65LMsXIVEkSMP8EUec6/SJYoUeO9/RfIuqbQcT1ivbaX7ZzbGxJELfc7V/Ys/sUYQ16U4Zd1ukNVk24zZdHLOtoglrJ2Y3sGY171RkWfZRhLdJ2tMwH12YGE14G6Q9ZCd1MScR9pFGxMOp7RndTP80tT89KvEY8qJ2E0vntKPjtKuXPMZBueSerOEG1EUaAE6llO+HFsx8LoTgelTnJkAqspOclouE45jGGVlQ7u27upSSbHLCruREm3fvvQt9xOP9apZkbquqeh1ywSXGgpKZtGWW3NDiWG3m3s5Y7XFOUeni/064SfARka82taS1YPWtPP5/sVhwW9O+uZPkPolvEWbRcPMxXRtj0p1LZD5h+IhXluUy5NQTo1Vz7qyE+UOee1ob8m6rZjY7YSNstS0Qiy3v15Mp97RitL01wiyUPlPzBZmmd3XDV4VTXYkKIb5Vwo2J7+zs1OEndcj5JQmHCDXnnK1reE4yIdhPhENW6T7PeXQa/g+MkDFq+VNMnwAAAABJRU5ErkJggg==');
		background-color: #000000;
	}

	.icon-bo {
		width: 18px;
		height: 18px;
		background-size: 18px;
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAGDElEQVRoQ+VbXU7cOhS2Mwyvt13BhRVcuoLSFbSsoCBhi7fSFUBXcIc35CB1WEFhBYUVdFhBuSu45Q0lMK6+0UnkeI4TZyYDQY2EhCBx/J3/8/lEij/sks+Fd3d399V4PP711O9fGeCDg4ON6XT6VgixZa3dklJuCCHwM3dZawF8IqWcTKfTq4eHh+tVCaNTwAD5+Pj4XgixK6XcWlJ7F0KIC2PM+ZLrVB7vBDABPZJS7na5OVrrVggxzrLspAutLwWYzPZfIcSHCKB31tpJ4L4NKeXfDWsA+PGyGl8YsNb6yFp7KKV8FdjoDUwSPnl2dnbVJBCykm34PFnKXwF/vxoMBnunp6cQQOurNWBE1+Fw+E1Kic35F7Q4hgmmaRrSZtQmlVKIA4dCiH/8BxDkpJR7xhj4eaurFWClFALRd0ard0KIUZZloy78zEWwv7+/LaUcB0weJv6lDeJowPRiaLZiwtbay8FgcLioicVsFla1vr4ObR8x2oY17cWsg3uiAEOzUsofzKKfjTGj2Jctex/tAy5TMXO4USzoRsABM4avbi/rp4sIgLSNILgQ6FrAFKB+emb8bGALAdG+4NcoctzrizHmuE6QtYCVUghQbjR+drAuGK01zPujB3CnLnoHAWutESRQVBRXr8BiU5x5I2Xleb4ZyhYsYKqgfnqSe9IAFevfBBpFiFuooAbf4dZgAfumYq29TtOUKzRi97XS+wJZhDXtOcDMw3dJkmytMs92IQ2l1EhK+clZ69YYs+mvPQeYCQSNka+LDS+7BkVu9NRlE2Kt3UvTFIGtvCqAyR/+dwNVlmUbXZeLy4ILPa+1Rtf2rU7LFcBMZD43xqyix10VZqGUuvXq7oovVwArpX64TEWSJJt9911fctRlfS3+jlo/TdOyXy8BM+Z8Y4xZlqZZmSZDC3NpKsuy14VbloAZyZykaYri48VdTOAtzdoFXAnr0+n0XQxT0Udp1CnPBXwlpQStOruMMY2dVB/BYk9+LeEWTiUorTVKyYI3vjPGhLgqFicivLX2PbjlJElO6oIdpY+PqHutted1lkTt6Sfq2KJpW601uO5ZuYn3pGn6Gr+7gK0T2VqVkn6VU1fAM7lShNyHiD1kDlf4UYWQUoq12E4Aa61LYTlCm6tyyNwqG6H72XyvtUZv69M6bMnIpKenBSyEYLsrX/JkcpVcWWw+ADjK3VaqYaXUhcc+BBsOppoDPraz4boga21UulwpYCrcYX4oVBAsjuv4Lgpws+pHSjmqYyiILZ3RNlLKqyYKp7COlQLuY3ryy+QizbpBqwzjQoiowNBHoI7/s1knWHi8xMahAOtTVGzhweRSNq30WavF3uD3SZJ8d/Za5m7XpCvNc2w07KMA6pQXbA/dcqyPoOr25JXJgm0PqQqq5FOOE+o7eKZx4AkAAowzWZctmKRp+qbvIN39NcUijqatcEIvqS/mmg0/23A0rV+wv5iczDAdc03JHGCO3xVCRLVkz2n63PEQV0uwrIZPkVBH8+Y5zoNjhRij3QoB0NRPYuQoz/N3fSXl/Z48VCkGeSsyEUzilKdyfQattcZey6kAN/e6yqwl6jg6ps08Raw5dnFfUzoq3tHITHKsA0Dnef65T+bN1M8sbdQIGJLhRgv6aN4hpjLapN0bA/MUt9banb5Eb59qstbOZZYoDTtNNTdEgn8fdzXtGvJnd2IX1gW6h+Y4Lx1ap1Iac/VDK8Bk3hx1in9hzgJMZev5x7qgRYdjoGrZcy6au8TcFgZZ/3P7YAjG7wVaAybQ6J2h7bmJV5I+5i4vlwlqxYkDRpNrJnYbA7yfnhYCjLdQCYp2sjyPct9OkodQcPRy3XTOjPXW1tbeYp4Ey4c+F2hE6N3gt7gLA3b9Bj7cNOBdfNfAbbjuewjv/vMkSY7v7+9/DYdDaB6TRbA2draanq30AUsDbgu8rYbo/hnQkJVQ0w/g+PHnqysnIJ0BdiL5B2stoqU/B9kW6421dpTn+UWbWECuVmh/4k/7dg64QEXRdRtTt3QiUfddw+x7CKQa8vlJk8+3lV50abnown19bmUa7ivg31+05mpy1iRyAAAAAElFTkSuQmCC');

	}

	.icon-no {
		width: 16px;
		height: 16px;
		background-size: 16px;
		background-image: url('data:image/png;base64,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');
	}
</style>
