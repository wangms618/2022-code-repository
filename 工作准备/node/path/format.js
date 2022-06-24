const path = require("path")
// path.format() 方法从对象返回路径字符串。 这与 path.parse() 相反。
path.format({
    dir: 'C:\\path\\dir',
    base: 'file.txt'
});
// 返回: 'C:\\path\\dir\\file.txt'