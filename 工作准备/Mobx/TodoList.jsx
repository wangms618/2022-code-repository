// 如果只删除TodoView上的observer，保留TodoList组件上的observer，更新数据，TodoView依旧重新渲染，
// 所以父组件使用observer，子组件也是被包裹在内的，会同样监听


// observer包裹，如果禁用这里的observer，添加或删除列表项，列表不会更新，也就是修改了store的数据，组件TodoList不重新渲染，TodoView同理
// 代码很好地证明了我们只需要更改数据，而不需要做更多的数据记录。MobX 会重新从 store 里的状态中自动派生并更新用户界面中相关的部分。
const TodoList = observer(({ store }) => {
    const onNewTodo = () => {
        // addTodo添加listItem
        store.addTodo(prompt("输入新的待办：", "请来杯咖啡"));
    };

    return (
        <div>
            {/* 展示，每次组件渲染都会调用它 */}
            {store.report}
            <ul>
                {/* 数据渲染 */}
                {store.todos.map((todo, idx) => (
                    <TodoView todo={todo} key={idx} />
                ))}
            </ul>
            {store.pendingRequests > 0 ? <marquee>正在加载……</marquee> : null}
            <button onClick={onNewTodo}>新待办</button>
            <small>（双击待办进行编辑）</small>
            <RenderCounter />
        </div>
    );
});

const TodoView = observer(({ todo }) => {
    const onToggleCompleted = () => {
        todo.completed = !todo.completed;
    };

    const onRename = () => {
        todo.task = prompt("任务名称", todo.task) || todo.task;
    };

    return (
        <li onDoubleClick={onRename}>
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={onToggleCompleted}
            />
            {todo.task}
            {todo.assignee ? <small>{todo.assignee.name}</small> : null}
            <RenderCounter />
        </li>
    );
});

ReactDOM.render(
    <TodoList store={observableTodoStore} />,
    document.getElementById("reactjs-app")
);
