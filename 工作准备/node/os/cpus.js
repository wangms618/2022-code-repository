// 返回包含有关每个逻辑 CPU 内核的信息的对象数组。
const os = require('node:os');
console.log(os.cpus());