// 查看文件内文件
const fs = require("fs")
fs.readdir("./", (err, data) => {
    console.log(data);
})