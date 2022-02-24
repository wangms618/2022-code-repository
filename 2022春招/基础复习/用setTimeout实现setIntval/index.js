// function setInt(fn, time = 3000) {
//   let timer = null

//   function interval() {
//     fn();
//     timer = setTimeout(interval, time);
//   }
//   timer = setTimeout(interval, time)
// }

// function test() {
//   console.log(333);
// }
setInt(test)

function mySetInterval(fn, time = 1000) {
  let timer = null,
    isClear = false;
  function interval() {
    if (isClear) {
      isClear = false;
      clearTimeout(timer);
      return;
    }
    fn();
    timer = setTimeout(interval, time);
  }
  timer = setTimeout(interval, time);
  // 这里返回一个清除定时器的函数，只要修改isClear就可
  return () => {
    isClear = true;
  };
}
