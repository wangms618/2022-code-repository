// 接雨水
/**
 * @param {number[]} height
 * @return {number}
 */
// 双指针，对撞指针
// 两个指针相对移动，记录下当前走过的最高点，leftMax，rightMax
// 每次移动都把当前指针指向的高度与最高点高度比对，得出积水的深度
var trap = function(height) {
    let len = height.length
    let leftCur = 0
    let rightCur = len - 1
    let leftMax = 0,rightMax = 0
    let res = 0
    while(leftCur < rightCur){
        let left = height[leftCur]
        let right = height[rightCur]
        // 保证最后时刻双指针对撞到最高点才能确定数据正确，每次移动高度较低的下标
        if(left<right){
            leftMax = Math.max(leftMax,left)
            res += leftMax - left
            leftCur++
        }else{
            rightMax = Math.max(rightMax,right)
            res += rightMax - right
            rightCur--
        }
    }
    return res
};