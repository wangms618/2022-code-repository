// 输入一个字符串。包含空格和可见字符。长度<=100000。
// 输出一个字符串，表示反转后结果。
// 输入 the	sky	is												blue!
// 输出 blue! is sky the
const foo = (str) => {
    str = str.match(/[^\s]+/g)
    console.log(str);
}
const str = 'the	sky	is												blue!'
foo(str)