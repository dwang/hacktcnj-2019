import React from 'react';
import Home from '../../Home/Home.js';
import Forum from '../../Forum/Forum/Forum.js';
import Announcements from '../../Announcements/Announcements/Announcements.js'

class PageSelect extends React.Component {
  pageSelect(p) {
    if (p.showHome) {
      return <Home />;
    } else if (p.showForum) {
      return <Forum />;
    } else if (p.showAnnouncements) {
      return <Announcements />;
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
