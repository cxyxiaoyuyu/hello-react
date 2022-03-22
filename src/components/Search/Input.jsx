import React, { Component } from 'react'
// import axios from 'axios'

export default class Input extends Component {
  input = React.createRef()
  search = async () => {
    const {pubsub} = this.props
    // 发送请求前更新isFirst 状态
    pubsub.publish('changeState',{isFirst: false,isLoading: true})
    const value = this.input.current.value
    // axios.get(`https://api.github.com/search/users?q=${value}`)
    //   .then(res => {
    //     pubsub.publish('changeState',{isLoading: false,users: res.data.items})
    //   },err => {
    //     pubsub.publish('changeState',{isLoading: false,err:err.message})
    //   })
    // fetch(`https://api.github.com/search/users?q=${value}`)
    //   .then(res => {
    //     console.log(res) 
    //     return res.json()
    //   },err=>{
    //     console.log(err)
    //   }).then(res=>{
    //     console.log(res) 
    //   })
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${value}`)
      const data = await response.json()
      pubsub.publish('changeState',{isLoading: false,users: data.items})
    }catch(err){
      console.log('请求出错',err)
      pubsub.publish('changeState',{isLoading: false,err:err.message})
    }

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
