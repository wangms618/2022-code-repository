// 分析题意
// [1,2,5]代表可以由1走到2，花费n分钟
// 回溯
// 先遍历数组，找出需要的数组
// 然后再找出需要的数组，直到数组第二项等于end
function getMinTime(start, end, vectorList) {
    let res = []

    function dfs(start, curTime) {
        // 如果起点是
        if (start == end && curTime !== 0) {
            return curTime
        }
        let nums = []
        vectorList.forEach(item => {
            if (item[0] == start) {
                nums.push(item)
            }
        })
        // 如果没有当前路径，返回
        if (!nums.length) return -1

        for (let i = 0; i < nums.length; i++) {
            let result = dfs(nums[i][1], curTime + nums[i][2])
            if (result == -1) {
                continue
            } else {
                res.push(result)
            }
        }
        console.log(res);
        return res
    }
    let result = dfs(start, 0)
    result.sort((a, b) => b - a)
    return result
}
getMinTime(1, 5, [
    [1, 2, 5],
    [1, 3, 4],
    [4, 3, 2],
    [3, 5, 3]
])





