
function throtle(fn, delay) {
  let oldDate = new Date()
  return function() {
      let newDate = new Date()
      let context = this
      let arg = [...arguments]
      if(newDate - oldDate >= delay){
          fn.apply(context, arg)
          oldDate = new Date()
      }
  }
}


function debounce(fn, delay){
  let time = null
  return function(){
      let context = this
      let arg = [...arguments]
      clearTimeout(time)
      time = setTimeout(() => {
          fn.apply(context, arg)
      }, delay)
  }
}
