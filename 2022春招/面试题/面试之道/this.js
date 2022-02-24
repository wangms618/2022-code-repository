// 如果在全局作用域中用var声明变量，此变量会默认成为window的一个属性，let声明的变量则不会添加到window对象中。
// this
var names = '杰杰'
// let names = '杰杰'  // 无效
let obj = {
  names:'杰哥'
}
function person() {
  console.log(this.names);
}
person()


// 非箭头函数:谁调用我，我的this就指向谁，独立调用的情况this指向window
// 箭头函数:this指向的是该函数的词法作用域中的this(函数定义的位置)