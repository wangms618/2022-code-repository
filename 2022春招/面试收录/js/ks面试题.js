// sort([1, 3, 5], [2, 4, 6]) // => [1, 2, 3, 4, 5, 6]
// sort([1], [2, 3, 4, 5, 6]) // => [1, 2, 3, 4, 5, 6]

// o(n)复杂度，不能sort方法
// call  apply 方法的区别
// padding 与 margin 的区别
// margin塌陷(给了我一些代码，让我说出他们的间距)
// 定长柯理化实现3个数相加  (先讲解柯理化原理)
// 考了一些new实现底层原理  (代码题)

function sort(a, b) {
  let res = []
  let len1 = a.length - 1
  let len2 = b.length - 1
  while (len1 >= 0 && len2 >= 0) {
    if (a[len1] > b[len2]) {
      res.unshift(a.pop())
      len1--
    } else {
      res.unshift(b.pop())
      len2--
    }
  }
  if (len1 >= 0) {
    res = [...a, ...res]
  } else {
    res = [...b, ...res]
  }
  return res
}
console.log(sort([1], [2, 3, 4, 5, 6]));