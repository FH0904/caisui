<template>
	<view>
		<section class="aui-flexView">

			<section class="aui-scrollView">
				<div class="aui-core-ad">
					<div class="aui-core-advert">
						<!-- <img src="../../static/index/news/images/banner.png" alt=""> -->
						<image src="../../static/index/news/images/banner.png" mode=""></image>
					</div>
				</div>
				
				<view class="aui-news-list" v-for="(item, index) in newslist" :key="index">
					<navigator class="aui-flex b-line" :url="'/pages/news/news_detail?id=' + item.id">
						<div class="aui-flex-box">
							<h3>
								<!-- <text>{{ item.em}}</text> -->
								{{item.content}}
							</h3>
							<p>{{ item.title }} {{ item.ctime}}</p>
						</div>
						<div class="aui-flex-img">
							
							<image :src="item.cover" mode=""></image>
						</div>
					</navigator>
					
					
				</view>
				
			</section>
		</section>
	</view>
</template>

<script>
	var _self
	export default {
		data() {
			return {
				newslist: [],
				newsdata: [
					{title: '为分时租赁客户提供共享汽车分时租赁系统和汽车租赁门店版运营系统', em: '热门', name: '科技汽车', time: '1小时前',image: '../../static/index/news/images/news-001.png'},
					{title: '骁龙710配6GB内存只要2000块，360手机N7 Pro评测 | 钛极客', em: '', name: '科技汽车', time: '12小时前',image: '../../static/index/news/images/news-002.png'},
					{title: '链得得深度】“九四”一周年：全面复盘全球数字货币监管政策与市场趋势', em: '', name: '科技汽车', time: '24小时前',image: '../../static/index/news/images/news-003.png'},
					{title: '全球2300件区块链专利井喷，“央行系”低调领跑', em: '', name: '科技汽车', time: '10小时前',image: '../../static/index/news/images/news-004.png'},
					{title: '为分时租赁客户提供共享汽车分时租赁系统和汽车租赁门店版运营系统', em: '热门', name: '科技汽车', time: '1小时前',image: '../../static/index/news/images/news-001.png'},
					{title: '骁龙710配6GB内存只要2000块，360手机N7 Pro评测 | 钛极客', em: '', name: '科技汽车', time: '12小时前',image: '../../static/index/news/images/news-002.png'},
					{title: '链得得深度】“九四”一周年：全面复盘全球数字货币监管政策与市场趋势', em: '', name: '科技汽车', time: '24小时前',image: '../../static/index/news/images/news-003.png'},
					{title: '全球2300件区块链专利井喷，“央行系”低调领跑', em: '', name: '科技汽车', time: '10小时前',image: '../../static/index/news/images/news-004.png'},
					{title: '为分时租赁客户提供共享汽车分时租赁系统和汽车租赁门店版运营系统', em: '热门', name: '科技汽车', time: '1小时前',image: '../../static/index/news/images/news-001.png'},
					{title: '骁龙710配6GB内存只要2000块，360手机N7 Pro评测 | 钛极客', em: '', name: '科技汽车', time: '12小时前',image: '../../static/index/news/images/news-002.png'},
					{title: '链得得深度】“九四”一周年：全面复盘全球数字货币监管政策与市场趋势', em: '', name: '科技汽车', time: '24小时前',image: '../../static/index/news/images/news-003.png'},
					{title: '全球2300件区块链专利井喷，“央行系”低调领跑', em: '', name: '科技汽车', time: '10小时前',image: '../../static/index/news/images/news-004.png'},
					{title: '为分时租赁客户提供共享汽车分时租赁系统和汽车租赁门店版运营系统', em: '热门', name: '科技汽车', time: '1小时前',image: '../../static/index/news/images/news-001.png'},
					{title: '骁龙710配6GB内存只要2000块，360手机N7 Pro评测 | 钛极客', em: '', name: '科技汽车', time: '12小时前',image: '../../static/index/news/images/news-002.png'},
					{title: '链得得深度】“九四”一周年：全面复盘全球数字货币监管政策与市场趋势', em: '', name: '科技汽车', time: '24小时前',image: '../../static/index/news/images/news-003.png'},
					{title: '全球2300件区块链专利井喷，“央行系”低调领跑', em: '', name: '科技汽车', time: '10小时前',image: '../../static/index/news/images/news-004.png'},
					{title: '为分时租赁客户提供共享汽车分时租赁系统和汽车租赁门店版运营系统', em: '热门', name: '科技汽车', time: '1小时前',image: '../../static/index/news/images/news-001.png'},
					{title: '骁龙710配6GB内存只要2000块，360手机N7 Pro评测 | 钛极客', em: '', name: '科技汽车', time: '12小时前',image: '../../static/index/news/images/news-002.png'},
					{title: '链得得深度】“九四”一周年：全面复盘全球数字货币监管政策与市场趋势', em: '', name: '科技汽车', time: '24小时前',image: '../../static/index/news/images/news-003.png'},
					{title: '全球2300件区块链专利井喷，“央行系”低调领跑', em: '', name: '科技汽车', time: '10小时前',image: '../../static/index/news/images/news-004.png'},
				],

			};
		},
		onLoad() {
			_self = this
			this.getnewslist()
		},
		methods: {
			getnewslist() {
				uni.request({
						url: 'http://deve.tianlwl.com/api.html&method=pages.news',
						method: 'GET',
						data: {
							'page': 1,
							'size': 5
						},
						success: (res) => {
							console.log(res)
							if (res.data.status) {
								_self.newslist = res.data.data
								// uni.showToast({
								// title: '数据加载完成',
								// 	// icon: "loading"
								// });
								// console.log(_self.newslist)
							} else {
								uni.showToast({
									title: res.data.msg,
									icon: 'none'
								});
							}
				
						},
						fail: () => {
							uni.showToast({
								title: '请再刷新',
								icon: 'none'
							});
						},
						// 编译完成后
						complete: () => {
							uni.stopPullDownRefresh();
						}
					});
				
			}
		},
		onPullDownRefresh() {
			setTimeout(() => {
				uni.stopPullDownRefresh()
				uni.showToast({
					title: '刷新成功'
				})
			},1500)
		}
	}
</script>

<style lang="less">

html,body {
    color: #333;
    margin: 0;
    height: 100%;
    font-family: "Myriad Set Pro","Helvetica Neue",Helvetica,Arial,Verdana,sans-serif;
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

a, label, button, input, select {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

img {
    border: 0;
}

body {
    background: #fff;
    color: #666;
}

html, body, div, dl, dt, dd, ol, ul, li, h1, h2, h3, h4, h5, h6, p, blockquote, pre, button, fieldset, form, input, legend, textarea, th, td {
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

button,input,optgroup,select,textarea {
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

.clearfix {
}

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
    width: 92%;
    height: 1px;
    border-bottom: 1px solid #e2e2e2;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    -webkit-transform-origin: 0 100%;
    transform-origin: 0 100%;
    left: 15px;
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
	background-color: #FFFFFF;
}

.aui-navBar {
    height: 44px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    z-index: 1002;
    background: #fff;
}

.aui-navBar-item {
    height: 44px;
    min-width: 25%;
    -webkit-box-flex: 0;
    -webkit-flex: 0 0 25%;
    -ms-flex: 0 0 25%;
    flex: 0 0 25%;
    padding: 0 0.9rem;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
    font-size: 0.7rem;
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
    font-size: 0.9rem;
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
    font-size: 0.95rem;
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
    background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAACh0lEQVRoQ+3ZMW8TMRQH8PcOsTBQISExVCIRCwgWFvZ+hZYBpIrEcTYkBsTGlI2VDamL3YEBpWJoR1BJaOlXYEzyDYp0bMRGRjnJoDuWs/1e3EbKeHf55b33vzsb4YJ98IJ54RKce8XZV1gIcQ8AviDiD2vtC631pzZFYQ2WUt611p4CwM0VcqqU2soSXIN1ztdKqTfZgRuw75RSz9tg3bHsWjomlh04NpYVOAWWDbjf7z8oimLipbH7bUopJdvO7L/Hk8+wwyLiCSLe8H6cww4BwGYFTo0lbWkKLBmYCksCrsNaa99rrZ/FmFnS0GrCdrvd3mg0MqEDqu58yVKaAzZZSwshHgLAsX/rcW2csrJVtaNXeIWdIuL16qJU2OgVrsMCwEGn03mSamaThVYTtizLp+PxeJkioJKFFldslJbmjA0O5o4NCm7AHpZluUM5s1FCSwjxCAA++7ceADiczWaPJ5PJL6qAihJaUspdY8w+Il7xLsASG6SlhRA/EfGa91BxNJ/Pd7hVNtiT1mAwOAeADXdCa637Hi0Wi3zBUsptY8wHRLzqwIh/nlbzbWmna0roLEOrmo11QQd9W1oHdFDwOrR3cLCH/uuFn0uQRQE7dMPKJHl6RwNzRUcF/w9N9VIRHVyhazbLDihWP5KAHbphOzQ5OhmYCzopmAM6OZgaTQL20FMAuOUtHESfaTLwCn3HWnuWEk0KpkCTg1OjWYArtDHmKyJu+jMdeh+KDdghh8NhZ7lcfvPRoXcaWYFToNmBY6NZgj20m+nb3pr3W631yzY7GWzBDtXr9TaLojjz0N+VUvezBXvoPQBw0Fda649Zg9vg6o5l3dKhse58l+AY/yqnc/4GvNDoTFOq8FwAAAAASUVORK5CYII=");
}

.aui-core-ad {
    padding: 15px;
}

.aui-core-advert image {
    // width: 100%;
    // height: auto;
	width: 700upx;
	height: 276upx;
    display: block;
    border: none;
}

.aui-flex-img {
    width: 120px;
    height: 80px;
    margin-left: 10px;
}

.aui-flex-img image {
    // width: 100%;
    // height: auto;
	width: 240upx;
	height: 160upx;
    display: block;
    border: none;
    border-radius: 5px;
}

.aui-flex-box h3 {
    font-size: 14px;
    height: 60px;
}

.aui-flex-box h3 text {
    background: #ff9500;
    color: #fff;
    font-size: 0.7rem;
    border-radius: 3px;
    font-style: normal;
    // padding: 0.09rem 0.3rem;
    margin-right: 4px;
}

.aui-flex-box p {
    color: #999;
    font-size: 12px;
}

</style>
