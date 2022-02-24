// let p1 = new Promise((resolve, reject) => {})
// console.log('p1', p1)
// let p2 = new Promise((resolve, reject) => {
//   resolve('成功')
//   reject('失败')
// })
// console.log('p2', p2)

// let p3 = new Promise((resolve, reject) => {
//   reject('失败')
//   resolve('成功')
// })
// console.log('p3', p3)
// let p4 = new Promise((resolve, reject) => {
//   throw ('错误')
// })
// console.log('p4', p4)

// const p5 = new Promise((resolve, reject) => {
//   resolve('成功')
// }).then(res => console.log(res), err => console.log(err))
// // 打印成功
// const p6 = new Promise((resolve, reject) => {
//   reject('失败')
// }).then(res => console.log(res), err => console.log(err))
// // 打印失败


// // 1秒后输出 ”失败“
// const p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//       reject('失败')
//   }, 1000)
// }).then(res => console.log(res), err => console.log(err))

// // 链式调用 输出 200
// const p3 = new Promise((resolve, reject) => {
//   resolve(100)
// }).then(res => 2 * res, err => console.log(err))
// .then(res => console.log(res), err => console.log(err))


const p9 = new Promise((resolve, reject) => {
  resolve(1)
}).then(res => console.log(res), err => console.log(err))
console.log(2)