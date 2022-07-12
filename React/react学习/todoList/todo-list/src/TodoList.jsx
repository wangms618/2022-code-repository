import React, { Component, Fragment } from 'react';
import './style.css'
import TodoItem from './TodoItem';

class Todolist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: ['学习', 'good']
    }
  }
  handleInputChange(e) {
    // console.log(this);
    // this.state.inputValue = e.target.value
    // 用setState才实现响应式
    this.setState({
      inputValue: e.target.value
    })
  }
  handleBtnClick() {
    // this.state.list.push(this.state.inputValue)
    // console.log(this.state.list);
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ''
    })

  }
  handleItemDelete(index) {
    // console.log(index);
    const list = [...this.state.list]
    list.splice(index, 1)
    this.setState({
      list: list
    })
  }
  render() {
    return (
      <Fragment>
        {/* 点击输入内容也可以聚焦到input框 */}
        <label htmlFor='insertArea'>输入内容</label>
        <div>
          <input id="insertArea" className="input" value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}></input>
          <button onClick={this.handleBtnClick.bind(this)}>提交</button>
        </div>
        {/* for循环，必须要用map，因为map会返回一个数组出来，再用li数组去拼接到ul  */}
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                // <li
                //   key={index}
                //   onClick={this.handleItemDelete.bind(this, index)}
                //   // 类似于v-html
                //   dangerouslySetInnerHTML={{ __html: item }}
                // ></li>
                // 父子传值
                <TodoItem key={index} content={item}/>
              )
            })
          }
        </ul>
      </Fragment>
    );
  }
}

export default Todolist;
