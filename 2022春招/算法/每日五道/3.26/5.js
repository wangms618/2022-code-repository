const map = new Map()
map.set('a', '123')
map.set('b', '123')
map.set('c', '123')
console.log(map.keys().next());
console.log(map.delete('b'));
console.log(map.set('b',111));
// map对象有序