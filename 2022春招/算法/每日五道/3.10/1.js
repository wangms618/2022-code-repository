// 输入第1行 n,m,a,b 一天烤n个蛋糕，已经做好m个蛋糕，顾客希望的蛋糕重量a,b，且a,b必须是当天烤好的最大值和最小值
// 输入第2行 m个数，代表烤好的面包的重量
// 理解题意：
// 当前烤好的面包重量均在ab范围内，且n-m>=2 则返回YES
// 当前烤好的面包重量均在ab范围内,且 n-m = 1,需要找到一个值等于a或b
// 当前烤好的面包重量均在ab范围内,且 n-m = 0需要找到一个值等于a或一个值等于b
// 当前烤好的面包不在ab范围，返回NO
let read1
while(read1 = readline()){
    read1 = read1.split(' ')
    let read2 = readline().split(' ')
    let n = ~~read1[0]
    let m = ~~read1[1]
    let a = ~~read1[2] <= ~~read1[3] ? ~~read1[2] : ~~read1[3]
    let b = ~~read1[3] >= ~~read1[2] ? ~~read1[3] : ~~read1[2]
    read2 = read2.map(item => +item)
    read2.sort((a,b) => a-b)
    // 当前烤好的面包重量均在ab范围内
    let st = read2[0]
    let end = read2[read2.length - 1]
    if(st >= a && end <= b){
        if(n-m >=2){
             print('YES')
        }else if(n-m == 1 && (st == a || end == b)){
            print('YES')
        } else if(n-m == 0 && st == a && end == b){
            print('YES')
        }else{
            print('NO')
        }
    }else{
        print('NO')
    }
}


















