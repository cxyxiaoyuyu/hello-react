import { Component } from "react";
// import TodoList from "./components/TodoList";

import axios from 'axios'

class App extends Component {
  getStudentData1 = () => {
    axios.get('api/students').then(res => {
      console.log(res.data) 
    }) 
  }
  getStudentData2 = () => {
    axios.get('/api/students').then(res => {
      console.log(res.data) 
    }) 
  }
  getStudentData3 = () => {
    axios.get('http://localhost:3000/api/students').then(res => {
      console.log(res.data) 
    }) 
  }

  render() {
    return (
      <div className="App">
        {/* <TodoList /> */}
        <button onClick={this.getStudentData1}>获取学生数据api/students</button>
        <button onClick={this.getStudentData2}>获取学生数据/api/students</button>
        <button onClick={this.getStudentData3}>获取学生数据http://localhost:3000/api/students</button>
      </div>
    );
  }
}

export default App;
