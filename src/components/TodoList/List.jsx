import React, { Component } from "react";
import PropTypes from "prop-types";
import Item from "./Item";
export default class List extends Component {
  static propTypes = {
    todos: PropTypes.array.isRequired,
    updateTodo: PropTypes.func.isRequired
  }

  render() {
    const { todos,updateTodo,deleteTodo} = this.props;
    return (
      <div className="list">
        <ul>
          {
            todos.map(item => <Item key={item.id} {...item} updateTodo={updateTodo} deleteTodo={deleteTodo} />)
          } 
        </ul>
      </div>
    );
  }
}
