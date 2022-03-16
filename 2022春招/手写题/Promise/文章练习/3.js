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
        this.onRejectedCallbacks.map(cb => cb(reason))

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

const test7 = new myPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('成功')
    }, 1000)
}).then(res => console.log('回调执行', res), err => console.log('回调执行', err))
// 回调执行 成功