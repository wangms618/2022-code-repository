// ● 取出数组的第一个元素，随机产生一个索引值，将该第一个元素和这个索引对应的元素进行交换。
// ● 第二次取出数据数组第二个元素，随机产生一个除了索引为1的之外的索引值，并将第二个元素与该索引值对应的元素进行交换
// ● 按照上面的规律执行，直到遍历完成
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function random(nums) {
    let len = nums.length
    for (let i = 0; i < len; i++) {
        let indexRandom = Math.floor(Math.random() * (len - i)) + i;
        [nums[i], nums[indexRandom]] = [nums[indexRandom], nums[i]]
    }
    return nums
}
console.log(random(arr));
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let length = arr.length,
    randomIndex,
    temp;
while (length) {
    randomIndex = Math.floor(Math.random() * length--);
    [arr[length], arr[randomIndex]] = [arr[randomIndex], arr[length]]
}
console.log(arr)