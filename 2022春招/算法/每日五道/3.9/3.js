// 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。

// 如果数组中不存在目标值 target，返回 [-1, -1]。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
var searchRange = function (nums, target) {
    let res = []
    let left = 0
    let right = nums.length - 1
    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2)
        console.log(mid);
        if (nums[mid] == target) {
            // 当前位置取左右指针，左右扩散，寻找边界
            let left = mid,
                right = mid
            // 初始化res数组
            res[0] = left
            res[1] = right
            // 如果左右指针还在target值上，继续扩散
            while (nums[left] == target || nums[right] == target) {
                if (nums[--left] == target) {
                    res[0]--
                }
                if (nums[++right] == target) {
                    res[1]++
                }
            }
            return res
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    return [-1, -1]
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));