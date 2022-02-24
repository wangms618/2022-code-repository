const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class myPromise {
  constructor(executor) {
    this.value = null
    this.reason = null
    this.state = PENDING
    this.onFulfilledCallbacks = []
    this.onRejectedCallbacks = []
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
    try {
      executor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }
  resolve(value) {
    if (this.state !== PENDING) return
    this.value = value
    this.state = FULFILLED
    this.onFulfilledCallbacks.map(cb => cb(value))
  }
  reject(reason) {
    if (this.state !== PENDING) return
    this.reason = reason
    this.state = REJECTED
    this.onRejectedCallbacks.map(cb => cb(value))
  }
  then(onFulfilled, onRejected) {
    const that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : err => {
      throw err
    }
    return new myPromise((resolve, reject) => {
      if (that.state === FULFILLED) {
        setTimeout(() => {
          const result = onFulfilled(that.value);
          if (result instanceof myPromise) {
            result.then(
              value => {
                resolve(value)
              },
              reason => {
                reject(reason)
              }
            )
          } else {
            resolve(result)
          }
        }, 0)
      } else if (that.state === REJECTED) {
        setTimeout(() => {
          onRejected(that.reason)
        }, 0)
      } else {
        that.onFulfilledCallbacks.push(onFulfilled)
        that.onRejectedCallbacks.push(onRejected)
      }
    })
  }
}
const test10 = new myPromise((resolve, reject) => {
  resolve(1)
}).then(res => console.log(res), err => console.log(err))
console.log(2)
// 2 1