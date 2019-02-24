import React from 'react';
import Post from '../Post/Post.js';

class PostList extends React.Component {
  render() {
    return (
      <div>
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
