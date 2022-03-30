// 明确
// 有两个功能
// on 负责添加事件并添加事件触发回调
// emit 负责触发事件并传入参数

class EventEmitter {
    constructor() {
        this.event = {}
    }
    on(e, callback) {
        this.event[e] ? this.event[e].push(callback) : this.event[e] = [callback]
    }
    emit(e, params) {
        if (this.event[e]) {
            this.event[e].forEach(callback => callback.call(this, params))
        }
    }
}
const eve = new EventEmitter()

eve.on('aaa', (e) => {
    console.log('hello', e);
})


eve.emit('aaa', 123)
eve.emit('aaa', {
    a: 1,
    b: 2
})