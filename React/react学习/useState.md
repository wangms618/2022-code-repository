## useState
1. useState可以接收一个函数作为参数，把这个函数称为state初始化函数
一般场景下useState只要传入一个值就可以作为这个state的初始值，但是如果这个值要通过一定计算才能得出的呢？那么此时就可以传入一个函数，在函数中计算完成后，返回一个初始值。
```js
import React, { useState } from 'react';
export default (props) => {
  const { a } = props;
  const [b] = useState(() => {
    return a + 1;
  })
  return (
    <div>{b}</div>
  )
};
```

2. state更新如何使用旧的state
```js
const [a , setA] = useState(1);
const changeA = () =>{
   setA( a => a+1 );
   setA( a => a+1 );
}
```

3. 如何拆分state
在函数式组件中，只要一个state改变都会引起组件的重新渲染。而在React中只要父组件重新渲染，其子组件都会被重新渲染。
那么问题就来了，如果把state拆分成多个，当依次改变这些state，则会多次触发组件重新渲染。
若不拆分state，改变state时，就只会触发一次组件重新渲染。但是要注意，函数式组件不像类组件那样，改变其中state中的一个数据，会自动更新state中对应的数据。要这么处理
```js
const [data,setData] = useState({a:1,b:2,c:3});
const changeData = () =>{
   setData(data =>{
      ...data,
      a:2,
   })
}
```