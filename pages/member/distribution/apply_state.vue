<template>
	<view class="content">
		<view class="apply-c">
			<view class="apply-top fsz36 color-o">
				恭喜，您的申请已提交！
			</view>
			<view class="apply-bot">
                <view class="apply-bot-sop">
                	<view class="abs-img">
                		<image class="icon" src="../../../static/image/del.png" mode=""></image>
                	</view>
					<view class="color-9 abs-mid">
						<!-- <text class=" color-o">·······</text>······· -->
						<image class="dot" src="../../../static/image/dot-o.png" mode=""></image>
						<image class="dot" src="../../../static/image/dot-o.png" mode=""></image>
						<image class="dot" src="../../../static/image/dot-o.png" mode=""></image>
						<image class="dot" src="../../../static/image/dot-o.png" mode=""></image>
						<image class="dot" src="../../../static/image/dot-o.png" mode=""></image>
						<image class="dot" src="../../../static/image/dot-o.png" mode=""></image>
						<image class="dot" src="../../../static/image/dot-g.png" mode=""></image>
						<image class="dot" src="../../../static/image/dot-g.png" mode=""></image>
						<image class="dot" src="../../../static/image/dot-g.png" mode=""></image>
						<image class="dot" src="../../../static/image/dot-g.png" mode=""></image>
						<image class="dot" src="../../../static/image/dot-g.png" mode=""></image>
						<image class="dot" src="../../../static/image/dot-g.png" mode=""></image>
					</view>
					<view class="abs-img">
						<image class="icon" src="../../../static/image/close.png" mode=""></image>
					</view>
                </view>
				<view class="apply-bot-text">
					<view class="abt-c">
						<view class="color-6 fsz30">
							申请提交成功
						</view>
						<view class="color-9 fsz24">
							{{info.ctime}}
						</view>
					</view>
					<view class="abt-c">
						<view class="color-6 fsz30" v-if="info.verify==2">
							等待审核
						</view>
						<view class="color-6 fsz30" v-if="info.verify==3">
							审核驳回
						</view>
						<view class="color-6 fsz30" v-if="info.verify==1">
							审核通过
						</view>
					</view>
				</view>
            </view>
		</view>
	</view>
</template>

<script>
export default {
    data() {
        return {
			info: {}
        }
    },
	onLoad:function() {
		var _this = this;
		_this.$api.getDistributioninfo({check_condition:true}, function(res) {
			if (res.status) {
				if(res.data.need_apply && res.data.condition_status ==false){
					_this.$common.redirectTo('/pages/member/distribution/index');
				}
				if(res.data.verify == 1){//审核通过
					_this.$common.redirectTo('/pages/member/distribution/user');
				}
				_this.info = res.data;
			} else {
				//报错了
				_this.$common.errorToShow(res.msg);
			}
		});
	},
    methods: {
       
        
    }
}
</script>

<style>
.content{
	height: calc(100vh - 44px);
	padding-top: 50upx;
}

.apply-c{
	margin: 40upx auto;
	text-align: center;
	padding: 26upx;
	border-radius: 30upx;
	box-shadow: 0 0 10px #aaa;
	width: 670upx;
	min-height: 400upx;
	background-color: #fff;
}
.apply-top{
	margin-top: 40upx;
}
.apply-bot{
	width: 100%;
	text-align: center;
}
.apply-bot-sop{
	position: relative;
	height: 60upx;
	width: 65%;
	margin: 40upx auto 20upx;
	display: flex;
	line-height: 1.7555;
	/* vertical-align: middle; */
}
.apply-bot-sop>view{
	display: inline-block;
}
.abs-img{
	flex: 1;
}
.abs-img image{
	position: relative;
	top: 50%;
	transform: translateY(-50%);
}
.abs-mid{
	/* font-size: 70upx; */
	flex: 2;
	display: flex;
}
.apply-bot-text{
	display: flex;
}
.abt-c{
	flex: 1;
}
.dot{
	width: 8upx;
	height: 8upx;
	margin: 0 4upx;
}
</style>
