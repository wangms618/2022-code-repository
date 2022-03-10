// 环形子数组的最大和
// 给定一个长度为 n 的环形整数数组 nums ，返回 nums 的非空 子数组 的最大可能和 。
// 环形数组 意味着数组的末端将会与开头相连呈环状。
// 形式上， nums[i] 的下一个元素是 nums[(i + 1) % n] ， nums[i] 的前一个元素是 nums[(i - 1 + n) % n] 。
// 子数组 最多只能包含固定缓冲区 nums 中的每个元素一次。
// 形式上，对于子数组 nums[i], nums[i + 1], ..., nums[j] ，不存在 i <= k1, k2 <= j 其中 k1 % n == k2 % n 。
// 解：
// 数组和为sum    最大和为max  最小和为min
// 如果最大和max小于0；证明数组中没有正数；所以也就不用关心是不是环形的数组了 直接返回max（一位都是负数难道你还绕过来加一个负数？）
// 否则 如果最大和max不需要绕圈 就返回max；
// 需要绕圈 就返回数组和sum 减去最小和 min 因为中间一部分是最小和，两边部分加起来就一定是最大和；
// 直接Math.max(max, sum-min)
// 动态规划
// dpMax[i] = nums[i] + Math.max(dpMax[i-1] , 0)
var maxSubarraySumCircular = function(nums) {
    const sum = nums.reduce((a,b)=>a+b,0); //数组和
    const length = nums.length;
    let max = nums[0]; //记录当前数组最大和
    let dpMax = [nums[0]];
    let min = nums[0]; //记录数组最小和
    let dpMin = [nums[0]];
    for(let i=1; i<length; i++) {
        dpMax[i] = nums[i] + Math.max(dpMax[i-1],0);
        dpMin[i] = nums[i] + Math.min(dpMin[i-1],0);
        max = Math.max(dpMax[i], max);
        min = Math.min(dpMin[i], min);
    }
    if(max<0) return max;
    return Math.max(sum - min, max);
};