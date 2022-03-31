// 有30个小孩儿，编号从1-30，围成一圈依此报数，1、2、3 数到 3 的小孩儿退出这个圈， 然后下一个小孩 重新报数 1、2、3，问最后剩下的那个小孩儿的编号是多少?
function childNum(num, count) {
    // 所有人
    let players = []
    for (let i = 0; i < num; i++) {
        players[i] = i + 1
    }
    // 退出人数
    let outCount = 0
    // 当前报数
    let newNum = 0
    // 当前小孩下标
    let indexChild = 0

    while (outCount == players.length - 1) {}
    // 人数不为1，继续循环

    // 如果当前下标的小孩还存在，就报数（小孩值不为0，说明他还在场上）
    // 如果报数已经是对应的最大值，重置报数，将当前小孩的值至为0，离开人数加1,

    // 轮到下一个小孩
    // 如果到了最后一位小孩，返回第一个小孩

}
// 找到留下来的小孩

childNum(30, 3)