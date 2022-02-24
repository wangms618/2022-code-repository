function aa(str) {
  var stack = []; //定义一个栈 先进后出 用来放()内的内容
  str = str.split("");
  var res = ''; //定义一个字符串用来存放去除后的字符串
  for (var i = 0; i < str.length; i++) {
    if (stack.length == 0 && str[i] !== '(' && str[i] !== ')') {
      res += str[i]
    }
    if (str[i] == '(') {
      stack.push(str[i])
    }
    if (str[i] == ')') {
      stack.pop()
    }
  }
  res = res.split("");
  for (var j = 0; j < res.length; j++) {
    if (res[j] === '<') {
      res.splice(j - 1, 2);
      j - 2
    }
  }
  return res.join('').replace(/\/,/g, "")
}

console.log(aa('(as)d\、sad<'));