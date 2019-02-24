import React from 'react';
import Post from '../Post/Post.js';
import './PostList.css';

class PostList extends React.Component {
  render() {
    return (
      <div className="list">
      {
        this.props.postList.map(message => {
          return <Post message={message} />
        })
      }
      </div>
    )
  }
}

export default PostList;
