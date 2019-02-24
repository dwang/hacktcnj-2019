import React from 'react';
import './Announcements.css';
import PostList from '../PostList/PostList.js';
import io from 'socket.io-client';

class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: ['Important Information']
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
        <PostList postList={this.state.postList}/>
      </div>
    )
  }
}

export default Forum;
