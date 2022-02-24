const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

function myPromise(fn) {
  this.state = PENDING
  this.value = null
  this.resolvedCallbacks = []
  this.rejectedCallbacks = []

  function resolve(value) {
    if (this.state === PENDING) {
      this.state = RESOLVED
      this.value = value
      this.resolvedCallbacks.map(cb => cb(value))
    }
  }

  function reject(value) {
    if (this.state === PENDING) {
      this.state = REJECTED
      this.value = value
      this.rejectedCallbacks.map(cb => cb(value))
    }
  }
  try {
    fn(resolve, reject)
  } catch (error) {
    reject(error)
  }




  myPromise.prototype.then = function (onFulfilled, onRejected) {
    const that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : err => {
      throw err
    }
    if (that.state === PENDING) {
      that.resolvedCallbacks.push(onFulfilled)
      that.rejectedCallbacks.push(onRejected)
    }
    if (that.state === RESOLVED) {
      onFulfilled(that.value)
    }
    if (this.state === REJECTED) {
      onRejected(that.value)
    }
  }
}

// new Promise((resolve, reject) => {
//     resolve('ok') // 2
//   })
//   .then(res => {
//       console.log(res); // ok // 1
//     },
//     err => {
//       console.log(err);
//     }
//   )
//   .then(res => { // 3
//     console.log(res);
//   })
const test3 = new myPromise((resolve, reject) => {
  throw ('失败')
})
console.log(test3);