// Code CoordinatesButton Component Here
import React, {Component} from 'react';

export default class CoordinatesButton extends Component {
  
  xyCoordinates=(event) => {
    this.props.onReceiveCoordinates([event.clientX,event.clientY])
  }
  
render(){
  return (
    <button onClick={this.xyCoordinates}> finding coordinates </button>
    )
  }
}