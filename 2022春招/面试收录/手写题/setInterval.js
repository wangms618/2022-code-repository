function mySetInterval(fn, delay) {
  let time = null
  isClear = false

  function interval() {
    if (isClear) {
      isClear = false
      clearTimeout(time)
      return
    }
    fn()
    time = setTimeout(interval, delay)
  }
  time = setTimeout(interval, delay)
  return () => {
    isClear = true;
  };
}

let a = mySetInterval(() => {
  console.log(111);
}, 1000)

a()