import React from 'react';
import SideNav from 'react-simple-sidenav';
import './SideNavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class SideNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: true
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if (this.state.showNav === false) {
      this.setState({
        showNav: true
      })
    }
  }

  render() {
    return (
      <div>
        <FontAwesomeIcon icon="bars" onClick={this.handleClick} className="button"/>
        <SideNav
          showNav={this.state.showNav}
          onHideNav={()=>this.setState({showNav:false})}
          title={<div>Hello octo <img src='git-mark.png' width='26' /></div>}
          titleStyle={{backgroundColor: '#b0b2b2'}}
          items={[
            <a target='_blank' href='https://github.com/gauravchl/react-simple-sidenav'>Home</a>,
            <a target='_blank' href='https://www.npmjs.com/package/react-simple-sidenav'>Install via npm</a>,
            <a target='_blank' href='https://gauravchl.github.io/react-simple-sidenav/demo/'>demo</a>
            ]} />
      </div>
    )
  }
}

export default SideNavBar;
