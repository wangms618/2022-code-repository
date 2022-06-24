// 返回为其编译 Node.js 二进制文件的操作系统 CPU 架构。 可能的值为 'arm'、'arm64'、'ia32'、'mips'、'mipsel'、'ppc'、'ppc64'、's390'、's390x'、以及 'x64'。
const os = require('node:os');
console.log(os.arch());