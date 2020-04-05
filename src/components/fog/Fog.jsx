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
      this.state = {
        ctx: null,
        density: this.props.density,
        parameters:[],
        maxVelocity: 2,
        screenWidth : 0,
        screenHeight: 0,
      }
      this.canvas = React.createRef();
      console.log(this.canvas)
  }

  componentDidMount = () => {

    this.setState({
      ctx: this.canvas.current.getContext('2d'),
      screenWidth: this.canvas.current.parentNode.getBoundingClientRect().width,
      screenHeight: this.canvas.current.parentNode.getBoundingClientRect().height,
    })
    console.log(this.state.screenWidth, this.state.screenHeight)
    Promise.all(this.newCoordinates()).then((paramArray) =>{
      this.setState({
        parameters: paramArray
      });
      console.log(this.state.parameters)
    })

    window.requestAnimationFrame(this.update)
  }

  newCoordinates = () => {
    return(Array.from(Array(this.state.density).keys()).map(elem =>{
      return new Promise (resolve => {
        const params = {
          x: this.random(0,this.state.screenWidth), 
          y: this.random(0,this.state.screenHeight)
        }
        resolve(params)
      })
    }))
  }

  updateCoordinates = () => {
    return(Array.from(Array(this.state.density).keys()).map(elem =>{
      return new Promise (resolve => {
        const params = {
          x: this.state.x + this.state.velocityX, 
          y: this.state.y + this.state.velocityY
        }
        resolve(params)
      })
    }))
  }

  random(min,max){
    return Math.random()*(max - min) + min
  }

  update = () => {
      // this.state.ctx.clearRect(0,0,this.state.screenWidth, this.state.screenHeight)

    window.requestAnimationFrame(this.update)
  }


  render(){
    return(
      <FogDiv>
          <canvas width={this.state.screenWidth} height={this.state.screenHeight} ref = {this.canvas} >
            {this.state.ctx && (
              <CanvasContext.Provider value = {this.state.ctx}>
                {this.state.parameters.map(param =>(
                  <FogPiece
                  // canvasWidth = {this.state.screenWidth}
                  // canvasHeight = {this.state.screenHeight}
                  x = {param.x}
                  y = {param.y}
                  // velocityX = {this.random(-this.state.maxVelocity,this.state.maxVelocity)}
                  // velocityY = {this.random(-this.state.maxVelocity,this.state.maxVelocity)}
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
