const subsets = (nums) => {
    let len = nums.length
    let res = []
    let curr = []
    const dfs = (index) => {
        res.push([...curr])
        for (let i = index; i < len; i++) {
            curr.push(nums[i])
            dfs(i + 1)
            curr.pop()
        }
    }
    dfs(0)
    return res
}
console.log(subsets([1, 2, 3]));