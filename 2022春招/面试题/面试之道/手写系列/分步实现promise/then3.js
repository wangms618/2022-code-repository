const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class myPromise {
  constructor(executor) {
    // 初始化值
    this.initValue()
    this.initBind()
    // 执行传入的resovve和reject函数
    // 考虑throw的情况
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }

  }
  initValue() {
    this.value = null // 最终值
    this.state = PENDING // Promise初始状态为pending
    this.onFulfilledCallbacks = [] // 保存then中的成功回调
    this.onRejectedCallbacks = [] // 保存then中的失败回调
  }
  initBind() {
    // resolve和reject的this指向永远指向当前的MyPromise实例
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
  }
  resolve(value) {
    setTimeout(() => {
      // 如果state已变化则返回，因为状态改变后就不可修改
      if (this.state !== PENDING) return
      // 如果这个函数被调用，修改状态
      this.state = FULFILLED
      // 取到resolve里的参数
      this.value = value
      // 调用onFulfilledCallbacks里保存的onFulfilled的回调
      this.onFulfilledCallbacks.map(cb => cb(value))
    }, 0)
  }
  reject(value) {
    setTimeout(() => {
      if (this.state !== PENDING) return
      this.state = REJECTED
      this.value = value
      // 调用onRejectedCallbacks里保存的then的onRejected回调
      this.onRejectedCallbacks.map(cb => cb(value))
    }, 0)
  }
  then(onFulfilled, onRejected) {
    // 保持指针指向
    const that = this
    // 接收两个回调
    // 校验参数，确保是函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : err => {
      throw err
    }
    // 如果state状态是fulfilled，将reslove里的参数传给then里的回调参数
    if (this.state === FULFILLED) {
      onFulfilled(this.value)
    } else if (this.state === REJECTED) {
      // 如果state状态是rejected，执行第二个回调
      onRejected(this.value)
    } else { // pending状态
      // pending状态代表，尚未执行完myPromise，这时候我们需要保存回调
      that.onFulfilledCallbacks.push(onFulfilled)
      that.onRejectedCallbacks.push(onRejected)
    }
  }
}
// 遵循js执行机制，then方法是微任务
const p = new myPromise((resolve, reject) => {
  resolve(1)
}).then(res => console.log(res), err => console.log(err))
console.log(2)
// 2 1
// 可以看到这里并没有遵循js执行机制,我们加一个setTimeout简单实现以下
// const p = new Promise((resolve, reject) => {
//   resolve(1)
// }).then(res => console.log(res), err => console.log(err))
// console.log(2)
// // 2 1