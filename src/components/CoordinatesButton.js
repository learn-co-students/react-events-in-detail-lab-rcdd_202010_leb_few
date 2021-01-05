import React from 'react';

class CoordinatesButton extends React.Component {
  coord = (e) => {
    this.props.onReceiveCoordinates([e.clientX, e.clientY]);
  };

  render() {
    return <button onClick={this.coord}>Coords</button>;
  }
}

export default CoordinatesButton;
