// 平均分配员工
// 第一行数据给的是员工数和大仓数
// 接下来每行都是员工去A和B仓库的交通费
// 需要求出平均分配这N名员工的条件下，使得交通费最低
// let N = read_line()
// N个员工，两个员工数组，一个是员工去A仓的情况，一个是员工去B仓的情况
// [2,3,6,8,2,6]
// [3,9,7,2,3,10]
// 求出差值数组
// [-1,-6,-1,6,-1,-4]
// 怎么样在这个数组的情况下遍历到最小值呢
// 如果我这样比对呢，就是就挑花费少的去
// 需要保证花费最少
// N/2员工的情况下，
function personCost(n, arr1, arr2) {
    let nums = []
    let res = 0
    for (let i = 0; i < n; i++) {
        nums[i] = arr1[i] - arr2[i]
    }
    // 求出nums差值数组，求出差值中
    let nums2 = nums.slice()
    nums2.sort((a, b) => a - b)
    let mid = nums2[n / 2 - 1]
    let count = 0
    for (let i = 0; i < n; i++) {
        // 必须小于
        if (nums[i] < mid) {
            res = res + arr1[i]
            count++
        } else if (nums[i] > mid) {
            res = res + arr2[i]
        }
    }
    for (let i = 0; i < n; i++){
        if (count == n / 2 && nums[i] == mid) {
            res = res + arr2[i]
            
        } else if (nums[i] == mid) {
            res = res + arr1[i]
            count++
        }
    }
    console.log(res);

}
personCost(6, [2, 3, 6, 8, 2, 6], [3, 9, 7, 2, 3, 10])