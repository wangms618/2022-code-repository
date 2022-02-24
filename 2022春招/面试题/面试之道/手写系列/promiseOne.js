function myPromise(execotor) {
  let self = this
  self.status = 'pending'
  self.data = undefined // 存储resolve结果
  self.callbacks = [] // {resolve=>{} , reject =>{}}
  function resolve(value) {
    if (self.status !== 'pending') {
      return
    }
    // 将状态改变成resolved
    self.status = 'resolved'
    // 存值
    self.data = value
    // 如果有待执行的callback函数，立即异步执行
    if (self.callbacks.length > 0) {
      setTimeout(() => {
        self.callbacks.forEach(callbackObj => {
          callbackObj.onResolved(value)
        })
      }, 0)
    }
  }

  function reject(value) {
    if (self.status !== 'pending') {
      return
    }
    // 将状态改变成rejected
    self.status = 'rejected'
    // 存值
    self.data = value
    // 如果有待执行的callback函数，立即异步执行
    if (self.callbacks.length > 0) {
      setTimeout(() => {
        self.callbacks.forEach(callbackObj => {
          callbackObj.onRejected(value)
        })
      }, 0)
    }

  }

  try {
    execotor(resolve, reject)
  } catch (error) {
    reject(error)
  }

}

// promise 原型挂载各种方法
myPromise.prototype.then = function (onResolved, onRejected) {
  let self = this
  return new myPromise((resolve, reject) => {
    if (self.status === 'pending') {
      self.callbacks.push({
        onResolved() {
          onResolved(self.data)
        },
        onRejected() {
          onRejected(self.data)
        }
      })
    } else if (self.status === 'resolved') {
      setTimeout(() => {
        const result = onResolved(self.data)
        // 这里说明.then里的回调返回的是Promise对象
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
    } else {
      setTimeout(() => {
        onRejected(self.data)
      }, 0)
    }
  })
}


let p = new myPromise((resolve, reject) => {
  setTimeout(() => {
    console.log('yes');
    resolve('ok')
  }, 100)
})
p.then(
  value => {
    console.log(value, 'onResolved');
  },
  reject => {}
)