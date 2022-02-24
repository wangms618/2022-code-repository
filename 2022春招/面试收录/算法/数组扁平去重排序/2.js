var arr = [
  [1, 2, 2],
  [3, 4, 5, 5],
  [6, 7, 8, 9, [11, 12, [12, 13, [14]]]], 10
]
// arr = arr.toString().split(",").sort((a, b) => {
//   return a - b
// })
arr = arr.toString()
arr = arr.split(",")
arr = arr.map(Number)
arr = new Set(arr)
arr = Array.from(arr)
arr = arr.sort((a, b) => a - b)
console.log(arr);