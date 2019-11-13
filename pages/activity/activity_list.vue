<template>
	<section class="aui-flexView">
		<section class="aui-scrollView">
			<div class="aui-tab" data-ydui-tab>
				<ul class="tab-nav b-line">

					<li :class="['tab-nav-item', flag ? 'tab-active': '']" @click="flag=true">
						<view class="a">
							<div></div>
							<div>进行中</div>
						</view>
					</li>
					<li :class="['tab-nav-item', flag ? '' : 'tab-active']" @click="flag=false">
						<view class="a">
							<div></div>
							<div>已结束</div>
						</view>
					</li>

				</ul>


				<div class="tab-panel tab-panel-clear-line">
					<div :class="['tab-panel-item', flag ? 'tab-active': '']">
						<!-- 每一条 -->
						<view class="c" v-for="(item,index) in activelist1" :key="index">
							<!-- <a href="javascript:;" class="aui-flex b-line" v-for="(item,index) in activelist" :key="index"> -->
							<view class="aui-flex b-line" @tap="goactivedeatil(item.id)">
								<div class="aui-flex-time-img">
									<!-- <img :src="item.images[0]" alt=""> -->
									<image :src="item.images[0]" mode="aspectFill"></image>
								</div>
								<div class="aui-flex-box">
									<h2>{{item.name}}</h2>
									<h2>地址：{{item.address}}</h2>
									<div class="aui-text-bottom">
										<h3>人数：已参与 {{item.current_people}} 人</h3>
										<h4>
											<div class="aui-fl-time">距结束</div>
											<div class="time-item">
												<span class="hour_show">{{ countdown[item.id].h }}</span>
												<em>:</em>
												<span class="minute_show"><s></s>{{ countdown[item.id].m }}</span>
												<em>:</em>
												<span class="second_show"><s></s>{{ countdown[item.id].s }} </span>
											</div>
										</h4>
									</div>
									<div class="aui-time-button">
										<button :class="[item.status == 1 ? '' : 'active']">{{item.status_text}}</button>
									</div>
								</div>
							</view>


						</view>

					</div>

					<div :class="['tab-panel-item', flag ? '': 'tab-active']">

						<view class="c" v-for="(item,index) in activelist0" :key="index">
							<!-- <a href="javascript:;" class="aui-flex b-line" v-for="(item,index) in activelist" :key="index"> -->
							<view class="aui-flex b-line" @tap="goactivedeatil(item.id)">
								<div class="aui-flex-time-img">
									<!-- <img :src="item.images[0]" alt=""> -->
									<image :src="item.images[0]" mode="aspectFill"></image>
								</div>
								<div class="aui-flex-box">
									<h2>{{item.name}}</h2>
									<h2>地址：{{item.address}}</h2>
									<!--<div class="aui-text-bottom">
										<h3>人数：已参与 {{item.current_people}} 人</h3>
										<h4>
											<div class="aui-fl-time">距结束</div>
											<div class="time-item">
												<span class="hour_show">0<s id="h"></s>{{ countdown[item.id].h }}</span>
												<em>:</em>
												<span class="minute_show"><s></s>{{ countdown[item.id].m }}</span>
												<em>:</em>
												<span class="second_show"><s></s>{{ countdown[item.id].s }} </span>
											</div>
										</h4>
									</div>-->
									<div class="aui-time-button">
										<button :class="[item.status == 1 ? '' : 'active']">{{item.status_text}}</button>
									</div>
								</div>
							</view>
						
						
						</view>

					</div>

				</div>
			</div>

		</section>
	</section>
</template>

<script>
	//var _self
	export default {
		data() {
			return {
				// tabbar 切换标识
				flag: true,
				activelist0: [],
				activelist1: [],
				// 倒计时
				countdown: [],
				intervalIds: [],
			}
		},
		onLoad() {
			this.getActiveList();
		},
		methods: {
			// 去详情界面
			goactivedeatil(id) {
				// 判断是否已登录
				if (this.$db.get('userToken')) {
					// 登录的话跳转到详情界面
					uni.navigateTo({
						url:'../activity/activity_detail?id=' + id
					})
				} else{
					uni.showToast({
					  title: '请先登录!',
					  icon: 'none',
					  duration: 800,
					  success: function(res) {
					    // #ifdef H5 || APP-PLUS
					    setTimeout(() => {
					      uni.hideToast()
					      uni.navigateTo({
					        url: '/pages/login/login/index1'
					      })
					    }, 800)
					    // #endif
					    // #ifdef MP-WEIXIN || MP-ALIPAY
					    setTimeout(() => {
					      uni.hideToast()
					      uni.navigateTo({
					        url: '/pages/login/choose/index',
					        animationType: 'pop-in',
					        animationDuration: 200
					      })
					    }, 500)
					    // #endif
					  }
					})
					
				}
				
			},
			
			// 获取活动列表
			async getActiveList(){
				let res = await this.$httpRequest.init({
					method: 'activities.list'
				});
				console.log(this.activelist1.length)
				if (true !== res.status) {
					uni.showToast({
						title: res.msg,
						icon: 'none'
					});
				}
				// console.log(res.data.length)
				for (var i = 0; i < res.data.length; i++) {
					if (res.data[i].status == 0) {
						this.activelist0.push(res.data[i])
					}
					else {
						this.activelist1.push(res.data[i])
						this.handleTimer(res.data[i].id, res.data[i].end_time)
					}
				}
			},
			// 解析时间
			parseTime(endTime){
				let hh = Math.floor((endTime / 60 / 60));
				hh = hh < 10 ? '0' + hh : hh
				
				let mm = Math.floor((endTime / 60) % 60);
				mm = mm < 10 ? '0' + mm : mm
				
				let ss = Math.floor(endTime  % 60);
				ss = ss < 10 ? '0' + ss : ss
				
				return { h: hh, m: mm, s: ss };
			},
			
			// 营业时间
			handleTimer(id, end_time) {
				let currentTime = parseInt(Date.parse(new Date()) / 1000);
				let sourceTime = currentTime > end_time ? 0 : end_time - currentTime;
				
				this.$set(this.countdown, id, { h: '--', m: '--', s: '--' })
				
				this.intervalIds[id] = setInterval(() => {
					// clear Interval
					if (sourceTime <= 0) {
						clearInterval(this.intervalIds[id])
						this.$set(this.countdown, id, { h: '--', m: '--', s: '--' })
						return;
					}
					this.$set(this.countdown, id, this.parseTime(sourceTime))
					sourceTime--;
				}, 1000)
			},
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh();
				uni.showToast({
					title: "刷新成功",
					mask: true,
					duration: 1500
				})
			}, 1000)
		}
	}
</script>

<style lang="less" scoped>
	html,
	body {
		color: #333;
		margin: 0;
		height: 100%;
		font-family: "Myriad Set Pro", "Helvetica Neue", Helvetica, Arial, Verdana, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-weight: normal;
	}

	* {
		-webkit-box-sizing: border-box;
		-moz-box-sizing: border-box;
		box-sizing: border-box;
	}

	a {
		text-decoration: none;
		color: #000;
	}

	a,
	label,
	button,
	input,
	select {
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
	}

	img {
		border: 0;
	}

	body {
		background: #fff;
		color: #666;
	}

	html,
	body,
	div,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	button,
	fieldset,
	form,
	input,
	legend,
	textarea,
	th,
	td {
		margin: 0;
		padding: 0;
	}

	a {
		text-decoration: none;
		color: #08acee;
	}

	button {
		outline: 0;
	}

	img {
		border: 0;
	}

	button,
	input,
	optgroup,
	select,
	textarea {
		margin: 0;
		font: inherit;
		color: inherit;
		outline: none;
	}

	li {
		list-style: none;
	}

	a {
		color: #666;
	}

	.clearfix::after {
		clear: both;
		content: ".";
		display: block;
		height: 0;
		visibility: hidden;
	}

	/* .clearfix {
} */


	.divHeight {
		width: 100%;
		height: 10px;
		background: #f5f5f5;
		position: relative;
		overflow: hidden;
	}

	.r-line {
		position: relative;
	}

	.r-line:after {
		content: '';
		position: absolute;
		z-index: 0;
		top: 0;
		right: 0;
		height: 100%;
		border-right: 1px solid #D9D9D9;
		-webkit-transform: scaleX(0.5);
		transform: scaleX(0.5);
		-webkit-transform-origin: 100% 0;
		transform-origin: 100% 0;
	}

	.b-line {
		position: relative;
	}

	.b-line:after {
		content: '';
		position: absolute;
		z-index: 2;
		bottom: 0;
		left: 0;
		width: 100%;
		height: 1px;
		border-bottom: 1px solid #e2e2e2;
		-webkit-transform: scaleY(0.5);
		transform: scaleY(0.5);
		-webkit-transform-origin: 0 100%;
		transform-origin: 0 100%;
	}

	.aui-flex {
		display: -webkit-box;
		display: -webkit-flex;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		align-items: center;
		padding: 15px;
		position: relative;
	}

	.aui-flex-box {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		flex: 1;
		min-width: 0;
		font-size: 14px;
		color: #333;
	}


	/* 必要布局样式css */

	.aui-flexView {
		width: 100%;
		height: 100%;
		margin: 0 auto;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		-webkit-flex-direction: column;
		-ms-flex-direction: column;
		flex-direction: column;
		background-color: #fff;
	}

	.aui-scrollView {
		width: 100%;
		height: 100%;
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		overflow-y: auto;
		overflow-x: hidden;
		-webkit-overflow-scrolling: touch;
		position: relative;
		margin-top: 0;
	}

	.aui-navBar {
		height: 44px;
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		z-index: 1002;
		background: #ffffff;
	}


	.aui-navBar-item {
		height: 44px;
		min-width: 25%;
		-webkit-box-flex: 0;
		-webkit-flex: 0 0 25%;
		-ms-flex: 0 0 25%;
		flex: 0 0 25%;
		padding: 0 0.9*0.85rem;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		font-size: 0.7*0.85rem;
		white-space: nowrap;
		overflow: hidden;
		color: #808080;
		position: relative;
	}

	.aui-navBar-item:first-child {
		-webkit-box-ordinal-group: 2;
		-webkit-order: 1;
		-ms-flex-order: 1;
		order: 1;
		margin-right: -25%;
		font-size: 0.9*0.85rem;
		font-weight: bold;
	}

	.aui-navBar-item:last-child {
		-webkit-box-ordinal-group: 4;
		-webkit-order: 3;
		-ms-flex-order: 3;
		order: 3;
		-webkit-box-pack: end;
		-webkit-justify-content: flex-end;
		-ms-flex-pack: end;
		justify-content: flex-end;
	}

	.aui-center {
		-webkit-box-ordinal-group: 3;
		-webkit-order: 2;
		-ms-flex-order: 2;
		order: 2;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-pack: center;
		-webkit-justify-content: center;
		-ms-flex-pack: center;
		justify-content: center;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		height: 44px;
		width: 50%;
		margin-left: 25%;
	}

	.aui-center-title {
		text-align: center;
		width: 100%;
		white-space: nowrap;
		overflow: hidden;
		display: block;
		text-overflow: ellipsis;
		font-size: 0.95*0.85rem;
		color: #333;
	}

	.icon {
		width: 20px;
		height: 20px;
		display: block;
		border: none;
		float: left;
		background-size: 20px;
		background-repeat: no-repeat;
	}

	.icon-return {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACgElEQVRoQ+Xb/XXTMBAAcJ00ANkANkAoC5QJoBPQbMAIMAEwQcMEdIOGAaKKDTpCGUA6nt6z3wtuLGN9noL/jhP9fOfTWVaAdXJIKaUQ4pYxJhljB2vttTHmae3wYe0JLT7vsZzzewDYjL+PiN+01h/Xjoc8+Bx2QH4/Ho83FwUOYH9ba6+MMeZiwCWw/uKQTGkp5RXn/MfpPTtEMjqyYyaQAyulbgDAV+PpkYwlF+HSWFLgGlgy4FpYEuA5LCL+cs69N8Y8rp16Qp9vWrQWsH6eXd06Ll2cZmCl1BcAeNYaDpEtgm2W0kqpWwB41haWxjYBt8RWB7fGVgUHsD+Hapy9QJ0rYFWK1hyWMRb1iLdUiZtOS5SwRVNaSrkRQtwPSzLTi149skWflqhii0SYMjY7mDo2KziERcTPWutPKdU117lZpqUF7E5rvc814NTvSQZPFsj/Gg8iksImp3RgZZFRxCaBe8RGg6WUrzjnD2eWUclGNqnx2G63vgh9mBYQqml8Os6oovXfgX1KCyH8e50XvUU5KsIeOUxHh97Q0eARzTm/A4CXvUQ6CTygN5zzAwC87gGdDO4NnQX8D+i91nqX2gfnOD8buBd0VnAP6Oxg6ugi4BEthPAt6Lsz1bvZPV0MPCIDbWgTdHGwh8+hGWN31tpdideicxW9CngBbay1b2uhq4GpoKuCKaCrg1ujm4A9OrBzp+g93QzcCt0UHEIj4qNzzm8CX71jNvSQ0Ry8gH5yzvkpKxuaBLgmmgy4FpoU+AT9dbo4iIhZ0pscOLQimgNNElwSTRa8tPZtrX0TU71JgxfQUTuByIPn0Bf7R62xaxreR+/9gj8iRm9X/APA/hNb3L192AAAAABJRU5ErkJggg==');
	}

	.icon-share {
		background-image: url('data:image/png;base64,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');
	}



	.tab-nav {
		height: 60px;
		display: block;
		position: relative;
		background: #ffedcd;
		z-index: 1;
		width: 100%;
		margin: 0 auto;
	}

	.tab-nav-item {
		height: 60px;
		padding-top: 0.2*0.85rem;
		position: relative;
		text-align: center;
		color: #585858;
		font-size: 0.9*0.85rem;
		display: block;
		float: left;
		width: 50%;
	}

	.tab-nav-item.tab-active {
		background-color: #ffa200;
	}

	.tab-nav-item.tab-active .a {
		color: #fff;
		font-size: 0.85*0.85rem;
	}

	.tab-nav-item a {
		display: inherit;
		font-size: 0.85*0.85rem;
		color: #333333;
	}

	.tab-nav-item .a div {
		padding-top: 0.5*0.85rem;
	}

	.tab-panel {
		position: relative;
		overflow: hidden;
	}

	.tab-panel .tab-panel-item {
		width: 100%;
		position: absolute;
		top: 0;
		-webkit-transform: translateX(-100%);
		transform: translateX(-100%);
	}

	.tab-panel .tab-panel-item.tab-active~.tab-panel-item {
		-webkit-transform: translateX(100%);
		transform: translateX(100%);
	}

	.tab-panel .tab-panel-item.tab-active {
		position: relative;
		-webkit-transition: -webkit-transform .15s;
		transition: -webkit-transform .15s;
		transition: transform .15s;
		transition: transform .15s, -webkit-transform .15s;
		-webkit-transform: translateX(0);
		transform: translateX(0);
	}



	.aui-fl-time {
		float: left;
		font-size: 14px;
	}

	.time-item {
		float: left;
		padding-top: 0;
	}

	.time-item span {
		color: #fff;
		font-weight: 400;
		width: 22px;
		display: block;
		float: left;
		margin: 0 3px;
		border-radius: 3px;
		height: 20px;
		line-height: 20px;
		text-align: center;
		font-size: 0.85*0.85rem;
		background-color: #343434;
	}

	.time-item em {
		font-style: normal;
		color: #908514;
		float: left;
	}

	.aui-fl-time {
		float: left;
		font-size: 14px;
	}

	.time-item {
		float: left;
		padding-top: 0;
		font-size: 0.8*0.85rem;
	}

	.aui-limit-time {
		margin: 0 auto;
		float: right;
		overflow: hidden;
	}

	.aui-flex-box p {
		line-height: 1.2;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 1;
		font-size: 0.8*0.85rem;
		color: #333333;
		width: 100%;
	}

	.aui-flex-time-img {
		width: 110px;
		height: 110px;
		margin-right: 0.8*0.85rem;
	}

	.aui-flex-time-img image {
		width: 220upx;
		height: 220upx;
		display: block;
		border: none;
	}
	.aui-flex-time-img img {
		width: 220upx;
		height: 220upx;
		display: block;
		border: none;
	}

	.aui-flex-box h2 {
		font-size: 0.9*0.85rem;
		color: #333;
		font-weight: normal;
		line-height: 1.5;
		overflow: hidden;
		text-overflow: ellipsis;
		display: -webkit-box;
		-webkit-box-orient: vertical;
		-webkit-line-clamp: 2;
		margin-bottom: 0.5*0.85rem;
	}

	.aui-flex-box h3 {
		font-size: 0.8*0.85rem;
		color: #f95f52;
		margin-bottom: 0.4*0.85rem;
		font-weight: normal;
	}

	.aui-flex-box h4 {
		font-size: 0.8*0.85rem;
		color: #333;
		font-weight: normal;
	}

	.aui-flex-clear-pa {
		padding: 1px 1px;
		overflow: hidden;
	}

	.aui-flex-texts {
		float: left;
		font-size: 0.7*0.85rem;
	}

	.aui-time-seep {
		width: 60%;
		float: left;
		height: 12px;
		border-radius: 20px;
		background: #fff;
		position: relative;
		margin-top: 5px;
		border: 1px solid #ffa200;
		margin-bottom: 0.5*0.85rem;
	}

	.aui-time-seep-go {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 10px;
		border-radius: 20px 0 0 20px;

		background-color: #ffa200;
	}

	.aui-flex-clear-pa .aui-flex-box p {
		color: #999;
		width: 100%;
	}

	.aui-time-button button {
		padding: 0.35*0.85rem 0.5*0.85rem;
		background-color: #f0121e;
		color: #fff;
		border-radius: 3px;
		border: none;
		width: 75px;
		font-size: 0.85*0.85rem;
		position: absolute;
		right: 15px;
		bottom: 15px;
	}

	.aui-time-button .active {
		background-color: #666666;

	}

	.aui-flex-tag {
		position: relative;
		overflow: hidden;
		margin-bottom: 0.5*0.85rem;
	}

	.aui-flex-tag span {
		display: block;
		border: none;
		float: left;
		border: 1px solid #666666;
		border-radius: 4px;
		font-size: 0.7*0.85rem;
		margin-right: 0.4*0.85rem;
		color: #333;
		padding: 0.1*0.85rem 0.4*0.85rem;
	}

	.aui-time-seep span {
		position: absolute;
		right: -60px;
		top: -4px;
		color: #ffa200;
		font-size: 0.7*0.85rem;
	}

	.aui-text-bottom {
		width: 100%;
		overflow: hidden;
		text-align: left;
	}

	.aui-text-bottom h3 em {
		font-size: 0.7*0.85rem;
		font-style: normal;
		padding-left: 0.2*0.85rem;
		color: #999;
		font-weight: normal;
		text-decoration: line-through;
	}
</style>
