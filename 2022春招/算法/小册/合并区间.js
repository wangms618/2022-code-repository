// 以数组 intervals 表示若干个区间的集合，其中单个区间为 intervals[i] = [starti, endi] 。
// 请你合并所有重叠的区间，并返回一个不重叠的区间数组，该数组需恰好覆盖输入中的所有区间。
// 输入：intervals = [[1,3],[2,6],[8,10],[15,18]]
// 输出：[[1,6],[8,10],[15,18]]
// 解释：区间 [1,3] 和 [2,6] 重叠, 将它们合并为 [1,6].

// 写法
// 前一项末尾在后一项内，开头
const merge = (intervals) => {
    intervals.sort((a, b) => a[0] - b[0])
    let len = intervals.length
    let res = [intervals[0]]
    for (let i = 0; i < len; i++) {
        let pre = res[res.length - 1]
        if (pre[1] >= intervals[i][0]) {
            pre[1] = Math.max(intervals[i][1], pre[1])
        } else {
            res.push(intervals[i])
        }
    }
    return res
}
const intervals = [
    [1, 3],
    [2, 6],
    [8, 10],
    [15, 18],
]
console.log(merge(intervals));