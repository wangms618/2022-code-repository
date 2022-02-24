function againStr(str, k) {
  let len = str.length
  let res = 0
  for (let i = 0; i < len - k + 1; i++) {
    let temp = str.slice(i, k + i)
    let tem = new Set()
    for (let j = 0; j < k; j++) {
      // 检查temp里是否有重复字符串
      if (tem.has(temp[j])) {
        res++
      } else {
        tem.add(temp[j])
      }
    }
  }
  return res
}
let str = ''
console.log(againStr(str, 3));