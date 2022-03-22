import React, { Component } from "react";

export default class List extends Component {
  state = {
    users: [],
    isFirst: true, // 是否为第一次打开页面
    isLoading: false, // 是否处于加载中
    err: "", // 存储请求相关的错误信息
  };
  componentDidMount(){
    const {pubsub} = this.props 
    this.token = pubsub.subscribe('changeState',(_,stateObj)=>{
      this.setState(stateObj) 
    })
  }
  componentWillUnmount(){
    // 取消订阅
    this.props.pubsub.unsubscribe(this.token) 
  }
  render() {
    const { users, isFirst, isLoading, err } = this.state;
    return (
      <div className="list">
        {isFirst ? (
          <h2>Enter keyword then click search</h2>
        ) : isLoading ? (
          <h2>Loading...</h2>
        ) : err ? (
          <h2>{err}</h2>
        ) : (
          users.map((user) => {
            return (
              <div className="card" key={user.id}>
                <a href={user.html_url} target="_blank" rel="noreferrer">
                  <img
                    src={user.avatar_url}
                    style={{ width: "100px", height: "100px" }}
                    alt=""
                  />
                  <span>{user.login}</span>
                </a>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
