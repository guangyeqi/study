export default store = {
    get(key, callBack) {
        try {
            let res = wx.getStorageSync(key);
            if (typeof callBack == 'function') {
                callBack(res);
            }
        } catch (e) {
            wx.getStorage({
                key: key,
                success(res) {
                    if (typeof callBack == 'function') {
                        callBack(res.data);
                    }
                }
            })
        }
    },
    set(key, value) {
        try {
            wx.setStorageSync(key, value);

        } catch (e) {
            wx.setStorage({
                key: key,
                data: value,
            });
        }
    },
    remove(key) {
        try {
            wx.removeStorageSync(key);

        } catch (e) {
            wx.removeStorage({
                key: key,
            });
        }
    },
    clear() {
        try {
            wx.clearStorageSync();
        } catch (e) {
            wx.clearStorage();
        }
    }
}
