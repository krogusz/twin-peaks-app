import React from 'react';
import styled from 'styled-components';
import FogPiece from './Fog-Piece.jsx';

const FogDiv = styled.div`
    position: absolute;
    width:100vw;
    height:100vh;
    overflow: hidden;
    `

class Fog extends React.Component {

  random = (min, max) => {
    return Math.random() * (max - min) + min
  }

  render() {
    return (
      <FogDiv>
        {Array.from(Array(this.props.density).keys()).map((param, i) => (
          <FogPiece key={i}
            x={this.random(-20, 120)}
            y={this.random(-20, 120)}
            xMove={this.random(-500, 500)}
            yMove={this.random(-500, 500)}
            zMove={this.random(-500, 500)}
            animateTime={this.random(30, 60)}
            rotateDeg={this.random(0, 360)}
            fogSize={this.random(300, 800)}

          />
        ))}
      </FogDiv>
    )
  }
}


export default Fog;