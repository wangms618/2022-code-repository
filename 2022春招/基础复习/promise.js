const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  constructor(exeuctor) {
    this.state = null
    this.value = null
    this.reason = null
    this.fulCallbacks = []
    this.reCallbacks = []
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
    try {
      exeuctor(this.resolve, this.reject)
    } catch (error) {
      this.reject(error)
    }
  }
  resolve(value) {
    if (this.state !== PENDING) return
    this.state = FULFILLED
    this.value = value
    this.fulCallbacks.map(fb => fb(value))
  }
  reject(reason) {
    if (this.state !== PENDING) return
    this.state = REJECTED
    this.reason = reason
    this.reCallbacks.map(fb => fb(reason))
  }
  then(onFulfilled, onRejected) {
    const that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : err => {
      throw err
    }
    return new MyPromise((resolve, reject) => {
      if (this.state == FULFILLED) {
        const result = onFulfilled(this.value)
        if (result instanceof MyPromise) {
          result.then(value => {
            resolve(value)
          }, reason => {
            reject(reason)
          })
        } else {
          resolve(result)
        }
      } else if (this.state == REJECTED) {
        onRejected(this.value)
      } else {
        this.fulCallbacks.push(onFulfilled)
        this.reCallbacks.push(onRejected)
      }
    })


  }
}