import React from 'react';
import styled from 'styled-components';
import FogPiece from './Fog-Piece.jsx';

const CanvasContext = React.createContext();

const FogDiv = styled.div`
position: absolute;
width:100vw;
height:100vh;
`

class Fog extends React.Component{
  constructor(props){
    super(props);
    this.canvas = React.createRef();
    this.state = {
      ctx: null,
      parameters:[],
      screenWidth : 0,
      screenHeight: 0,
    }
  }

  componentDidMount = () => {
    Promise.all(this.newCoordinates()).then((paramArray) =>{
      this.setState({
        ctx: this.canvas.current.getContext('2d'),
        screenWidth: this.canvas.current.parentNode.getBoundingClientRect().width,
        screenHeight: this.canvas.current.parentNode.getBoundingClientRect().height,
        parameters: paramArray
      });
      window.requestAnimationFrame(this.update)
    })
  }

  newCoordinates = () => {
    return(Array.from(Array(this.props.density).keys()).map(elem =>{
      return new Promise (resolve => {
        const params = {
          x: this.random(0,this.state.screenWidth), 
          y: this.random(0,this.state.screenHeight),
          velocityX: this.random(-this.props.maxVelocity, this.props.maxVelocity),
          velocityY: this.random(-this.props.maxVelocity, this.props.maxVelocity)
        }
        resolve(params)
      })
    }))
  }

  updateCoordinates = () => {
    return(this.state.parameters.map(elem =>{
      return new Promise (resolve => {
        elem = this.ifCross(elem.x, elem.y, elem.velocityX, elem.velocityY);
        const params = {
          x: elem.x + elem.velocityX, 
          y: elem.y + elem.velocityY,
          velocityX: elem.velocityX,
          velocityY: elem.velocityY
        }
        resolve(params)
      })
    }))
  }

  random = (min,max) => {
    return Math.random()*(max - min) + min
  }

  ifCross = (x,y, velocityX, velocityY) => {
    if (x > this.state.screenWidth){
      x = this.state.screenWidth
      velocityX = - velocityX
    }

    if (x < 0){
      x = 0
      velocityX = - velocityX
    }

    if (y > this.state.screenHeight){
      y = this.state.screenHeight
      velocityY = - velocityY
    }
  
    if (y < 0){
      y = 0
      velocityY = - velocityY
    }

    return {x:x, y:y, velocityX:velocityX, velocityY:velocityY }
  }

  update = () => {
    Promise.all(this.updateCoordinates()).then((paramArray) =>{
      //here is the problem
      // this.state.ctx.clearRect(0,0,this.state.screenWidth, this.state.screenHeight)
      this.setState({
        parameters: paramArray,
      });
      window.requestAnimationFrame(this.update)
    })
  }

  render(){
    return(
      <FogDiv>
        <canvas width={this.state.screenWidth} height={this.state.screenHeight} ref = {this.canvas} >
          {this.state.ctx && (
            <CanvasContext.Provider value = {this.state.ctx}>
              {this.state.parameters.map(param =>(
                <FogPiece
                x = {param.x}
                y = {param.y}
                />  
              ))}
            </CanvasContext.Provider>
          )}
        </canvas>
      </FogDiv>
    )
  }
}


export default Fog;
export {
  CanvasContext
}
