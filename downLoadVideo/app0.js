const axios = require("axios");
var request = require('request');
var fs = require('fs');
console.log("axios", axios);
/* 0, 获取播放列表 */
var url =
	"https://yun.kubo-zy-youku.com/ppvod/BC54AE9D32573C6C422D72F14838A411.m3u8";
var domain = "https://yun.kubo-zy-youku.com";
var count="./1/";
var k=0;
axios(url)
	.then(res => {
		let data = res.data;
		console.log("data", data);
		console.log("data type", typeof data);
		let d = getUrl(domain, data);
		// console.log(d);

		getFile(d);
	})
	.catch(err => {
		console.log("err", err);
	});

function getUrl(domain, str) {
	let arr = [];
	str.replace(/.*s/g, (a, b) => {
		arr.push(domain + a);
	});
	return arr;
}

function getFile(list) {
	list = JSON.parse(JSON.stringify(list));
	for (let i of list) {
		console.log(i);
		let url=i.split('/');
		let name=url[url.length -1];
		download(i,name, function (res) {
			k++;
			console.log("下载成功: "+k+'_'+list.length,name);
			if(k == list.length){
				console.log("全部下载成功");
			}
		});
	}
}



function download(url, filename, callback) {
	var stream = fs.createWriteStream(count+filename);
	request(url).pipe(stream).on('close',callback);
}

