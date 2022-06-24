// path.isAbsolute() 方法确定 path 是否为绝对路径。

// 如果给定的 path 是零长度字符串，则将返回 false。
const path = require("path")
path.isAbsolute('//server');    // true
path.isAbsolute('\\\\server');  // true
path.isAbsolute('C:/foo/..');   // true
path.isAbsolute('C:\\foo\\..'); // true
path.isAbsolute('bar\\baz');    // false
path.isAbsolute('bar/baz');     // false
path.isAbsolute('.');           // false