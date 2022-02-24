function addEvent(element, type, handle) {
  if (element.addEventListener) {
    element.addEventListener(type, handle)
  } else if (element.attachEvent) {
    element.attachEvent('on' + type, handle)
  } else {
    element['on' + type] = handle
  }
}

// 优化
function addEvent(element, type, handle) {
  if (element.addEventListener) {
    element.addEventListener(type, handle)
  } else if (element.attachEvent) {
    // 成立的那一刻，重新构建addEvent函数
    addEvent = function (type, element, handle) {
      element.attachEvent('on' + type, handle)
    }
  } else {
    element['on' + type] = handle
  }
}

addEvent(dom, 'click', () => {

})