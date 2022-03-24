// 132
// 递增序列
// 进2，如果碰到比2大的就退栈，值给mid，说明2是当前数字右侧的数
// 如果当前值小于mid，说明成立
function test123(nums) {
    let mid = -Infinity
    let stack = []
    let len = nums.length
    for (let i = 0; i < len; i++) {
        console.log(mid, nums[i], stack);
        if (nums[i] < mid) return true
        while (stack.length && stack[stack.length - 1] < nums[i]) {
            mid = stack.pop()
        }
        stack.push(nums[i])
    }
}
let arr = [3, 1, 4, 2]
console.log(test123(arr));