// 1. == vs ===
// if (x == y) {
//   console.log(true);
// }
// 1. x y 类型是否相等，相等就比较大小
// 2. 类型不相等，就进行类型转换
// 3. 会先判断是否在对比 null 和 undefined, 是的话返回true
// 4. 判断是否在对比 string 和 number ,是的话就会将字符串转换为number
// 5. 如果有一方为boolean ，就会把布尔值转为number
// 6. 如果有一方为object, 且另一方为string, number, 或者symbol, 就会把object转为原始类型进行比较
// [] == ![]

// 什么是闭包
// 在js中，根据词法作用域的规则，内部函数总是可以访问外部函数中声明的变量
// 当通过调用一个外部函数发挥一个内部函数后，即使该外部函数已经执行结束，但内部函数引用的变量依然保存在内存中
// 我们把这些变量的集合称为闭包

// for (var i = 0; i <= 5; i++) {
//   (function (j) {
//     setTimeout(function () {
//       console.log(j);
//     }, 1000)
//   })(i)
// }



// 深浅拷贝
// 什么是浅拷贝？如何实现浅拷贝？什么是深拷贝？如何实现深拷贝？
let a = {
  age: 1,
  like: {
    name: 'reading'
  }
}
// let b = Object.assign({}, a)
// let b = {...a}
// let b = JSON.parse(JSON.stringify(a))
// a.like.name = 'running'
// console.log(b.like.name);

// JSON.parse(JSON.stringify(a))局限性
// 1. 会忽略undefined
// 2. 会忽略symbol
// 3. 不能序列化函数
// 4. 不能解决循环引用的对象


// let obj = {
//   a: 1,
//   b: {
//     c: 2,
//     d: 3
//   }
// }
// obj.c = obj.b
// obj.e = obj.a
// obj.b.d = obj.c
// obj.b.c = obj.c
// obj.b.e = obj.b.c
// let newobj = JSON.parse(JSON.stringify(obj))
// console.log(newobj);


function deepClone(obj) {
  function isObject(o) {
    return (typeof o === 'object' || typeof o === 'function') && o !== null
  }
  if (!isObject(obj)) {
    throw new Error('非对象')
  }

  let isArray = Array.isArray(obj)
  let newObj = isArray ? [...obj] : {
    ...obj
  }
  Reflect.ownKeys(newObj).forEach(key => {
    newObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key]
  })
  return newObj
}

let b = deepClone(a)
a.like.name = 'running'
console.log(b.like.name);


// 原型(如何理解原型？如何理解原型链?)
// 原型是函数对象的一个属性，该属性定义了构造函数制造出来的所有对象的共同祖先
// 通过构造函数产生的对象是可以继承到原型上的属性和方法
function Person(name) {
  this.name = name
}
Person.prototype.say = function () {
  console.log(123);
}
let p1 = new Person('ajax')

// p1.__proto__ = Person.prototype
// 原型链: 通过隐式原型找到构造函数的prototype,该prototype里面又含有__proto__，再可以找到该构造函数的构造函数
//        以此类推,这种链状的访问顺序叫做原型链