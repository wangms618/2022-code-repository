DOM（document object model）：文档对象模型，提供操作页面元素的方法和属性
BOM（browser object model）；浏览器对象模型，提供一些属性和方法可以操作浏览器
# 介绍BOM有哪些对象(BOM是浏览器实例，可以操作浏览器)
1. location
2. history
3. window
4. navigator
5. window.screen(用户信息)

# 以下代码输出什么?
通过var往window上添加的属性会有一个名为
`[[configurable]] == false` 不可配置


# 你知道 间歇调用 和 超时调用 吗？
超时调用：setTimeout
间歇调用：setInterval

# 为什么说少用setInterval，尽量用setTimeout代替
定时器指定的时间间隔，表示的是何时将定时器代码添加到消息队列，而不是何时执行
所以真正执行代码的时间是不确定的，这取决于何时被主线程事件循环取到

# hash和history
history是h5提供的，replaceState,pushState用于修改url的方法，通过popState监听url变化