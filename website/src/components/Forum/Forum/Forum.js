import React from 'react';
import './Forum.css';
import { postIncident, subscribeToIncident } from '../../../Socket.js';
import Input from '../Input/Input.js';
import PostList from '../PostList/PostList.js';
import io from 'socket.io-client';



class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
      postList: []
    };

  }

  componentDidMount() {
    // subscribeToIncident((err, msg) => /*this.setState({postList: this.state.postList.unshift(msg)})*/ console.log(msg));

    const socket = io('http://localhost:5000');
    socket.on('push message', (data) => /*this.setState({postList: list.unshift(msg)*/ console.log(data));
  }

  render() {
    return (
      <div className="container">
        <Input postIncident={postIncident}/>
        {this.state.list}
      </div>
    )
  }
}

export default Forum;
