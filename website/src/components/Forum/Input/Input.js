import React from 'react';

class Input extends React.Component {

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.props.postIncident(event.target.value);
      event.target.value = '';
      event.preventDefault();
    }
  }

  render() {
    return (
      <div>
        <input
          placeholder="What is your incident?"
          onKeyPress={this.handleKeyPress.bind(this)}
          id='form' />
      </div>
    )
  }
}

export default Input;
