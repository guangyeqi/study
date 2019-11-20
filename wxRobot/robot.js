const {Wechaty} = require('wechaty')//Wechaty基础库,通用微信工具
const printQrcdoe = require('qrcode-terminal'); //二维码打印工具
/* 工具初始化 */
const tool = {
    /* 扫描登录 */
    onScan(qrcode, status) {
        printQrcdoe.generate(qrcode);//生成二维码
    },
    onLogin(user) {
        console.log('登录成功: '+user);
    }, //登录成功
    onLogout() {}, //下线
    onMessage(message) {
        console.log('收到消息：'+message);
    }, //接收到消息
    onError() {}, //错误处理
    onFriendship(friendship) {
        console.log('好友申请：'+friendship)
    }, //添加好友
    onRoomInvite(invitation) {
        console.log('入群邀请 '+invitation)
    }, //入群邀请
    onRoomLeave() {}, //退群通知
    onRoomTopic() {}, //修改群名通知
}

/* 0，微信初始化 */
const wx = new Wechaty();
console.log(wx);
/* 1，微信事件监听 */
wx.on('scan',tool.onScan);//扫描登录
wx.on('login',tool.onLogin);//登录成功
wx.on('logout',tool.onLogout);//下线
wx.on('message',tool.onMessage);//接收到消息
// wx.on('error',tool.onError);//错误处理
wx.on('friendship',tool.onFriendship);//添加好友
wx.on('room-invite',tool.onRoomInvite);//入群邀请
// wx.on('room-leave',tool.onRoomLeave);//退群通知
// wx.on('room-topic',tool.onRoomTopic);//修改群名通知

/* 2，微信开始登录 */

wx.start();