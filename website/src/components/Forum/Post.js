import React from 'react';

class Post extends React.Component {
  render() {
    return (
      <div className="Post">
        {this.props.message}
      </div>
    )
  }
}

export default Post;
