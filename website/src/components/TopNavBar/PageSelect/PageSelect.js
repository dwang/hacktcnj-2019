import React from 'react';
import Home from '../../Home/Home.js';
import Forum from '../../Forum/Forum/Forum.js';
import MedicalInfo from '../../MedicalInfo/MedicalInfo.js'

class PageSelect extends React.Component {
  pageSelect(p) {
    if (p.showHome) {
      return <Home />;
    } else if (p.showForum) {
      return <Forum />;
    } else if (p.showMedicalInfo) {
      return <MedicalInfo />
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
