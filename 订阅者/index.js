let store = {}; //调度中心

store.list = []; //订阅者列表

store.listen = function (fn) {
    this.list.push(fn);
}; //订阅方法

store.trigger = function () {
    for (let i of this.list) {
        // debugger;
        i.apply(this, Array.from(arguments));
    }
}; //发布方法，通知订阅者


store.listen(function (price, n) {
    console.log('a: ' + price, n);
}); //a,订阅

store.listen(function (price, n) {
    console.log('b: ' + price, n);
}); //b,订阅


//消息发布

store.trigger('abcde', 2000);
store.trigger('fighk', 6000);

/* 事件总线 */

function eventbus() {
    this.store = {}; //订阅事件存放
    let op=Object.defineProperty(this.store,'a',{
        get(value){
            console.log('get',arguments,value);
            return [];
        },
        set(){
            console.log('set',arguments);
        }
    })
    console.log(op);
}
eventbus.prototype={
    on(type,event){
        let self=this;
        if(!(type in self.store)){
            self.store[type]=[];
        }
        self.store[type].push(event)
        return self;
    },
    emit(type){
        let self=this;
        let types=Array.from(arguments);
        types.splice(0,1);
        for(let i of self.store[type]){
            i.apply(self,types);
        }
        return self;
    },
    off(type,event){
        let self=this;
        let currentEvent=self.store[type];
        console.log(self,currentEvent);

        let newEvent=currentEvent.map((value,index,arr)=>{
            console.log(value,event);
            if(value !== event){
                return value;
            }

        });
self.store[type]=newEvent;
        console.log(newEvent);
        // return false;
    }
}


let publish=new eventbus();

console.log(publish);
publish.on('a',function(e){
    console.log('a',e);
});

publish.on('b',function(e){
    console.log('b',e);
});

publish.on('a',function(e){
    console.log('a',e);
});



publish.emit('a',[{
    id:1
}])


publish.emit('b',[{
    id:10
}])

publish.emit('a',[{
    id:2
}])

publish.off('a',function(b){
    console.log(b);
});
