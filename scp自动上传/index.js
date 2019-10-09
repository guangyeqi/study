const client = require("scp2");

// server: [{
//     port: '8080', //服务器端口
//     host: '127.0.0.1', //服务器IP
//     username: 'root', //用户名
//     password: '', //密码
//     privateKey: '', //私钥文件
//     passphrase: '', //私钥文件密码
//     path: '', //服务器端目录
//     tip:'本地服务器',//上传任务提示信息，会显示在控制台
// }], //服务器的连接信息，数组，可配置多个
var config = {
    local: {
        localPath: './index.js', //本地文件所在路径
        serverPath: '/usr/local/tomcat/webapps/winter/js', //上传后服务器的存放路径
        server: [{
            port: '22', //服务器端口
            host: '192.168.23.128', //服务器IP
            username: 'root', //用户名
            password: '123456', //密码
            path: '', //服务器端目录
            tip:'本地服务器',//上传任务提示信息，会显示在控制台
        }], //服务器的连接信息，数组，可配置多个。
    },
    test: {

    },
    product: {}
}
autoSever('local');
function autoSever(env) {
    let info = config[env];
    if (info) {
        let server = info.server;
        if (server.length > 0) {
            server.map((item) => {
                if(!item.path){
                    item.path =info.serverPath
                }
                console.log('开始上传：',item.tip);
                up(info.localPath,item,item.tip);
            });
        } else {
            throw new Error("请配置上传服务器信息");
        }

    } else {
        throw new Error("无效环境配置：" + env);
    }
}

function up(localPath,config,tip){
    client.scp(localPath, config, function(err) {
        if(err){
            console.log(err);
            console.log(localPath);
            console.log(config);
        }else {
            console.log('上传完成：',tip);
        }
    });
}