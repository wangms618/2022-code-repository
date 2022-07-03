class TodoStore {
    todos = [];

    get completedTodosCount() {
        return this.todos.filter(todo => todo.completed === true).length;
    }

    report() {
        if (this.todos.length === 0) return "<无>";
        const nextTodo = this.todos.find(todo => todo.completed === false);
        return (
            `下一个待办："${nextTodo ? nextTodo.task : "<无>"}"。 ` +
            `进度：${this.completedTodosCount}/${this.todos.length}`
        );
    }

    addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null,
        });
    }
}

// 到目前为止，这段代码并没有什么特别之处。
// 但如果我们不是非得刻意调用 report，而是可以规定它必须在每次 相关 状态改变时都被调用呢？
// 那样我们就不需要从代码中所有 有可能 对 report 产生影响的地方手动调用 report 了。
// 我们确实想让最新的 report 被打印出来，但并不想因为要手动去组织它而费功夫。
const todoStore = new TodoStore();
todoStore.addTodo("阅读 MobX 教程");
console.log(todoStore.report());

todoStore.addTodo("试用 MobX");
console.log(todoStore.report());

todoStore.todos[0].completed = true;
console.log(todoStore.report());

todoStore.todos[1].task = "在自己的项目中试用 MobX";
console.log(todoStore.report());

todoStore.todos[0].task = "理解 MobX 教程";
console.log(todoStore.report());