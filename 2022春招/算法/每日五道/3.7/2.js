// 给定长度为n的整数数组nums，其中 n > 1，返回输出数组 output ,其中 output[i]等于nums 中除 nums[1]之外其余各元素的乘积
// [1, 2, 3, 4] => [24, 12, 8, 6]
// 先乘起来，再除
// 需要考虑为0的情况
const exceptSelf = (nums) => {
    let allResult = nums.reduce((pre, next) =>
        pre = pre * next
    )
    let len = nums.length
    let res = []
    for (let i = 0; i < len; i++) {
        if (nums[i] == 0) {
            // 删除对应元素
            nums.splice(i, 1)
            res[i] = nums.reduce((pre, next) =>
                pre = pre * next
            )
            // 由于splice会修改原数组，需要把原来的数字添加回去
            nums.splice(i, 0, 0)
        } else {
            res[i] = allResult / nums[i]
        }
    }
    return res
}
let nums = [1, 0, 2, 0, 4]
console.log(exceptSelf(nums));