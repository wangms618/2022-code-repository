var arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
]
// arr = Array.from(new Set(arr.flat(Infinity))).sort((a, b) => { return a - b })
arr = arr.flat(Infinity)
arr = new Set(arr)
arr = Array.from(arr)
console.log(arr);