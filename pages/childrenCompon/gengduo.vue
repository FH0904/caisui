<template>
	<view class="gd-wrapper">
		<view class="gd-title">
			温馨提示
		</view> 
		 <view class="gd-content">
		 	尊敬的客户您好！我们愿为您提供全面优质的服务，如果有任何需要，
			请勾选合作事项或者给我们留言，我们将在第一时间为您解决问题
		 </view>
		 <view class="input">
		 	<input type="text" :value=value disabled="true" @click="clickInput"/>
		 </view>
		 <view class="textarea">
		 	<textarea value=" " placeholder="" />
		 </view>
	</view>
</template>

<script>
	export default{
		data(){
			return{
				value:"选择新业务类型",
				arr:["新户设立","审计评估","税务变更","产权代理","工商变更","其他业务"],
				index:0
			}
		},
		methods:{
			clickInput(){
				let that = this
				uni.showActionSheet({
					itemList:["新户设立","审计评估","税务变更","产权代理","工商变更","其他业务"],
					success(data){
						that.value = that.arr[data.tapIndex]
					}
				})
			}
		}
	}
</script>

<style lang="less">
	.gd-wrapper{
		.gd-title{
			font-size: 28upx;
			margin: 27upx 0 16upx 32upx;
		}
		.gd-content{
			padding: 0 50upx;
			font-size: 24upx;
		}
		.input{
			border: 2upx solid #989898;
			width: 90%;
			margin: 57upx auto;
			border-radius: 10upx;
			font-size: 28upx;
			padding:25upx 0 25upx 10upx;
			color: #9c9c9c;
		}
		.textarea{
			border: 2upx solid #989898;
			width: 90%;
			margin: 30upx auto;
			border-radius: 10upx;
			border-radius: 10upx;
			font-size: 28upx;
		}
	}
</style>
