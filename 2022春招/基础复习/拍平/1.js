let ary = [1, [2, [3, [4, 5]]], 6];
// let str = ary.flat(Infinity)
// console.log(fla);
let str = JSON.stringify(ary)
ary = str.replace(/(\[|\])/g, '')
// /(\[|\])/g
ary = JSON.parse(`[${ary}]`)
console.log(ary);