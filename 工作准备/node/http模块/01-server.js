const http = require("http")
// 创建服务器
// req 接收浏览器传的参数
// res 返回渲染的内容
http.createServer((req, res) => {
    res.write("hello world")
    res.write("hello world")
    res.end("[1, 3, 4]")
}).listen(3000, () => {
    console.log("server start");
})