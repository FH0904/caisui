<template>
	<view class="content">
		<view class="content-top">
			<view class='cell-group margin-cell-group'>
				<view class='cell-item'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>发票类型</view>
					</view>
					<view class='cell-item-ft'>
						<view class="uni-form-item uni-column invoice-type">
							<radio-group class="uni-list" @change="radioChange">
								<label class="uni-list-cell uni-list-cell-pd" v-for="(item,index) in radioItems" :key="index">
									<view class="invoice-type-icon">
										<radio :id="item.name" :value="item.value" :checked="item.value == type"></radio>
									</view>
									<view class="invoice-type-c">
										<label class="label-2-text" :for="item.name">
											<text>{{item.name}}</text>
										</label>
									</view>
								</label>
							</radio-group>
						</view>
					</view>
				</view>
				<view class='cell-item'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>发票抬头</view>
					</view>
					<view class='cell-item-ft'>
						<input class='cell-bd-input' v-model="name" placeholder='抬头名称'></input>
					</view>
				</view>
				<view class='cell-item' v-show="type === '3'">
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>税号</view>
					</view>
					<view class='cell-item-ft'>
						<input class='cell-bd-input' v-model="code" placeholder='纳税人识别号'></input>
					</view>
				</view>
				
			</view>
			<view class='cell-group margin-cell-group'>
				<view class='cell-item'>
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>发票内容</view>
					</view>
					<view class='cell-item-ft'>
						<view class="cell-ft-view">明细</view>
					</view>
				</view>
			</view>
			<view class='cell-group margin-cell-group'>
				<view class='cell-item right-img'  @click="notNeedInvoice">
					<view class='cell-item-hd'>
						<view class='cell-hd-title'>本次不开具发票</view>
					</view>
					<view class='cell-item-ft'>
						<image class='cell-ft-next icon' src='../../../static/image/right.png'></image>
					</view>
				</view>
			</view>
		</view>
		<view class="button-bottom">
			<button class="btn btn-square btn-b" @click="saveInvoice" hover-class="btn-hover2">保存</button>
		</view>
	</view>
</template>

<script>
export default {
    data() {
        return {
            radioItems: [
				{
                    name: '个人或事业单位',
                    value: '2'
                },
                {
                    name: '企业',
                    value: '3'
                }
            ],
			type: '3', // 发票类型 2个人 3企业
			name: '', // 抬头名称
			code: '' // 税号
        }
    },
	onLoad () {
		let invoice
		let pages = getCurrentPages()
		let pre = pages[pages.length - 2]
		
		// #ifdef H5
		invoice = pre.invoice
		// #endif
		
		// #ifdef MP-WEIXIN || APP-PLUS || APP-PLUS-NVUE
		invoice = pre.$vm.invoice
		// #endif
		
		// #ifdef MP-ALIPAY
		invoice = pre.rootVM.invoice;
		// #endif

		if (invoice && invoice.hasOwnProperty('type') && invoice.type !== '1') {
			// 发票不是未使用, 展示发票信息
			this.name = invoice.name
			this.code = invoice.code
			this.type = invoice.type
		}
		
	},
    methods: {
		// 单选框点击切换
        radioChange (evt) {
			this.radioItems.forEach(item => {
				if (item.value === evt.target.value) {
					this.type = item.value
				}
			})
        },
		// 不需要发票信息
		notNeedInvoice () {
			let data = {
				type: '1',
				name: '不开发票',
				code: ''
			}
			
			this.setPageData(data)
		},
		// 保存发票信息
		saveInvoice () {
			if (!this.name) {
				this.$common.errorToShow('请输入发票抬头')
				return false
			}
			
			// 企业类型需要输入税号
			if (this.type === '3' && !this.code) {
				this.$common.errorToShow('请输入发票税号信息')
				return false
			}
			
			let data = {
				type: this.type,
				name: this.name
			}
			
			// 不是企业类型不需要税号
			data['code'] = this.type === '3' ? this.code : ''
			
			this.setPageData(data)
		},
		// 向上个页面赋值并返回
		setPageData (data) {
			let pages = getCurrentPages();//当前页
			let beforePage = pages[pages.length - 2];//上个页面
			
			// #ifdef MP-ALIPAY
			beforePage.rootVM.invoice = data;
			// #endif
			
			// #ifdef MP-WEIXIN || APP-PLUS || APP-PLUS-NVUE
			beforePage.$vm.invoice = data;
			// #endif
			
			// #ifdef H5 
			beforePage.invoice = data;
			// #endif
			
			uni.navigateBack({
				delta: 1
			})
		}
    }
}
</script>

<style>
/* .margin-cell-group{
	margin-bottom: 20upx;
} */
.invoice-type .uni-list-cell{
	display: inline-block;
	font-size: 26upx;
	color: #333;
	position: relative;
	margin-left: 50upx;
}
.invoice-type .uni-list-cell>view{
	display: inline-block;
}
.invoice-type-icon{
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
}
.invoice-type-c{
	margin-left: 50upx;
	line-height: 2;
}
.cell-item-ft .cell-bd-input{
	text-align: right;
	width: 500upx;
}
.button-bottom .btn {
	width: 100%;
}
</style>
