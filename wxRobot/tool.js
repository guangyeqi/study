const printQrcdoe = require('qrcode-terminal'); //二维码打印工具
const tool = {
    /* 扫描登录 */
    onScan(qrcode, status) {
        console.log(qrcode, status);
    },
    onLogin() {}, //登录成功
    onLogout() {}, //下线
    onMessage() {}, //接收到消息
    onError() {}, //错误处理
    onFriend() {}, //添加好友
    onRoomJoin() {}, //入群通知
    onRoomLeave() {}, //退群通知
    onRoomTopic() {}, //修改群名通知
}



// export {
//     tool
// };

export default tool;