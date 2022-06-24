// path.join() 方法使用特定于平台的分隔符作为定界符将所有给定的 path 片段连接在一起，然后规范化生成的路径。
// 零长度的 path 片段被忽略。 如果连接的路径字符串是零长度字符串，则将返回 '.'，表示当前工作目录。
path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// 返回: '/foo/bar/baz/asdf'

path.join('foo', {}, 'bar');
// 抛出 'TypeError: Path must be a string. Received {}'