import React from 'react';
import './Post.css';

class Post extends React.Component {
  render() {
    return (
      <div className="post">
        {this.props.message}
      </div>
    )
  }
}

export default Post;
