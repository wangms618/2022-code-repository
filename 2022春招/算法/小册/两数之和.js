var twoSum = function(nums, target) {
    const diff = {}
    const len = nums.length
    for(let i = 0; i<len ; i++ ){
        // 利用差值
        if(diff[target-nums[i]] !== undefined){
            return [diff[target-nums[i]],i]
        }
        diff[nums[i]] = i
    }
    return 
};