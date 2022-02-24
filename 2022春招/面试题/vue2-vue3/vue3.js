// 2.0 默认递归，改变数组的length属性是无效的，对象不存在的属性是不能被劫持的

let toProxy = new WeakMap() // 原对象 ： 代理过的对象
let toRaw = new WeakSet() // 代理过的对象 : 原对象


// 判断是否是val对象
function isObject(val) {
  return typeof val === 'object' && val !== null
}

// 第一步
// 这里的想法是拿到target并将它变成响应式的
function reactive(target) {
  // 创建响应式对象
  return createReactiveobject(target)
}

// 第二步
function createReactiveobject(target) {
  //源码里如果不是对象的话，用ref变成响应式，这里先写成如果不是对象的话，直接返回，
  if (!isObject(target)) { // 判断target是否是一个对象
    return target
  }
  // 如果是一个对象，给这个对象做代理
  let proxy = toProxy.get(target)
  // 如果被代理过，直接return
  if (proxy) {
    return proxy
  }
  // Proxy的第二个参数
  let baseHandler = {
    get(target, key, receiver) {
      console.log('获取');
      // Reflect.get代理，只有取值的那一刻发现是对象才递归
      let result = Reflect.get(target, key, receiver)
      // 取到的那一刻发现是对象才去做下一次递归
      return isObject(result) ? reactive(result) : result // 递归多层代理
    },
    set(target, key, value, receiver) {
      // 查看原对象是否有这个键key
      let hadKey = target.hasOwnProperty(key)
      let oldValue = target[key]
      // 如果原对象没有这个键key，说明是新增
      if (!hadKey) {
        console.log('新增');
      } else if (oldValue !== value) { // 已有这个键，旧值不等于新值
        console.log('修改');
      }
      // 将代理好的对象内部的值改动
      let res = Reflect.set(target, key, value, reactive)
      return res
    }
  }
  // 第三步让target被代理，baseHandler拿出去写，因为baseHandler是一个对象
  let observed = new Proxy(target, baseHandler) // 代理target
  toProxy.set(target, observed)
  toRaw.add(observed,target)
  return observed
}

// let proxy = reactive({
//   name: 'westbrook',
//   age: {
//     n: 18
//   }
// })

// console.log(proxy.age);
// proxy.age.n = 17
let obj = {
  name: '慧慧',
  age: 18
}
let proxy = reactive(obj)
proxy.name = 'wn'