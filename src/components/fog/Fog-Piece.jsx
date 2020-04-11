import React from 'react';
import styled from 'styled-components';
import {CanvasContext} from './Fog.jsx';

class FogPiece extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      image:'https://media.istockphoto.com/vectors/sample-red-square-grunge-textured-isolated-stamp-vector-id471401412',
    }
  }

  random(min,max){
    return Math.random()*(max - min) + min
  }

  render(){
    return(
      <CanvasContext.Consumer>
        {ctx => {
          console.log("x", "y", this.props)
          const img = new Image();
          img.src = this.state.image;
          img.onload = () => {
            ctx.drawImage(img,
              this.props.x,
              this.props.y,
              40,
              40)
          }
        }}
      </CanvasContext.Consumer>
    )
  }
}

export default FogPiece;


// https://media.istockphoto.com/vectors/sample-red-square-grunge-textured-isolated-stamp-vector-id471401412

// https://asistapl.github.io/assets/fog-particle.png
