import React, { Component } from "react";
import Input from "./Input";
import List from "./List";
import Footer from "./Footer";
import "./index.css";
export default class TodoList extends Component {
  state = {
    todos: [
      { id: "001", name: "吃饭", done: false },
      { id: "002", name: "睡觉", done: false },
      { id: "003", name: "打豆豆", done: false },
    ],
  };
  addTodo = (name) => {
    const { todos } = this.state;
    todos.unshift({
      id: (todos.length + 1).toString().padStart(3, "0"),
      name: name,
      done: false,
    });
    this.setState(todos);
  };
  updateTodo = (id, done) => {
    const { todos } = this.state;
    const newTodos = todos.map((item) => {
      if(item.id === id){
        return {...item,done}
      }else{
        return item 
      }
    });
    this.setState({todos:newTodos})
  };
  deleteTodo = (id) => {
    const {todos} = this.state 
    const newTodos = todos.filter(item => item.id !== id)
    this.setState({todos:newTodos})
  }
  checkAllTodo = (done) => {
    const {todos} = this.state 
    const newTodos = todos.map(todo => ({...todo,done}))
    this.setState({todos: newTodos})
  }
  clearDone = () => {
    const {todos} = this.state 
    const newTodos = todos.filter(todo => !todo.done)
    this.setState({todos: newTodos})
  }
  render() {
    return (
      <div className="container">
        <Input addTodo={this.addTodo} />
        <List todos={this.state.todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo} />
        <Footer todos={this.state.todos} checkAllTodo={this.checkAllTodo} clearDone={this.clearDone}/>
      </div>
    );
  }
}
