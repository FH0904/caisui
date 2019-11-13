import Vue from 'vue'
import App from './App'

// 把所有的输出包裹到Api里面，调用Api里面的函数，Api.hello()
import * as Api from './config/api.js'

import * as Common from './config/common.js'
import * as Db from './config/db.js'
import * as Config from './config/config.js'
import store from './store'
import * as httpRequest from './config/index.js'

// 测试Git
Vue.config.productionTip = false
Vue.prototype.$api = Api;
Vue.prototype.$common = Common;
Vue.prototype.$db = Db;
Vue.prototype.$config = Config;
Vue.prototype.$store = store;
Vue.prototype.$httpRequest = httpRequest

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
