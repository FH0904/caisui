// export const apiBaseUrl = 'http://www.b2c.com/'
// jsshop.dayiguo.com
// http://deve.tianlwl.com
// export const apiBaseUrl = 'https://demo.jihainet.com/'
// export const apiBaseUrl = 'http://jsshop.dayiguo.com/'
export const apiBaseUrl = 'http://deve.tianlwl.com/'
// #ifdef H5
export const baseUrl=process.env.NODE_ENV === 'development'?window.location.origin+'/':apiBaseUrl
// export const baseUrl=process.env.NODE_ENV === 'development'?window.location.origin+'/':apiBaseUrl
// #endif
export const paymentType = {
  //支付单类型
  order: 1, //订单
  recharge: 2, //充值
  form_order: 5, //表单付款码
  form_pay: 6 //表单订单
}