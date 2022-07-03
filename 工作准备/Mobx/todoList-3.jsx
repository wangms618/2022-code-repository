// observer包裹，
const TodoList = observer(({ store }) => {
    const onNewTodo = () => {
        // addTodo添加listItem
        store.addTodo(prompt("输入新的待办：", "请来杯咖啡"));
    };

    return (
        <div>
            {/* 展示 */}
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
