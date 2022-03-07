// 给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。
// 岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。
// 此外，你可以假设该网格的四条边均被水包围。
const grid = [
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "1"]
]
const numIslands = (grid) => {
    // 行数
    let row = grid.length
    // 列数
    let column = grid[0].length
    // 初始化岛屿数
    let count = 0
    // dfs递归函数
    const dfs = (i, j) => {
        // 边界条件，越界返回，注意grid[i][j] == '0' 判断需放到或的最后，以保证下标的可用
        if (i < 0 || j < 0 || i >= row || j >= column || grid[i][j] == '0') return
        // 传入下标，从当前节点开始搜索，如果是陆地，搜索它上下左右的陆地
        if (grid[i][j] == '1') {
            // 搜索过的陆地设置为0,防止下面for循环重复搜索已经搜索过的陆地
            grid[i][j] = '0'
            // 递归搜索上下左右的陆地
            dfs(i, j + 1)
            dfs(i, j - 1)
            dfs(i + 1, j)
            dfs(i - 1, j)
        }
    }
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < column; j++) {
            // 如果找到陆地，开始深度优先搜索
            if (grid[i][j] == '1') {
                dfs(i, j)
                count++
            }
        }
    }
    return count
};

console.log(numIslands(grid));