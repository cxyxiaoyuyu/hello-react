import React, { Component } from "react";

export default class Footer extends Component {
  handleCheckAll = (event) => {
    const { checkAllTodo } = this.props
    checkAllTodo(event.target.checked) 
  }
  render() {
    const { todos } = this.props;
    // const doneCount = todos.filter((item) => item.done).length;
    const doneCount = todos.reduce((pre,todo)=>pre+(todo.done? 1: 0),0)
    const total = todos.length;
    return (
      <div>
        <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !==0 ? true : false}/> 全选
        <span>已完成{doneCount}</span> /<span>全部{total}</span>
        <button onClick={this.props.clearDone}>清除已完成的任务</button>
      </div>
    );
  }
}
