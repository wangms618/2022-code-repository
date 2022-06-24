// 提供特定于平台的路径定界符：; 用于 Windows
const path = require("path")
// console.log(process.env.PATH);
// 打印: '/usr/bin:/bin:/usr/sbin:/sbin:/usr/local/bin'

// console.log(process.env.PATH.split(path.delimiter));
// 返回: ['/usr/bin', '/bin', '/usr/sbin', '/sbin', '/usr/local/bin']
console.log(path.delimiter);
// 返回;符号