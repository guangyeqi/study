// 此处的三个参数上文都有解释
_.debounce = function (func, wait, immediate) {
    // timeout 表示定时器
    // result 表示 func 执行返回值
    var timeout, result;

    // 定时器计时结束后
    // 1、清空计时器，使之不影响下次连续事件的触发
    // 2、触发执行 func
    var later = function (context, args) {
        timeout = null;
        // if (args) 判断是为了过滤立即触发的
        // 关联在于 _.delay 和 restArguments
        if (args) { result = func.apply(context, args); }
    };

    // 将 debounce 处理结果当作函数返回
    var debounced = restArguments(function (args) {
        if (timeout) clearTimeout(timeout);
        if (immediate) {
            // 第一次触发后会设置 timeout，
            // 根据 timeout 是否为空可以判断是否是首次触发
            var callNow = !timeout;
            timeout = setTimeout(later, wait);
            if (callNow) result = func.apply(this, args);
        } else {
            // 设置定时器
            timeout = _.delay(later, wait, this, args);
        }

        return result;
    });

    // 新增 手动取消
    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
};

// 根据给定的毫秒 wait 延迟执行函数 func
_.delay = restArguments(function (func, wait, args) {
    return setTimeout(function () {
        return func.apply(null, args);
    }, wait);
});


var restArguments = function (func, startIndex) {
    //不输入startIndex则自动取最后一个为rest
    startIndex = startIndex == null ? func.length - 1 : +startIndex;
    //接受一个函数为参数，返回一个包装后的函数，参数用arguments获取
    return function () {
        var length = Math.max(arguments.length - startIndex, 0),
            rest = Array(length),
            index = 0;
        for (; index < length; index++) {
            rest[index] = arguments[index + startIndex];
        }
        switch (startIndex) {
            //原函数只接受一个rest参数
            case 0: return func.call(this, rest);
            //原函数接受1个参数 + rest参数
            case 1: return func.call(this, arguments[0], rest);
            //原函数接受2个参数 + rest参数
            case 2: return func.call(this, arguments[0], arguments[1], rest);
        }
        var args = Array(startIndex + 1);
        for (index = 0; index < startIndex; index++) {
            args[index] = arguments[index];
        }
        args[startIndex] = rest;
        //原函数接受2个以上参数 + rest参数
        return func.apply(this, args);
    };
};

//...theArgs这种写法就是Rest parameters的写法
function sum(...theArgs) {
    return theArgs.reduce((previous, current) => {
        return previous + current;
    });
}

console.log(sum(1, 2, 3));
// expected output: 6

console.log(sum(1, 2, 3, 4));
  // expected output: 10