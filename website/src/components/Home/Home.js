import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Home extends React.Component {
  render() {
    return (
      <body className = "background">
        {/* <div className = "background"> */}
        <h1>hello</h1>
      {/* </div> */}
        <FontAwesomeIcon icon="fire" className="logo" />
      </body>
    )
  }
}

export default Home;
