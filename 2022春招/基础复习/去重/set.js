function unique(arr) {
  if (!Array.isArray(arr)) {
    console.log('type error!')
    return
  }
  return [...new Set(arr)]
}
arr = [1, 2, 3, 4, 5, 6, 7, 6, 2]
console.log(unique(arr));