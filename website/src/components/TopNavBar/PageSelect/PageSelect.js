import React from 'react';
import Home from '../../Home/Home.js';
import Forum from '../../Forum/Forum/Forum.js';

class PageSelect extends React.Component {
  pageSelect(p) {
    if (p.showHome === true) {
      return <Home />;
    } else if (p.showForum === true) {
      return <Forum />;
    }
  }

  render() {
    return (
      <div>
      {
        this.props.selectPage.map(page => {
          return this.pageSelect(page);
        })
      }
      </div>
    )
  }
}

export default PageSelect;
