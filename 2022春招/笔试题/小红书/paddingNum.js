// 123456 => 123,456
// 1234.56 => 1,234.56
// -123456 => -123,456
// 传入一个数字，然后修改成这个样子
function paddingNum(nums) {
    let str = nums < 0 ? '-' : ''
    // 取绝对值
    nums = Math.abs(nums) + ''
    nums = nums.split('.')
    let int = nums[0]
    if (int.length < 4) {
        return nums[1] ? str + int + '.' + nums[1] : str + int
    } else {
        let arr = int.split('')
        let len = arr.length
        let res = ''
        let count = 1
        while (count <= len) {
            res = arr[len - count] + res
            if (count >= 3 && count % 3 == 0) {
                res = ',' + res
            }
            count++
        }
        return nums[1] ? str + res + '.' + nums[1] : str + res
    }
}
console.log(paddingNum('-1234123'));