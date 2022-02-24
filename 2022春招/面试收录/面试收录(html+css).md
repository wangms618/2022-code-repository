# HTML
## 回流重绘
### 回流
触发条件： 简单来说，就是当我们对 DOM 结构的修改引发 DOM 几何尺寸变化的时候，会发生回流的过程。  
以下的操作会触发回流:
1. 一个 DOM 元素的几何属性变化，常见的几何属性有width、height、padding、margin、left、top、border 等等, 这个很好理解。
2. 使 DOM 节点发生增减或者移动。
3. 读写 offset族、scroll族和client族属性的时候，浏览器为了获取这些值，需要进行回流操作。
4. 调用 window.getComputedStyle 方法。

### 重绘
触发条件：当 DOM 的修改导致了样式的变化，并且没有影响几何属性的时候，会导致重绘(repaint)。由于没有导致 DOM 几何属性的变化，因此元素的位置信息不需要更新，从而省去布局的过程。

### 解决方法(回流重绘)
1. 避免频繁使用 style，而是采用修改class的方式。
2. 使用createDocumentFragment进行批量的 DOM 操作。
3. 对于 resize、scroll 等进行防抖/节流处理。
4. 对需要修改的DOM先用display:none隐藏起来，等所有dom操作完成时再舍弃display:none