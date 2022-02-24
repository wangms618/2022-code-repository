# 六步实现promise原理
## 前言
八十行实现一个面试够用的promise
必须先实现链式才能实现再去实现
## 实现resolve和reject
先看一段原生Promise代码
```js
promise
```
可以看到原生Promise执行执行resolve，Promise状态会变成fulfilled；执行reject, Promise状态会变成rejected。promise只以第一次执行为准，状态修改后无法再次修改，即每一次promise只能使用一次resolved或reject。
了解这些，实现resolve和reject
### 第一步
明确需求：
1. 执行resolve，Promise状态会变成fulfilled
2. 执行reject, Promise状态会变成rejected
3. promise只以第一次执行为准，状态修改后无法再次修改，即每一次promise只能使用一次resolve或reject。   
带着这个问题我们来构建myPromise函数
```js
// 三种状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class myPromise {

  constructor(executor) {
    // 成功值
    this.value = null
    // 失败的原因
    this.reason = null
    // 初始状态
    this.state = PENDING
    // 初始化this指向
    this.resolve = this.resolve.bind(this)
    this.reject = this.reject.bind(this)
    executor(this.resolve, this.reject)
  }

  resolve(value) {
    // 如果状态已经改变则返回
    if (this.state !== PENDING) return
    // 取到resolve里的参数
    this.value = value
    // 修改状态
    this.state = FULFILLED
  }

  reject(reason) {
    // 如果状态已经改变则返回
    if (this.state !== PENDING) return
    // 取到resolve里的参数
    this.reason = reason
    // 修改状态
    this.state = REJECTED
  }
}
```
我们来看看是否达成了我们的需求
```js
const test1 = new myPromise((resolve, reject) => {
  resolve('成功')
  resolve('再次成功')
})
console.log(test1)
// myPromise {value: "成功", reason: null, state: "fulfilled", resolve: ƒ, reject: ƒ}

const test2 = new myPromise((resolve, reject) => {
  reject('失败')
  resolve('成功')
})
console.log(test2)
// myPromise {value: "null", reason: "失败", state: "rejected", resolve: ƒ, reject: ƒ}
```
通过测试证明了目前myPromise有且只有一次状态修改，也就是说只可调用一次resolve或reject，再次调用resolve或reject无效。
### 第二步
明确需求:
1. Promise中如果有throw的话，就相当于执行了reject，即reject可以用来捕获错误，这里我们使用try/catch解决，修改constructor里的代码。
```js
  try {
    executor(this.resolve, this.reject)
  } catch (error) {
    this.reject(error)
  }
```
检验
```js
const test3 = new myPromise((resolve, reject) => {
  throw ('失败')
})
console.log(test3) // myPromise {value: "null", reason: "失败", state: "rejected", resolve: ƒ, reject: ƒ}
```
可以看到我们成功用reject捕获了错误并输出错误。
接下来我们来实现then。
## 实现then
我们先看看.then是怎么使用的
```js
then
```
### 第三步
明确：
1. .then接收两个回调，一个成功回调一个失败回调
2. 当Promise状态为fulfilled时执行成功回调
3. 当Promise状态为rejected时执行失败回调
明确这三点我们接着写代码：
```js
  then(onFulfilled, onRejected) {
    // 校验两个参数是函数
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err }

    // 如果状态是fulfilled，执行onFulfilled回调函数
    if (this.state = FULFILLED) {
      // 传入this.value也就是resolve的参数
      onFulfilled(this.value)
    } else if (this.state = REJECTED) {
      // 传入this.reason也就是reject的参数
      onRejected(this.reason)
    }
  }
```
检验代码：
```js
const test4 = new myPromise((resolve, reject) => {
  resolve('成功')
}).then(res => console.log(res), err => console.log(err))
// 成功

const test5 = new myPromise((resolve, reject) => {
  reject('失败')
}).then(res => console.log(res), err => console.log(err))
// 失败
```
我们完成了第三步的要求，但是这一步只是模拟了.then的效果，并没有实现.then的真正功能。Promise解决了回调地狱就是因为.then必须在resolve或reject执行后才能执行回调函数，实现异步。可能有的读者认为，这里状态不是改变了吗，这里确实是先resolve或reject执行再执行.then的，但这是个“假的”状态改变，别急，看下段代码
```js
const test6 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功')
  }, 1000)
}).then(res => console.log('回调执行', res), err => console.log('回调执行', err))
// 无输出，证明.then在resolve('成功')之前执行导致里面的回调没有调用
```
我们来分析一下，这里用setTimeout延迟执行resolve，在setTimeout还没走完时，就已经执行完.then了，而此时resolve尚未执行，所以then里的回调函数状态没有被改变，无法执行。等`resolve('成功')`执行完后，then在一秒前已经执行过了，所以我们要实现resolve或者reject的执行，必须等待状态改变后，再执行.then。接下来我们进入第四步。
### 第四步
显然第四步我们必须实现.then在reslove或reject改变状态后执行  
思路：
1. 如果执行then时，发现状态是pending，说明此时reslove和reject尚未执行，先将回调函数保存起来。
2. 等到myPromise里reject或resolve执行时，再将回调函数取出去执行，此时其实.then已经执行完了，回调函数放在resolve或者reject里执行。
3. 用数组保存回调，因为一个promise实例可能会多次then，用数组就一个一个保存了。

实现
```js
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
class myPromise {
  constructor(executor) {
    this.value = null
    this.reason = null
    this.state = PENDING

    // 保存then中的成功回调
    this.onFulfilledCallbacks = []
    // 保存then中的失败回调
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

    // 调用onFulfilledCallbacks里保存的onFulfilled的回调
    this.onFulfilledCallbacks.map(cb => cb(value))

  }
  reject(reason) {
    if (this.state !== PENDING) return
    this.reason = reason
    this.state = REJECTED

    // 调用onRejectedCallbacks里保存的then的onRejected回调
    this.onRejectedCallbacks.map(cb => cb(value))

  }
  then(onFulfilled, onRejected) {
    // 保持指针指向
    const that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : err => {
      throw err
    }
    if (this.state === FULFILLED) {
      onFulfilled(this.value)
    } else if (this.state === REJECTED) {
      onRejected(this.reason)
    } else { // 状态为pending时

      // 保存回调函数 
      that.onFulfilledCallbacks.push(onFulfilled)
      that.onRejectedCallbacks.push(onRejected)

    }
  }
}
```
检验
```js
const test7 = new myPromise((resolve, reject) => {
  setTimeout(() => {
    resolve('成功')
  }, 1000)
}).then(res => console.log('回调执行', res), err => console.log('回调执行', err))
// 回调执行 成功
```
可以看见我们实现了.then在reslove或reject改变状态后执行。接下来我们进入第五步


### 第五步，链式调用
.then支持链式调用，下一次.then的执行受上一次返回值的影响
```js
const p1 = new Promise((resolve, reject) => {
    resolve(8)
  }).then(res => 3 * res) // 第一个.then ，成功回调结果return出去
  .then(res => console.log(res)) // 第二个.then里得到第一次成功回调里返回的值
// 24
const p2 = new Promise((resolve, reject) => {
    resolve(24)
  }).then(res => new Promise((resolve, reject) => resolve(2.5 * res)))
  .then(res => console.log(res))
// 60 
```
1. .then证明方法本身会返回一个新的Promise对象，因为.then的返回值可以.then
2. 如果返回值非promise对象，新promise对象就是成功，值为此返回值
3. 如果返回值是promise对象，会自动执行掉Promise里的resolve或reject

接下来我们来实现
```js
    then(onFulfilled, onRejected) {
    // 保持指针指向
    const that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : err => {
      throw err
    }
    // 返回一个promise
    return new myPromise((resolve, reject) => {
      if (that.state === FULFILLED) {
        // 获取成功回调函数的执行结果
        const result = onFulfilled(that.value);
        // 如果.then里返回的是promise函数
        if (result instanceof myPromise) {
          result.then(
            value => {
              resolve(value)
            },
            reason => {
              reject(reason)
            }
          )
        } else { // .then里返回的不是promise函数，则在当前.then返回的promise里执行resolve
          resolve(result)
        }
      } else if (that.state === REJECTED) {
        onRejected(that.reason)
      } else { // 状态为pending
        that.onFulfilledCallbacks.push(onFulfilled)
        that.onRejectedCallbacks.push(onRejected)
      }
    })
  }
```
检测
```js
const test11 = new Promise((resolve, reject) => {
  resolve(8)
}).then(res => 3 * res, err => console.log(err))
.then(res => console.log(res), err => console.log(err))
//24
const test12 = new Promise((resolve, reject) => {
    resolve(24)
  }).then(res => new Promise((resolve, reject) => resolve(2.5 * res)), err => console.log(err))
  .then(res => console.log(res), err => console.log(err))
//60
```
可以看到我们实现了then的功能

## 第六步
如果你了解过js执行机制，那就应该知道.then是微任务，它一定是在一次宏任务执行完后执行的，如果不清楚也没关系，我们来看一个例子
```js
const test8 = new myPromise((resolve, reject) => {
  resolve(1)
}).then(res => console.log(res), err => console.log(err))
console.log(2)
// 1 2

const test9 = new Promise((resolve, reject) => {
  resolve(1)
}).then(res => console.log(res), err => console.log(err))
console.log(2)
// 2 1
```
可见在Promise中.then是个微任务，它一定是在当前宏任务执行完后执行的。

这里我们借助setTimeout来完善一下myPromise,其实setTimeout属于宏任务，它不会进入第一次宏任务队列，这里就牵扯到事件循环，这里不再细说，我们只需要知道借助setTimeout不进入第一次宏任务队列的特性可以帮助我们实现.then是微任务的效果。
```js
  then(onFulfilled, onRejected) {
    // 保持指针指向
    const that = this
    onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : v => v
    onRejected = typeof onRejected === 'function' ? onRejected : err => {
      throw err
    }
    return new myPromise((resolve, reject) => {
      if (that.state === FULFILLED) {
        // 调用setTimeout
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
```
这里看到我们在返回的Promise里用setTimeout包裹了将要执行的代码块
```js
const test10 = new myPromise((resolve, reject) => {
  resolve(1)
}).then(res => console.log(res), err => console.log(err))
console.log(2)
// 2 1
```
由此看到我们实现了原生Promise里的效果