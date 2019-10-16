var obj = {
    add(key, info) {
        this[key] = query => http(info, query);
    }
}

obj.add('get', { type: 'get', url: '/get',host:'inter' });


function http(config, data) {
    console.log("TCL: http -> config", config)
    console.log("TCL: http -> data", data);
}

console.log("TCL: obj", obj);

obj.get({
    data: { id: 1 },
    query: {
        token: '1111111111111'
    }
})