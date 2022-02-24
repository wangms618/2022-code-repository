// es6的语法特性？如何给一个不懂的人讲symbol，应用场景有哪些？
// 1. symbol是es6新增的一种原始类型
// 2. symbol用来声明唯一值
// 3. 使用symbol来做为对象属性名，使用symbol来定义常量，使用symbol定义类的私有属性，将一些不需要对外操作和访问的属性使用symbol

const TYPE_AUDIO = 'AUDIO'
const TYPE_VIDEO = 'VIDEO'
const TYPE_IMAGE = 'IMAGE'

function handleFileResource(resource) {
  switch(resource.type) {
    case TYPE_AUDIO:
      playAudio(resource)
      break
    case TYPE_VIDEO:
      playVideo(resource)
      break
    case TYPE_IMAGE:
      previewImage(resource)
      break
    default:
      throw new Error('Unknown type of resource')
  }
}