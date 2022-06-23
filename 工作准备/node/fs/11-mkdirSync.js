const fs = require("fs")
try {
    fs.mkdirSync("./avatar2")
} catch (err) {
    console.log(err.code);
}
// 阻塞后面代码执行