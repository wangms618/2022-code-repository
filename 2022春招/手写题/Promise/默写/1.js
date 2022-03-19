class myPromise {
    constructor(executor) {
        this.state = 'pending'
        this.value = null
        this.reason = null
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
        try {
            executor(this.resolve, this.reject)
        } catch (error) {
            this.reject(error)
        }

    }

    resolve(value) {
        if (this.state !== 'pending') return
        this.value = value
        this.state = 'fulfilled'
    }

    reject(reason) {
        if (this.state !== 'pending') return
        this.state = 'rejected'
        this.reason = reason
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