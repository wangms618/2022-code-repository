const obj = {
  a: 1,
  b: 2,
  c: {
    d: 1
  }
}
obj.__proto__.say = '123'
for (const i in obj) {
  console.log(obj.hasOwnProperty(i));
}
