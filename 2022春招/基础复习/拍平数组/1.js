let ary = [1, [2, [3, [4, 5]]], 6];
let str = JSON.stringify(ary);
//第一种处理
ary = str.replace(/(\[|\])/g, '')
str = "[" + ary + "]"
ary = JSON.parse(str)
console.log(ary);