import React from 'react';
import './Forum.css';
import Input from '../Input/Input.js';
import PostList from '../PostList/PostList.js';

class Forum extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postList: ["ok", "ok", "ok"]
    };
  }
  render() {
    return (
      <div className="container">
        <Input />
        <PostList postList={this.state.postList}/>
      </div>
    )
  }
}

export default Forum;
