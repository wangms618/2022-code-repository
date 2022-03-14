# CSS总结

### 1. CSS优先级算法如何计算？
- 内联选择器：1000
- id选择器：100
- 类选择器（属性选择器、伪类选择器）： 10
- 标签选择器： 1
  
衍生：
1. !important声明的样式的优先级最高
2. 如果优先级相同，则最后出现的样式生效
3. 继承得到的样式的优先级最低

### 2. display的block、inline和inline-block的区别
1. block：会独占一行，多个元素会另起一行，可以设置width、height、margin和padding属性；
2. inline：元素不会独占一行，设置width、height属性无效。但可以设置水平方向的margin和padding属性，不能设置垂直方向的padding和margin；
3. inline-block：将对象设置为inline对象，但对象的内容作为block对象呈现，之后的内联对象会被排列在同一行内。

### 3. 行内元素和块级元素的区别
- 行内元素
1. 设置宽高无效；
2. 可以设置**水平方向**的margin和padding属性，不能设置垂直方向的padding和margin；
3. 不会自动换行；
- 块级元素
1. 可以设置宽高；
2. 设置margin和padding都有效；
3. 可以自动换行；
4. 多个块状，默认排列从上到下。

### 4. display:none与visibility:hidden以及opacity: 0的区别
- display: none：渲染树不会包含该渲染对象，因此该元素不会在页面中占据位置，也不会响应绑定的监听事件。它是非继承属性，子孙节点会随着父节点从渲染树消失，通过修改子孙节点的属性也无法显示；
- visibility: hidden：元素在页面中仍占据空间，但是不会响应绑定的监听事件。它是继承属性，子孙节点消失是由于继承了hidden，通过设置visibility:visible可以让子孙节点显示；
- opacity: 0：将元素的透明度设置为 0，以此来实现元素的隐藏。元素在页面中仍然占据空间，并且能够响应元素绑定的监听事件。

**注意**：修改常规文档流中元素的 display 通常会造成文档的重排，但是修改visibility属性只会造成本元素的重绘；

### 5. setTimeout和requestAnimationframe执行动画的区别
- 因为 setTimeout 和 setInterval 是异步 api，必须需要等同步任务执行，还需要等待微任务完成以后，然后才会去执行当前这个回调函数。
- settimeout的固定时间间隔不一定与屏幕刷新间隔时间相同，会引起丢帧
- 与 setTimeout 相比，requestAnimationFrame 最大的优势是 由系统来决定回调函数的执行时机

- 该requestAnimationframe能以浏览器的显示频率来作为其动画动作的频率，比如浏览器每10ms刷新一次，动画回调也每10ms调用一次，这样就不会存在过度绘制的问题，动画不会掉帧，自然流畅。

### 盒模型
- 标准盒子模型：标准盒模型的width和height属性的范围只包含了content，
- IE盒子模型：IE盒模型的width和height属性的范围包含了border、padding和content。

可以通过修改元素的box-sizing属性来改变元素的盒模型：  
- box-sizing: content-box表示标准盒模型（默认值）
- box-sizing: border-box表示IE盒模型（怪异盒模型）



### 移动端适配问题


## CSS

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

CSS 中的以下几个属性能触发硬件加速：

transform
opacity
filter
will-change

















































bfc(块级格式上下文)
BFC(Block formatting context)直译为"块级格式化上下文"。它是一个独立的渲染区域，只有Block-level box参与， 它规定了内部的Block-level Box如何布局，并且与这个区域外部毫不相干。
解决父容器高度塌陷的问题
哪些属性可以让盒子变成bfc
overflow:hidden
overflow:



浏览器和移动端适配

rem和em

rem相对于根字体font-size,1rem
em

怎么去适配
远古做适配是，每一种屏幕都得写一种版本css
@media媒体查询
会去查询媒体当前的属性(宽高等属性)，如果符合判断条件的话应用@media里的样式代码去适配，不符合用外部对应的样式去适配

现在适配
利用rem,只需要利用@media里面调整font-size即可，因为1rem是等于fons-size的大小