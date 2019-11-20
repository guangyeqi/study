function deepClone(o1, o2) {
    for (let k in o2) {
        if (typeof o2[k] === 'object') {
            o1[k] = {};
            deepClone(o1[k], o2[k]);
        } else {
            o1[k] = o2[k];
        }
    }
}


/**
 * 递归深拷贝
 * 期望目标，let newObj=deepCopy(oldObj);
 * ****/

// 双参数解析
function copy(newData, oldData) {
    // 遍历旧数据，oldData
    for (let key in oldData) {
        //判断oldData[key]是否为对象，是继续递归复制，不是直接复制。
        if (typeof oldData[key] === 'object') {
            newData[key] = {};
            copy(newData[key], oldData[key]);
        } else {
            newData[key] = oldData[key];
        }
    }
}

//测试
let a = {}
let b = {
    id: 'b',
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9],
    attr: {
        name: 'yoyo',
        age: 18,
        school: {
            middle: 'high school',
            high: 'binzhou college'
        }
    },
}
copy(a, b);
a.id = "a";
console.log(a, b);



function multiFilter(array, filters) {
    const filterKeys = Object.keys(filters)
    // filters all elements passing the criteria
    return array.filter((item) => {
        // dynamically validate all filter criteria
        return filterKeys.every(key => {
            //ignore when the filter is empty Anne
            if (!filters[key].length) return true
            return !!~filters[key].indexOf(item[key]) //厉害了，，，!!~
        })
    })
}

/**
 * 数据条件过滤
 * 要求，根据条件与原始数据，得到过滤后的数据。
 * 规则
 * ****/

function clearData(rule, oldData) {
    const aimKeys = Object.keys(rule);
    // console.log(aimKeys);
    return oldData.filter((item) => {
        console.log('item', item);
        // return aimKeys.every((key) => {
        //     if (!rule[key].length) {
        //         return true;
        //     }
        //     console.log('sdsa', rule[key].indexOf(item[key]));
        //     if (key === 'age') {
        //         let arr = rule[key];
        //         let aim = parseFloat(item[key]);
        //         if (!arr[1]) {
        //             return aim <= arr[0];
        //         } else {
        //             if (typeof arr[1] === 'number') {
        //                 return aim >= arr[0] && aim <= arr[1];
        //             } else {
        //                 return aim >= arr[0];
        //             }
        //         }
        //     }else{
        //         return true;
        //     }
        //     // return !!~rule[key].indexOf(item[key]);
        // })

        return clean(rule,item);
    });
}


function clean(rule, item) {
    console.log('xxx: ',rule,item);
    return true;
}

//测试
var list = [{
        name: 'Anne',
        age: 23,
        gender: 'female'
    },
    {
        name: 'Leila',
        age: 16,
        gender: 'female'
    },
    {
        name: 'Jay',
        age: 19,
        gender: 'male'
    },
    {
        name: 'Mark',
        age: 40,
        gender: 'male'
    }
];

var rule = {
    name: ['n', 'Jay'],
    age: {
        type:Number,
        min:16,
        max:30,
        sort:true,
    }
}

let A = clearData(rule, list);

// console.log(A);

/**************************************************************/