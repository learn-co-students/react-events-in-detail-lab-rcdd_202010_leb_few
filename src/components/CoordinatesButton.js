// Code CoordinatesButton Component Here
import React from 'react';
class CoordinatesButton extends React.Component {

  buttonCoord = (event) => {
     this.props.onReceiveCoordinates([event.clientX, event.clientY]);
   }

   render() {
     return (
     <button onClick={this.buttonCoord}></button>
     );
   }
 }

 export default CoordinatesButton
