// 1. 对象数组如何去重
// 2. 如何从10000个数中找到最大的10个数
// 3. 手动封装一个请求函数，可以设置最大请求次数，请求成功则不再请求，
// 请求失败则继续请求直到超过最大次数
// 4. 选择器的优先级
// 5. forEach，map，和filter的区别

// 1. 对象数组如何去重
const list = [
  {id:1,a:1},
  {id:1,a:2},
  {id:3,a:3},
  {id:4,a:4},
  {id:4,a:6},
]
function set(arr) {
  let fillet = new Set()
  for (let i = 0; i < arr.length; i++){
    if (fillet.has(arr[i].id)) {
      arr.splice(i, 1)
      i--
    } else {
      fillet.add(arr[i].id)
    }
  }
}
set(list)
console.log(list);

// 2. 如何从10000个数中找到最大的10个数
// 堆排序


// 3. 手动封装一个请求函数，可以设置最大请求次数，请求成功则不再请求，
// 请求失败则继续请求直到超过最大次数

// function request(url, body, succ, error, maxCount = 5) {
//   return fetch(url, body)
//     .then(res => succ(res))
//     .catch(err => {
//       if (maxCount <= 0) return error('请求超时');
//       return request(url, body, succ, error, --maxCount);
//     });
// }


// 6.
// arr = [
//   { data: 1 },
//   { data: 1 },
//   { data: 1 }
// ]
// const newArr = arr.map(item => {
//   item.data = item.data + 1
//   return item.data
// })
// console.log(newArr, arr);

// 7. 组合继承和

// 8.判断一个对象为数组
function isArray(arg) {
  // return Array.isArray(arg)
  return Object.prototype.toString.call(arg)
}

arr = [12, 3, 4]
console.log(isArray(arr));

// 9.编写一个函数将列表子元素顺序反转

// 10.link和@import的区别
// link属于HTML标签，而@import是CSS提供的页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载
// import只在IE5以上才能识别，而link是HTML标签，无兼容问题
// link方式的样式的权重 高于@import的权重.
// link引入的样式是可以被js更改的，@import是不能被更改的