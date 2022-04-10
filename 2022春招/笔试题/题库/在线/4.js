//line=readline()
//print(line)
console.log('Hello World!');
// 输入一个数组，数组的每一项都有且children是数组中的一项
// 遍历数组，如果parent为null,就设置为一级
function out(input){
//     结果数组
    let res = []
//     记录每个value值的对象
    let visit = {}
//     过滤
    res = input.filter(item => {
//      存每个value的对象
        visit[item.value] = item
        if(item.parent == null){
            return item
        }
    })
//     遍历
//     这里要做一个递归
    function childrenInput(arr){
        if(!arr.children.length){
            return  arr
        }
        for(let i = 0;i < arr.children.length;i++){
//             遍历children，然后将值赋值给他
                arr[i].children = arr[i].children.map(item =>{
                   return childrenInput(visit[item])
                })
           }
    }
       let result =  childrenInput(res)
       return result
}
const input = [
  {
  	value: 110000,
  	label: '北京市',
  	children: [
        110001,
        110002
  	],
  	parent: null
  },
  {
  	value: 110001,
  	label: '东城区',
  	parent: 110000,
  	children: []
  },
  {
  	value: 110002,
  	label: '西城区',
  	parent: 110000,
  	children: []
  },
  {
  	value: 130000,
  	label: '河北省',
  	children: [
      130100
  	],
  	parent: null
  },
  {
  	value: 130100,
  	label: '石家庄',
  	parent: 130000,
  	children: [
      130102,
      130104
  	]
  },
  {
  	value: 130102,
  	label: '长安区',
  	parent: 130100,
  	children: []
  },
  {
  	value: 130104,
  	label: '桥西区',
  	parent: 130100,
  	children: []
  }
]

// ------------------------------
const output = [
  {
    value: 110000,
    label: '北京市',
    parent: null,
    children: [
      {
        value: 110001,
        label: '东城区',
        parent: 110000,
        children: []
      },
      {
        value: 110002,
        label: '西城区',
        parent: 110000,
        children: []
      },
    ]
  },
  {
    value: 130000,
    label: '河北省',
    children: [
      {
        value: 130100,
        label: '石家庄',
        parent: 130000,
        children: [
          {
            value: 130102,
            label: '长安区',
            parent: 130100,
            children: []
          },
          {
            value: 130104,
            label: '桥西区',
            parent: 130100,
            children: []
          }
        ]
      },
    ],
    parent: null
  }
]
