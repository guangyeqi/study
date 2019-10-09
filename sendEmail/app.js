const superagent = require('superagent');
const cheerio = require('cheerio');
const handlebars = require('handlebars');
const nodemailer = require('nodemailer');
const fs = require('fs');
const path = require('path');



getWeather();

 function getWeather(){
    let url = "http://www.weather.com.cn/weather1d/101210101.shtml";
    superagent.get(url).then((res)=>{
        // console.log('res',res);
        // console.log(res.text);
        let res1={
            dress:{},
            air:{},
            line:{}
        }
    
        $ = cheerio.load(res.text);
        // console.log($);
        let a=$('#today script').html();
        console.log(a);
        a=a.split('=');

        console.log(a);
        let data=JSON.parse(a[1]);
        console.log(data['1d']);
        let one=data['1d'];
        let d=one.map((value,index,arr)=>{
            // console.log(value,index,arr);
            value=value.split(',');
            // console.log(value);
            return value;
        });

        console.log(d);
        let b=$('.livezs').html();


        // let c=$('.sk01').html();
        // console.log(c);
        aa('.li1');
        aa('.li3');
        aa('.li6');

        console.log(res1);




        /* 获取生活指数 */
       

        function aa(type){
            let dom=$('.livezs ul');
            let li=dom.find(type);
            let title=li.find('em').text();
            let level=li.find('span').text();
            let content=li.find('p').text();
            let obj={
                title:title,
                level:level,
                content,content
            }
            if(/穿衣/ig.test(title)){
                res1.dress=obj  
            }else if(/空气/ig.test(title)){
                res1.air=obj;
            }else if(/紫外线/ig.test(title)){
                res1.line=obj;
            }
        }
        
        // getImg(a);
    }).catch((err)=>{
        // console.log('err',err);
    })

 }




function getImg(url) {

    superagent.post('https://weixin.sogou.com/antispider/' + url).then((res) => {
        // console.log('res',res);
    }).catch((err) => {
        // console.log('err', err);
    })

}
getImgText()

function getImgText() {
    let url = 'http://www.wufazhuce.com';
    superagent.get(url).then(res => {
        // console.log('res', res);
        let $ = cheerio.load(res.text)
        let A = $('.active').html();
        // console.log(A);

        let img = $('.active a img').attr('src');
        console.log(img);
        let txt = $('.active div a').text();
        console.log(txt);
        // setHtml();
    }).catch(err => {
        console.log(err);
    });
}
gettemplate();

function gettemplate(){
    let htmlPath=path.resolve('./index.html');
   fs.readFile(htmlPath,'utf-8',function(err,res){
       if(err){
           console.log('err',err);
       }
    //    console.log(res);

    //    let html = handlebars.compile(template);
    //     let res = html(info);
        configEmail(res);
   })
}

function configEmail(html) {
    
    let consfig = {
        auth: {
            user: 'guangye.qi@hotmail.com',
            pass: 'qgywzf758023',
        },
        email: {
            from: 'guangye.qi@hotmail.com',
            to: '809662645@qq.com',
            subject: 'ai ni mei yi tian',
            html: html
        }
    }
    // sendEmail(consfig);
}


function sendEmail(config) {
    /* 0, 创建账号 */
    let account = nodemailer.createTransport({
        service:'Hotmail',
        auth: config.auth
    });
    /* 1，发送邮件 */
    account.sendMail(config.email, (err, res) => {
        if(err){
            console.log('err',err);
            return false;
        }
      console.log('Message sent: %s', res.messageId);
    });
}