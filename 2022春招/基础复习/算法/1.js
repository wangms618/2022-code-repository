// 输入一个数组输出一个按重复次数由少至多排序的数组：
// 例：[1,2,1,4,5,4,3,4,3,3,3] -> [1,4,3]

// 思路：先将数组里的数字转换为键值对，{数字 : 出现次数 - 1}
// 将重复次数为0的键值对删除
// 对象键值对根据属性的值进行排序，运用sort方法，求出数组
function argin(nums) {
  // 先排序    
  let obj = {}
  // 将其转换为对象形式
  for (let i = 0; i < nums.length; i++) {
    // 如果存在于对象
    if (obj[nums[i]] !== undefined) {
      obj[nums[i]]++
    } else {
      obj[nums[i]] = 0
    }
  }
  // 这时对象的键名为重复过的数字，值为重复次数，现在根据重复次数进行排序
  // 先将对象中值为0的删除
  for (let index in obj) {
    if (obj[index] == 0) delete obj[index]
  }
  // Object.keys()方法会返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和正常循环遍历该对象时返回的顺序一致 。
  var sorted_keys_array = Object.keys(obj).sort((a, b) => {
    return obj[a] - obj[b];
  });
  return sorted_keys_array
}
// 2个1，4个2,5个3,3个4
console.log(argin([1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 4, 4, 4]));