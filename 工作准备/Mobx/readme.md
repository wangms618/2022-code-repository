## mobx
三个核心概念
- Action
- State
- Reaction

## 核心API及其设计理念
- observable -- 将数据变为可观察的对象
- computed、autorun、when、reaction... -- 可观察对象发生变化后作出对应的响应

**观察者**通常是组件
**被观察者**通常是State


### Observable state(可观察的状态)

- MobX 为现有的数据结构(如对象，数组和类实例)添加了可观察的功能。 通过使用 @observable 装饰器(ES.Next)来给你的类属性添加注解就可以简单地完成这一切。
```ts
import { observable } from "mobx";

class Todo {
    id = Math.random();
    @observable title = "";
    @observable finished = false;
}

```

### Computed values(计算值)
使用 MobX， 你可以定义在相关数据发生变化时自动更新的值。 通过@computed 装饰器或者利用 (extend)Observable 时调用 的getter / setter 函数来进行使用。(当然，这里也可以再次使用 decorate 来替代 @ 语法)。
```ts
class TodoList {
    @observable todos = [];
    @computed get unfinishedTodoCount() {
        return this.todos.filter(todo => !todo.finished).length;
    }
}
```
当添加了一个新的todo或者某个todo的 finished 属性发生变化时，MobX 会确保 unfinishedTodoCount 自动更新。 像这样的计算可以类似于 MS Excel 这样电子表格程序中的公式。每当只有在需要它们的时候，它们才会自动更新。


### Reactions(反应)
Reactions 和计算值很像，但它不是产生一个新的值，而是会产生一些副作用，比如打印到控制台、网络请求、递增地更新 React 组件树以修补DOM、等等。 简而言之，reactions 在 响应式编程和命令式编程之间建立沟通的桥梁。
#### React 组件
如果你用 React 的话，可以把你的(无状态函数)组件变成响应式组件，方法是在组件上添加 observer 函数/ 装饰器. observer由 mobx-react 包提供的。
```js
import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {observer} from 'mobx-react';

@observer
class TodoListView extends Component {
    render() {
        return <div>
            <ul>
                {this.props.todoList.todos.map(todo =>
                    <TodoView todo={todo} key={todo.id} />
                )}
            </ul>
            Tasks left: {this.props.todoList.unfinishedTodoCount}
        </div>
    }
}

const TodoView = observer(({todo}) =>
    <li>
        <input
            type="checkbox"
            checked={todo.finished}
            onClick={() => todo.finished = !todo.finished}
        />{todo.title}
    </li>
)

const store = new TodoList();
ReactDOM.render(<TodoListView todoList={store} />, document.getElementById('mount'));

```