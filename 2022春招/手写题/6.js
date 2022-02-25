class superType {
    constructor(name) {
        this.name = name
    }
    getName() {
        return this.name
    }
}
class subType extends superType {
    constructor(name, age) {
        super(name);
        this.age = age
    }
}

const instance = new subType('张三', 2)
console.log(instance.getName()); // 张三