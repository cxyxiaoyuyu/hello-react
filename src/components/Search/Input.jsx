import React, { Component } from 'react'
import axios from 'axios'

export default class Input extends Component {
  input = React.createRef()
  search = () => {
    // 发送请求前更新isFirst 状态
    this.props.updateState({isFirst: false,isLoading: true})
    const value = this.input.current.value
    axios.get(`https://api.github.com/search/users?q=${value}`)
      .then(res => {
        console.log(res)
        this.props.updateState({isLoading: false,users: res.data.items})
      },err => {
        this.props.updateState({isLoading: false,err:err.message}) 
      })
  }
  render() {
    return (
      <div className="input">
        <input ref={this.input} type="text" />
        <button onClick={this.search}>搜索</button>
      </div>
    )
  }
}
