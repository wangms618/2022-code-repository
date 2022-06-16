# JSX
## this问题
在 JavaScript 中，class 的**方法**默认不会绑定 this。需要先绑定好this


# 创建React项目
create-react-app demo

## css问题
在react添加类必须使用className，是为了防止与es6的class发生冲突


## package.json文件夹
- dependencies
  - 项目依赖：里面引用了所有会使用到的第三方组件
- scripts
  - 命令


## tsconfig.json文件夹
    "moduleResolution": "node",
    "resolveJsonModule": true,
  用于typescript读取json文件


## TS的定义声明
*.d.ts 只包含类型声明，不包含逻辑

# state和props的区别
props是组件对外的接口，而state是组件对内的接口

- state 是私有的，可以认为state是组件的私有属性
- setState() 修改state
- 直接修改state，组件不会触发render函数，页面不会渲染，应该使用setState()
```js
onClick={() => {
  this.setState({isOpen:!this.state.isOpen})
}}
```

### 初始化state
- 构建函数constructor是唯一可以初始化state的地方

- state的更新是异步的，调用setState后，state不会立刻改变，是异步操作
- 不要依赖当前的state，去计算下个state

### props
- 本质上,prpos就是传入函数的参数，是从传入组件内部的数据。更准确的说，是从父组件传递向子组件的数据

## setState
- 异步更新，同步执行
- setState本身并非异步，但对state的处理机制给人一种异步的假象，state处理一般发生在生命周期变化的时候


## 生命周期
Mounting:创建虚拟DOM，渲染UI
Updating:更新虚拟DOM，重新渲染UI
Unmounting:删除虚拟DOM，移除UI


## hooks
- 消息处理的一种方法，用来监视指定程序
- 函数组件中需要处理副作用，可以用钩子把外部代码钩进来
- 常用钩子：useState,useEffect,useContext,useReducer
- hooks一律使用use前缀命名：useXxx
- 一类特殊的函数，为你的函数型式组件(functional component)注入特殊的功能
- hooks的目的就是为了给函数式组件加上状态

## 副作用 
指一个函数处理了与返回值无关的事情
### useEffect
- 默认情况，每次UI渲染或者状态改变的时候，useEffect都会执行
- 其他情况，需要输入第二个参数，参数是一个数组，是一个状态列表，如果这个状态列表不为空，useEffect会关注这个列表的状态，一旦发现列表内某个元素发生变化，第一个回调的逻辑就会被执行
- 如果传入空数组，就等于componentDidMount，副作用有且仅会在第一次挂载ui的时候调用
```js
    useEffect(() => {
        document.title = `点击${count}次`;
    }, [count]);
```
#### 需要注意的细节
- 注意useEffect函数的第二个参数

- 如何在useEffect中使用async/await
    - useEffect第一个参数不允许async修饰
    - 报错：类型“() => Promise<void>”的参数不能赋给类型“EffectCallback”的参数。不能将类型“Promise<void>”分配给类型“void | Destructor”。
    - 原因：useEffect要么返回一个函数，要么什么都不返回，使用async，函数将会返回Promise
    - 解决：创建一个函数包裹原代码逻辑，再次调用
  ```js
    useEffect(() => {
        // 使用异步需要注意的事
        const fetchData = async () => {
            const responses = await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );
            const data = await responses.json();
            setRobotGallery(data);
        };
        fetchData()
    }, []);

  ```


## useContext上下文对象
1. 首先需要创建上下文对象
```js
  //需要初始值defaultContextValue
  const appContext = React.createContext(defaultContextValue)
```
2. 提供数据支持需要把整个render函数包裹起来
```js
  // 注入value
  <appContext.Provider value={defaultContextValue}>
            <App />
  </appContext.Provider>
```

3. 使用appContext.Concumer组件进行数据获取
```js
<appContext.Consumer>
  ((value)=>{
    return (
      <div>{value}</div>
    )
  })
</appContext.Consumer>
```
如果想直接使用value
```js
const value = useContext(appContext)
```