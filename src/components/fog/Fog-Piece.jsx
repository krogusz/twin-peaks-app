import React from 'react';
import styled from 'styled-components';
import {CanvasContext} from './Fog.jsx';

class FogPiece extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      image:'https://media.istockphoto.com/vectors/sample-red-square-grunge-textured-isolated-stamp-vector-id471401412',
      // x: 0,
      // y: 0,
      x: this.props.x,
      y: this.props.y,
      // velocityX: this.props.velocityX,
      // velocityY: this.props.velocityY,
    }
  }

  random(min,max){
    return Math.random()*(max - min) + min
  }

  // ifCross(){
  //   if (this.state.x > this.props.canvasWidth){
  //     this.setState({
  //       x: this.props.canvasWidth,
  //       velocityX: - this.state.velocityX,
  //     })
  //     console.log("przekroczono prawą stronę")
  //   }

  //   if (this.state.x < 0){
  //     this.setState({
  //       x: 0,
  //       velocityX: - this.state.velocityX,
  //     })
  //     console.log("przekroczono lewą stronę")

  //   }

  //   if (this.state.y > this.props.canvasHeight){
  //     this.setState({
  //       y: this.props.canvasHeight,
  //       velocityY: - this.state.velocityY,
  //     })
  //     console.log("przekroczono dół")

  //   }
  
  //   if (this.state.y < 0){
  //     this.setState({
  //       y: 0,
  //       velocityY: - this.state.velocityY,
  //     })
  //     console.log("przekroczono górę")

  //   }
  // }

  componentDidMount(){
    // window.requestAnimationFrame(this.update)
    console.log(this.props.x)

  }

    // update = () => {
    //   this.ifCross();
    //     this.setState({
    //       x: this.state.x + this.state.velocityX,
    //       y: this.state.y + this.state.velocityY
    //     })
    //  window.requestAnimationFrame(this.update)
    // }



  render(){
    return(
      <CanvasContext.Consumer>
        {ctx => {
          
          const img = new Image();
          img.src = this.state.image;
          img.onload = () => {
            // ctx.clearRect(0,0,this.props.canvasWidth, this.props.canvasHeight)
            ctx.drawImage(img,
              this.state.x,
              this.state.y,
              40,
              40)
          }
        }        
        }
      </CanvasContext.Consumer>
    )
  }
}

export default FogPiece;


// https://media.istockphoto.com/vectors/sample-red-square-grunge-textured-isolated-stamp-vector-id471401412

// https://asistapl.github.io/assets/fog-particle.png
