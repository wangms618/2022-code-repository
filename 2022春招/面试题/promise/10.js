// 异步加载图片
function loadImageAsync(url) {
  return new Promise((resolve, reject) => {
    let image = new Image()
    // 只要image加载完成，就resolve出来
    image.onload = function () {
      resolve(image)
    }
    image.src = url
  })
}
// 'xxxx'放地址
loadImageAsync('xxxx').then()