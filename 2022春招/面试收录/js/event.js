async function test() {
  console.log('123');
  return 100
}

const f1 = test()
f1.then(res => console.log(res))