// const A = {
//     get(data) {
//         return ajax(data);
//     }
// }

// function getAll() {
//     return {
//         id: 11
//     }
// }
// let a = A.get();
// console.log(a);


// function ajax(data) {
//     return new Promise((resolve, reject) => {
//         axios(data).then((res) => {
//             if (res.flag == 0) {
//                 resolve(res.data);
//             } else {
//                 toset({
//                     titile: res.errMsg,
//                     icon: none
//                 })
//             }
//         }).catch((err) => {
//             let code = err.code + '';
//             switch (code) {
//                 case 404: ''; break;
//                 case 500: ''; break;
//                 case 403: ''; break;
//                 default: break;
//             }
//         })
//     });
// }

// export const GET= dada => ajax({
//     type:'get',
//     data:data,
// });
// var obj={
//     get:{
//         type:'get',
//         url:'/get'
//     }
// }

// const get = query => http(obj.get,query);


// function http(config,data) {
//     console.log("TCL: http -> config", config)
//     console.log("TCL: http -> data", data);

// }

// get({
//     data: { id: 1 },
//     query: {
//         token: '1111111111111'
//     }
// })



var obj = {
    add(key, info) {
        this[key] = query => http(info, query);
    }
}

obj.add('get', { type: 'get', url: '/get' });


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
