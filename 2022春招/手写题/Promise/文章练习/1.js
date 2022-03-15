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
}
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