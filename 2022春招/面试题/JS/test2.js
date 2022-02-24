function Foo() {
  this.getName = function () {
    console.log(3);
    return {
      getName: getName
    }
  };
  getName = function () {
    console.log(1);
  };
  return this
}
Foo.getName = function () {
  console.log(2);
};
Foo.prototype.getName = function () {
  console.log(6);
};
var getName = function () {
  console.log(4);
};

function getName() {
  console.log(5);
}

new Foo().getName().getName()  // 3 1