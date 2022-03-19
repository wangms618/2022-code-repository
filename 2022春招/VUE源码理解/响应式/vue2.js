// 数据变化了，视图就会更新


// 拿到数组的原型上的所有属性赋值给一个变量
let oldArrayPrototype = Array.prototype

// 深拷贝下来，防止修改oldArrayPrototype导致数组原型的属性也被改变
let proto = Object.create(oldArrayPrototype)

console.log(Array.from(['push', 'shift', 'unshift', 'pop']));
// 重写数组方法
Array.from(['push', 'shift', 'unshift', 'pop']).forEach(method => {
  // 函数劫持，重写函数
  proto[method] = function () {
    // 调用掉原型上面的原方法，保证数组方法的依旧可用，保持this执向
    oldArrayPrototype[method].call(this, ...arguments)
    // 触发视图去更新
    updateView()
  }
})

function observer(target) { // 观察者
  // 一、先判断传入的是否是对象
  if (typeof target !== 'object' || target == null) {
    return target
  }
  // 判断传入的对象是否是数组
  if (Array.isArray(target)) {
    // 重写数组原型
    target.__proto__ = proto
  }
  // 二、写一个for in 循环去检测传入的对象
  for (let key in target) {
    // 三、写一个劫持函数，做数据劫持
    defineReactive(target, key, target[key])
  }
}
// 劫持函数
function defineReactive(target, key, value) {
  // 如果传入target[key]的是一个对象，做递归
  if (typeof value == 'object' && value !== null) {
    observer(value)
  }
  // Object.defineProperty数据劫持
  Object.defineProperty(target, key, {
    get() {
      return value
    },
    set(newVal) {
      if (newVal !== value) {
        // 四、数据源数据改变
        value = newVal
        // 五、视图也变化
        updateView(newVal)
      }
    }
  })
}

function updateView() {
  console.log('视图更新');
}

let data = {
  name: 'wn',
  age: {
    num: 2
  },
  like: {
    a: {
      hb: 'running'
    }
  },
  job: ['coder', 'driver']
}
observer(data)
data.name = 'kk'
data.age.num = 19
data.job.push('s')