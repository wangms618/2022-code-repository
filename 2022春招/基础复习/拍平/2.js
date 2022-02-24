let ary = [1, [2, [3, [4, 5]]], 6];
let result = []
let fn = function (ary) {
  for (let i = 0; i < ary.length; i++) {
    let item = ary[i]
    if (Array.isArray(item)) {
      fn(item)
    } else {
      result.push(item)
    }
  }
}
fn(ary)
console.log(result);