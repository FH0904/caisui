<template>
	<view class="content">
		<view class="content-top">
			<view class='cell-group margin-cell-group'>
				<view class='cell-item add-title-item'>
					<view class='cell-item-bd'>
						<view class="cell-bd-view black-text" v-if="orderInfo.order_type != 2">
							<text class="cell-bd-text">{{ orderInfo.status_name }}</text>
						</view>
						<view class="cell-bd-view">
							<text class="cell-bd-text">订单号：{{ orderInfo.order_id }}</text>
						</view>
						<view class="cell-bd-view">
							<text class="cell-bd-text">下单时间：{{ orderInfo.ctime }}</text>
						</view>
					</view>
				</view>
			</view>

			<view class='cell-group margin-cell-group'>
				<view class='cell-item add-title-item' v-if="isDelivery" @click="logistics">
					<view class='cell-item-bd'>
						<view class="cell-bd-view black-text">
							<text class="cell-bd-text">{{ orderInfo.express_delivery.context }}</text>
						</view>
						<view class="cell-bd-view">
							<text class="cell-bd-text">{{ orderInfo.express_delivery.time }}</text>
						</view>
					</view>
					<view class="cell-item-ft">
						<image class='cell-ft-next icon' src='../../../static/image/right.png'></image>
					</view>
				</view>
				<view class='cell-item add-title-item'>
					<view class='cell-item-bd'>
						<view class="cell-bd-view black-text">
							<text class="cell-bd-text">收件人：{{ orderInfo.ship_name }}</text>
						</view>
						<view class="cell-bd-view">
							<text class="cell-bd-text">{{ orderInfo.ship_area_name + orderInfo.ship_address }}</text>
						</view>
					</view>
				</view>
			</view>

			<!-- 团购分享拼单 -->
			<view class="cell-group margin-cell-group" v-if="(orderInfo.text_status == 1 || orderInfo.text_status == 2 ) && orderInfo.order_type==2">
				<view class='cell-item right-img'>
					<view class='cell-item-hd'>
						<view v-if="teamInfo.status==1" class='cell-hd-title'>待拼团，还差{{ teamInfo.team_nums }}人</view>
						<view v-else-if="teamInfo.status==2" class='cell-hd-title'>拼团成功，待发货</view>
						<view v-else-if="teamInfo.status==3" class='cell-hd-title'>拼团失败</view>
					</view>
				</view>
				<view class="group-swiper">
					<view class='cell-item' v-if="teamInfo.current_count">
						<view class='cell-item-hd'>
							<view class="user-head-img-c" v-for="(item, index) in teamInfo.list" :key="index">
								<view class="user-head-img-tip" v-if="item.id == item.team_id">拼主</view>
								<image class="user-head-img cell-hd-icon have-none" :src='item.user_avatar' mode=""></image>
							</view>
							<view v-if="teamInfo.team_nums > 3">
								<view class="uhihn" v-for="n in 3" :key="n">?</view>
								<view class="uhihn">···</view>
							</view>
							<view v-else>
								<view class="uhihn" v-for="n in teamInfo.team_nums" :key="n">?</view>
							</view>
						</view>
						<view class="cell-item-ft" v-if="teamInfo.status==1">
							<button class="btn" @click="goInvition()">邀请拼单</button>
						</view>
					</view>
				</view>
			</view>

			<view class='img-list'>
				<view class='img-list-item' v-for="item in orderInfo.items" :key="item.id">
					<image class='img-list-item-l little-img have-none' :src='item.image_url' mode='aspectFill'></image>
					<view class='img-list-item-r little-right'>
						<view class='little-right-t'>
							<view class='goods-name list-goods-name' @click="goodsDetail(item.goods_id)" v-if="orderInfo.order_type == 1">{{ item.name }}</view>
							<view class='goods-name list-goods-name' @click="pintuanDetail(item.goods_id)" v-else-if="orderInfo.order_type == 2">{{ item.name }}</view>
							<view class='goods-price'>￥{{ item.price }}</view>
						</view>
						<view class="romotion-tip">
							<view class="romotion-tip-item" v-for="(promotion, key) in formatPormotions(item.promotion_list)" :key="key">
								{{ promotion }}
							</view>
						</view>
						<view class='goods-item-c'>
							<view class='goods-buy'>
								<view class='goods-salesvolume' v-if="item.addon !== null">{{ item.addon }}</view>
								<view class='goods-num'>× {{ item.nums }}</view>
							</view>
						</view>
					</view>
				</view>
			</view>

			<view class='cell-group margin-cell-group' v-if="orderInfo.tax_type != 1">
				<view class='cell-item add-title-item'>
					<view class='cell-item-bd'>
						<view class="cell-bd-view black-text">
							<text class="cell-bd-text">发票信息</text>
						</view>
						<view class="cell-bd-view" v-if="orderInfo.tax_type != 1">
							<text class="cell-bd-text">发票抬头：{{orderInfo.tax_title}}</text>
						</view>
						<view class="cell-bd-view" v-if="orderInfo.tax_type == 3">
							<text class="cell-bd-text">发票税号：{{orderInfo.tax_code}}</text>
						</view>
					</view>
				</view>
			</view>

			<view class='cell-group margin-cell-group order-offer' v-if="orderInfo.promotion_list && orderInfo.promotion_list.length > 0">
				<view class='cell-item add-title-item'>
					<view class='cell-item-hd'>
						<view class="cell-bd-view promotion-title">
							<text class="cell-bd-text promotion-title-text">订单优惠</text>
						</view>
					</view>
					<view class='cell-item-bd'>
						<view v-for="(item, key) in orderInfo.promotion_list" :key="key" v-show="item.type == 2" class="order-promotion">{{item.name}}</view>
					</view>
				</view>
			</view>

			<view class='cell-group margin-cell-group order-price'>
				<view class='cell-item add-title-item'>
					<view class='cell-item-bd'>
						<view class="cell-bd-view">
							<text class="cell-bd-text">商品总价</text>
						</view>
					</view>
					<view class='cell-item-ft'>
						<text class="cell-ft-p">￥{{ orderInfo.goods_amount }}</text>
					</view>
				</view>
				<view class='cell-item add-title-item'>
					<view class='cell-item-bd'>
						<view class="cell-bd-view">
							<text class="cell-bd-text">运费</text>
						</view>
					</view>
					<view class='cell-item-ft'>
						<text class="cell-ft-p">￥{{ orderInfo.cost_freight }}</text>
					</view>
				</view>
				<view class='cell-item add-title-item' v-if="orderInfo.goods_pmt > 0">
					<view class='cell-item-bd'>
						<view class="cell-bd-view">
							<text class="cell-bd-text">商品优惠</text>
						</view>
					</view>
					<view class='cell-item-ft'>
						<text class="cell-ft-p">-￥{{ orderInfo.goods_pmt }}</text>
					</view>
				</view>
				<view class='cell-item add-title-item' v-if="orderInfo.point_money > 0">
					<view class='cell-item-bd'>
						<view class="cell-bd-view">
							<text class="cell-bd-text">积分优惠</text>
						</view>
					</view>
					<view class='cell-item-ft'>
						<text class="cell-ft-p">-￥{{ orderInfo.point_money }}</text>
					</view>
				</view>
				<view class='cell-item add-title-item' v-if="orderInfo.order_pmt > 0">
					<view class='cell-item-bd'>
						<view class="cell-bd-view">
							<text class="cell-bd-text">订单优惠</text>
						</view>
					</view>
					<view class='cell-item-ft'>
						<text class="cell-ft-p">-￥{{ orderInfo.order_pmt }}</text>
					</view>
				</view>
				<view class='cell-item add-title-item' v-if="orderInfo.coupon_pmt > 0">
					<view class='cell-item-bd'>
						<view class="cell-bd-view">
							<text class="cell-bd-text">其他优惠</text>
						</view>
					</view>
					<view class='cell-item-ft'>
						<text class="cell-ft-p">-￥{{ orderInfo.coupon_pmt }}</text>
					</view>
				</view>
				<view class='cell-item add-title-item'>
					<view class='cell-item-bd'>
						<view class="cell-bd-view">
							<text class="cell-bd-text">订单总价</text>
						</view>
					</view>
					<view class='cell-item-ft'>
						<text class="cell-ft-p red-price">￥{{ orderInfo.order_amount }}</text>
					</view>
				</view>
				<view class='cell-item add-title-item' v-if="orderInfo.pay_status > 1">
					<view class='cell-item-bd'>
						<view class="cell-bd-view">
							<text class="cell-bd-text">支付方式</text>
						</view>
					</view>
					<view class='cell-item-ft'>
						<text class="cell-ft-p">{{ orderInfo.payment_name }}</text>
					</view>
				</view>
				<view class='cell-item add-title-item' v-if="orderInfo.pay_status > 1">
					<view class='cell-item-bd'>
						<view class="cell-bd-view">
							<text class="cell-bd-text">支付时间</text>
						</view>
					</view>
					<view class='cell-item-ft'>
						<text class="cell-ft-p">{{ orderInfo.payment_time }}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="button-bottom" v-if="orderInfo.text_status === 1">
			<button class='btn btn-circle btn-g' hover-class="btn-hover" @click="cancelOrder(orderInfo.order_id)">取消订单</button>
			<button class='btn btn-circle btn-w' hover-class="btn-hover" @click="toPay(orderInfo.order_id)">立即支付</button>
		</view>
		<view class="button-bottom" v-if="orderInfo.text_status === 2">
			<button class='btn btn-circle btn-w' hover-class="btn-hover" @click="customerService(orderInfo.order_id)" v-if="orderInfo.bill_aftersales_id == false">申请售后</button>
			<button class='btn btn-circle btn-w' hover-class="btn-hover" @click="showCustomerService(orderInfo.bill_aftersales_id)"
			 v-else-if="orderInfo.bill_aftersales_id && orderInfo.bill_aftersales_id != false">查看售后</button>
		</view>
		<view class="button-bottom" v-if="orderInfo.text_status === 3">
			<button class='btn btn-circle btn-g' hover-class="btn-hover" @click="customerService(orderInfo.order_id)" v-if="orderInfo.bill_aftersales_id == false">申请售后</button>
			<button class='btn btn-circle btn-g' hover-class="btn-hover" @click="showCustomerService(orderInfo.bill_aftersales_id)"
			 v-else-if="orderInfo.bill_aftersales_id && orderInfo.bill_aftersales_id != false">查看售后</button>
			<button class='btn btn-circle btn-g' hover-class="btn-hover" @click="logistics">查看物流</button>
			<button class='btn btn-circle btn-w' hover-class="btn-hover" @click="tackDeliery(orderInfo.order_id)">确认收货</button>
		</view>
		<view class="button-bottom" v-if="orderInfo.text_status === 4">
			<button class='btn btn-circle btn-g' hover-class="btn-hover" @click="customerService(orderInfo.order_id)" v-if="orderInfo.bill_aftersales_id == false">申请售后</button>
			<button class='btn btn-circle btn-g' hover-class="btn-hover" @click="showCustomerService(orderInfo.bill_aftersales_id)"
			 v-else-if="orderInfo.bill_aftersales_id && orderInfo.bill_aftersales_id != false">查看售后</button>
			<button class='btn btn-circle btn-w' hover-class="btn-hover" @click="toEvaluate(orderInfo.order_id)">立即评价</button>
		</view>
		<view class="button-bottom" v-if="orderInfo.text_status === 5">
			<button class='btn btn-circle btn-w' hover-class="btn-hover" @click="customerService(orderInfo.order_id)" v-if="orderInfo.bill_aftersales_id == false">申请售后</button>
			<button class='btn btn-circle btn-w' hover-class="btn-hover" @click="showCustomerService(orderInfo.bill_aftersales_id)"
			 v-else-if="orderInfo.bill_aftersales_id && orderInfo.bill_aftersales_id != false">查看售后</button>
		</view>
	</view>
</template>

<script>
	import {
		orders,
		goods
	} from '@/config/mixins.js'
	export default {
		mixins: [orders, goods],
		data() {
			return {
				orderId: 0,
				orderInfo: {}, // 订单详情
				teamInfo: [], //拼团团信息
			}
		},
		onLoad(options) {
			this.orderId = options.order_id
			if (this.orderId) {
				this.orderDetail()
			} else {
				this.$common.errorToShow('', () => {
					uni.navigateBack({
						delta: 1,
					})
				})
			}
		},
		onShow() {
			this.orderDetail();
		},
		computed: {
			// 判断是否发货
			isDelivery() {
				if (this.orderInfo.text_status > 2 &&
					this.orderInfo.express_delivery != null &&
					this.orderInfo.hasOwnProperty('express_delivery') &&
					Object.keys(this.orderInfo.express_delivery).length
				) {
					return true
				} else {
					return false
				}
			}
		},
		methods: {
			// 获取订单详情
			orderDetail() {
				let _this = this
				let data = {
					order_id: _this.orderId
				}
				_this.$api.orderDetail(data, function(res) {
					if (res.status) {
						let data = res.data
						// 订单状态文字转化
						switch (data.text_status) {
							case 1:
								_this.$set(data, 'status_name', '待付款')
								break
							case 2:
								_this.$set(data, 'status_name', '待发货')
								break
							case 3:
								_this.$set(data, 'status_name', '待收货')
								break
							case 4:
								_this.$set(data, 'status_name', '待评价')
								break
							case 6:
								_this.$set(data, 'status_name', '交易完成')
								break
							case 7:
								_this.$set(data, 'status_name', '交易取消')
								break
							case 8:
								_this.$set(data, 'status_name', '待分享')
								break
							default:
								_this.$set(data, 'status_name', '交易成功')
								break
						}
						// 订单时间转换
						data.ctime = _this.$common.timeToDate(data.ctime)

						// 支付时间转换
						if (data.payment_time !== null) {
							data.payment_time = _this.$common.timeToDate(data.payment_time)
						}

						_this.orderInfo = data
						if (data.order_type == 2 && (data.text_status == 2 || data.text_status == 1)) {
							_this.getTeam(data.order_id);
						}
					} else {
						_this.$common.errorToShow(res.msg)
					}
				})
			},
			// 取消订单
			cancelOrder(orderId) {
				this.$common.modelShow('提示', '确认要取消订单吗?', () => {
					let data = {
						order_ids: orderId
					}

					this.$api.cancelOrder(data, res => {
						if (res.status) {
							this.$common.successToShow(res.msg, () => {
								this.orderDetail()
							})
						} else {
							this.$common.errorToShow(res.msg)
						}
					})
				})
			},
			// 确认收货
			tackDeliery(orderId) {
				this.$common.modelShow('提示', '确认收货操作吗?', () => {
					let data = {
						order_id: orderId
					}
					this.$api.confirmOrder(data, res => {
						if (res.status) {
							this.$common.successToShow('确认收货成功', () => {
								// 更改订单列表页的订单状态
								let pages = getCurrentPages(); // 当前页
								let beforePage = pages[pages.length - 2]; // 上个页面

								if (beforePage !== undefined && beforePage.route === 'pages/member/order/orderlist') {
									// #ifdef MP-WEIXIN
									beforePage.$vm.isReload = true
									// #endif

									// #ifdef H5
									beforePage.isReload = true
									// #endif

									// #ifdef MP-ALIPAY
									beforePage.rootVM.isReload = true
									// #endif
								}

								this.orderDetail()
							})
						} else {
							this.$common.errorToShow(res.msg)
						}
					})
				})
			},
			formatPormotions(promotion) {
				let obj = {}
				obj = JSON.parse(promotion)
				return obj
			},
			//申请售后
			customerService(id) {
				this.$common.navigateTo('../after_sale/index?order_id=' + id);
			},
			//快递信息
			logistics() {
				let address1 = this.orderInfo.ship_area_name ? this.orderInfo.ship_area_name : ''
				let address2 = this.orderInfo.ship_address ? this.orderInfo.ship_address : ''
				let address = address1 + address2
				this.showExpress(this.orderInfo.delivery[0].logi_code, this.orderInfo.delivery[0].logi_no, address)
			},
			//查看售后
			showCustomerService(id) {
				this.$common.navigateTo('../after_sale/detail?aftersales_id=' + id);
			},
			goInvition() {
				uni.navigateTo({
					url: './invitation_group?order_id=' + this.orderInfo.order_id + '&close_time=' + this.teamInfo.close_time
				})
			},
			//拼团信息
			getTeam(id) {
				this.$api.getOrderPintuanTeamInfo({
					order_id: id
				}, res => {
					if (res.status) {
						this.teamInfo = {
							list: res.data.teams,
							current_count: res.data.teams.length,
							people_number: res.data.people_number,
							team_nums: res.data.team_nums, //剩余
							close_time: res.data.close_time, //关闭时间
							id: res.data.id, //拼团id
							team_id: res.data.team_id, //拼团团队id
							rule_id: res.data.rule_id,
							status: res.data.status
						};
					} else {
						this.$common.errorToShow(res.msg)
					}

				});
			},
		}
	}
</script>

<style>
	.cell-group {
		margin-bottom: 20upx;
	}

	.cell-bd-view {
		margin-bottom: 8upx;
	}

	.cell-bd-view .cell-bd-text {
		font-size: 22upx;
		color: #999;
	}

	.black-text .cell-bd-text {
		font-size: 28upx;
		color: #333;
	}

	.button-bottom {
		padding: 15upx 26upx;
		text-align: right;
		display: block;
	}

	.button-bottom .btn {
		margin-left: 20upx;
	}

	.order-price {
		padding: 10upx 0 20upx;
	}

	.order-price .cell-item {
		border-bottom: none;
		padding-bottom: 0;
		padding-top: 0;
		min-height: 40upx;
	}

	.order-price .cell-bd-view {
		margin-bottom: 0;
	}

	.order-offer .cell-item-hd {
		vertical-align: top;
		padding-top: 8upx;
	}

	.order-offer .cell-item-bd {
		padding: 0;
	}

	.order-promotion {
		font-size: 24upx;
		color: #fff;
		background-color: #ff7159;
		margin: 0 0 4upx 6upx;
		padding: 2upx 10upx;
		display: inline-block;
		float: right;
	}

	.tax_name {}

	.tax_code {}

	.user-head-img-c {
		position: relative;
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		margin-right: 20upx;
		box-sizing: border-box;
		display: inline-block;
		float: left;
		border: 1px solid #f3f3f3;
	}

	.user-head-img-tip {
		position: absolute;
		top: -6upx;
		left: -10upx;
		display: inline-block;
		background-color: #FF7159;
		color: #fff;
		font-size: 22upx;
		z-index: 99;
		padding: 0 10upx;
		border-radius: 10upx;
		transform: scale(.8);
	}

	.group-swiper .cell-item .user-head-img {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.group-swiper .cell-item .user-head-img-c:first-child {
		border: 1px solid #FF7159;
	}

	.uhihn {
		width: 80upx;
		height: 80upx;
		border-radius: 50%;
		margin-right: 20upx;
		display: inline-block;
		border: 2upx dashed #e1e1e1;
		text-align: center;
		line-height: 80upx;
		color: #d1d1d1;
		font-size: 40upx;
		box-sizing: border-box;
	}

	.group-swiper .cell-item .cell-item-ft .btn {
		font-size: 26upx;
		color: #fff;
		background-color: #FF7159;
		/* padding: 0; */
		text-align: center;
	}
</style>
