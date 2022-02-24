// 分别实现一个浅拷贝 和 深拷贝
function shallowClone(source) {
  var target = {};
  for (var i in source) {
    if (source.hasOwnProperty(i)) {
      target[i] = source[i];
    }
  }
  return target;
}

function deepClone() {
  if (typeof obj == 'object') {
    var result = obj.constructor === Array ? [] : {}
    for (var i in obj) {
      result[i] = typeof obj[i] === 'object' ? deepClone(obj[i]) : obj[i]
    }
  } else {
    var result = obj
  }
  return result
}