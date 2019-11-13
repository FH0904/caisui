<template>
	<view>
		
		<!-- 分段器 -->
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#fff"></uni-segmented-control>
		<view class="content">
			<!-- 季报 -->
			<view v-show="current === 0">
				<view class="jb-container">
					<!-- 日期选择 -->
					<view class="uni-list">
						<view class="line">
						</view>
						<picker mode="multiSelector" :range="arr" @change="arrChange" >
							<view class="uni-input" v-show="isShow">{{arr[0][arrindex[0]]}}{{arr[1][arrindex[1]]}}</view>
							<view class="uni-input" v-show="isShow1">2019第四季度</view>
						</picker>
					</view>
					<view class="wrapper">
						<view class="header">
							<text class="header-left">手机演示</text>
							<text class="header-right">单位 ：元</text>
						</view>
						<view class="voucher">
							<text class="voucher-text">单据凭证</text>
							<view class="voucher-content">
								<view class="voucher-left">
									<view class="list">
										<text class="item-left">上传单据</text>
										<text class="item-right">13张</text>
									</view>
									<view class="list active">
										<text class="item-left ">送票</text>
										<text class="item-right color-active">10月末完成</text>
									</view>
									<view class="list">
										<text class="item-left">清卡</text>
										<text class="item-right color-active">10月末完成</text>
									</view>

								</view>
								<view class="voucher-right">
									<view class="list">
										<text class="item-left">会计凭证</text>
										<text class="item-right">0张</text>
									</view>
									<view class="list active">
										<text class="item-left ">抄税</text>
										<text class="item-right color-active">10月末完成</text>
									</view>
									<view class="list">
										<text class="item-left">凭证交接</text>
										<text class="item-right color-active">10月末完成</text>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="quota">
						<text class="quota-title">开票额度</text>
						<view class="quota-content">
							<view class="quota-list">
								<view class="quota-item">
									<view class="quota-img">
										<image src="../../static/homeimg/kaipiaoedu.png" mode=""></image>
									</view>
									<view class="quota-text">
										<text class="text">剩余开票额度</text>
										<text class="num">300.000.00</text>
									</view>
								</view>
								<view class="quota-item">
									<view class="quota-img">
										<image src="../../static/hot-1.png" mode=""></image>
									</view>
									<view class="quota-text">
										<text class="text">开票收入</text>
										<text class="num">0.00</text>
									</view>
								</view>
							</view>
							<view class="quota-list active">
								<view class="quota-item">
									<view class="quota-img">
										<image src="../../static/hot-1.png" mode=""></image>
									</view>
									<view class="quota-text">
										<text class="text">应纳税额</text>
										<text class="num">0.00</text>
									</view>
								</view>
								<view class="quota-item">
									<view class="quota-img">
										<image src="../../static/hot-1.png" mode=""></image>
									</view>
									<view class="quota-text">
										<text class="text">减免税额</text>
										<text class="num">0.00</text>
									</view>
								</view>
							</view>
							<view class="quota-list">
								<view class="quota-item">
									<view class="quota-img">
										<image src="../../static/hot-1.png" mode=""></image>
									</view>
									<view class="quota-text">
										<text class="text">应补退税额</text>
										<text class="num">0.00</text>
									</view>
								</view>
							</view>
						</view>
					</view>
					<view class="income">
						<view class="income-title">
							收入预警
						</view>
					</view>
					<view class="income">
						<view class="income-title">
							收入预警
						</view>
					</view>
					<view class="income">
						<view class="income-title">
							收入预警
						</view>
					</view>
					<view class="income">
						<view class="income-title">
							收入预警
						</view>
					</view>
					<view class="income">
						<view class="income-title">
							收入预警
						</view>
					</view>
					<view class="income">
						<view class="income-title">
							收入预警
						</view>
					</view>
				</view>

			</view>

			<!-- 日报 -->
			<view v-show="current === 1">
				<!-- 日期选择 -->
				<view class="uni-list">
					<view class="line">
					</view>
					<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange" fields="month">
						<view class="uni-input">{{date}}</view>
					</picker>
				</view>
				<view class="rb-wrapper">
					<view class="header">
						<text class="header-left">手机演示</text>
						<text class="header-right">单位 ：元</text>
					</view>


					<view class="list list-active">
						<view class="date">
							<text class="num">01</text>
							<text class="day">日</text>
						</view>
						<view class="item-right">
							<view class="item-1">
								<text class="left">上传单据 : 1张</text>
								<text class="right">会计凭证 : 0张</text>
							</view>
							<view class="item-2">
								<view class="left">
									<text>现金</text>
									<text class="num">0.00</text>
								</view>
								<view class="right">
									<text>今日余额:</text>
									<text class="num">99999999</text>
								</view>
							</view>
							<view class="item-2">
								<view class="left">
									<text></text>
									<text class="num">0.00</text>
								</view>
								<view class="right">
									<text></text>
									<text class="num"></text>
								</view>
							</view>
							<view class="item-2">
								<view class="left">
									<text>现金</text>
									<text class="num">0.00</text>
								</view>
								<view class="right">
									<text>今日余额:</text>
									<text class="num">99999999</text>
								</view>
							</view>
							<view class="item-2">
								<view class="left">
									<text></text>
									<text class="num">0.00</text>
								</view>
								<view class="right">
									<text></text>
									<text class="num"></text>
								</view>
							</view>
						</view>
					</view>

					<view class="list">
						<view class="date">
							<text class="num">02</text>
							<text class="day">日</text>
						</view>
						<view class="item-right">
							<view class="item-1">
								<text class="left">上传单据 : 1张</text>
								<text class="right">会计凭证 : 0张</text>
							</view>
							<view class="item-2">
								<view class="left">
									<text>现金</text>
									<text class="num">0.00</text>
								</view>
								<view class="right">
									<text>今日余额:</text>
									<text class="num">99999999</text>
								</view>
							</view>
							<view class="item-2">
								<view class="left">
									<text></text>
									<text class="num">0.00</text>
								</view>
								<view class="right">
									<text></text>
									<text class="num"></text>
								</view>
							</view>
							<view class="item-2">
								<view class="left">
									<text>现金</text>
									<text class="num">0.00</text>
								</view>
								<view class="right">
									<text>今日余额:</text>
									<text class="num">9999999</text>
								</view>
							</view>
							<view class="item-2">
								<view class="left">
									<text></text>
									<text class="num">0.00</text>
								</view>
								<view class="right">
									<text></text>
									<text class="num"></text>
								</view>
							</view>
						</view>
					</view>

					<view class="list">
						<view class="date">
							<text class="num">03</text>
							<text class="day">日</text>
						</view>
						<view class="item-right">
							<view class="item-1">
								<text class="left">上传单据 : 1张</text>
								<text class="right">会计凭证 : 0张</text>
							</view>
							<view class="item-2">
								<view class="left">
									<text>现金</text>
									<text class="num">0.00</text>
								</view>
								<view class="right">
									<text>今日余额:</text>
									<text class="num">99999999</text>
								</view>
							</view>
							<view class="item-2">
								<view class="left">
									<text></text>
									<text class="num">0.00</text>
								</view>
								<view class="right">
									<text></text>
									<text class="num"></text>
								</view>
							</view>
							<view class="item-2">
								<view class="left">
									<text>现金</text>
									<text class="num">0.00</text>
								</view>
								<view class="right">
									<text>今日余额:</text>
									<text class="num">99999999</text>
								</view>
							</view>
							<view class="item-2">
								<view class="left">
									<text></text>
									<text class="num">0.00</text>
								</view>
								<view class="right">
									<text></text>
									<text class="num"></text>
								</view>
							</view>
						</view>
					</view>
					
					<view class="list">
						<view class="date">
							<text class="num">03</text>
							<text class="day">日</text>
						</view>
						<view class="item-right">
							<view class="item-1">
								<text class="left">上传单据 : 1张</text>
								<text class="right">会计凭证 : 0张</text>
							</view>
							<view class="item-2">
								<view class="left">
									<text>现金</text>
									<text class="num">0.00</text>
								</view>
								<view class="right">
									<text>今日余额:</text>
									<text class="num">99999999</text>
								</view>
							</view>
							<view class="item-2">
								<view class="left">
									<text></text>
									<text class="num">0.00</text>
								</view>
								<view class="right">
									<text></text>
									<text class="num"></text>
								</view>
							</view>
							<view class="item-2">
								<view class="left">
									<text>现金</text>
									<text class="num">0.00</text>
								</view>
								<view class="right">
									<text>今日余额:</text>
									<text class="num">99999999</text>
								</view>
							</view>
							<view class="item-2">
								<view class="left">
									<text></text>
									<text class="num">0.00</text>
								</view>
								<view class="right">
									<text></text>
									<text class="num"></text>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>

</template>

<script>
	import uniSegmentedControl from "../../components/comment/uni-segmented-control/uni-segmented-control.vue"
	import uniCollapseItem from "../../components/Example1/uni-collapse-item/uni-collapse-item.vue"
	import uniCollapse from "../../components/Example1/uni-collapse/uni-collapse.vue"

	function getDate(type) {
		const date = new Date();

		let year = date.getFullYear();
		let month = date.getMonth() + 1;

		if (type === 'start') {
			year = year - 60;
		} else if (type === 'end') {
			year = year + 2;
		}
		month = month > 9 ? month : '0' + month;;

		return `${year}-${month}`;
	}
	export default {
		components: {
			uniSegmentedControl,
			uniCollapseItem,
			uniCollapse
		},
		data() {
			return {
				isShow: false,
				isShow1:true,
				items: ['季报', '日报'],
				current: 0,
				date: getDate({
					format: true
				}),
				startDate: getDate('start'),
				endDate: getDate('end'),
				arr:[[2000,2001,2002,2003,2004,2005,2006,2007,2007,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020],["第一季度","第二季度","第三季度","第四季度"]],
				arrindex:[]
			}
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			bindDateChange: function(e) {
				this.date = e.target.value
			},
			arrChange(e){
				this.arrindex = e.detail.value,
				this.isShow = true,
				this.isShow1 = false
			}
			
		}
	}
</script>

<style lang="less">
	// 时间
	.uni-list {
		position: fixed;
		top: 128upx;
		width: 100%;
		z-index: 11;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90upx;
		font-size: 28upx;
		background-color: #fff;

		.line {
			position: relative;
			top: 0;
			width: 22upx;
			height: 4upx;
			background-color: #9f9fa0;
			margin-right: 10upx;
			box-shadow: 0px 5px 0px #9f9fa0;

			&::before {
				content: '';
				position: absolute;
				top: -5px;
				width: 22upx;
				height: 4upx;
				background: #9f9fa0;
			}
		}
	}

	// 季报
	.jb-container {
		.wrapper {
			padding-left: 35upx;
			margin-top: 298upx;

			.header {
				position: fixed;
				top: 210upx;
				left: 0;
				right: 0;
				height: 90upx;
				width: 100%;
				background-color: #f0f0f3;
				font-size: 28upx;
				line-height: 90upx;
				z-index: 10;

				.header-left {
					position: absolute;
					left: 35upx;
				}

				.header-right {
					position: absolute;
					right: 35upx;
					color: #4382ff;
				}
			}

			.voucher {
				position: relative;
				width: 100%;

				.voucher-text {
					display: block;
					height: 102upx;
					font-size: 28upx;
					line-height: 102upx;
					border-bottom: 2upx solid #c7c7c7;
				}

				.voucher-content {
					padding: 25upx;
					font-size: 22upx;
					display: flex;

					.voucher-left {
						position: relative;
						width: 50%;
						padding-right: 30upx;
						border-right: 2upx solid #c7c7c7;

						.list {
							display: flex;

							.item-left {
								flex: 1;
							}

							.item-right {
								flex: 1;
								display: flex;
								justify-content: flex-end;
							}

							.color-active {
								color: #d14751;
							}
						}
					}

					.active {
						margin: 28upx 0;
					}

					.voucher-right {
						width: 50%;
						padding: 0 30upx;

						.list {
							display: flex;

							.item-left {
								flex: 1;
							}

							.item-right {
								flex: 1;
								display: flex;
								justify-content: flex-end;
							}

							.color-active {
								color: #ce4550;
							}
						}
					}
				}
			}
		}

		.quota {
			border-top: 20upx solid #f0f0f3;
			padding-left: 35upx;

			.quota-title {
				display: block;
				height: 102upx;
				font-size: 28upx;
				line-height: 102upx;
				border-bottom: 2upx solid #c7c7c7;
			}

			.quota-list {
				display: flex;
				padding: 25upx;

				.quota-item {
					flex: 1;
					display: flex;

					.quota-img {
						width: 55upx;
						height: 55upx;

						image {
							flex: 1;
							width: 100%;
							height: 100%;
						}
					}

					.quota-text {
						flex: 3;
						display: flex;
						flex-direction: column;
						font-size: 24upx;
						padding-left: 20upx;
						padding-top: 6upx;
						font-weight: 400;

						.num {
							padding-top: 18upx;
						}
					}
				}
			}

			.active {
				position: relative;

				&:after {
					content: '';
					position: absolute;
					top: 0;
					right: 0;
					width: 90%;
					height: 2upx;
					background-color: #c7c7c7;
				}

				&:before {
					content: '';
					position: absolute;
					bottom: 0;
					right: 0;
					width: 90%;
					height: 2upx;
					background-color: #c7c7c7;
				}
			}
		}

		.income {
			border-top: 20upx solid #f0f0f3;
			padding-left: 35upx;

			.income-title {
				display: block;
				height: 102upx;
				font-size: 28upx;
				line-height: 102upx;
				border-bottom: 2upx solid #c7c7c7;
			}
		}
	}

	//日报
	.rb-wrapper {
		width: 100%;
		height: 100%;

		.header {
			position: fixed;
			top: 210upx;
			left: 0;
			right: 0;
			height: 90upx;
			width: 100%;
			background-color: #f0f0f3;
			font-size: 28upx;
			line-height: 90upx;

			.header-left {
				position: absolute;
				left: 35upx;
			}

			.header-right {
				position: absolute;
				right: 35upx;
				color: #4382ff;
			}
		}

		.list {
			width: 100%;
			height: 350upx;
			font-size: 28upx;
			border-bottom: 22upx solid #f0f0f3;
			display: flex;

			.date {
				width: 136upx;
				height: 350upx;
				box-sizing: border-box;
				padding: 38upx 0 0 21upx;
				color: #4283fc;

				.num {
					font-size: 46upx;
				}

				.day {
					font-size: 24upx;
				}
			}

			.item-right {
				flex-grow: 1;

				.item-1 {
					display: flex;
					color: #6a6a6a;
					height: 70upx;
					line-height: 70upx;
					font-size: 24upx;

					.left {
						flex: 1;
					}

					.right {
						flex: 1.2;
					}
				}

				.item-2 {
					display: flex;
					color: #6a6a6a;
					height: 70upx;
					line-height: 70upx;
					font-size: 24upx;

					.left {
						flex: 1;
						display: flex;
						justify-content: space-between;

						.num {
							margin-right: 38upx;
						}
					}

					.right {
						flex: 1.2;
						display: flex;
						justify-content: space-between;

						.num {
							margin-right: 30upx;
						}
					}
				}

				.item-3 {
					display: flex;
					color: #6a6a6a;
					height: 76upx;
					line-height: 76upx;
					font-size: 24upx;
				}
			}
		}

		.list-active {
			margin-top: 298 upx;
		}
	}
</style>

