// 统计字符出现频次
// 出现两次以上记为true
// 例['a', 'a', 'b', 'c', 'b'] => {'a':true,'b':true,'c':false}
function dupicatedWord(arr) {
    let visit = {}
    arr.forEach(item => {
        if (visit[item] === false) {
            visit[item] = true
        } else if (!visit[item]) {
            visit[item] = false
        }
    })
    return visit
}
console.log(dupicatedWord(['a', 'a', 'b', 'c', 'b']));