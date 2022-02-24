class EventEmitter {
  constructor() {
    this.event = {}
  }
  on(type, callback) {
    if (!this.event[type]) {
      this.event[type] = [callback]
    } else {
      this.event[type].push(callback)
    }
  }
  emit(type, ...rest) {
    // this.event[type] && this.event[type].forEach(fb => fb.apply(this, rest))
    if (this.event[type]) {
      this.event[type].forEach(fb => fb.apply(this, rest))
    }
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