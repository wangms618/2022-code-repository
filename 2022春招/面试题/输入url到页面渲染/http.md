# HTTP
请求行 GET /images/logo.gif HTTP/1.1
首部
实体

# Post 和 Get 的区别？
副作用 幂等
**副作用**表示操作会影响服务器资源发生变化
**幂等**表示发送M此和N次请求，服务器上的资源状态一致
1. 
  Get多用于无副作用，幂等的场景(搜索)
  Post多用于副作用，不幂等的场景(注册)

2. Get请求能缓存，Post不能
3. Post比Get相对安全一点点，只是因为Get请求通常会把参数包含在url里面，且会被浏览器保存历史记录，Post不会
4. Post支持更多的编码类型且不对数据类型限制

# http 状态码
2XX 成功
200 OK，表示从客户端发来的请求在服务器端被正确处理 204 No content，表示请求成功，但响应报文不含实体的主体 部分
205 Reset Content，表示请求成功，但响应报文不含实体的
主体部分，但是与 204 响应不同在于要求请求方重置内容 206 Partial Content，进行范围请求
3XX 重定向
301 moved permanently，永久性重定向，表示资源已被分 配了新的 URL
302 found，临时性重定向，表示资源临时被分配了新的 URL 303 see other，表示资源存在着另一个 URL，应使用 GET 方 法获取资源
304 not modified，表示服务器允许访问资源，但因发生请求 未满足条件的情况
307 temporary redirect，临时重定向，和302含义类似，但 是期望客户端保持请求方法不变向新的地址发出请求
4XX 客户端错误
400 bad request，请求报文存在语法错误
401 unauthorized，表示发送的请求需要有通过 HTTP 认证 的认证信息
403 forbidden，表示对请求资源的访问被服务器拒绝
404 not found，表示在服务器上没有找到请求的资源
5XX 服务器错误
500 internal sever error，表示服务器端在执行请求时发生了 错误
501 Not Implemented，表示服务器不支持当前请求所需要 的某个功能
503 service unavailable，表明服务器暂时处于超负载或正在 停机维护，无法处理请求
