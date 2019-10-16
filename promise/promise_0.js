/* 基础版 */
class MyPromise {
    constructor(fn) {
        let self = this;
        self.value = null;
        self.error = null;

        self.onResolved = null;
        self.onRejected = null;

        function resolve(value) {
            self.value = value;
            self.onResolved = self.value;

        }
        function reject(error) {
            self.error = error;
            self.onRejected = self.error;
        }
        fn(resolve, reject);
    }
    then(onResolve, onReject) {
        let self = this;
        self.onRejected = onResolve;
        self.onRejected = onReject;
    }
}
let q = new MyPromise(function () {
    console.log('1122');
});

