import http from './http.js'
const ajax = {
    extend(key, info) {
        this[key] = query => http(info, query);
    }
}
const configList = {
    'get': {
        intro: '获取xx信息',
        url: '/get?cc=1',
        host: 'host1'
    },
    'set': {
        intro: '设置xx信息',
        method: 'post',
        url: '/set',
        headers: {
            'ss':'1'
        }
    }
}

Object.keys(configList).forEach(key => {
    ajax.extend(key, configList[key])
});

export default ajax;
