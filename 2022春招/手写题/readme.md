# 1. 数据类型判断
typeof 可以正确识别：Undefined、Boolean、Number、String、Symbol、Function 等类型的数据，但是对于其他的都会认为是 object，比如 Null、Date 等，所以通过 typeof 来判断数据类型会不准确。但是可以使用 Object.prototype.toString 实现
[题目](./1.js)

# 2. 原型链继承
[题目](./2.js)
# 3. 构造继承
[题目](./3.js)
# 4. 组合继承
[题目](./4.js)
# 4. 寄生组合继承
[题目](./5.js)
# 6. class实现继承
[题目](./6.js)

# 浅拷贝
特点：浅拷贝数组或对象里的对象会修改原对象
- 借助API

  1. Object.assign() 此方法可以把任意多个的源对象自身的可枚举属性拷贝给目标对象，然后返回目标对象。

  2. 解构赋值

  3. concat 只可用于数组
- 手写浅拷贝

# 深拷贝
JSON.stringify
JSOS.parse