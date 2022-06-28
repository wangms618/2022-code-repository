class MyClass {
    constructor() {
        // ...
    }
    get prop() {
        return 'getter';
    }
    set prop(value) {
        console.log('setter: ' + value);
    }
}

let inst = new MyClass();
console.log(inst);

inst.prop = 123;
// setter: 123

inst.prop
// 'getter'