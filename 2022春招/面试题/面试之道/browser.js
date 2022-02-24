// 事件机制(事件的触发过程？什么是事件代理？)
// 捕获和冒泡

// 1. 从window上往事件触发处传播，这个过程成为捕获
// 2. 处于目标阶段，触发事件
// 3. 从触发处往window上事件传播，这个过程成为冒泡

// 事件委托就是利用事件冒泡机制，指定一个事件处理程序，来管理某一类型的所有事件。
// 事件委托怎么实现呢？因为冒泡机制，既然点击子元素时，也会触发父元素的点击事件。
// 那么我们就可以把点击子元素的事件要做的事情，交给最外层的父元素来做，让事件冒泡到最外层的dom节点上触发事件处理程序，这就是事件委托。
// 这样与dom的操作就可以减少到一次，大大减少与dom节点的交互次数提高性能。
// 同时，将事件的操作进行统一管理也能节约内存，
// 因为每个js函数都是一个对象，自然就会占用内存，给dom节点添加的事件处理程序越多，对象越多，占用的内存也就越多；
// 而使用委托，我们就可以只在dom节点的父级添加事件处理程序，那么自然也就节省了很多内存，性能也更好。


// 点击事件默认开启冒泡
// event.stopPropagation() // 阻止冒泡和捕获
// event.stopImmediatePropagation() // 阻止冒泡和捕获，还能阻止该事件目标注册同类型的事件



// 跨域
// 1. jsonp(借助script标签没有跨域限制)
// 2. cors(后端实现跨域)
// 3. webScoket(另一种协议)
// 4. nignx (服务器代理)
// 5. postMessage (通常用于获取嵌入页面中的第三方页面数据)
// 6. document.domain (通常用于二级域名 a.test.com b.test.com document.domain="test.com")


// 存储
// cookie,localStorage,sessionStorage,indexedDB

// 持续时间
// cookie 服务器生成
// localStorage 除非被清除
// sessionStorage 页面关闭就清除
// indexedDB 除非被清除

// 存储空间
// cookie 4k
// localStorage 5M
// sessionStorage 5M
// indexedDB 无限

// cookie每次都会携带在header中
// localStorage 不参与后端通信
// sessionStorage 不参与后端通信
// indexedDB 不参与后端通信

// cookie : value http-only secure same-site
// value: 如果用于保存用户登录态，应该将该值加密，不能使用明文的用户标识
// http-only： 不能通过JS访问Cookie, 减少XSS攻击
// secure： 只能在协议为HTTPS的请求中携带
// same-site：规定浏览器不能在跨域请求中携带Cookie,减少CSRF攻击，

// Service Worker
// 用于https请求中做缓存
// 1. 先注册 Service Worker
// 2. 监听install事件后可以开始用缓存
// 3. 拦截下一次请求并查询是否存在缓存


// 缓存
// 缓存位置 (Service Worker , Memory Cache , Dick Cache , Push Cache , 网络请求)
// 缓存策略
// 实际场景应用的策略


// Disk Cache : 缓存在硬盘 (胜在容量大)
// Push Cache : 时间短 session结束就会释放
// 缓存策略 
// 1. 强缓存
// 2. 协商缓存