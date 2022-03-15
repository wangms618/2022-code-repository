const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'
// 三种状态

class myPromise {
    // 传入一个函数
    constructor(executor) {
        // 成功值
        this.value = null
        // 失败的原因
        this.reason = null
        // 初始状态
        this.state = PENDING
        // 初始化this指向
        // bind会返回一个指向当前环境this的函数
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
        // 存放回调函数
        this.onFulfilledCallbacks = []
        this.onRejectedCallbacks = []
        // 调用形式，new Promise((resolve, reject) => {})
        // executor是一个回调函数，接收两个参数
        executor(this.resolve, this.reject)
    }

    resolve(value) {
        if (this.state !== PENDING) return
        this.value = value
        this.state = FULFILLED
        // 如果此时，已有回调在等待，直接执行
        this.onFulfilledCallbacks.map(cb => cb(value))
    }

    reject(reason) {
        if (this.state !== PENDING) return
        this.reason = reason
        this.state = REJECTED
        this.onRejectedCallbacks.map(cb => cb(reason))
    }
    then(fulfilled, rejected) {
        fulfilled = typeof fulfilled === 'function' ? fulfilled : v => v
        rejected = typeof rejected === 'function' ? rejected : err => {
            throw err
        }
        if (this.state == FULFILLED) {
            fulfilled(this.value)
        } else if (this.state == REJECTED) {
            rejected(this.reason)
        } else { // 走到最后一步，表示此时，还没有执行resolve()或reject()，这时需将回调存起来
            this.onFulfilledCallbacks.push(fulfilled)
            this.onRejectedCallbacks.push(rejected)
        }
    }
}
const test7 = new myPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功')
    }, 1000)
}).then(res => console.log('回调执行', res), err => console.log('回调执行', err))
// 回调执行 成功