import React from 'react';
import './Home.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Home extends React.Component {
  render() {
    return (
      <body className = "background">
        <div className = "background">
          <h1 className = "title">Project Name: A Necessity for Future Reliefs</h1> 
          <div className = "red">
            <h1 className = "description">A PDP System to Connect Citizens During Natural Disasters <br></br> <br></br>
              
              <div className="grid-container">
                <div className="grid-item">1</div>
                <div className="grid-item">2</div>
              </div>
              <FontAwesomeIcon icon = "fire" className = "logo" /> 
               <FontAwesomeIcon icon = "traffic-light" className ="logo" /> 
              <FontAwesomeIcon icon = "home" className = "logo" />
            </h1>

          </div>

        </div>
      </body>
    )
  }
}

export default Home;
