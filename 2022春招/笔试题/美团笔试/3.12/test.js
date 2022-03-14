var subsets = function (nums) {
    const ans = [];
    const n = nums.length;
    for (let mask = 0; mask < (1 << n); ++mask) {
        const t = [];
        for (let i = 0; i < n; ++i) {
            if (mask & (1 << i)) {
                t.push(nums[i]);
            }
        }
        ans.push(t);
    }
    return ans;
};

// if( mark & ( 1 << i ) )

// <<表示向左移位，1 << i 表示第i位为1，其他位为0的整型值，Mark & ( 1 << i )表示检验标志变量Mark的第i位是否为1。
console.log((1 << 1));