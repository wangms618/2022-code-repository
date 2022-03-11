function test(ready) {
    return new Promise((resolve, reject) => {
        if (ready) {
            resolve('resolve')
        } else {
            reject('reject')
        }
    })
}

const a = test(false)
a.then(res => {
    console.log(res);
}, err => {
    console.log(err);
})