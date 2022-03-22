import React, { Component } from 'react'
import Input from './Input'
import List from './List'
import './search.css'
import PubSub from 'pubsub-js'

export default class Search extends Component {
  pubsub = PubSub
  render() {
    return (
      <div className='search'>
        <Input pubsub={this.pubsub}/> 
        <List pubsub={this.pubsub} />
      </div>
    )
  }
}
