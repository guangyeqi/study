! function (self, factory) {
    /* 判断引用模式，import或require就导出，否则挂载到全局 */
    if (typeof model == 'object' && model.exports) {
        model.exports = factory();
    } else {
        self.torch = factory();
    }
}(window ? window : this, function () {
    /* 全局变量定义 */
    var pool = {}, //事件池
        count = 0; //事件次数
    string_str = 'string'; //？？？
    function_str = 'function'; //？？？
    hasOwnKey = Function.call.bind(Object.hasOwnProperty), //???
        slice = Function.call.bind(Array.prototype.slice); //???
    console.log(hasOwnKey);
    console.log(slice);

    /* bind 绑定函数，将事件放入事件池 */
    function _bind(name, callBack, isOne, content) {
        /**
         * name：事件名
         * callBack: 回调函数
         * isOne：是否执行一次
         * content：？？？
         *  */
        /* 格式校验 */
        console.log(typeof name == string_str , typeof callBack == function_str)
        if (typeof name != string_str || typeof callBack != function_str) {
            throw new TypeError('参数错误，格式必须是：' + string_str + ',' + function_str)
        }
        /* 判断事件是否存在与事件池 */
        if (!hasOwnKey(pool, name)) {
            pool[name] = {};
        }
        pool[name][++count] = [callBack, isOne, content];
        return [name, count]
    }

    /* 事件遍历 */
    function _each(obj, callBack) {
        for (let key in obj) {
            if (hasOwnKey(obj, key)) {
                callBack(key, obj[key]);
            }
        }
    }
    /* 事件注册 */
    function on(name, callBack, content) {
        return _bind(name, callBack, 0, content);
    }

    /* 事件只触发一次 */
    function once(name , callBack , content) {
        return _bind(name, callBack, 1, content);
    }

    /* 事件触发实现 */
    function  _fire(name,params) {
        /* 判断事件是否在事件池 */
        if(hasOwnKey(pool,name)){
            _each(pool[name] , function(key,item) {
                item[0].apply(item[2],params);//事件触发
                if(item[1]){
                    delete pool[name];//若只触发一次，着触发后删除
                }
            });
        }
    }
    /* 事件触发 异步 */
    function fire(name){
        var params=slice(arguments ,1);
        let timer=setTimeout(()=>{
            _fire(name , params);//事件触发
            clearInterval(timer);//销毁定时器，避免性能问题
        });
    }
    /* 事件触发 同步 */
    function fireSync(name){
        _fire(name , slice(arguments ,1));//事件触发
    }

    /* 事件取消 */
    function off(name) {
        /*
         * 功能描述：
         * 1，禁止所有事件 --感觉没必要
         * 2，禁止某个事件
         */
    }

    /* 清除所有事件 */
    function clear() {
        pool = {};
    }









    /* 返回操作方法 */
    return {
        on: on,
        off: off,
        once: once,
        fire: fire,
        fireSync: fireSync,
        clear: clear,
    }
})


console.log(torch);
// (function (a , b){
//     console.log(a , b);
// })(1,2)
torch.on('cc',function() {
    console.log(1);
},'cc');


torch.fire('cc');



torch.fire('cc');

torch.once('aa',function() {
    console.log(1);
},'aa');


torch.fire('aa');



torch.fire('aa');