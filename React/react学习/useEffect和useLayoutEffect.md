-   **执行的时机**

在使用`useEffect`和`useLayoutEffect`之前，要搞明白传入这个两个Hook的函数会在什么时候执行。

传入`useEffect`的函数是在React完成对DOM的更改，浏览器把更改后的DOM渲染出来**后执行的**。

传入`useLayoutEffect`的函数是在React完成对DOM的**更改后**，浏览器把更改后的DOM渲染出来**之前执行的**。

所以`useEffect`不会阻碍页面渲染，`useLayoutEffect`会阻碍页面渲染，但是如果要在渲染前获取DOM元素的属性做一些修改，`useLayoutEffect`是一个很好的选择。

-   **只想执行一次**

组件初始化和每次更新时都会重新执行传入`useEffect`和`useLayoutEffect`的函数。那只想在组件初始化时执行一次呢？相当Vue中的`mounted`，这样实现：

```
useEffect(fn,[]);
useLayoutEffect(fn,[]);
复制代码
```

-   **用来进行事件监听**

上面介绍在`useEffect`在第二参数传入一个空数组`[]`相当Vue中的`mounted`，那么在Vue的`mounted`中经常会用`addEventListener`监听事件，然后在`beforeDestory`中用`removeEventListener`移除事件监听。那用`useEffect`实现一下。

```
useEffect(() => {
   window.addEventListener('keypress', handleKeypress, false);
   return () => {
      window.removeEventListener('keypress', handleKeypress, false);
   };
},[])
复制代码
```

-   **用来监听某个state或prop**

在`useEffect`和`useLayoutEffect`的第二参数是个数组，称为依赖，当依赖改变时候会执行传入的函数。

比如监听 `a` 这个state 和 `b` 这个prop，这样实现：

```
useEffect(fn,[a,b]);
useLayoutEffect(fn,[a,b]);
复制代码
```

但是要注意不要一次性监听过多的state或prop，也就是`useEffect`的依赖过多，如果过多要去优化它，否则会导致这个`useEffect`难以维护。

我是这样来优化的：

-   考虑该依赖是否必要，不必要去掉它。
-   将`useEffect`拆分为更小的单元，每个`useEffect`依赖于各自的依赖数组。
-   通过合并依赖中的相关state，将多个state聚合为一个state。
