<template>
	<view class="content">
		<image class="invite-bg" src="../../../static/image/invite-bg.png" mode=""></image>
		<view class="invite-c">
			<view class="invite-w">
				<view class='invite-w-t'>我的专属邀请码</view>
				<text class='invite-w-num'>{{code}}</text>
				<view class='invite-w-detail'>快去分享您的邀请码吧，让更多的好友加入到【{{appTitle}}】，您也可以获得丰厚的奖励！</view>
				<view class='invite-w-bot'>
					<view bindtap='commission' @click="toMoney">
						<image class='invite-w-bot-ic' src='../../../static/image/ic-earnings.png'></image>
						<text class='invite-w-bot-red'>￥{{money}}元</text>
						<text class='invite-w-bot-gray'>邀请收益</text>
					</view>
					<view bindtap='recommendlist' @click="toList">
						<image class='invite-w-bot-ic' src='../../../static/image/ic-number.png'></image>
						<text class='invite-w-bot-red'>{{number}}人</text>
						<text class='invite-w-bot-gray'>邀请人数</text>
					</view>
				</view>
			</view>
			<view class="invite-w" v-if="!is_superior">
				<text class='invite-w-t-blue'>谁推荐你的？</text>
				<input class='invite-w-input' placeholder='请输入推荐人邀请码' v-model="inviteKey"></input>
				<view class='invite-w-btn' @click="setMyInvite">提交</view>
			</view>
			<view class='invite-btn'>
				<!-- #ifdef MP-WEIXIN -->
				<button class='share btn' open-type="share">
					<image src='../../../static/image/ic-wechat.png'></image>
				</button>
				<!-- #endif -->
				<button class='share btn' @click="createPoster()">
					<image src='../../../static/image/ic-img.png'></image>
				</button>
			</view>
		</view>
	</view>
</template>

<script>
	import {
		apiBaseUrl
	} from '@/config/config.js'
	export default {
		data() {
			return {
				myShareCode: '', //分享Code
				code: '',
				money: 0,
				number: 0,
				is_superior: false,
				inviteKey: '',
				imageUrl: '/static/image/share_image.png'
			}
		},
		computed: {
			appTitle() {
				return this.$store.state.config.shop_name;
			}
		},
		onShow() {
			this.getInviteData();
			this.getMyShareCode();
		},
		methods: {
			//获取数据
			getInviteData() {
				this.$api.myInvite(res => {
					this.code = res.data.code;
					this.money = res.data.money;
					this.number = res.data.number;
					this.is_superior = res.data.is_superior;
				});
			},
			//去佣金明细
			toMoney() {
				this.$common.navigateTo('../balance/details?status=5');
			},
			//去邀请列表
			toList() {
				this.$common.navigateTo('./list');
			},
			//填写设置要求
			setMyInvite() {
				let data = {
					code: this.inviteKey
				}
				this.$api.setMyInvite(data, res => {
					if (res.status) {
						this.$common.successToShow('邀请码填写成功');
						this.is_superior = true;
					} else {
						this.$common.errorToShow(res.msg);
					}
				});
			},
			// 生成邀请海报
			createPoster() {
				let data = {
					type: 2
				}

				let pages = getCurrentPages()
				let page = pages[pages.length - 1]
				let page_path = '/pages/share/jump';
				// #ifdef H5
				data.source = 1;
				data.return_url = apiBaseUrl + 'wap/#' + page_path;
				// console.log(apiBaseUrl)
				// #endif

				// #ifdef MP-WEIXIN
				data.source = 2;
				data.return_url = page_path;
				// #endif

				// #ifdef MP-ALIPAY
				data.source = 3;
				data.return_url = page_path;
				// #endif

				let userToken = this.$db.get('userToken')

				if (userToken) {
					data.token = userToken
				}
				this.$api.createPoster(data, res => {
					if (res.status) {
						this.$common.navigateTo('/pages/share?poster=' + res.data)
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
			let ins = this.$common.shareParameterDecode('type=3&invite=' + myInviteCode);
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

<style>
	.invite {
		width: 100%;
		height: 100%;
		background: linear-gradient(to right, #4c21d2, #4864f8);
	}

	.invite-bg {
		position: absolute;
		width: 750upx;
		height: 683upx;
		z-index: 66;
	}

	.invite-c {
		position: relative;
		z-index: 67;
		width: 750upx;
		padding: 0 30upx;
		top: 488upx;
		background: linear-gradient(to right, #4c21d2, #4864f8);
	}

	.invite-w {
		background-color: #fff;
		width: 690upx;
		text-align: center;
		padding: 40upx 100upx;
		box-sizing: border-box;
		border-radius: 30upx;
		margin-bottom: 70upx;
		position: relative;
		top: -148upx;
	}

	.invite-w-t {
		width: 70%;
		margin: 0 auto;
		color: #fff;
		border-radius: 50upx;
		font-size: 30upx;
		box-sizing: border-box;
		padding: 10upx;
		display: block;
		background: linear-gradient(to right, #5f2ef6, #b945dd);
	}

	.invite-w-num {
		color: #5f2ef6;
		display: block;
		font-size: 36upx;
		margin-top: 20upx;
	}

	.invite-w-detail {
		color: #666;
		font-size: 24upx;
		line-height: 1.5;
		margin-top: 20upx;
	}

	.invite-w-bot {
		margin: 20upx 0 50upx;
	}

	.invite-w-bot>view {
		width: 49%;
		display: inline-block;
	}

	.invite-w-bot-ic {
		width: 48upx;
		height: 48upx;
	}

	.invite-w-bot-red {
		font-size: 24upx;
		color: #ca0400;
		display: block;
	}

	.invite-w-bot-gray {
		font-size: 24upx;
		color: #acacac;
		display: block;
	}

	.invite-w-t-blue {
		color: #348dfc;
		font-size: 30upx;
		margin-bottom: 50upx;
		display: block;
	}

	.invite-w-input {
		font-size: 30upx;
		border-bottom: 1px solid #dadada;
		margin-bottom: 50upx;
		color: #999;
	}

	.invite-w-btn {
		background: linear-gradient(to right, #4a6af9, #28c4ff);
		color: #fff;
		width: 50%;
		margin: 0 auto;
		border-radius: 50upx;
		font-size: 30upx;
		padding: 10upx 0;
	}

	.invite-btn {
		position: relative;
		top: -150upx;
		text-align: center;
		width: 690upx;
	}

	.share {
		background-color: none;
		position: relative;
		width: 98upx;
		height: 98upx;
		display: inline-block;
		border-radius: 50%;
		padding: 0;
		margin: 0 40rpx 40rpx;
	}

	.invite-btn image {
		width: 98upx;
		height: 98upx;
	}
</style>
