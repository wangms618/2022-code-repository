// 已知一个长度为 n 的数组，预先按照升序排列，经由 1 到 n 次 旋转 后，得到输入数组。例如，原数组 nums = [0,1,2,4,5,6,7] 在变化后可能得到：
// 若旋转 4 次，则可以得到 [4,5,6,7,0,1,2]
// 若旋转 7 次，则可以得到 [0,1,2,4,5,6,7]
// 注意，数组 [a[0], a[1], a[2], ..., a[n-1]] 旋转一次 的结果为数组 [a[n-1], a[0], a[1], a[2], ..., a[n-2]] 。

// 给你一个元素值 互不相同 的数组 nums ，它原来是一个升序排列的数组，并按上述情形进行了多次旋转。请你找出并返回数组中的 最小元素 。

// 你必须设计一个时间复杂度为 O(log n) 的算法解决此问题。
/**
 * @param {number[]} nums
 * @return {number}
 */
// 给一个经过n次旋转的数组，找到最小的元素
// 取中间值和最右侧的值
var findMin = function(nums) {
    let low = 0;
    let high = nums.length - 1;
    // 当low与high重合时，就是目标节点
    while (low < high) {
        // 取中间值
        const pivot = low + Math.floor((high - low) / 2);
        // 如果中间值小于最右侧的值，说明中间值是pivot~high中最小的值
        if (nums[pivot] < nums[high]) {
            // 将high定位到pivot上
            high = pivot;
        } else {
            low = pivot + 1;
        }
    }
    return nums[low];
};
