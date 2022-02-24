// 实现一个flat函数
let arr = [1, 2, 3, [1, 2, [4, 5, [6]]]]
// let newArr = arr.flat()
// console.log(newArr);

// let count = 0
//   return arr.map((item, index) => {
//     if (Array.isArray(item) && count <= num) {
//       count++
//       let curArr = arr.splice(index, 1, [...item])
//       return arr
//     }
//   })

function myflat(arr, num = 1) {
  return num > 0 ? arr.reduce((pre, cur) => {
    return pre.concat(Array.isArray(cur) ? myflat(cur, num - 1) : cur)
  }, []) : arr.slice()
}


console.log(myflat(arr));

// 实现一个flat函数
let arr = [1,2,3,[2,3,[4,5]]]

function  myFlat(arr,num){
  let count = 0
  function sub(){
    arr.map((item, index) => {
      if (Array.isArray(item)) {
        count++
        let curArr = arr.splice(index, 1, ...item)
      }
    })
  }
  for(let i = 0;i < num;i++){
    sub()
  }
}

myFlat(arr,2)
console.log(arr);
