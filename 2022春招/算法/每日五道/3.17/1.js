var fourSum = function (nums, target) {
    // 结果数组
    const quadruplets = [];
    if (nums.length < 4) {
        return quadruplets;
    }
    // 排序
    nums.sort((x, y) => x - y);
    const length = nums.length;
    // 定义初始指针，最多移动到倒数第4的位置
    for (let i = 0; i < length - 3; i++) {
        // 排除重复元素
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        // 如果当前结果已经大于目标值，因为数组是递增的，所以后面不用遍历了，直接跳出
        if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) {
            break;
        }
        // 如果和最后三位和都小于目标值，也可以直接跳出了
        if (nums[i] + nums[length - 3] + nums[length - 2] + nums[length - 1] < target) {
            continue;
        }
        // 又一个指针
        for (let j = i + 1; j < length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            if (nums[i] + nums[j] + nums[j + 1] + nums[j + 2] > target) {
                break;
            }
            if (nums[i] + nums[j] + nums[length - 2] + nums[length - 1] < target) {
                continue;
            }
            // 左指针
            let left = j + 1,
                // 右指针
                right = length - 1;
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    quadruplets.push([nums[i], nums[j], nums[left], nums[right]]);
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    left++;
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    return quadruplets;
};