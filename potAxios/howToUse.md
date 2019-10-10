# 1，安装。

## npm install --save axios

# 2，基本用法

## 2.1 get 请求

    axios.get('/user?id=123')
    .then(res=>{
    	console.log(res);
    }).catch(err=>{
    	console.log(err);
    })

    axios.get('/user',{
    	params:{
    		id:123
    	}
    }).then(res=>{
    	console.log(res);
    }).catch(err=>{
    	console.log(err);
    })

## 2.2 post 请求

    axios.post('/user',{
    	id:123,
    	name:'lili'
    }).then(res=>{
    	console.log(res);
    }).catch(err=>{
    	console.log(err);
    })

## 2.3 一次并发多个请求

    function getUser(){
    	return axios.get('/user?id=123');
    }
    function getSession(){
    	return axios.post('/user?id=123');
    }
    axios.all([getUser(),getSession()]).
    then(axios.spread((acct,perms)=>{
    	//76当这两个请求都完成的时候会触发这个函数，两个参数分别代表返回的结果
    }));

# 3 axios 的 api

## 3.1 通过 config(object)配置来进行请求

    axios({
    	url:'/user',
    	mehtord:'post',
    	data:{
    		id:123
    	}
    })
    axios('/user?id=123');//默认get请求

## 3.2 请求别名

    axios.request(config);
    axios.get(config);//get，只应该用于数据获取。
    axios.post(url[,data[,config]]);//post，将数据提交至服务器，一般会改变服务器状态。
    axios.delete(url[,config]);//delete，删除指定的资源。
    axios.head(url[,config]);//head，请求与get一致，但无响应体。
    axios.put(url[,data[,config]]);//put，请求有效载荷替换目标资源的所有当前表示。？？？啥意思啊，看不懂。
    axios.patch(url[,data,[,cngfig]]);//patch，对引用资源进行部分修改。

## 3.3 并发请求

```
    axios.all([fn,fn1,fn2...]);//并发请求
    axios.spread(function(a,b,c...){
    	//a,b,c分别对于请求fn,fn1,fn2的响应数据
    });
```

## 3.4 实例化，并自定义配置

### 3.4.1 axios.create(config)---创建基本配置.

```
    axios.create({
    	baseUrl:'http://www.test.com/my/',
    	timeout:1000,
    	headers:{
    		'newHeader':'new'
    	}
    })
```

### 3.4.2 实例的方法，配合 axios.create 方法使用

    axios#request(config);
    axios#get(config);//get，只应该用于数据获取。
    axios#post(url[,data[,config]]);//post，将数据提交至服务器，一般会改变服务器状态。
    axios#delete(url[,config]);//delete，删除指定的资源。
    axios#head(url[,config]);//head，请求与get一致，但无响应体。
    axios#put(url[,data[,config]]);//put，请求有效载荷替换目标资源的所有当前表示。？？？啥意思啊，看不懂。
    axios#patch(url[,data,[,cngfig]]);//patch，对引用资源进行部分修改。

# 4 请求配置

|         名称         | 是否必须 |                                  类型                                  |                                                               说明                                                               | 备注                                                                                                                                                                                                                                                               |
| :------------------: | :------: | :--------------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   transfromRequest   |    否    |                             [function(){}]                             |                                                       对请求数据进行处理。                                                       | 1，只对 put,post,patch 方式支持。2,函数最后必须返回一个字符串或 ArrayBuffer 或 strseam                                                                                                                                                                             |
|  transfromResponse   |    否    |                             [function(){}]                             |                                                       对响应数据进行处理。                                                       | 在 then/catch 之前对数据进行处理                                                                                                                                                                                                                                   | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|         url          |    是    |                                 string                                 |                                                             请求地址                                                             |
|        method        |    否    |                                 string                                 |                                                        请求方式，默认 get                                                        |
|       baseURL        |    否    |                                 string                                 |                                                       请求地址=baseURL+url                                                       |
|       headers        |    否    |                                 Object                                 |                                                           自定义请求头                                                           |
|        params        |    否    |                                 Object                                 |                                                       在 url 上拼接的参数                                                        |
|   paramsSerialzer    |    否    |                                function                                |                                                         让 params 序列话                                                         | {a:1,b:2,c:3} => a=1&b=2&c=3                                                                                                                                                                                                                                       |
|         data         |    否    |                                 Object                                 |                                                         请求时发送的参数                                                         | 1，只试用 post,put,patch。2，当无 transformRequest 时，data 必须是 string、plain(Plain Object:指的是通过字面量形式或者 new Object()形式定义的对象。)、object、ArrayBuffer、ArrayBufferView、urlSearchParams。3，仅浏览器，formData、file、bold。4，仅 node，Stream |
|       timeout        |    否    |                                 毫秒数                                 |                                                  请求的超时时间，超时后终止请求                                                  |
|   withCredentials    |    否    |                           boolean,默认 false                           |                                                           是否跨域请求                                                           |
|       adopter        |    否    |                                function                                |                                        自定义处理请求，使得测试变得方便，返回一个 promise                                        |
|         auth         |    否    |                                 object                                 | auth`表明 HTTP 基础的认证应该被使用，并提供证。|//这会设置一个 authorization 头（header）,并覆盖你在 header 设置的 Authorization |
|     responseType     |    否    |                           string,默认'json'                            |                                      其可选项是 arraybuffer,blob,document,json,text,stream                                       |
|    xsrfCookieName    |    否    |                            默认'XSRF-TOKEN'                            |
|    xsrfHeaderName    |    否    |                           默认'X-XSRF-TOKEN'                           |
|   onUploadProgress   |    否    |                                function                                |                                                           上传进度事件                                                           |
|  onDownloadProgress  |    否    |                                function                                |                                                           下载进度事件                                                           |
|   maxContentLength   |    否    |                                 number                                 |                                                         相应内容的最大值                                                         |
|    validateStatus    |    否    |                                function                                |                                     是否根据 http 相应状态码，来 resolve 或者 reject promise                                     | validateStatus 返回 true(或者设置为 null 或者 undefined),那么 promise 的状态将会是 resolved,否则其状态就是 rejected                                                                                                                                                |
|     maxRedirects     |    否    |                             number,默认 5                              |                                                定义了在 nodejs 中重定向的最大数量                                                |
| httpAgent/httpsAgent |    否    |                   new https.Agent({keeyAlive:true})                    |                                          定义了当发送 http/https 请求要用到的自定义代理                                          | keeyAlive 在选项中没有被默认激活                                                                                                                                                                                                                                   |
|        proxy         |    否    | {host:'127.0.0.1',port: 9000,auth: {username:'skda',password:'radsd'}} |                                                      定义了主机名字和端口号                                                      | `auth`表明 http 基本认证应该与 proxy 代理链接，并提供证书//这将会设置一个`Proxy-Authorization` header,并且会覆盖掉已经存在的`Proxy-Authorization` header                                                                                                           |
|     cancelToken      |    否    |                  new cancelToken(function(cancel){})                   |                                              定义了一个用于取消请求的 cancel token                                               |

默认配置
你可以设置默认配置，对所有请求都有效

1、 全局默认配置

```
axios.defaults.baseURL = 'http://api.exmple.com';
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.defaults.headers.post['content-Type'] = 'appliction/x-www-form-urlencoded';
```

2、 自定义的实例默认设置

```
//当创建实例的时候配置默认配置
var instance = axios.create({
baseURL: 'https://api.example.com'
});

//当实例创建时候修改配置
instance.defaults.headers.common["Authorization"] = AUTH_TOKEN;
```

3、 配置中的有优先级
config 配置将会以优先级别来合并，顺序是 lib/defauts.js 中的默认配置，然后是实例中的默认配置，最后是请求中的 config 参数的配置，越往后等级越高，后面的会覆盖前面的例子。

```
//创建一个实例的时候会使用 libray 目录中的默认配置
//在这里 timeout 配置的值为 0，来自于 libray 的默认值
var instance = axios.create();
//回覆盖掉 library 的默认值
//现在所有的请求都要等 2.5S 之后才会发出
instance.defaults.timeout = 2500;
//这里的 timeout 回覆盖之前的 2.5S 变成 5s
instance.get('/longRequest',{
timeout: 5000
});
```
七、拦截器
你可以在请求、响应在到达 then/catch 之前拦截他们
```

//添加一个请求拦截器
axios.interceptors.request.use(function(config){
//在请求发出之前进行一些操作
return config;
},function(err){
//Do something with request error
return Promise.reject(error);
});
//添加一个响应拦截器
axios.interceptors.response.use(function(res){
//在这里对返回的数据进行处理
return res;
},function(err){
//Do something with response error
return Promise.reject(error);
})

```
2、取消拦截器
```

var myInterceptor = axios.interceptor.request.use(function(){/_...._/});
axios.interceptors.request.eject(myInterceptor);

```
3、 给自定义的 axios 实例添加拦截器
```

var instance = axios.create();
instance.interceptors.request.use(function(){})

```
八、错误处理
```

axios.get('/user/12345')
.catch(function(error){
if(error.response){
//请求已经发出，但是服务器响应返回的状态吗不在 2xx 的范围内
console.log(error.response.data);
console.log(error.response.status);
console.log(error.response.header);
}else {
//一些错误是在设置请求的时候触发
console.log('Error',error.message);
}
console.log(error.config);
});

```
九、取消
你可以通过一个 cancel token 来取消一个请求

你可以通过 CancelToken.source 工厂函数来创建一个 cancel token

```

var CancelToken = axios.CancelToken;
var source = CancelToken.source();

axios.get('/user/12345',{
cancelToken: source.token
}).catch(function(thrown){
if(axios.isCancel(thrown)){
console.log('Request canceled',thrown.message);
}else {
//handle error
}
});
//取消请求（信息的参数可以设置的）
source.cance("操作被用户取消");

```

你可以给 cancelToken 构造函数传递一个 executor function 来创建一个 cancel token:

```

var cancelToken = axios.CancelToken;
var cance;
axios.get('/user/12345',{
cancelToken: new CancelToken(function(c){
//这个 executor 函数接受一个 cancel function 作为参数
cancel = c;
})
})
//取消请求
cancel();

```

```
