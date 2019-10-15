const request = require('request');
const fs = require('fs');
const axios = require("axios");
const child_process = require('child_process');


var linkArr = [
    'https://yun.kubo-zy-youku.com/ppvod/28DC3C0F2018F9A9F1FC579C907619E1.m3u8',
    // 'https://yun.kubo-zy-youku.com/ppvod/AFC9BFAAAA366CF316C6649714E3A32D.m3u8',
    // 'https://yun.kubo-zy-youku.com/ppvod/79DE34A8080E68A74A69D8CC82DF6EC1.m3u8'
]

var downList = {}
var domain = "https://yun.kubo-zy-youku.com";

getDownloadMenu(linkArr)
/* 0,根据link获取下载文件目录 */

function getDownloadMenu(arr) {
    let list = JSON.parse(JSON.stringify(arr));
    list.map((item, index) => {
        getFilesMenu(item, index);
    });
}

/* 1,获取文件目录字符串 */
async function getFilesMenu(url, index) {
    const res = await axios(url);
    let data = res.data;
    let partArr = getPartUrl(domain, data);
    downloadFile(partArr, index);
}

/* 2，目录字符串解析 */
function getPartUrl(domain, str) {
    let arr = [];
    str.replace(/.*s/g, (a, b) => {
        arr.push(domain + a);
    });
    return arr;
}

/* 3, 文件下载流程 */
function downloadFile(arr, index) {
    let list = JSON.parse(JSON.stringify(arr));
    for (let i of list) {
        console.log(i);
        let url = i.split('/');
        let name = './' + (parseInt(index) + 1) + '/' + url[url.length - 1];
        download(i, name, function () {
            if (!downList[index]) {
                downList[index] = [];
            }
            downList[index].push(i);
            console.log('下载进度：' + index, downList[index].length, list.length);
            if (downList[index].length == list.length) {
                // 文件合并
                console.log(111111111111111111);
                getTogether('./' + (parseInt(index) + 1) + '/');
            }else{
                console.log(1);
            }
        });
    }
}

/* 4,下载函数 */

function download(url, filename, callback) {
    let stream = fs.createWriteStream(filename);
    request(url).pipe(stream).on('close', callback);
}
/* 5 文件合并 */
function getTogether(absPath) {
    child_process.execFile(absPath + "a.bat", function (error, stdout, stderr) {
        if (error !== null) {
            console.log("exec error" + error)
        }else {
            console.log("成功")
            console.log('stdout: ' + stdout);
            console.log('stderr: ' + stderr);
        }
    })
}
