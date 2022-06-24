// path.dirname() 方法返回 path 的目录名，类似于 Unix dirname 命令。 尾随的目录分隔符被忽略，见 path.sep。
const path = require("path")
const dirname = path.dirname('/foo/bar/baz/asdf/quux');
console.log(dirname);
// 返回: '/foo/bar/baz/asdf'