// k个子集和
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function canPartitionKSubsets(nums, k) {
    if (k > nums.length) return false
    let sum = nums.reduce((pre, next) => pre + next)
    if (sum % k !== 0) return false

    function backtrack(nums, index, bucket, target) {
        // 检查所有桶之和是否都为target
        if (index == nums.length) {
            for (let i = 0; i < bucket.length; i++) {
                if (bucket[i] != target) {
                    return false
                }
            }
            return true
        }
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i] + nums[index] > target) {
                continue
            }
            bucket[i] += nums[index]
            if (backtrack(nums, index + 1, bucket, target)) {
                return true
            }
            bucket[i] -= nums[index]
        }
        return false
    }
    let bucket = new Array(k).fill(0);
    let target = sum / k;
    /* 降序排序 nums 数组   优化方式，以期尽快的命中剪枝*/
    nums.sort((a, b) => b - a);
    // 穷举，看看 nums 是否能划分成 k 个和为 target 的子集
    return backtrack(nums, 0, bucket, target);
}