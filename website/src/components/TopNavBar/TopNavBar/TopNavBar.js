import React from 'react';
import Button from '../Button/Button.js';
import SideNavBar from '../SideNavBar/SideNavBar.js';
import './TopNavBar.css';

class TopNavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showNav: false
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleButton = this.handleButton.bind(this);
  }

  handleClick() {
    if (this.state.showNav === false) {
      this.setState({
        showNav: true
      })
    }
  }

  handleButton(e) {
    this.setState({
      showNav: false
    })
    let event = e.currentTarget.innerHTML;
    if (event === "Home") {
      this.props.clickHome();
    } else if (event === "Message Board") {
      this.props.clickForum();
    } else if (event === "Announcements") {
      this.props.clickAnnouncements();
    } else if (event === "Medical Guide") {
      this.props.clickMedicalInfo();
    }
  }

  render() {
    return(
      <div className="topNav">
        <div className="topNavContainer">
          <div className="buttonColumn">
            <Button onClick={this.handleClick} />
          </div>
          <h1 className="projectTitle">ReliefGrid</h1>
        </div>
        <SideNavBar handleNav={this.state.showNav}
                    onHideNav={()=>this.setState({showNav:false})}
                    buttonClick={this.handleButton}/>
      </div>
    )
  }
}

export default TopNavBar;
