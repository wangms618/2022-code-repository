class eventEmitter {
  constructor() {
    this.events = {}
  }
  on(type, callback) {
    if (!this.events[type]) { // 如果没有这个事件，创建这个事件，并将回调函数存入
      this.events[type] = [callback]
    } else { // 如果有，将回调函数放入
      this.events[type].push(callback)
    }
  }
  emit(type, ...rest) { // ...rest代表可以接受多个参数
    if (this.events[type]) {
      this.events[type].forEach(fn => {
        fn.apply(this, rest)
      })
    }
  }

}

let eve = new eventEmitter()


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