// Code DelayedButton Component Here
import React from 'react';
class DelayedButton extends React.Component {

  buttonDelay = (event) => {
    event.persist();
    window.setTimeout(() => {
      this.props.onDelayedClick(event);
    }, this.props.delay);
  }


  render() {
    return (
    <button onClick={this.buttonDelay}></button>
    );
  }
}

export default DelayedButton
