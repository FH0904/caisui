<template>

	<view class="content">
		<view class="toppic">
			
		</view>
		<mx-date-picker :show="showPicker" :type="type" :value="value" :show-tips="true" :begin-text="'入住'" :end-text="'离店'" :show-seconds="true" @confirm="onSelected" @cancel="onSelected" />
		<view class="content-item"  @click="onShowDatePicker('date')">
			<view class="item-img">
				<image src="../../static/hot-0.png"></image>
			</view>
			<view class="item-text">凭证日期</view>
			<view class="item-other">
				<text class="date" >{{date}}</text>
			</view>
		</view>
		<view class="content-item">
			<view class="item-img">
				<image src="../../static/hot-0.png"></image>
			</view>
			<view class="item-text">结算方式</view>
			<view class="item-other">
				<text class='text'>现金</text>
				<text class='text'>银行</text>
				<text class='text'>其他</text>
			</view>
		</view>
		<view class="content-item">
			<view class="item-img">
				<image src="../../static/hot-0.png"></image>
			</view>
			<view class="item-text">金额</view>
			<view class="item-other">
				<input type="text" value="" placeholder="请输入金额" class="input-rmb"/>
				<text class="danwei">元</text>
			</view>
		</view>
		<view class="content-item">
			<view class="item-img">
				<image src="../../static/hot-0.png"></image>
			</view>
			<view class="item-text">摘要</view>
			<view class="item-other"></view>
		</view>
		<view class="content-item">
			<view class="item-img">
				<image src="../../static/hot-0.png"></image>
			</view>
			<view class="item-text">备注</view>
			<view class="item-other">
				<input type="text" value="" placeholder="请输入备注信息" class="input-bz" />
			</view>
		</view>
		<button class="btn">立即上传</button>
	</view>

</template>

<script>
	import MxDatePicker from "../../components/comment/mx-datepicker/mx-datepicker.vue";
	export default {
		components: {
			MxDatePicker
		},
		data() {
			return {
				showPicker: false,
				date: '2019/01/01',
				time: '15:00:12',
				datetime: '2019/01/01 15:00:12',
				range: ['2019/01/01','2019/01/06'],
				rangetime: ['2019/01/08 14:00','2019/01/16 13:59'],
				type: 'rangetime',
				value: ''
			}
		},
		methods: {
			onShowDatePicker(type){//显示
				this.type = type;
				this.showPicker = true;
				this.value = this[type];
			},
			onSelected(e) {//选择
				this.showPicker = false;
				if(e) {
					this[this.type] = e.value; 
					//选择的值
					console.log('value => '+ e.value);
					//原始的Date对象
					console.log('date => ' + e.date);
				}
			}
		}
	}
</script>

<style lang="less">
	.content {
		margin-top: 400upx;
		.content-item {
			display: flex;
			align-items: center;
			justify-content: space-around;
			height: 99upx;
			border-bottom: 1upx solid rgb(227, 227, 227);

			.item-img {
				flex: 2;
				text-align: center;

				image {
					width: 40upx;
					height: 40upx;
					vertical-align: baseline;
				}
			}

			.item-text {
				flex: 3;
				font-size: 28upx;
				color: rgb(40, 40, 40);
				font-weight: 600;
			}

			.item-other {
				flex: 7;
				font-size: 30upx;
				display: flex;
				text-align: center;
				justify-content: flex-end;
				margin-right: 40upx;

				.date {
					font-size: 24upx;
				}

				.text {
					display: block;
					width: 100upx;
					height: 48upx;
					line-height: 48upx;
					background-color: rgb(191, 191, 191);
					margin-left: 16upx;
					border-radius: 10upx;
					color: #FFFFFF;
				}

				.jine {
					color: rgb(200, 200, 200);
					margin-right: 10upx;
				}
				.input-rmb{
					width: 180upx;
					margin-right: 10upx;
					text-align: right;
				}
				.input-bz{
					width: 400upx;
					text-align: right;
				}
			}
		}
		.btn{
			width: 510upx;
			height: 90upx;
			background-color: rgb(40,110,226);
			color: #FFFFFF;
			margin-top: 40upx;
		}
	}
</style>

