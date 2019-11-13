import http from './interface'

export const init = (data) => {
	return http.request({
		url: 'api.html',
		dataType: 'json',
		data,
	})
}

export default {
	init
}