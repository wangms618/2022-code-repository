/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canPartition = function (nums) {
    // 求数组和
    let sum = nums.reduce((pre, cur) => pre + cur);

    // 如果 sum 为奇数，直接返回 false
    if (sum % 2 != 0) return false;
    const memo = new Map();
    // 目标和
    const target = sum / 2;

    // curSum是当前累加和，i是指针
    const dfs = (curSum, i) => {
        // 递归的出口
        if (i == nums.length || curSum > target) {
            return false;
        }
        // 递归的出口
        if (curSum == target) {
            return true;
        }
        // 描述一个问题的key
        const key = curSum + "&" + i;
        // 如果memo中有对应的缓存值，直接使用，避免重复计算
        if (memo.has(key)) return memo.get(key);
        // 选择nums[i]或者不选择nums[i] 哪个能分割等和子集就作为结果集
        const res = dfs(curSum + nums[i], i + 1) || dfs(curSum, i + 1);
        // 计算的结果存入memo
        memo.set(key, res);
        return res;
    };

    // 递归的入口，当前和为0，指针为0
    return dfs(0, 0);
};