// 整体思路是数据劫持+观察者模式
// 对象内部通过 defineReactive 方法，使用 Object.defineProperty 将属性进行劫持（只会劫持已经存在的属性），数组则是通过重写数组方法来实现。
// 当页面使用对应属性时，每个属性都拥有自己的 dep 属性，存放他所依赖的 watcher（依赖收集），当属性变化后会通知自己对应的 watcher 去更新(派发更新)。

class Observer {
    // 观测值
    constructor(value) {
        this.walk(value);
    }
    walk(data) {
        // 对象上的所有属性依次进行观测
        let keys = Object.keys(data);
        for (let i = 0; i < keys.length; i++) {
            let key = keys[i];
            let value = data[key];
            defineReactive(data, key, value);
        }
    }
}
// Object.defineProperty数据劫持核心 兼容性在ie9以及以上
function defineReactive(data, key, value) {
    observe(value); // 递归关键
    // --如果value还是一个对象会继续走一遍odefineReactive 层层遍历一直到value不是对象才停止
    //   思考？如果Vue数据嵌套层级过深 >>性能会受影响
    Object.defineProperty(data, key, {
        get() {
            console.log("获取值");

            //需要做依赖收集过程 这里代码没写出来
            return value;
        },
        set(newValue) {
            if (newValue === value) return;
            console.log("设置值");
            //需要做派发更新过程 这里代码没写出来
            value = newValue;
        },
    });
}

// ! 第一步，先用observe先把对象或数组进行属性劫持，利用Object.defineProprety，而数组会重写数组方法，如果属性改变，会通知自己的watch去派发更新
export function observe(value) {
    // 如果传过来的是对象或者数组 进行属性劫持
    if (
        Object.prototype.toString.call(value) === "[object Object]" ||
        Array.isArray(value)
    ) {
        return new Observer(value);
    }
}