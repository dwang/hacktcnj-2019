import React from 'react';
import Post from '../Post/Post.js';

class PostList extends React.Component {
  render() {
    return (
      <div>
        <Post message="hi" />
        <Post message="hi" />
        <Post message="hi" />
        <Post message="hi" />
      </div>
    )
  }
}

export default PostList;
