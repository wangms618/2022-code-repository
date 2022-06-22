const fs = require("fs")
fs.rmdir("./avatar", (err) => {
    console.log(err);
})