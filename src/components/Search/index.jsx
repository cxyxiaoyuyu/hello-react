import React, { Component } from 'react'
import Input from './Input'
import List from './List'
import './search.css'
export default class Search extends Component {
  state = {
    users: [],
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 是否处于加载中
    err: ''  // 存储请求相关的错误信息
  }
  updateState = (stateObj) => {
    this.setState(stateObj)
  }
  render() {
    return (
      <div className='search'>
        <Input updateState={this.updateState}/> 
        <List {...this.state}/>
      </div>
    )
  }
}
