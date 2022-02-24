// function unique(arr) {
//   if (!Array.isArray(arr)) {
//     console.log('type error!')
//     return
//   }
//   return Array.prototype.filter.call(arr, function (item, index) {
//     // index代表元素现在的位置，又因为filter是过滤器，会返回符合条件的item
//     return arr.indexOf(item) === index;
//   });
// }

function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!');
    return
  }
  return Array.prototype.filter.call(arr, (item, index) => {
    return arr.indexOf(item) === index
  })
}
arr = [1, 2, 3, 4, 5, 6, 7, 6, 2]
console.log(unique(arr));