import React from 'react';
import styled, { keyframes } from 'styled-components';


const FogPiece = (props) => {
  const fog1 = 'https://asistapl.github.io/assets/fog-particle.png';


  const fog1Animation = keyframes`
      0% {
      transform: translate3d(0, 0, 0) rotate(0deg);
      opacity: 100%;
      }
      
      100% {
      transform: translate3d(${props.xMove}px, ${props.yMove}px, ${props.zMove}px) rotate(${props.rotateDeg}deg);
      opacity: 0%;
      }
      `
  const FogDivFirst = styled.div`
      position: absolute;
      background: url(${fog1});
      background-size: contain;
      top: ${props.x}%;
      left: ${props.y}%;
      animation: ${fog1Animation} ${props.animateTime}s linear 1;
      animation-fill-mode: forwards; 
      height: ${props.fogSize}px;
      width: ${props.fogSize}px;
      `

  return (
    <FogDivFirst></FogDivFirst>
  )
}

export default FogPiece;