const fs = require("fs")
fs.readFile("./avatar/a.txt", "utf-8", (err, data) => {
    console.log(data, err);
})