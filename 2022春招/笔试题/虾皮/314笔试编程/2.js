function lastUniqueChar(str) {
    // write code here
    let len = str.length
    let visit = {}
    for (let i = 0; i < len; i++) {
        if (!visit[str[i]]) {
            visit[str[i]] = 1
        } else {
            visit[str[i]] = visit[str[i]] + 1
        }
    }
    let n = Object.keys(visit)
    n.reverse()
    for (let i = 0; i < n.length; i++) {
        if (visit[n[i]] == 1) {
            return n[i]
        }
    }
}

console.log(lastUniqueChar("shopee"));