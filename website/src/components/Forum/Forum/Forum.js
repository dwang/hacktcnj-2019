import React from 'react';
import './Forum.css';
import Input from '../Input/Input.js';
import Image from '../Input/Image.js'
import PostList from '../PostList/PostList.js';

class Forum extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      postList: []
    };
    this.postIncident = this.postIncident.bind(this);
  }

  postIncident(e) {
    let list = this.state.postList;
    list.unshift(e);
    this.setState({
      postList: list
    })
  }

  render() {
    return (
      <div className="container">
        <Input postIncident={this.postIncident} />
        <Image />
        <PostList postList={this.state.postList} />
      </div>
    )
  }
}

export default Forum;
