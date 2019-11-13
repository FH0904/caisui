<template>
	<view class="ye-wrapper">
		<!-- 日期选择 -->
		<view class="uni-list">
			<view class="line">
			</view>
			<picker mode="date" :value="date" :start="startDate" :end="endDate" @change="bindDateChange" fields="month">
				<view class="uni-input">{{date}}</view>
			</picker>
		</view>
		<uni-segmented-control :current="current" :values="items" @clickItem="onClickItem" style-type="text" active-color="#fff"></uni-segmented-control>
		        <view class="content">
		            <view v-show="current === 0">
		                <view class="gy-header">
		                	<text class="top">合计余额(元)</text>
							<text class="bottom">0.00</text>
		                </view>
		            </view>
		            <view v-show="current === 1">
		                <view class="kh-header">
		                	<text class="top">合计余额(元)</text>
		                	<text class="bottom">9999999</text>
		                </view>
						<view class="kh-content">
							<view class="item">
								<view class="title-name">
									巫溪公共中心
								</view>
								<view class="num">
									<text class="num-left">余额 :-20.000.00</text>
									<text class="num-right">本期发生:0.00</text>
								</view>
							</view>
							<view class="item">
								<view class="title-name">
									巫溪公共中心
								</view>
								<view class="num">
									<text class="num-left">余额 :-20.000.00</text>
									<text class="num-right">本期发生:0.00</text>
								</view>
							</view>
							
						</view>
		            </view>
		            <view v-show="current === 2">
		                <view class="ch-header">
		                	<view class="left">
								<text class="text">剩余参数</text>
								<text class="num">99.00</text>
							</view>
		                	<view class="right">
								<text class="text">余额</text>
								<text class="num">1300000</text>
							</view>
		                </view>
						<view class="ch-content">
							<view class="item">
								<view class="title-name">
									笔记本
								</view>
								<view class="rest">
									<text class="num-left">余额</text>
								</view>
								<view class="num">
									<text>数量 : -1.00</text>
									<text>单价 : -8000</text>
									<text>金额 : 80000</text>
								</view>
							</view>
							
							<view class="item">
								<view class="title-name">
									笔记本
								</view>
								<view class="rest">
									<text class="num-left">余额</text>
								</view>
								<view class="num">
									<text>数量 : -1.00</text>
									<text>单价 : -8000</text>
									<text>金额 : 80000</text>
								</view>
							</view>
						</view>
		            </view>
					<view v-show="current === 3">
					    选项卡3的内容
					</view>
					<view v-show="current === 4">
					    选项卡3的内容
					</view>
		        </view>
	</view>
</template>

<script>
	import uniSegmentedControl from "../../components/comment/uni-segmented-control/uni-segmented-control.vue"
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
	    components: {uniSegmentedControl},
	    data() {
	        return {
	            items: ['供应商','客户','存货','职员','项目'],
	            current: 0,
				date: getDate({
					format: true
				}),
				startDate: getDate('start'),
				endDate: getDate('end'),
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
	    }
	}
</script>

<style lang="less">
	// 时间
	.uni-list {
		position: fixed;
		top: 128upx;
		width: 100%;
		z-index: 10;
		display: flex;
		justify-content: center;
		align-items: center;
		height: 90upx;
		font-size: 28upx;
		background-color: #f6f6f7;
	
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
	
	.ye-wrapper{
		width: 100%;
		height: 1600upx;
		background-color: #f2f5f5;
		.content{
			background-color: #FFFFFF;
			.gy-header{
				display: flex;
				flex-direction:column ;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 200upx;
				background-color: #276ee4;
				margin-top: 218upx;
				color: #fff;
				.top{
					font-size: 24upx;
					margin-top: 10upx;
				}
				.bottom{
					font-size: 34upx;
					margin-top: 40upx;
				}
			}
			.kh-header{
				display: flex;
				flex-direction:column ;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 200upx;
				background-color: #276ee4;
				margin-top: 218upx;
				color: #fff;
				border-bottom: 20upx solid #f2f5f5;
				.top{
					font-size: 24upx;
					margin-top: 10upx;
				}
				.bottom{
					font-size: 34upx;
					margin-top: 40upx;
				}
			}
			.kh-content{
				margin-left: 20upx;
				.item{
					border-bottom: 2upx solid #c3c3c3;
					.title-name{
						font-size: 28upx;
						margin-top:26upx;
					}
					.num{
						font-size: 24upx;
						margin: 34upx 0 26upx 0;
						display: flex;
						.num-left{
							flex: 1;
						}
						.num-right{
							flex: 1;
						}
					}
				}
			}
			.ch-header{
				display: flex;
				justify-content: center;
				align-items: center;
				width: 100%;
				height: 200upx;
				background-color: #276ee4;
				margin-top: 218upx;
				color: #fff;
				border-bottom: 20upx solid #f2f5f5;
				.left{
					position: relative;
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					.text{
						font-size: 24upx;
						margin-top: 10upx;
					}
					.num{
						font-size: 34upx;
						margin-top: 40upx;
					}
					&::before{
						content: '';
						position: absolute;
						top: 0;
						right: 0;
						width: 4upx;
						height: 120upx;
						background-color: #5e95ef;
					}
				}
				.right{
					flex: 1;
					display: flex;
					flex-direction: column;
					align-items: center;
					.text{
						font-size: 24upx;
						margin-top: 10upx;
					}
					.num{
						font-size: 34upx;
						margin-top: 40upx;
					}
				}
			}
			.ch-content{
				.item{
					border-bottom: 20upx solid #f2f5f5;
					.title-name{
						font-size: 24upx;
						margin: 18upx 0 0 20upx;
					}
					.rest{
						font-size: 24upx;
						color: #949494;
						margin: 38upx 0 28upx 20upx ;
					}
					.num{
						font-size: 24upx;
						display: flex;
						padding-bottom: 30upx;
						margin-left: 20upx;
						text{
							flex: 1;
						}
					}
				}
			}
		}
	}
	
</style>
