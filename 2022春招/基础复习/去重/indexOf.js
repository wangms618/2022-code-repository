function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return
  }
  let res = []
  for (let i = 0; i < arr.length; i++) {
    console.log(res.indexOf(arr[i]));
    // 如果没有此下标则返回-1
    if (res.indexOf(arr[i]) === -1) {
      res.push(arr[i])
    }
  }
  return res
}

arr = [1, 2, 3, 4, 5, 6, 7, 6, 2]
console.log(unique(arr));