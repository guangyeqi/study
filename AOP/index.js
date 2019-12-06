/* AOP函数扩展 */

// 把一个函数动态织入另一个函数中。
//原型扩展 装饰者模式实现


Function.prototype.before = function (beforeFn) {
    let self = this;
    return function () {
        /* 0,先执行before函数 */
        beforeFn.apply(this, arguments);
        /* 1，ruturn主函数 */
        return self.apply(this.arguments);
    }
}

Function.prototype.before = function (beforeFn) {
    let self = this;
    return function () {
        /* 0,先执行before函数 */
        beforeFn.apply(this, arguments);
        /* 1，ruturn主函数 */
        return self.apply(this.arguments);
    }
}

Function.prototype.after = function (afterFn) {
    let self = this;
    return function () {
        /* 先执行主函数 ？？？ */
        let res = self.apply(this, arguments);
        /* 1，执行after函数 */
        afterFn.apply(this, arguments);
        /* 2，return 主函数 */
        return res;
    }
}


let f1 = function () {
    console.log(1);
}
let f2 = function () {
    console.log(2);
}
let f3 = function () {
    console.log(3);
}

f2=f2.before(f1).after(f3);//关键所在，扩展主函数

f2();

// 函数要执行，通过AOP即切面的方式扩展原函数，使主函数有before与after两个扩展函数，


