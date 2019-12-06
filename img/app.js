const superagent = require('superagent');
const cheerio = require('cheerio');
const fs = require('fs');
const path = require('path');
const request = require('request');


/* 目标网址 */
let targetUrl = 'http://www.techuangyi.com/tcase-31251.html';

getAllImgDom(targetUrl);
/* 获取页面中所有img节点 */
function getAllImgDom(url) {
    superagent.get(url).then((res) => {
        $ = cheerio.load(res.text);
        let list = $('img');
        let down = [];
        list.map((index,item) => {
            let src = item.attribs.src;
            if (src) {
                src = src.split('?')[0];
                let srcArr = src.split('/');
                let name = srcArr[srcArr.length - 1];
                down.push({
                    src,
                    name
                });
            }
        });
        nextStep(down);
    }).catch((err) => {
        console.log('err', err);
    })
}

function nextStep(s) {
    console.log("TCL: nextStep -> s", s)
    s.map((item) => {
        download(item.src, './1/'+item.name,function(){
            console.log("TCL: nextStep -> item.name", item.name)
        })
    })
}

function download(url, filename, callback) {
    let stream = fs.createWriteStream(filename);
    request(url).pipe(stream).on('close', callback);
}