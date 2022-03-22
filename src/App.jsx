import { Component } from "react";
// import TodoList from "./components/TodoList";
import Search from './components/Search'
import axios from 'axios'

class App extends Component {
  getStudentData1 = () => {
    axios.get('api/students').then(res => {
      console.log(res.data) 
    }) 
  }
  render() {
    return (
      <div className="App">
        {/* <TodoList /> */}
        <Search />
      </div>
    );
  }
}

export default App;
