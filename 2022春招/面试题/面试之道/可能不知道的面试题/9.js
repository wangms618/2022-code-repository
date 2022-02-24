// let s1 = Symbol('hello')
// let s2 = Symbol('hello')
// console.log(s1 == s2);
let obj = {
  [Symbol('name')]: '慧慧',
  abc: 123,
  "hello":'world'
}
for (let key in obj) {
  console.log(key);
}