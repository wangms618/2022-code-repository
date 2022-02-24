# 1. 了解promise吗？
了解，promise是一种异步编程解决方案，有三种状态，pending(进行中),fulfilled(已完成)、rejected(已失败)，
当promise的状态由pending转为fulfilled或rejected时，会执行对应的方法，状态一经改变就无法返回，

# promise解决了什么？
解决异步编程

# promise有什么缺点，解决的痛点是什么？
1. 回调地狱(多个回调相互嵌套，导致代码可读性差，难以维护，代码臃肿)
2. 支持多并发的请求
3. 解决了可读性差代码问题
4. 解决了代码的信任问题，promise只有一次决议(状态)，任何.then中的回调只会执行一次，解决了信任问题，不会存在回调调用过早或过晚

# promise解决的痛点还有其他的解决方法吗？
async/await setTimeout 回调函数 Generator函数

# 用setTimeout做异步有什么问题？
setTimeout并不能让代码在规定时间内去执行

# Generator函数的缺点，为什么不用Generator而用promise?
Generator要手动控制流程，promise只需要then自动执行

# async/await 的缺点
没有错误捕捉机制，要去自己写try catch

# promise如何使用？
创建一个promise的实例，用.then方法分别指定fulfilled的状态和rejected的状态回调函数
.then第一个回调接收的是fulfilled的回调，第二个回调接收的是rejected的回调
.catch接收rejected的回调

# promise有什么问题，缺点？
状态一经改变状态无法取消
promise一旦报错是无法在外部捕捉到错误的
promise的内部如何运行很难监测
# 如何解决
async/await

# 老旧的浏览器没有promise全局对象怎么办
引入这个es6-promise-polyfill插件就可以使用promise了

# 怎么让一个函数无论promise对象成功还是失败都能被调用
Promise.finally()
promise状态只要改变finally就会执行

# 红灯3秒亮一次，绿灯1秒亮一次，黄灯2秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）

# 实现 mergePromise 函数，把传进去的数组按顺序先后执行，并且把返回的数据先后放到数组 data 中。


# 封装一个异步加载图片的方法

# 手写实现promise


