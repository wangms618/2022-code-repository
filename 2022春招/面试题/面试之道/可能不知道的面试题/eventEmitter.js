// 发布订阅
class EventEmitter {
  constructor() {
    this.events = {}
  }
  on(type, callback) { // 订阅事件的方法
    if (!this.events[type]) {
      this.events[type] = [callback]
    } else {
      this.events[type].push(callback)
    }
  }
  emit(type, ...rest) { // 发布事件的方法
    this.events[type] && this.events[type].forEach(fn => fn.apply(this, rest))
  }
}
const eve = new EventEmitter()

eve.on('aaa', (e) => {
  console.log('hello', e);
})
eve.on('aaa', () => {
  console.log('helloww');
})
eve.on('aaa', () => {
  console.log('hellozz');
})
eve.emit('aaa', 123)