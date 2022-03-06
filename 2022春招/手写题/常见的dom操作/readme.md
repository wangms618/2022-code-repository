# 获取dom节点
```js
getElementById // 按照 id 查询
getElementsByTagName // 按照标签名查询
getElementsByClassName // 按照类名查询
querySelectorAll // 按照 css 选择器查询
```

# dom节点的创建
```js
// 创建dom节点
let container = document.getElementById('container')
let childDiv = document.createElement('div')
childDiv.innerHTML = '我是js创建的dom节点'
container.appendChild(childDiv)
console.log(container);
```

# dom节点的删除
```js
// 获取目标元素的父元素
let container = document.getElementById('container')
// 获取目标元素
let targetNode = document.getElementById('title')
// 删除目标元素
container.removeChild(targetNode)
```

# 修改dom元素
```js
// 获取父元素
var container = document.getElementById('container')   
 
// 获取两个需要被交换的元素
var title = document.getElementById('title')
var content = document.getElementById('content')
// 交换两个元素，把 content 置于 title 前面
container.insertBefore(content, title)
```