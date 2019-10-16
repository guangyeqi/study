import env from './process.js';
import axios from 'axios'
const http = function (config, data) {
	console.log("TCL: http -> config", config)
	console.log("TCL: http -> data", data);


	let s = {
		url: '',
		method: 'get',
		headers: {},
		params: {},
		data: {},
		timeout: 1000,
		withCredentials: true,
	}
	let option = Object.assign(s, config, data);
	delete option.intro;
	delete option.host;
	/* 0，主机处理 */
	let domain = config.host ? env[config.host] : env.host;
	/* 参数处理 */
	option.url = domain + option.url;
	/* 2 headers处理 */
	let headers = {
		'miniType': 1,
		'token': Date.now()
	};
	headers['Content-Type'] = option.method == 'post' ? 'application/x-www-form-urlencoded' : 'application/json';
	Object.assign(option.headers, headers);
	console.log("TCL: http -> option", option)




	return new Promise((resolve, reject) => {
		console.log(option);
		axios(option).then((res) => {
		console.log("TCL: http -> res", res)
				resolve(res.data);

			// if (res.flag == 0) {
			// 	resolve(res.data);
			// } else {
				// toset({
				// 	titile: res.errMsg,
				// 	icon: none
				// });
				// reject(res.data);
			// }
		}).catch((err) => {
        console.log("TCL: http -> err", err)
			// let code = err.code + '';
			// switch (code) {
			// 	case 404: ''; break;
			// 	case 500: ''; break;
			// 	case 403: ''; break;
			// 	default: break;
			// }
			// reject(err.data);
		})

		// resolve({
		// 	errMsg: '....',
		// 	flag: 0,
		// 	data: {
		// 		id: '1',
		// 		age: '18',
		// 		name: 'qgy',
		// 		sex: '1'
		// 	}
		// })
	})
}

/* 对象变成字符串 */
function stringify(obj) {
	if (JSON.stringify(obj) != '{}' && obj != undefined) {
		var temp = '';
		for (var i in obj) {
			temp += i + '=' + obj[i] + '&';
		}
		temp = temp.slice(0, -1);
		return temp;
	}
}
function joinUrl(a, b, c) {
	return b.indexOf('?') == -1 ? a + b + '?' + c : a + b + '&' + c;
}
export default http;
