// let obj1 = {
//   person: {
//     name: "kobe",
//     age: 41
//   },
//   sports: 'basketball'
// };
// let obj2 = Object.assign({}, obj1)
// obj1.sports = 'football'
// console.log(obj2);
// console.log(obj1);

// let obj1 = {
//   person: {
//     name: "kobe",
//     age: 41
//   },
//   sports: 'basketball'
// };
// let obj2 = {
//   ...obj1
// }
// obj1.sports = 'football'
// obj1.person.name = 'wade'
// console.log(obj2);
// console.log(obj1);

let arr = [1, 3, {
  username: 'kobe'
}];
let arr2 = arr.concat();
arr2[2].username = 'wade';
arr2[1] = 2
console.log(arr); //[ 1, 3, { username: 'wade' } ]
console.log(arr2); // [ 1, 2, { username: 'wade' } ]



// 浅拷贝
let obj1 = {
  name : '浪里行舟',
  arr : [1,[2,3],4],
};
let obj3=shallowClone(obj1)
obj3.name = "阿浪";
obj3.arr[1] = [5,6,7] ; // 新旧对象还是共享同一块内存
// 这是个浅拷贝的方法
function shallowClone(source) {
  var target = {};
  for (var i in source) {
    // hasOwnProperty不支持隐式原型上绑定的属性
      if (source.hasOwnProperty(i)) {
          target[i] = source[i];
      }
  }
  return target;
}
console.log('obj1',obj1) // obj1 { name: '浪里行舟', arr: [ 1, [ 5, 6, 7 ], 4 ] }
console.log('obj3',obj3) // obj3 { name: '阿浪', arr: [ 1, [ 5, 6, 7 ], 4 ] }

// function clone(obj) {
//   var target = {}
//   for (let item in obj) {
//     if (obj.hasOwnProperty(item)) {
//       target[item] = obj[item]
//     }
//   }
//   return target
// }