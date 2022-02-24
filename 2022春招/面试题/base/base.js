// console.log('1'.toString()); // 1
// 0.1 + 0.2 == 0.3  //false
// null // 000

// function test(person) { // 地址1003
//   person.age = 20 // 地址1003
//   person = { // 地址1004
//     name: '袁总',
//     age: 30
//   }
//   return person // 地址1004
// }
// const p1 = { // 假设地址1003
//   name: '胡总',
//   age: 25
// }
// const p2 = test(p1)
// console.log(p1); // { name: '胡总', age: 20 } 这里是20不是25
// console.log(p2); // { name: '袁总', age: 30 }



const Person = function () { }
const p1 = new Person()
console.log(p1 instanceof Person); // true

var str = 'hello world'
console.log(str instanceof String); //false 

var str1 = new String('hello world')
console.log(str1 instanceof String); // true 

var obj = { name: 'wn' }
console.log(obj instanceof Object);
// var num = 1// var num = new NUmber(1)
// var obj= {} // var obj = new Object()


'a'+ +'b'  //aNaN