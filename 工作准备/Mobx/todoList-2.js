class ObservableTodoStore {
    todos = [];
    pendingRequests = 0;

    constructor() {
        // 
        makeObservable(this, {
            todos: observable,
            pendingRequests: observable,
            completedTodosCount: computed,
            report: computed,
            addTodo: action,
        });
        autorun(() => console.log(this.report));
    }

    get completedTodosCount() {
        return this.todos.filter(
            todo => todo.completed === true
        ).length;
    }

    get report() {
        if (this.todos.length === 0)
            return "<无>";
        const nextTodo = this.todos.find(todo => todo.completed === false);
        return `下一个待办："${nextTodo ? nextTodo.task : "<无>"}"。 ` +
            `进度：${this.completedTodosCount}/${this.todos.length}`;
    }

    addTodo(task) {
        this.todos.push({
            task: task,
            completed: false,
            assignee: null
        });
    }
}

const observableTodoStore = new ObservableTodoStore();
observableTodoStore.addTodo("阅读 MobX 教程");
observableTodoStore.addTodo("试用 MobX");
observableTodoStore.todos[0].completed = true;
observableTodoStore.todos[1].task = "在自己的项目中试用 MobX";
observableTodoStore.todos[0].task = "理解 MobX 教程";
// 下一个待办："阅读 MobX 教程"。 进度：0/1
// 下一个待办："阅读 MobX 教程"。 进度：0/2
// 下一个待办："试用 MobX"。 进度：1/2
// 下一个待办："在自己的项目中试用 MobX"。 进度：1/2

// 很有意思，对吧？report 的确自动同步而顺畅地打印出来了。
// 如果你仔细查看打印出来的日志，你会看到第五行代码最后并没有再触发一行日志。
// 这是因为 report 实际上 并没有因为第五行代码的重命名而发生改变——尽管它背后的数据变了。
// 另一方面，更改第一个待办的名称确实更新了 report，因为 report 正使用着那个新名字。
// 这很好地证明了 autorun 不仅监视观察着 todos 数组，还监视着待办条目中的各个属性。