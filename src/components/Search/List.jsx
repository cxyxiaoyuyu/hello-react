import React, { Component } from "react";

export default class List extends Component {
  render() {
    const { users, isFirst, isLoading, err } = this.props;
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
