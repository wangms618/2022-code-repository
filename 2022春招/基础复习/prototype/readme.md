[地址](https://github.com/mqyqingfeng/Blog/issues/2)


# 1. prototype
- 每个**函数**都有一个 prototype 属性  
- prototype是函数才会有的属性  
- 函数的 prototype 属性指向了一个对象，这个对象正是调用该构造函数而创建的实例的原型
- 那什么是原型呢？你可以这样理解：每一个JavaScript对象(null除外)在创建的时候就会与之关联另一个对象，这个对象就是我们所说的原型，每一个对象都会从原型"继承"属性。

# 2. `__proto__`
- 这是每一个JavaScript**对象**(除了 null )都具有的一个属性，叫__proto__，这个属性会指向该对象的原型。


```js
function Person() {}
var person = new Person();
console.log(person.__proto__ === Person.prototype); // true
```


# 3. constructor
每个原型都有一个 constructor 属性指向关联的构造函数。
```js
function Person() {}
console.log(Person === Person.prototype.constructor); // true

```
***
## 综合
```js
function Person() {}
var person = new Person();
console.log(person.__proto__ == Person.prototype) // true
console.log(Person.prototype.constructor == Person) // true
// 顺便学习一个ES5的方法,可以获得对象的原型
console.log(Object.getPrototypeOf(person) === **Person**.prototype) // true
```