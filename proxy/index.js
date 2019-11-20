// /**
//  * let tool=new Proxy(target,handle);
//  * target ->:任何类型的对象，数组，函数，另一个代理
//  * handle ->:对象，执行一个操作时，定义代理行为的函数
// */

// let obj={};
// let handle={
//     set(obj,key,value){
//         console.log('set',key,obj,value);
//         if(key == 'age'){
//             if(!Number.isInteger(value)){
//                 throw new TypeError('the age must be a integer')
//             }
//             if(value >200){
//                 throw new RangeError('The age seems invalid');
//             }
//         }
//         obj[key] = value;
//     },
//     get(obj,key){
//         console.log('get',key,obj);
//         // return key in obj ? obj[key] : 37;
//     }
// }
// let tool = new Proxy(obj,handle)


// tool.a=1;
// tool.b=undefined;

// console.log(tool,obj);
// console.log(tool.a,obj.a);
// console.log(tool.b,obj.b);



// console.log('c' in tool,tool.c);
// console.log('c' in obj,obj.c);

// console.log(tool,obj);
// console.log('/////////////////////////////////////////////////////////////////////////////////////');


// tool.age=18;
// console.log(obj,tool);
// // tool.age=2012;
// // console.log(obj,tool)
// // tool.age="old";
// // console.log(obj,tool)


// 通过一个新构造函数来扩展一个已有的构造函数

function extend(sub,base){
    let desc=Object.getOwnPropertyDescriptor(base, "");
}
