function ajax(url, method, callback) {
  let xhr = new XMLHttpRequest()
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      if (xhr.status == 200) {
        callback()
      } else {
        console.log('fail');
      }
    }
  }
  xhr.open(method, url)
  xhr.send(null)
}