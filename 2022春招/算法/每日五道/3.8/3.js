// 1 5 01102 6 MFMMFF
// 1组数据 5张桌子 每张桌子的用餐情况 六个人排队 排队情况 男女男男女女
// 输出
// 2，男进入，选择最靠左的，然后优先选已经有一个人的座位 所以是2 此时 每张桌子情况为 02102
// 1 女进入，选择最靠左的，然后优先选无人的座位，所以是1 12102
// 1 男进入，选择最靠左的，然后优先选已经有一个人的座位 22102
// 3 男进入, 选择最靠左的，然后优先选已经有一个人的座位 22202
// 4 22212
// 4 22222
let T = parseInt(readline())
let n = parseInt(readline())
let table = readline()
let count = parseInt(readline())
let sort = readline()
// 现在已经拿到了座位数组，开始遍历排队的人
table = table.split('')
table = table.map(item => +item)
for (let i = 0; i < count; i++) {
    if (sort[i] == 'M') {
        let index1 = table.indexOf(1)
        if (index1 != -1) {
            table[index1] = 2
            print(+[index1] + 1)
        } else {
            print(+table.indexOf(0) + 1)
            table[table.indexOf] = 1
        }
    } else {
        let index1 = table.indexOf(0)
        if (index1 != -1) {
            table[index1] = 1
            print(+[index1] + 1)
        } else {
            print(+table.indexOf(1) + 1)
            table[table.indexOf] = 2
        }
    }
}



class PriorityQueue {
    constructor() {
        this.tree = [];
    }

    insert(val) {
        this.tree.push(val);
        this._up(this.tree.length - 1);
    }

    remove() {
        let last = this.tree.pop();
        if (this.tree.length > 0) {
            this.tree[0] = last;
            this._down(0);
        }
    }

    _down(index) {
        let tree = this.tree;
        let last_no_leaf = ~~((tree.length - 2) / 2);
        if (index > last_no_leaf) return;
        while (index <= last_no_leaf) {
            let l = tree[index * 2 + 1];
            let r = tree[index * 2 + 2] || tree[index * 2 + 1];
            let min = l <= r ? l : r;
            let minIndex = l <= r ? index * 2 + 1 : index * 2 + 2
            if (tree[index] > min) {
                [tree[index], tree[minIndex]] = [tree[minIndex], tree[index]]
                index = minIndex
            } else {
                return;
            }
        }
    }

    _up(index) {
        let tree = this.tree;
        while (index !== 0) {
            let p = ~~((index - 1) / 2);
            if (tree[index] < tree[p]) {
                [tree[index], tree[p]] = [tree[p], tree[index]];
                index = p;
            } else {
                return;
            }
        }
    }
}

readline();
let result = '';
while(line = readline()){
    const n = ~~line;
    let ts = readline().split('');
    const m = ~~readline(),
          ga = readline();

    let t0 = [],t1 = new PriorityQueue();
    ts.forEach((e,i)=>{
        if(e=='0'){
            t0.push(i+1);
        }else if(e=='1'){
            t1.tree.push(i+1);
        }
    })

    let index0 = 0;
    for(let i =0;i<m;i++){
        if((ga[i]=='M'&&t1.tree.length>0)||(ga[i]=='F'&&index0>=t0.length)){
            result+=t1.tree[0]+'\n';
            t1.remove();
        }else{
            result+=t0[index0]+'\n';
            t1.insert(t0[index0]);
            index0++;
        }
    }
}
console.log(result);