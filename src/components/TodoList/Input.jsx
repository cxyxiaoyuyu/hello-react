import React, { Component } from 'react'
export default class Input extends Component {
  handleKeyUp = (event) => {
    if(event.keyCode === 13){ // 按下了enter键    
      this.addTodo()
    }
  }
  addTodo = () => {
    this.props.addTodo(this.input.current.value)
    this.input.current.value = ''
  }
  input = React.createRef()
  render() {
    return (
      <div>
        <input ref={this.input} type="text" placeholder='输入新的任务' onKeyUp={this.handleKeyUp}/>
        <button onClick={this.addTodo}>新增</button>
      </div>
    )
  }
}

    

