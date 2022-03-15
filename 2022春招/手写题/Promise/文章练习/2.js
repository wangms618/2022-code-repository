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
        // 调用形式，new Promise((resolve, reject) => {})
        // executor是一个回调函数，接收两个参数
        executor(this.resolve, this.reject)
    }

    resolve(value) {
        if (this.state !== PENDING) return
        this.value = value
        this.state = FULFILLED
    }

    reject(reason) {
        if (this.state !== PENDING) return
        this.reason = reason
        this.state = REJECTED
    }
    then(fulfilled, rejected) {
        fulfilled = typeof fulfilled === ' function' ? fulfilled : v => v
        rejected = typeof rejected === 'function' ? rejected : err => {
            throw err
        }
        if (this.state = FULFILLED) {
            fulfilled(this.value)
        }
        if (this.state = REJECTED) {
            rejected(this.reason)
        }
    }
}