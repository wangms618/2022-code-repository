# 安全类型检测--- typeof 和 instanceof 区别和缺陷，已经解决方案
1. typeof 可以判断出了null原始类型
2. instanceof只能判断引用类型
解决：用Object.prototype.toString.call()
# 构造函数不写new会怎么样
 如果不写new，等于在调用函数

 # 惰性载入，兼容性操作
 如果我这个项目要兼容几个浏览器，怎么做


# 7. 谈一下 requestAnimationFrame
window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，**该回调函数会在浏览器下一次重绘之前执行**

这是一个定时器函数，但是他的时间是根据屏幕的每秒刷新率来定的，他一般16.7ms执行一次，一般用他来做动画，
它和setTimeout、setInterval对比，它不需要选择固定时间去更新动画，它会在浏览器下重绘之前执行，它不会有执行偏差

# web worker了解过吗
Web Worker 是 HTML5 标准的一部分，这一规范定义了一套 API，它允许一段 JavaScript 程序运行在主线程之外的另外一个线程中。
web worker