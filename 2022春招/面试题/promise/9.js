const timeout = ms => new Promise((resolve, reject) => {
  setTimeout(() => {
      resolve();
  }, ms);
});

const ajax1 = () => timeout(2000).then(() => {
  console.log('1');
  return 1;
});

const ajax2 = () => timeout(1000).then(() => {
  console.log('2');
  return 2;
});

const ajax3 = () => timeout(2000).then(() => {
  console.log('3');
  return 3;
});

const mergePromise = ajaxArray => {
  // 在这里实现你的代码
  let data = []
  let sequence = Promise.resolve()
  ajaxArray.forEach(item => {
    // 第二次.then目的是将第一个.then回调函数return的值存入data中
    sequence.then(item).then(function (res) {
      data.push(res)
      return data
    })
  })
  return sequence
};

mergePromise([ajax1, ajax2, ajax3]).then(data => {
  console.log('done');
  console.log(data); // data 为 [1, 2, 3]
});

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]