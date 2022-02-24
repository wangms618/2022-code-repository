const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class myPromise {
  // 
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
  }
  initBind() {
    // resolve和reject的this指向永远指向当前的MyPromise实例
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
  }
  resolve(value) {
    // 如果state已变化则返回，因为状态改变后就不可修改
    if (this.state !== PENDING) return
    // 如果这个函数被调用，修改状态
    this.state = FULFILLED
    // 取到resolve里的参数
    this.value = value
  }
  reject(value) {
    if (this.state !== PENDING) return
    this.state = REJECTED
    this.value = value
  }
  then(onFulfilled, onRejected) {
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
    }
  }
}
// 这种情况分析，如果用setTimeout，在setTimeout还没走完时，就已经.then了，而此时reject尚未执行，所以then里的回调函数状态没有被改变，无法执行
// 等reject('失败')执行完后，then在一秒前已经执行过了，所以我们要实现resolve或者reject的执行，待状态改变后，再执行.then
const p2 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    reject('失败')
  }, 1000)
}).then(res => console.log('回调执行', res), err => console.log('回调执行', err)) // 无输出，证明.then在reject('失败')之前执行导致里面的回调没有调用