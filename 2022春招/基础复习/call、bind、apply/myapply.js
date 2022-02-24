var a = {
  name: "哈哈哈哈"
}
Function.prototype.myapply = function (context) {
  if (typeof this !== 'function') {
    throw new Error('not function')
  }
  context = context || globalThis
  // 在里面挂载一个this，即当前函数
  // console.log(this) // [Function: text]
  // 向对象添加一个属性，就是text函数，去调用fn
  context.fn = this
  // 解构
  let [arg] = [...arguments].slice(1)
  let result;
  if (arg) {
    result = context.fn(...arg)
  } else {
    result = context.fn()
  }
  delete context.fn
  return result

}

function text(x, y, z) {
  console.log(this.name);
  console.log(x, y, z);
}
const arr = [1, 2, 3]
text.myapply(a, arr)