const fs = require("fs")
fs.rename("./avatar", "/avatar2", (err) => {
    console.log(err);
})