<template>
	<view class="aui-flexView" id="navHead" style="height:auto">
		<!-- 轮播部分 -->
		<view class="page-section swiper">
			<view class="page-section-spacing">
				<swiper class="swiper" indicator-dots="true" autoplay="true" interval="4000" circular="true">
					<swiper-item v-for="(item,index) in detaillist.images" :key="index">
						<image :src="item" mode="aspectFill"></image>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<!-- 轮播end -->

		<!-- <header class="aui-navBar aui-navBar-bg aui-navBar-fixed" id="nav-wrap">
			<a href="javascript:;" class="aui-navBar-item">
				<i class="icon icon-return"></i>
			</a>
			<div class="aui-center">

			</div>
			<a href="javascript:;" class="aui-navBar-item">
				<i class="icon icon-share"></i>
			</a>
		</header>
		<view class="aui-scrollView"> -->

			<!-- 报名部分 -->
			<div class="aui-reserve-head">
				<h2>{{detaillist.name}} </h2>
				<view class="p">报名时间：{{detaillist.start_time_text}}-{{detaillist.end_time_text}}</view>
				<h3><i>已参与</i>{{detaillist.current_people}} <i>人</i> </h3>
			</div>
			<div class="aui-flex aui-flex-clear">
				<div class="aui-flex-box">
					<span>限制{{detaillist.people_limit}}人</span>
				</div>
			</div>
			<div class="aui-flex aui-flex-clear b-line">
				<div class="aui-flex-box ">
					<i class="icon icon-add"></i>
					<h5> 活动地址：{{detaillist.address}}</h5>
				</div>
			</div>
			<div class="divHeight"></div>


			<div class="aui-text-head">
				<div>
					<h2>活动详情</h2>
				</div>
				<div class="aui-flex aui-flex-lou">
				</div>
				<div>
					<view class="p">{{detaillist.content}}</view>
					<!-- <br/>
					<view class="p">经检测，该车骨架完好，排除事故车、火烧、水泡等特殊车况。发动机变速箱无渗漏，外观覆盖件无钣金喷漆，外观无剐蹭划痕，内饰干净整洁。</view>
					<br/>
					<view class="p">经检测，该车骨架完好，排除事故车、火烧、水泡等特殊车况。发动机变速箱无渗漏，外观覆盖件无钣金喷漆，外观无剐蹭划痕，内饰干净整洁。</view>
					<br/>
					<view class="p">经检测，该车骨架完好，排除事故车、火烧、水泡等特殊车况。发动机变速箱无渗漏，外观覆盖件无钣金喷漆，外观无剐蹭划痕，内饰干净整洁。</view>
				 --></div>
			</div>
		
		<div class="aui-reserve-footer">
			<div class="aui-reserve-footer-one">

				<a href="javascript:;" class="aui-reserve-in">
					<div class="aui-reserve-in-icon">
						<!-- <img src="images/news.png" alt=""> -->
						<image src="../../static/index/activity/images/news.png" mode=""></image>
					</div>
					<div class="aui-reserve-title">咨询</div>
				</a>
			</div>
			<div class="aui-reserve-footer-two" v-if="!detaillist.is_join" @tap="signup()">
				<div class="aui-reserve-footer-inner">
					<div class="aui-reserve-text">立即报名</div>
				</div>
			</div>
			<div class="aui-reserve-footer-two1" v-else>
				<div class="aui-reserve-footer-inner">
					<div class="aui-reserve-text">已经报过名了</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
	var _self
	export default {
		data() {
			return {
				key: 'value',
				id: '',
				detaillist: {},
				
				swiperData: [
					{id: '1',img: '/static/index/activity/images/banner-001.jpg'},
					{id: '2',img: '/static/index/activity/images/banner-002.jpg'},
					{id: '3',img: '/static/index/activity/images/banner-003.jpg'},
					{id: '4',img: '/static/index/activity/images/banner-004.jpg'}
				]
			}
		},
		onLoad(option) {
			_self = this
			this.id = option.id
			this.getactivelist(option.id)
			
		},
		methods: {
			// 立即报名
			signup(){
				uni.showLoading({
					title: '报名中',
					mask: true
				});
				let token = this.$db.get("userToken")
				uni.request({
					
					url: 'http://deve.tianlwl.com/api.html&method=activities.join',
					method: 'POST',
					data: {
						activities_id: _self.id,
						token: token
					},
					success: res => {
						uni.hideLoading()
						console.log(res)
						if(res.data.status){
							uni.showToast({
								title: res.data.msg,
								icon: "none"
							})
							_self.detaillist.is_join = true
						}else{
							uni.showToast({
								title: res.data.msg,
								icon: "none"
							})
						}
						
					},
					fail: () => {
						console.log(1)
					},
					complete: () => {}
				});
			},
			// 要登录，才能获取，登录的条件是，携带token
			
			getactivelist(id) {
				// 获取用户的token
				
				let token  = this.$db.get("userToken")
				
				uni.request({
					url: 'http://deve.tianlwl.com/api.html&method=activities.detail',
					method: 'POST',
					data: {
						activities_id: id,
						token: token
					},
					success: (res) => {
						var res = res.data
						console.log(res)
						if(res.status){
							this.detaillist = res.data
						}
						
						
					},
					fail: () => {
						uni.showToast({
							title: res.data.msg,
							icon: 'none'
						});
					},
					// 编译完成后
					complete: () => {
						uni.stopPullDownRefresh();
					}
				});
			},
			
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh();
				uni.showToast({
					title: '刷新成功'
				})
			}, 1500)
		}

	}
</script>

<style lang="less" scoped>
	// 轮播部分样式
	.page-section{
		// width: 750upx;
		height: 444upx;
		.page-section-spacing{
			height: 100%;
			.swiper{
				height: 100%;
			}
		}
	}
	.swiper image{
		width: 750upx;
		height: 444upx;
	}
	// 轮播部分样式end
	
	
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

	.clearfix {}


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
		left: 15px;
		width: 93%;
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
		padding-bottom: 60px;
	}

	.aui-navBar {
		height: 44px;
		position: relative;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		z-index: 1002;
		background: #f6f6f6;
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
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABuUlEQVRoQ93b0U3EMAwG4N8TwAawAdwGMAITsAJsAhPABtwGMMKxCRsYWepJ1YnrETexf5+fKrVp8il1HuJGUCBU9RLAG4A7AFsAzyLy4xm6eBpFtpmwnwBuZ/3uRGTjGQc1+Ah273wQEZvtpqAFn8Aa8nzAqnoN4OPgM57P5LflsyeP6WZYVS1XLWdtofor3Fh7GRV4NJYKHIGlAUdhKcCR2HRwNDYVnIFNA2dhU8CZ2HBwNjYUzIANA7NgQ8BM2OFgNuxQMCN2GJgVOwTMjO0OZsd2BVfAdgNXwXYBV8KuBlfDrgJXxLrBVbFrwO8AHkfsGzfVTRwPu/alVXUJvANw76kKOMbf3MQLtlKIwS6O9EiLdoENOeXxVzW0G1wVvQpcEb0aXA3dBVwJ3Q1cBd0VXAHdHcyOHgJmRg8Ds6KHghnRw8Fs6BAwEzoMzIIOBTOgw8HZ6BRwJjoNPEPbL8BXUTsnqeAJbT+R2s7JTQQ6HRyNpgBHomnAUWgqcASaDvxf9NmdapkOeSyt3lbdsPtNQTnDe8EJ9EZErMLRFNTghc/7VUSemqTTw/TgGfoFgNW0tiJi1674BRuXYEzUCS3eAAAAAElFTkSuQmCC');
	}



	.img_gallery {
		position: relative;
		width: 100%;
		overflow: hidden;
		height: 220px;
	}

	.main_img ul li img {
		width: 100%;
		display: block;
		border: none;
	}

	.img_font {
		width: 60px;
		padding-left: 20px;
		height: 24px;
		text-align: center;
		line-height: 26px;
		color: #fff;
		font-size: 13px;
		position: absolute;
		right: 15px;
		margin-left: -22px;
		bottom: 8px;
	}

	#navHead .aui-navBar {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		padding: 0;
		z-index: 100;
		font-family: lato, Arial, sans-serif;
		-webkit-transform: translateY(0%);
		-moz-transform: translateY(0%);
		transform: translateY(0%);
		-webkit-transition: all .5s;
		-moz-transition: all .5s;
		transition: all .5s;
		height: 44px;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		background: none;
	}

	#navHead .aui-navBar.aui-flex {
		background-color: #fff;
		background-size: cover;
		text-align: left;
		width: 100%;
		margin: 0 auto;
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		backface-visibility: hidden;
		-webkit-transition: all .5s;
		-moz-transition: all .5s;
		transition: all .5s;
		overflow: hidden;
		height: 44px;
		z-index: 1005;
		padding: 0;
	}

	.aui-content-text {
		width: 100%;
		height: auto;
		position: relative;
		overflow: hidden;
		margin-top: -40px;
	}


	.aui-content-box {
		padding: 20px 15px;
	}


	.aui-introduce {
		background: #0bc66f;
		border-radius: 10px;
		font-size: 0.8*0.85rem;
		color: #fff;
		padding: 15px;
	}

	.aui-flex .icon-return {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAABzklEQVRoQ93bMU4DMRAF0G+RAipyA3IDkhs4RaS0nIArwE3CCeAGpFskCnyE5SZ0pEAyskJEFJGE9dozf7K1vfbTjLeY8ToYeKL3Q+DiEYAH4hJY3bsQPnK27nImSc75wb4BGG+t27rQTHL2QQ3eg904b1xoll3RtOAj2OQ8HXD08xHgnnfSeCuY8R1Y+ZxzTBfh6GdjYJDO7PDvdM3HpvdRgWtjqcASWBqwFJYCLIlVB0tjVcEaWDWwFlYFrIkVB2tjRcEMWDEwC1YEzIStDmbDVgUzYquBWbFVwMzY4mB2bFGwBWwxsBVsEbAlbG+wNWwvsEVsNtgqtgd4/gS42xp1466tk67js+rS0R8CowU+pzldga6bzxmfCx4BCeYu9yxKi84CJ+T6HJ8Fa+hssFV0L7BFdG+wNXQRsCV0MbAVdFGwBXRxMDu6CpgZXQ3Miq4KZkRXB7OhRcBMaDEwC1oUzIAWB2ujVcCaaDXwL3qQrgBfSVVOVMFrdLrtfp4qJ9cSaHWwNJoCLImmAUuhqcASaDrwf9En91fL8a93nLrwErp2HygjvEEcRn9NXHhtTwp8IL0fXGjuumLTeOoI70R6AbjU01q60CxysGnON85HsUzLIJ0dAAAAAElFTkSuQmCC');
	}

	.icon-share {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACb0lEQVRoQ+3aMWsUQRTA8f8TLBTBGEFEgoQoCFZBLUWipQhaB0FBC0v9BBaWIthYxd7KRisLFb+AURIQRNFWEEkqK3ky54nrcnc7SXbmvdnbLW/fzc5v3mN3Z2eEKTtEVd8CxyvuH8CXDONwR0TexVxHVa8D12JiKzH7gBPAHuAX8BM4FsDfgYNbbKyN8A0ROdDUkKrOt5iAI5ZgREQiwEvA66a4yPMLluD3IrLY1FFVnQG+AvubYiPODzK8ClQvvA48jfjzTkMeishGTCOqGvp3JSL2KHAV2D0mdgB+DlyqBDwRkeWIxl2FqOpZ4AWwd0LHugGOxIZxKB88Afup9rgtHzwBG+5Ld4FntfIuN8MN2PPAaeBlJ8BNWBHZVNULnQDHYENWOwGOxXYCvBVs8eAJ2DVgSUTCDO+/o9iS3g52mOFRk47Drl8tt4sdgmeBj5Wp7wcROekWvBPs39pW1TDDCpOOOeBRmKy4BLeBHTeBcAdOiQ2D4AqcGusKnAPrBpwL6wKcE2sOzo01BVtgzcBWWBOwJTY7ODdWVS8Dt4Ewq1oRkbVsLx4G2LAm9RnYNXzN3ARms4BzY00/AFhgzcBWWBOwJTY72BqbFewBmw3sBZsF7AmbHOwNmxTsEZsM7BWbBOwZ2zpYVc8Ab0ZsIBm71jPuO3Gq31tdW1LVFeBmrbNusCkyfAN4XAG7wqYAhy2D94FbQNjIdnHUkmWqco1pt9WSjrmgdUwP/pOBcrctNVVQn+E+w/9qpMjdtPUS70t6mks6vBOfq5TEK+Be012wgPOngAe1fg4eS9+AQwUA2ujiYg9uYxgdtzF9Gf4NHR2/j4CB/3kAAAAASUVORK5CYII=');
	}


	.aui-flex .icon-share {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAC5UlEQVRoQ+3azWsTQRgG8OdJDX4gVCuIiIioIHgK6kWQdiqVbopgzyIo6MGj/gUePIrgxVO9e/KiYFKsuvHizQ9SEETRqyClPWg1NvvKpjbNxiS7TXdnZpPkmH0zs7953+zO7CzRZx+Kyr8BcLTBvQDIl+THoXqT7rN3UfoR5VwBcDlKbEPMTgiOAdgOogqRZVRwhKKc7wD31ANFAHKDbXcVvki3sDvsl6KcQwBjSIAAVdlvEgy6hdCRFeUogC/DBiZ4XAAh0Nz6zx+HDYLlPd1iLgwiSu0Ctn0FOBwWu3q8DdavXK+W4fxbAOsdizcP8lG0xjcT9eseXXcxSguizuWAoenQWPIgPLkEMhuIFQCsl3T+CYDzDf/hhywVL4Y2blmAKOcMhLMgdvyP/fdN1atlOPXgSFjf3AvgDthPYOB2m35wB6x/XboF4nGgvNOc4Y7Y7J9xVLInkcHzngCHYTk3tySj+bM9AY6Crd2NewEcFdsT4I1gUw/ugC2j4im+nl1ongeltqS7wdYy3GrRMVTZZ/VMq1tsDXx6cgRb+bG+9BV8YKlw3FrwZrBr5S0TE8NY2TIN8ACwfN9frFgJjgPbbm1jHThJrD8IVoGTxloF1oG1BqwLawVYJ9Y4WDfWKNgE1hjYFNYI2CRWO1g3VsYnL0B4A4IyJDPDV0/L2iYe2rH+npTwM4jM6jRTluAWR7SAdWONPgAwgTUGNoU1AjaJ1Q42jdUKtgGrDWwLVgvYJmziYNuwiYJtxCYGthWbCNhmbOxgUVOnIFJq8QJJ272eds+Jk/o+1r0lUc4MwGuBk/WXYG02tpJCdWo3bvBVgA/qHVqGjb+k/Zf6VP4OINcBzuO3N9Vqy9JEZtf6jDXDJiFR+x6A/ZFK82tLYZkeZHiQ4frlTVL5Nm1ziQ9Kun9Leizvz4lH12dN8gLE7bCroPXHBSdA3g2cZ+22NOZ8A7nXekAcJ7ji5QbgOAbS2jb6McN/AV8e8hjbx6KPAAAAAElFTkSuQmCC');
	}


	.icon-img {
		background-size: 15px;
		position: absolute;
		left: 10px;
		top: 5px;
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAEBklEQVRoQ+2aSagdVRCGvz/RhDglOM+IEtGgCC4cUVAQF8aFcaEgooIEF24krowoYqKIA7oQcUBcZKELiahIEBQVQVHijBgEQYkaxTjjgMMvlfQN/Trd95723e77+r6uzYN363TXd6rOOVV1Wswz0TzjpQeedo/3Hu49PGUz0Id0ONT2AuBK4EbgpI45+VvgQeBOSX8VbS/1sO0ngKs6Blo0923gHEl/5n/YDdh2gAbwNMh6STePAv6wg2Fc5ZwvJR1ZCWx7MfBHYfQjwFpJ381ll9s+CFgHrC7YuUTSLqYZIW17GfBDYcBSST/PZdiBbbaXAj8WbF0m6afB/1KAF0r6tyPAC4G/e+AmPWz7ROCQOM6BzZJ+bSs6bLfnYdunAHcBF+YAfwHuz5KA35sGbw3Y9krgaWBRBdQbMRGSYgIak1aAbR8PxNldBTsAfEbSJY3R7kyJmw9p248C1yaCnCzpo0Td2mptAX8OHJ1o3RpJ9yXq1lZrC/g3YEmidVHB3JSoW1utLeCvgUMTrZsKDz8LXJwIPBVr+Dzg5QTgjZJWJegNdtvjgMOAryR9WmNc86ml7buz7kiVXW8CF4zKumzvAdyT7fp7Zw+LPH6dpFtHQbeyhnOVyvXAbcD+hUzrAeAOSSMzLdtRrN9eAbZK0sZh0K0ChyG29wKuBg4EPgY2jfJqbsKWA3FGVyUwkaWtkLS1Crp14FEhN8TQKFMj/Tx9xDPeAs6WVFynO4Z1CfgGIDUhuVdSdFN3k04A2z4mC//U5CVAL5L0QpG4K8CvAufWXA7RxokzfcZ6bhTY9n7ApcB2SZF81Bbb0XB7uPbAnQNiPZ+Zbz81Bmw7koLngRMyY98DLpe0JdV420cAnwD7pI4p0Yvjbm1upx9/eWj7cOBd4OCCAd8Ap0n6IgXA9ouRjKToDtGJNlIkNC81skvb3hOIrOnUCiM+y6C3DwOxfQWwYZawg+HRL4/1vG3sIW37ceCaEYaG98/KN7/z+rYPACL04++45PVs44tLwPHk0ravAx5KtHATsFLSPyVHx5PAZYnPqaMWufb6sQBHmAKvARHSqbJBUly57pKs2fdc6gNq6kWRcT7wSmFc7ZuHKNHeL9mkUuy5RdKOYiA7xmJXjuc1JdtKmhG1gWOTOmMWFsb4zUDUwk3CVplYG3gWrHNiaA+c31TKrkvnhJtmYcRQD+8LdOIuuMYEVF+IZ7tpVCJxsTwNslXSUXmQso9aIuWL1G8aZEZxEUBlwFHFfFBoxnUR/p0sxR3+2VIW1scCjwHRc+6aRHf0KSBuOb4vGj/000PbK/5nhjXJSdoiKa5/SqX/1nKSrmnj3b2H25jlSb6j9/AkZ7+Nd/cebmOWJ/mOeefh/wBpjCpbZx/orwAAAABJRU5ErkJggg==');
	}

	.aui-reserve-head {
		padding: 20px 20px 10px 20px;
	}

	.aui-reserve-head h2 {
		font-size: 1.1*0.85rem;
		color: #333;
		width: 100%;
		font-weight: normal;
	}

	.aui-reserve-head h2 i {
		text-align: right;
		font-style: normal;
		font-size: 0.7*0.85rem;
		color: #999;
		float: right;
		line-height: 30px;
	}

	.aui-reserve-head h2 em {
		border-radius: 20px;
		border: 1px solid #c2c4cc;
		font-style: normal;
		font-size: 0.7*0.85rem;
		color: #c2c4cc;
		padding: 0.01*0.85rem 0.35*0.85rem;
		display: inline-block;
	}

	.aui-reserve-head h2 span {
		border-radius: 3px;
		border: 1px solid #ff4049;
		font-style: normal;
		font-size: 0.7*0.85rem;
		color: #ff4049;
		display: inline-block;
		margin-left: 1*0.85rem;
		position: relative;
		padding-right: 25px;
		padding-left: 4px;
	}

	.aui-reserve-head .p {
		color: #485460;
		font-size: 0.85*0.85rem;
		margin: 0.5*0.85rem 0;
	}

	.aui-reserve-head h3 {
		color: #ff4049;
		font-size: 1.3*0.85rem;
	}

	.aui-reserve-head h3 i {
		font-style: normal;
		font-weight: normal;
		font-size: 0.8*0.85rem;
	}

	.aui-reserve-head h3 em {
		font-style: normal;
		font-weight: normal;
		font-size: 0.8*0.85rem;
		text-decoration: line-through;
		color: #848d95;
	}

	.aui-layout-item {
		position: relative;
		float: left;
		padding: 12px 1px 12px 1px;
		width: 20%;
		box-sizing: border-box;
		display: inline-block;
	}

	.aui-palace-grid-icon {
		width: 30px;
		height: 30px;
		margin: 0 auto;
		text-align: center;
	}

	.aui-palace-grid-icon img {
		display: block;
		width: 30px;
		height: 30px;
		border: none;
	}


	.aui-layout {
		position: relative;
		overflow: hidden;
	}

	.aui-palace-grid-text {
		display: block;
		text-align: center;
		color: #333333;
		font-size: 13px;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
		padding-top: 5px;
	}

	.aui-palace-grid-text h2 {
		font-size: 0.7*0.85rem;
		font-weight: normal;
		color: #848d95;
	}


	.aui-reserve-footer {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
		position: fixed;
		right: 0;
		bottom: 0;
		left: 0;
		height: 55px;
		background: #0a1b2b;
		z-index: 100;
	}

	.aui-reserve-footer-one {
		height: inherit;
		-webkit-box-flex: 2;
		-webkit-flex: 2;
		-ms-flex: 2;
		flex: 2;
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		padding: 12px 0 10px;
	}

	.aui-reserve-footer-two {
		-webkit-box-flex: 3;
		-webkit-flex: 3;
		-ms-flex: 3;
		flex: 3;
		height: 100%;
		background: #ff4049;
		color: #fff;
	}
	.aui-reserve-footer-two1 {
		-webkit-box-flex: 3;
		-webkit-flex: 3;
		-ms-flex: 3;
		flex: 3;
		height: 100%;
		background: #888;
		color: #fff;
	}

	.aui-reserve-footer-inner {
		display: -webkit-box;
		display: -webkit-flex;
		display: -ms-flexbox;
		display: flex;
		padding: 0 15px;
		height: 100%;
		-webkit-box-align: center;
		-webkit-align-items: center;
		-ms-flex-align: center;
		align-items: center;
	}

	.aui-inner-fl {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		position: relative;
	}

	.aui-inner-fr {
		-webkit-box-flex: 0;
		-webkit-flex: none;
		-ms-flex: none;
		flex: none;
		font-size: 17px;
		font-weight: 500;
	}

	.aui-reserve-in {
		-webkit-box-flex: 1;
		-webkit-flex: 1;
		-ms-flex: 1;
		flex: 1;
		height: 100%;
		font-size: 11px;
		text-align: center;
		position: relative;
	}

	.aui-reserve-in-icon {
		width: 20px;
		height: 20px;
		margin: 0 auto;
	}

	.aui-reserve-in-icon image {
		width: 20px;
		height: 20px;
		display: block;
		border: none;
	}


	.aui-inner-fl h2 {
		font-size: 1.1*0.85rem;
	}

	.aui-inner-fl p {
		font-size: 0.8*0.85rem;
	}

	.aui-inner-fl h2 em {
		font-size: 0.7*0.85rem;
		font-weight: normal;
		font-style: normal;
		text-decoration: line-through;
	}



	.aui-flex-arrow {
		padding-right: 13px;
		position: relative;
		text-align: right;
		color: #808080;
	}





	.aui-flex-clear {
		padding-top: 0;
	}



	.aui-flex-clear .aui-flex-box p {
		color: #666666;
	}

	.aui-flex-text-box .aui-flex {
		-webkit-box-align: inherit;
		-webkit-align-items: inherit;
		align-items: inherit;
	}

	.aui-text-head {
		padding: 15px;
	}

	.aui-text-head h2 {
		font-size: 1*0.85rem;
		color: #0a1b2b;
		font-weight: normal;
		position: relative;
		padding-left: 10px;
	}

	.aui-text-head h2:after {
		content: '';
		position: absolute;
		z-index: 2;
		bottom: 3px;
		left: 0;
		width: 3px;
		height: 15px;
		background: #ff5555;

	}


	.aui-text-head .p {
		font-size: 0.85*0.85rem;
		color: #666;
	}

	.aui-text-head-map {
		width: 100%;
		height: auto;
	}

	.aui-text-head-map img {
		width: 100%;
		height: auto;
		display: block;
		border: none;
	}

	.aui-text-head-map-set .aui-layout-item {
		width: 20%;
		padding: 0;

	}

	.aui-text-head-map-set .aui-palace-grid-text h2 {
		font-size: 0.8*0.85rem;
		color: #666;
	}

	.aui-text-head-map-set .aui-palace-grid-icon {
		width: 30px;
		height: 30px;
	}

	.aui-reserve-text {
		text-align: center;
		width: 100%;
	}

	.aui-reserve-title {
		color: #fff;
	}

	.icon-dow {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAC80lEQVRoQ+3ZzWsTQRgG8OdNmxpFEcEeBPUsRPDgxYO0S0GSRVpBaxHEgwdB/yEvCh5EENFCW2wShbIWsaeAlwge1YOgIkqL/Yjmld2SmHU/ZzuzzW6nt8Cy2d88z7w7bQl77If2mBcanPfEdcI64ZytgK50zgL1cHTCOuGcrYCudM4C1UNLV1pXOmcrsLcrzYYxDBRPY3PtPa2srGc5XDaMElA8hdXvLWo2211LL2E2zHNgngXRMYB/ArhNVv1xFtE8Xr0Kwj2ADoP5M7gzTcsv3tiWPnD1LUBnekBmBtENsmqPsoRmw7wO5ocg+rddGe/oVa3sBo+bX0AYdeEyhmbDnAbzExd2G/SDrNqR/8F3QbjjSTMjaAcL2FtwyNtIvk9W/ZYbXC6PYPTEPECVrKEjsA18/TRFrdaWC2x/4Gj0DFm1p4O0p0WwHnAkGvgD4NqgoEWxvuCsoEOxjCV8+2h2a9zfyMCTVmi9dzlpHqtOoUCzvgPKxtL6RbKsDb+tF3q0HET0NhbPABr2DtdwbGCl+280SOidYmOBY+3pDl+m5fq8yuktAxsbHI3m3+jgiiq0LKwQuIc+erIGwoTPaUYJWiZWGOyg7V+7eP/zNNCysYnAaaHZqFQBWkg6jYPmSeK/eKhM2sFyYQ6EkSSvnrDhmRgcK2nwJFmNusj0VolNXGnXezpsTzO2QJ1LcdGqsVLAkUnHRIdiwa+BjQtBx0WRBu2o0rKSjsSuFivUXPglApM+tPxuGDrIApJOEyut0kmT5jFzAgT7IOOdxnaNJSbbfUZplRZCM0zn+gIWAezzObUpwSpJuPvw4e9pbALMAJXSxCoFR05v36mipsb9X6Wk0p56o/QSoPPhU1Y9VnnCvXqfnTyAQ+1GMDodbGpgp96B6PSwqYJ76IPtByCacdK3/y2yVrwp61AR52CifA/7H1DM4yjQEC0tfojzkDKv2RWwTIDovTRYdMWydr1OOGuJiT6vTlh0xbJ2vU44a4mJPu9f+gTRTMNax6YAAAAASUVORK5CYII=');
		position: absolute;
		right: 0;
		top: 0;
		background-size: 15px;
	}

	.aui-flex-box span {
		background: #edf1f6;
		color: #485460;
		border-radius: 20px;
		display: block;
		float: left;
		font-size: 0.8*0.85rem;
		padding: 0.15*0.85rem 0.5*0.85rem;
		margin-left: 0.4*0.85rem;
	}

	.aui-arrow-right {
		position: relative;
		padding-right: 15px;
		font-size: 0.8*0.85rem;
		color: #0a1b2b;
	}

	.aui-arrow-right:after {
		content: " ";
		display: inline-block;
		height: 8px;
		width: 8px;
		border-width: 2px 2px 0 0;
		border-color: #c2c3ce;
		border-style: solid;
		-webkit-transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
		transform: matrix(0.71, 0.71, -0.71, 0.71, 0, 0);
		position: relative;
		top: -2px;
		position: absolute;
		top: 50%;
		margin-top: -4px;
		right: 2px;
	}

	.icon-add {
		background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAEWElEQVRYR82XXWgcVRiG32/yVxMokjYFtQWxWG0RtXhlKL2RRRF7UwkYqvgDapudLUlwJ4mtmW9SbZOZxig727TxwoAQf4peaAtWciO2gl4ERaruTRV/KGhJsUjaze7OJ7NpINbsnDO7ETJXu5z3e99n5nznzBnCKr9olfNhxQB7el6/KV9/5a7whpuKa3NjY71XV+LmqwbsYG5sm6MOQ+Q5kGwF6JZ/A8lFCJ0PiCb/bJaTJ5nnqwGODZgaONwWFOe7AbxAhPU6oSL4A8BEIcCbE6N8SadmURMLsKuPd1CAD4mwIU7IojYEFQOPHxvhs7r1WoAdHR/Ubbj9eybCywAMXfMKugDAofXNGGLm8HfkpQVoWpwBYKrMYo0LMr7H+1U1SsCk5TxNkEmVUVXjgezxjzpTUbWRgKn+oe1BqfQVETVUBaAqEskLqD3r8UwlaSRgMs1fEuFBVU5N4yLnfM/ZERsw2WtvoXrK6YSLiBAoB5JzIkQEtINwt05tWVPCVn+Uf1xOX/EJJi0eJaBXI+R0gLr0MfeVH5Zq977E99QRRojwqNJD4Poe98UCNC17BqDtUeYiciLrOXujNKZlTwD0fLQPZrIePxAPMM1/gbC2orHIT3+30LZJ5mtR4c8wr2mZw3kC7qjshVnf43XagN3dfHOxEZcVU+P7LqeU0xduoBZnAXRFaeeb0TLBPHejZtkeDLcXCYKKS3/BRPb5rnNcB7DLsk0DFG72lS8y7vVHBr/TAkz28U4SfB5pKPSE79nvawGmnU6DJHpDFmNnxhv8QgswZfFGAX5VhL/mu3xQB9BM8xEQ+qO0xUL9xuNjB3/XAgxFZtq+BqKmCNNf6Grrlkxmfz4qODzIztdfyRFhU8SCy/ues0Z7kZQBLf4GwH2K7WEo67EdpTEtfhXAAcWT/tZ3+f5YgMk0O0QYjO5DyYOMfb5rv72czrScZyHBuGImwlLHd5ljAZqWfasIfqPymyv6EsGnAJ0yDPwsInUitIko2AXQw+pakUKh8baJNw5cjAUYipOWPU2gh1QhNY0Lpn2PE5U8ok8zlpMgyGc1ASiKKUAic5SnqwK8vpqnQNT5v0AKpnyP90R5K/srOXB4HUr5HIGWfVdWDS6YbSjizrExnq0JsNyLaX4MkI91FowOcHh+NAxjV2bEPq3SK5/gooGZ5n4QjqgMdcYF1J917REdrTbgQj/yOyA8qWNcUaPRd0trYwEyc/2lOYQHhN3VQArwXlsznmLmom59LMAFUyHT4hOqU/J/AeQt3+UXARJduFBXBeCCfdJy+ggyrBMWp+du9KsaMDRKWbxbgHcBNFYAnSegM+PyRzo3spymJsDQsKuP240An4DQujRAgMsG5JGM63xdLVxNU7w0NJU+tFlQOgPC5nKXAhcCA4nxYb5QC9yKAYZGPT3cWmjAmbCvS0ZTYnx4QPXRpcVe8xQvTQk/McP/qk9RLbLrohUFjBOsq131gP8AdbJ9OGXZZ/UAAAAASUVORK5CYII=');
		position: absolute;
	}

	.aui-flex-box h5 {
		padding-left: 1.2*0.85rem;
		width: 100%;
		position: relative;
		font-size: 0.85*0.85rem;
		color: #6c7680;
		font-weight: normal;
	}

	.aui-car-lou {
		width: 40px;
		height: 40px;
		margin-right: 0.5*0.85rem;
	}

	.aui-car-lou img {
		width: 40px;
		height: 40px;
		display: block;
		border: none;
		border-radius: 100%;
	}


	.aui-flex-box h6 {
		font-size: 0.9*0.85rem;
		font-weight: normal;
	}

	.aui-flex-button {
		border: 1px solid #ff5555;
		color: #ff5555;
		border-radius: 3px;
		padding: 0.2*0.85rem 0.5*0.85rem;
		font-size: 0.8*0.85rem;
	}

	.aui-flex-lou {
		padding-left: 0;
		padding-right: 0;
	}
</style>
