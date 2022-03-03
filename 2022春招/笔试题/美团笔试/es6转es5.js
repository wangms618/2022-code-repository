// 请写出下面ES6代码编译后所生成的ES5代码
// class Person {
//     constructor (name) {
//          this.name = name;
//     }
//     greet () {
//          console.log(`Hi, my name is ${this.name}`);
//     }
//     greetDelay (time) {
//          setTimeout(() => {
//               console.log(`Hi, my name is ${this.name}`);
//          }, time);
//     }
// }
var Person = (function () {
    function Person(name) {
        this._name = name;
    }
    Person.prototype.greet = function () {
        console.log('Hi, my name is' + this._name);
    }
    Person.prototype.greetDelay = function (time) {
        var _this = this;
        setTimeout(function () {
            console.log('Hi, my name is' + _this.name);
        }, time);
    }
})();