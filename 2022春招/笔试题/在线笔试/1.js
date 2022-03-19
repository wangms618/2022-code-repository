let n = readInt()
let arr = read_line().split(' ')
arr = arr.map(item => +item)
let len = arr.length
// 最多的位置
let max = 1
// 遍历指针，求每次最大值
for(let i = 1;i<len-1;i++){
    // 当前指针指向，首先让指针往前走
    let res = 1
    let low = cur
    let down = cur
    while(low > left){
        if(arr[low] > arr[low-1]){
            res++
            low--
        }else{
            break
        }
    }
    while(down < right){
        if(arr[down] > arr[down + 1]){
            res++
           	down++
        }else{
            break
        }
    }
    max = Math.max(res,max)
}
print(max)