# vue的优点?缺点？
优点：响应式，组件化，轻量级，虚拟dom，响应式，单页面路由，数据和视图分开
缺点：不利于SEO，首屏加载过慢，vue2不支持IE8以下，vue3不支持IE11以下

# MVVM是什么？跟MVC有什么区别
M: 模型，负责取数据
V: 视图层，负责渲染展示数据
VM: 控制器，用于交互，比如点击事件
区别：MVVM的设计模式更简洁，简化了业务与界面的依赖，解决了数据频繁更新的问题，不再需要操作DOM，这种低耦合的模式提高了代码的复用性

# Vue和Jquery的区别？
1. jq操作DOM频繁，性能开销大
2. vue集成了一些库，比如router,vuex，大大提高了开发效率

# 为什么data要是一个函数返回一个对象
data是一个对象的话会导致重复创建实例造成多实例共享一个数据对象
data为函数情况下，每次创建一个新实例，调用data函数可以返回一个全新的副本数据对象

# 修饰符
[详细修饰符]((https://juejin.cn/post/6844903774700453901#comment))

# vue指令

# 组件之间的传值方式
1. 父传子
  子组件props接收

2. 子传父
   子组件$emit(事件名,参数) 父组件绑定事件名
3. $refs获取子组件实例，进而获取数据
4. 组件可以使用 $parent 和 $children 获取父组件实例和子组件实例，进而获取数据
5. provide 和 inject 
6. vuex
7. eventBus

# 路由有哪些模式，区别是什么?
1. hash模式
   通过#后面内容的变更，触发hashchange
2. history模式
   通过pushState和replaceState切换url触发popstate

# computed和watch的区别？
1. computed 依赖一个已有的变量来计算，具有缓存机制，如果依赖值不变的情况下，会直接读取缓存值进行复用,computed不能进行异步操作
2. watch监听某一个变量的变化，并执行相应的回调，watch可以异步
computed多对一
watch一对多

# 生命周期 actived deactived
actived: 命中缓存时调用(回到原页面需要应用缓存时，用actived)
deactived: 停止使用缓存时调用

# 为什么 v-if 和 v-for 不建议同时用于一个标签？
v-for 优先级更高，会先遍历出dom，再if消失，就相对于渲染了某些无意义的节点 

# 不需要响应式的数据如何处理
在数据源用Object.freeze冻结，就劫持不到了

# 对象新增属性可以更新视图吗？删除属性可以更新视图吗？
不会
劫持事件没有劫持delete事件

# arr[index] = xxx 会触发视图更新吗
不会
defineProperty 只劫持对象，不劫持数组