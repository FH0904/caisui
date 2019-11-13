import store from '../store/index'
import * as Config from './config.js'
import * as db from './db.js'

export default {
	config: {
		baseUrl: Config.apiBaseUrl,
		data: {},
		method: "POST",
		dataType: "json",
		success() {},
		fail() {},
		complete() {}
	},
	interceptor: {
		request: null,
		response: null
	},
	request(options) {
		if (!options) { options = {} }

		options.baseUrl = options.baseUrl || this.config.baseUrl
		options.dataType = options.dataType || this.config.dataType
		options.url = options.baseUrl + options.url
		options.data = options.data || {}
		options.method = options.method || this.config.method
		options.header = {
			'Content-Type': 'application/x-www-form-urlencoded',
		}

		return new Promise((resolve, reject) => {
			let _config = null;

			// 请求完成
			options.complete = (response) => {
				if (this.interceptor.response) {
					let newResponse = this.interceptor.response(response)
					if (newResponse) {
						response = newResponse
					}
				}
				if (response.statusCode === 200) {
					if(response.data.data === 14007 || response.data.data === 14006){
						db.del("userToken");
						uni.showToast({
							title: response.data.msg,
						});
						setTimeout(function() {
							uni.hideToast();
							// #ifdef H5 || APP-PLUS
							uni.navigateTo({
								url: '/pages/login/login/index1'
							})
							// #endif
							// #ifdef MP-WEIXIN || MP-ALIPAY	
							uni.navigateTo({
								url: '/pages/login/choose/index',
								animationType: 'pop-in',
								animationDuration: 200
							});
							// #endif
						}, 1500)
					}
					resolve(response.data);
				}
				else{
					reject(response);
				}
			}

			// 请求异常
			options.fail = (response) => {
				uni.showToast({
					title: '网络异常',
					icon: 'none',
					mask: true
				});
			}

			// 加载配置
			_config = Object.assign({}, this.config, options)
			if (this.interceptor.request) {
				this.interceptor.request(_config)
			}
			/*uni.showLoading({
				title: '数据加载中'
			});*/
			uni.request(_config);
		});
	},
}