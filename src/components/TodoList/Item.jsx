import React, { Component } from "react";

export default class Item extends Component {
  handleChange = (id) => {
    const {updateTodo} = this.props
    return (event)=>{
      updateTodo(id,event.target.checked)
    }
  };
  handleDelete = (id) => {
    if(window.confirm('确定删除么？')){
      const {deleteTodo} = this.props
      deleteTodo(id)
    }
  }
  render() {
    const { id, name, done } = this.props;
    return (
      <li className="item">
        <label>
          <input type="checkbox" checked={done} onChange={this.handleChange(id)} />
          <span>{name}</span>
        </label>
        <button className="delete" onClick={()=>this.handleDelete(id)}>删除</button>
      </li>
    );
  }
}
