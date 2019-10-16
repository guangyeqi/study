const environment={
    develop:{
        intro:'开发版',
        host:'https://dev.qgy.com/wx',
        host1:'https://dev.qgy.com/wx/1',
        wsUrl:''
    },
    release:{
        intro:'正式版',
        host:this.domain+'/wx',
        host1:this.domain+'/wx/1',
        wsUrl:''
    },
    local: {
        intro:'本地联调',
        host:'http://localhost:3000',
        host1:'http://localhost:3000',
        wsUrl:''
    }
}
const env=environment['local'];
export default env;
