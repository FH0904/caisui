<template>
	<view class="content">
		<view class="login-m">
			<view class="login-item">
				<view class="logo">
					<open-data type="userAvatarUrl"></open-data>
				</view>
			</view>
			<view class="login-tip">
				<view class="login-tip-big">
					申请获取以下权限
				</view>
				<view class="login-tip-small">
					获得你的公开信息 （昵称、头像等）
				</view>
			</view>
		</view>
		<view class="login-b flc">
			<!-- #ifdef MP-WEIXIN -->
			<button class="auth-btn refuse" @click="handleRefuse">拒绝</button>
			<button class="auth-btn " open-type="getUserInfo" @getuserinfo="getUserInfo" hover-class="btn-hover">允许</button>
			<!-- #endif -->
			<!-- #ifdef MP-ALIPAY -->
			<button class="auth-btn " @click="getALICode" hover-class="btn-hover">授权登录</button>
			<!-- #endif -->
		</view>
	</view>
</template>

<script>
export default {
  data() {
    return {
      open_id: ''
    }
  },
  computed: {
    logoImage() {
      return this.$store.state.config.shop_logo
    }
  },
  onLoad() {
    const _this = this
    // #ifdef MP-WEIXIN
    this.getCode(function(code) {
      var data = {
        code: code
      }
      _this.$api.login1(data, (res)=>{
        if (!res.status) {
          _this.$common.successToShow(res.msg, function() {
            uni.navigateBack({
              delta: 1
            })
          })
        } else {
          _this.open_id = res.data
        }
      })
    })
    // #endif
  },
  // #ifdef MP-WEIXIN
  // onUnload: function() {
  //   wx.reLaunch({
  //     url: '/pages/index/index'
  //   })
  // },
  // #endif
  methods: {
    getCode: function(callback) {
      uni.login({
        // #ifdef MP-ALIPAY
        scopes: 'auth_user',
        // #endif
        success: function(res) {
          if (res.code) {
            return callback(res.code)
          } else {
            //login成功，但是没有取到code
            this.$common.errorToShow('未取得code')
          }
        },
        fail: function(res) {
          this.$common.errorToShow('用户授权失败wx.login')
        }
      })
    },
    handleRefuse(){
      uni.showToast({
        title: '未授权',
        icon: 'none',
        duration: 1000,
      })
      setTimeout(() => {
		uni.hideToast();
        uni.navigateBack(-1);
      }, 1000);
    },
    getUserInfo: function(e) {
      //console.log(e);
      let _this = this
      //return false;
      if (e.detail.errMsg == 'getUserInfo:fail auth deny') {
        _this.$common.errorToShow('未授权')
      } else {
        var data = {
          open_id: _this.open_id,
          iv: e.detail.iv,
          edata: e.detail.encryptedData,
          signature: e.detail.signature
        }
        //有推荐码的话，带上
        var invitecode = _this.$db.get('invitecode')
        if (invitecode) {
          data.invitecode = invitecode
        }
        _this.toLogin(data)
      }
    },
    //实际的去登陆
    toLogin: function(data) {
      let _this = this
      _this.$api.login2(data, function(res) {
        if (res.status) {
          //判断是否返回了token，如果没有，就说明没有绑定账号，跳转到绑定页面
          if (typeof res.data.token == 'undefined') {
            uni.redirectTo({
              url: '/pages/login/login/index?user_wx_id=' + res.data.user_wx_id
            })
          } else {
            //登陆成功，设置token，并返回上一页
            _this.$db.set('userToken', res.data.token)
            uni.navigateBack({
              delta: 1
            })
            return false
          }
        } else {
          _this.$common.errorToShow('登录失败，请重试')
        }
      })
    },
	getALICode() {
		let that = this
		uni.login({
			scopes: 'auth_user',
			success: (res) => {
				if(res.authCode){
					that.aLiLoginStep1(res.authCode);
				}else{
					this.$common.errorToShow('未取得code');
				}
			},
			fail: function(res) {
				this.$common.errorToShow('用户授权失败my.login');
			}
		});
	},
	aLiLoginStep1(code) {
		this.$api.alilogin1({code}, res => {
			if (res.status) {
				this.open_id = res.data.user_wx_id
				//判断是否返回了token，如果没有，就说明没有绑定账号，跳转到绑定页面
				if (!res.data.hasOwnProperty('token')) {
					this.$common.redirectTo('/pages/login/login/index?user_wx_id=' + res.data.user_wx_id);
				} else {
					this.$db.set('userToken', res.data.token)
					//this.initData()
					uni.navigateBack({
					  delta: 1
					});
					return false;
				}
			} else {
				this.$common.errorToShow(res.msg)
			}
		})
	},
    // #ifdef MP-ALIPAY
    getAlipayUserInfo: function() {
      let _this = this
      this.getCode(function(code) {
        var data = {
          code: code,
          type: 'alipay'
        }
        //有推荐码的话，带上
        var invitecode = _this.$db.get('invitecode')
        if (invitecode) {
          data.invitecode = invitecode
        }
        _this.$api.login1(data, function(res) {
          if (res.status) {
            //判断是否返回了token，如果没有，就说明没有绑定账号，跳转到绑定页面
            if (typeof res.data.token == 'undefined') {
              uni.redirectTo({
                url:
                  '/pages/login/login/index?user_wx_id=' + res.data.user_wx_id
              })
            } else {
              //登陆成功，设置token，并返回上一页
              _this.$db.set('userToken', res.data.token)
              uni.navigateBack({
                delta: 1
              })
              return false
            }
          } else {
            _this.$common.errorToShow('登录失败，请重试')
          }
        })
      })
    }
    // #endif
  }
}
</script>

<style lang="scss">
.content {
  background-color: #fff;
  height: 100vh;
  padding: 100upx 60upx 0;
}
.login-item {
  display: flex;
  justify-content: center;
  padding-bottom: 40upx;
  border-bottom: 1upx solid #dddddd;
}
.logo {
  display: block;
  width: 180upx;
  height: 180upx;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #fff;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
}
.login-tip{
	padding:60upx 0;
	&-big{
		font-size: 28upx;
		line-height: 80upx;
	}
	&-small{
		font-size: 12px;
		color:#9e9e9e;
	}
}
.app-name {
  font-size: 28upx;
  color: #999;
}
.login-b .btn-g {
  margin-top: 40upx;
}
.auth-btn{
  flex:1;
	display: block;
	height: 80upx;
	line-height: 80upx;
	text-align: center;
	font-size: 12px;
	color:#FFF;
	background:#1aad19;
	border-radius: 40upx;
  &.refuse{
    background:#999;
    margin-right:40upx;
  }
}
</style>
