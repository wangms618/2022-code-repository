function Parent(name) {
  this.name = name;
  this.say = () => {
    console.log(111);
  };
}
Parent.prototype.play = () => {
  console.log(222);
};

function Children(name) {
  Parent.call(this);
  this.name = name;
}
Children.prototype = Object.create(Parent.prototype);
console.log(Children.prototype.__proto__ === Parent.prototype); // true
console.log(Children.prototype);
Children.prototype.constructor = Children;
console.log(Children.prototype);
// let child = new Children("111");
// console.log(child.name);
// child.say();
// child.play();