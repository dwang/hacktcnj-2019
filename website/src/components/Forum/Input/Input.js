import React from 'react';
import './Input.css';

class Input extends React.Component {
    
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      if (event.target.value === "") {
        alert('Please enter your incident!')
      } else {
        this.props.postIncident("nani", event.target.value);
        event.target.value = '';
        event.preventDefault();
      }
    }
  }

  // socket.on( 'my response', function( msg ) {
  //   console.log( msg )
  //   if( typeof msg.user_name !== 'undefined' ) {
  //     // Add post msg.message
  //   }
  // })

  render() {
    return (
      <div>
        <input
          placeholder="What is your incident?"
          onKeyPress={this.handleKeyPress.bind(this)}
          id='form'
          required="required" />
      </div>
    )
  }
}

export default Input;
