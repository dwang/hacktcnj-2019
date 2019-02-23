import React from 'react';
import './Forum.css';
import Post from './Post.js';
import Input from './Input.js';

class Forum extends React.Component {
  render() {
    return (
      <div className="container">
        <Input />
        <Post message="hi" />
        <Post message="hi" />
      </div>
    )
  }
}

export default Forum;
