<template>
	<view class="content">
		<view class="article">
			<view class="article-title" v-if="shopLogo && shopName">
				<img :src="shopLogo" alt="" class='shop-logo'>
				<text class='shop-name'>{{ shopName }}</text>
				<text class="fsz24 color-9 article-time">{{ info.ctime }}</text>
			</view>
			<!-- <view class="article-time">
				
			</view> -->
			<view class="article-content">
				<rich-text :nodes="info.content"></rich-text>
			</view>
		</view>
	</view>
</template>

<script>
	import htmlParser from '@/common/html-parser'
	export default {
		data() {
			return {
				myShareCode: '', //分享Code
				idType: 1, //1文章 2公告 3微信图文消息
				id: 0,
				info: {}
			}
		},
		onLoad(e) {
			this.idType = e.id_type;
			this.id = e.id;
			
			if (!this.idType && !this.id) {
				this.$common.errorToShow('请求出错', res => {
					uni.switchTab({
						url: '/pages/index/index'
					});
				});
			} else if (this.idType == 1) {
				this.articleDetail();
			} else if (this.idType == 2) {
				uni.setNavigationBarTitle({
					title: '公告详情'
				});
				this.noticeDetail();
			} else if (this.idType == 3) {
				uni.setNavigationBarTitle({
					title: '图文消息'
				});
				
				this.messageDetail();
			}
			
			this.getMyShareCode();
		},
		computed: {
			shopName() {
				return this.$store.state.config.shop_name
			},
			shopLogo() {
				return this.$store.state.config.shop_logo
			}
		},
		methods: {
			articleDetail() {
				let data = {
					article_id: this.id
				}
				this.$api.articleInfo(data, res => {
					if (res.status) {
						var info = res.data
						var htmlString = info.content;
						info.content = htmlParser(htmlString);
						this.info = info
						uni.setNavigationBarTitle({
							title: info.title
						});
					} else {
						this.$common.errorToShow(res.msg, res=> {
							uni.navigateBack({
								delta: 1
							});
						});
					}
				})
			},
			noticeDetail() {
				let data = {
					id: this.id
				}
				this.$api.noticeInfo(data, res => {
					if (res.status) {
						const info = res.data
						var htmlString = info.content;
						info.content = htmlParser(htmlString);
						this.info = info
						uni.setNavigationBarTitle({
							title: info.title
						});
					} else {
						this.$common.errorToShow(res.msg)
					}
				})
			},
			//微信图文消息
			messageDetail() {
				let data = {
					id: this.id
				}
				this.$api.messageDetail(data, res => {
					if (res.status) {
						const info = res.data
						var htmlString = info.content;
						info.content = htmlParser(htmlString);
						this.info = info
						uni.setNavigationBarTitle({
							title: info.title
						});
					} else {
						this.$common.errorToShow(res.msg)
					}
				})
			},
			getMyShareCode() {
				let userToken = this.$db.get("userToken");
				if (userToken && userToken != '') {
					// 获取我的分享码
					this.$api.shareCode({}, res => {
						if (res.status) {
							this.myShareCode = res.data ? res.data : '';
						}
					});
				}
			}
		},
		//分享
		onShareAppMessage() {
			let myInviteCode = this.myShareCode ? this.myShareCode : '';
			let ins = this.$common.shareParameterDecode('type=4&id=' + this.id + '&id_type=' + this.idType + '&invite=' + myInviteCode);
			let path = '/pages/share/jump?scene=' + ins;
			return {
				title: this.info.title,
				// #ifdef MP-ALIPAY
				//desc: this.goodsInfo.brief,
				// #endif
				//imageUrl: this.goodsInfo.album[0],
				path: path
			}
		}
	}
</script>

<style>
	.content {
		/*  #ifdef  H5  */
		height: calc(100vh - 90upx);
		/*  #endif  */
		/*  #ifndef  H5  */
		height: 100vh;
		/*  #endif  */
		background-color: #fff;
	}

	.article {
		padding: 20upx;
	}

	.article-title {
		font-size: 32upx;
		color: #333;
		margin-bottom: 20upx;
		/* text-align: center; */
		position: relative;
		height: 100upx;
	}

	.article-time {
		/* text-align: right; */
		margin-left: 20upx;
	}

	.article-content {
		font-size: 28upx !important;
		color: #666;
		line-height: 1.6;
		margin-top: 20upx;
	}

	.article-content p img {
		width: 100% !important;
	}

	.shop-logo {
		width: 60upx;
		height: 60upx;
		border-radius: 50%;
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.shop-name {
		line-height: 100upx;
		margin-left: 80upx;
	}
</style>
