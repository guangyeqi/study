/**
 * 三种场景
 * 1，小于某个值，
 * 2，大于某个值
 * 3，在min与max之间
 * 
 * ****/

function createRule(mins, maxs) {
    let min = parseInt(mins);
    let max = typeof maxs === 'boolean' ? maxs : parseInt(maxs);

    if (!max) {
        return '1';
    } else {
        if (typeof max === 'number') {
            return '2';
        } else {
            return '3';
        }
    }
}
//
let aa=createRule(15,false);
let bb=createRule(15,true);
let cc=createRule(15,200);
// console.log(aa,bb,cc);
