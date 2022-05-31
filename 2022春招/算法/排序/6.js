// 一分为三，有个基准值
// function quickSort(arr) {
//     if (arr.length < 2) return arr
//     let pivot = arr.pop()
//     let left = arr.filter((item) => item <= pivot)
//     let right = arr.filter(item => item > pivot)
//     return [...quickSort(left), pivot, ...quickSort(right)]
// }
// console.log(quickSort([1, 4, 3, 2]));

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    const len = nums.length;
    const targetIndex = len - k;
    let left = 0,
        right = len - 1;

    while (left < right) {
        const index = partition(nums, left, right);
        if (index === targetIndex) {
            return nums[index];
        } else if (index < targetIndex) {
            left = index + 1;
        } else {
            right = index - 1;
        }
    }

    return nums[left];
};

function partition(nums, start, end) {
    const povit = nums[start];
    while (start < end) {
        while (start < end && nums[end] >= povit) {
            end--;
        }
        nums[start] = nums[end];
        while (start < end && nums[start] < povit) {
            start++;
        }
        nums[end] = nums[start];
    }
    nums[start] = povit;
    return start;
}