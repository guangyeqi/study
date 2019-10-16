/* 基础版+支持同步任务 */
class MyPromise {
    constructor(fn) {
        let self = this;
        self.value = null;
        self.error = null;

        self.onResolved = null;
        self.onRejected = null;

        function resolve(value) {
            setTimeout(() => {
                self.value = value;
                self.onResolved = self.value;
            });
        }
        function reject(error) {
            setTimeout(() => {
                self.error = error;
                self.onRejected = self.error;
            });
        }
        fn(resolve, reject);
    }
    then(onResolve, onReject) {
        let self = this;
        self.onRejected = onResolve;
        self.onRejected = onReject;
    }
}
let a = new MyPromise(function () {
    console.log('1122');
});

