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