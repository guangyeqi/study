let parsm='?a=1&b=2&c=3&d=4';


function AnalyseUrl(params){

}

class AnalyseUrl{
    constructor(params){
        this.pool={}
    }
    append(key, value){
        let pool=this.pool;
        pool[key]=[value];
    }
    get(key){
        let pool=this.pool;

        return pool[key] ? pool[key][0] : null;
    }
    getAll(key){
        let pool=this.pool;

        return pool[key] ? pool[key] : null;
    }
    has(key){
        let pool=this.pool;

        return pool[key] ? true : false;
    }

}