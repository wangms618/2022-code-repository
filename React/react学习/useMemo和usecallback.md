- 对其定义的理解
```js
useCallback(fn,[a, b]);
useMemo(fn, [a, b]);
```


如上所示，`useMemo`和`usecallback`参数中`fn`是一个函数，参数中`[a,b]`的`a`和`b`可以是`state`或`props`。
`useMemo`和`usecallback`首次执行时，执行`fn`后创建一个缓存并返回这个缓存，监听`[a,b]`中的表示`state`或`props`的`a`和`b`，若值未发生变化直接返回缓存，若值发生变化则重新执行`fn`再创建一个缓存并返回这个缓存。
`useMemo`和`usecallback`都会返回一个缓存，但是这个缓存各不相同，`useMemo`返回一个值，这个值可以认为是执行`fn`返回的。`usecallback`返回一个函数，这个函数可以认为是`fn`。那么注意了传给`useMemo`的`fn`必须返回一个值。
