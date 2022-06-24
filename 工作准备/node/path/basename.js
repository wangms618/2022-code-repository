// path.basename() 方法返回 path 的最后一部分，类似于 Unix basename 命令。 尾随的目录分隔符被忽略，见 path.sep。
const path = require("path")
let res = path.basename('/foo/bar/baz/asdf/quux.html');
// 返回: 'quux.html'
console.log(res);
res = path.basename('/foo/bar/baz/asdf/quux.html', '.html');
// 返回: 'quux'
console.log(res);

path.win32.basename('C:\\foo.html', '.html');
// 返回: 'foo'

path.win32.basename('C:\\foo.HTML', '.html');
// 返回: 'foo.HTML'