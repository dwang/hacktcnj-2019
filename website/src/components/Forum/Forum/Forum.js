import React from 'react';
import './Forum.css';
import Input from '../Input/Input.js';
import PostList from '../PostList/PostList.js';
import io from 'socket.io-client';

class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: []
    };
    this.postIncident = this.postIncident.bind(this);
  }

  socket = io.connect('http://127.0.0.1:5000');


  postIncident(username,message) {
    let list = this.state.postList;
    list.unshift(message);
    this.setState({
      postList: list
    })
    this.socket.emit( 'my event', {
      user_name : username,
      message: message
    } )
  }

  render() {
    return (
      <div className="container">
        <Input postIncident={this.postIncident}/>
        <PostList postList={this.state.postList}/>
      </div>
    )
  }
}

export default Forum;
