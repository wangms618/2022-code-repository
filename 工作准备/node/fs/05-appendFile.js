const fs = require("fs")
fs.appendFile("./avatar/b.txt", "hello World", err => {
    console.log(err);
})