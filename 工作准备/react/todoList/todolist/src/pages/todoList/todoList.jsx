import React, { Component, Fragment } from "react";
class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: "",
            list: ["学习", "good"],
        };
    }

    handleInputChange(e) {
        this.setState(() => {
            return { inputValue: e.target.value };
        });
        // this.setState({ inputValue: e.target.value });
    }

    handleInputPush() {
        this.setState(() => {
            return {
                list: [...this.state.list, this.state.inputValue],
                inputValue: "",
            };
        });
        // this.setState({
        //     list: [...this.state.list, this.state.inputValue],
        //     inputValue: "",
        // });
    }

    handleItemDelete(index) {
        const list = [...this.state.list];
        list.splice(index, 1);
        this.setState({
            list: list,
        });
    }

    // componentDidUpdate() {
    //     console.log(this.state.inputValue);
    // }
    render() {
        return (
            <Fragment>
                <div>
                    <input
                        value={this.state.inputValue}
                        onChange={this.handleInputChange.bind(this)}
                        type="text"
                    />
                    <button onClick={this.handleInputPush.bind(this)}>
                        提交
                    </button>
                    <ul>
                        {this.state.list.map((item, index) => {
                            return (
                                <li
                                    onClick={this.handleItemDelete.bind(
                                        this,
                                        index
                                    )}
                                    key={index}
                                    dangerouslySetInnerHTML={{ __html: item }}
                                >
                                    {/* {item} */}
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </Fragment>
        );
    }
}

export default TodoList;
