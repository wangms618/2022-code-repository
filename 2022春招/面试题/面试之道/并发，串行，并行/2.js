var img
function getBase64Image(img) {
  let canvas = document.createElement('canvas')
  canvas.width = img.width
  canvas.height = img.height
  let ctx = canvas.getContext('2d')
  ctx.drawImage(img, 0, 0, img.width, img.height)
  // 截取字符串
  let ext = img.src.substring()

  


}