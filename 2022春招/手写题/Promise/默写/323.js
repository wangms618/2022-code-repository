const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'reject'

class myPromise {
    constructor(executor) {
        this.value = null
        this.reason = null
        this.state = PENDING
        this.resolve = this.resolve.bind(this)
        this.reject = this.reject.bind(this)
        this.resolveCallbacks = []
        this.rejectCallbacks = []
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
        this.resolveCallbacks.map(cb => cb(value))
    }

    reject(reason) {
        if (this.state !== PENDING) return
        this.reason = reason
        this.state = REJECTED
        this.rejectCallbacks.map(cb => cb(reason))
    }

    then(onFulfilled, onRejected) {
        if (this.state === FULFILLED) {
            const that = this
            const result = onFulfilled(this.value)
            return new myPromise((resolve, reject) => {
                if (result instanceof myPromise) {
                    result.then(
                        value => {
                            resolve(value)
                        },
                        reason => {
                            reject(value)
                        }
                    )
                } else {
                    resolve(result)
                }
            })
        } else if (this.state = REJECTED) {
            onRejected(this.reason)
        } else {
            that.resolveCallbacks.push(onFulfilled)
            that.rejectCallbacks.push(onRejected)
        }
    }
}