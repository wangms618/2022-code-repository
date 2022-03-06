// 分数组和对象的浅拷贝
// ! assign
// let arr = [{
//     a: 1
// }, {
//     b: 2
// }]
// let arr2 = Object.assign([], arr)
// arr2[1].b = 3
// console.log(arr, arr2);
// let obj1 = {
//     person: {
//         name: "kobe",
//         age: 41
//     },
//     sports: 'basketball'
// };
// let obj2 = Object.assign({}, obj1)
// obj2.sports = 'football'
// console.log(obj1, obj2);

// ! 解构赋值
// let obj1 = {
//     person: {
//         name: "kobe",
//         age: 41
//     },
//     sports: 'basketball'
// };
// let obj2 = {
//     ...obj1
// }
// console.log(obj1, obj2);

// let arr = [1, 3, {
//     username: 'kobe'
// }];
// let arr2 = arr.concat();
// arr2[2].username = 'wade';
// arr2[1] = 2
// console.log(arr); //[ 1, 3, { username: 'wade' } ]
// console.log(arr2); // [ 1, 2, { username: 'wade' } ]



const shallowClone = (obj) => {
    if (typeof obj !== 'object') throw new Error('应传入对象类型')
    let res = Array.isArray(obj) ? [] : {}
    // for in可以遍历数组和数组，会遍历出原型上的对象，for of不可以遍历对象
    // 由于for in会遍历出原型上的对象，需要用hasOwnProperty做一层过滤
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            res[key] = obj[key]
        }
    }
    return res
}
let obj1 = {
    person: {
        name: "kobe",
        age: 41
    },
    sports: 'basketball'
};
let obj2 = shallowClone(obj1)
console.log(obj1, obj2);