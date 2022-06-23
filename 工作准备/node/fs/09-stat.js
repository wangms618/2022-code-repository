// 查看目录详细信息
const fs = require("fs")
fs.stat("./avatar", (err, data) => {
    // 测试是否是文件
    console.log(data.isFile());
    // 测试是否是目录
    console.log(data.isDirectory());
})