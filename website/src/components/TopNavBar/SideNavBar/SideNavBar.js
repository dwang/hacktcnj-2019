import React from 'react';
import SideNav from 'react-simple-sidenav';
import './SideNavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SideNavBar extends React.Component {
  render() {
    return (
      <div className="sideNavBar">
        <SideNav
          showNav={this.props.handleNav}
          onHideNav={this.props.onHideNav}
          title={<div>Hello octo</div>}
          titleStyle={{backgroundColor: '#b0b2b2'}}
          items={[
            <a target='_blank' href='https://github.com/gauravchl/react-simple-sidenav'>Home</a>,
            <a target='_blank' href='https://www.npmjs.com/package/react-simple-sidenav'>Help</a>]} />
      </div>
    )
  }
}

export default SideNavBar;
