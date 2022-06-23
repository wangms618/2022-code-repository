const fs = require("fs").promises
fs.readFile("./avatar/a.txt", "uft-8").then(data => {
    console.log(data);
})