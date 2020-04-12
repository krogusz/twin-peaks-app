import React from 'react';
import styled, { keyframes } from 'styled-components';
const fog1="https://raw.githubusercontent.com/WebDevSHORTS/Fog-Overlay-Animation/master/img/fog-1.png";
const fog2 = "https://raw.githubusercontent.com/WebDevSHORTS/Fog-Overlay-Animation/master/img/fog-2.png";

const FogDiv = styled.div`
position: absolute;
width:100vw;
height:100vh;
overflow: hidden;
`

const fog1Animation = keyframes`
0% {
  transform: translate3d(0, 0, 0);
  opacity: 100%;
}

100% {
  transform: translate3d(-200vw, 0, 0);
  opacity: 0%;
}
`
const fog2Animation = keyframes`
0% {
  transform: translate3d(-200vw, 0, 0);
}
100% {
  transform: translate3d(0, 0, 0);
}
`
const fog3Animation = keyframes`
0% {
  transform: translate3d(0, 0, 0);
}

100% {
  transform: translate3d(0, -200vh, 0);
}
`
const fog4Animation = keyframes`
0% {
  transform: translate3d(0, -200vh, 0);
}
100% {
  transform: translate3d(0, 0, 0);
}
`

const FogDivFirst = styled.div`
position: absolute;
background: url(${fog1});
background-repeat: repeat-x;
background-size: contain;
background-position: center;
animation: ${fog1Animation} 60s linear 2;
height: 300vh;
width: 300vw;
`

const FogDivSecond = styled.div`
position: absolute;
background: url(${fog2});
background-repeat: repeat-x;
background-size: contain;
background-position: center;
animation: ${fog2Animation} 30s linear 2;
height: 300vh;
width: 300vw;
`
const FogDivThird = styled.div`
position: absolute;
background: url(${fog2});
background-repeat: repeat-x;
background-size: contain;
background-position: center;
animation: ${fog3Animation} 30s linear 2;
height: 300vh;
width: 300vw;
`
const FogDivFourth = styled.div`
position: absolute;
background: url(${fog2});
background-repeat: repeat-x;
background-size: contain;
background-position: center;
animation: ${fog4Animation} 30s linear 2;
height: 300vh;
width: 300vw;
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

   render(){
    return(
      <FogDiv>
        <FogDivFirst></FogDivFirst>
        {/* <FogDivSecond></FogDivSecond> */}
        {/* <FogDivThird></FogDivThird> */}
        {/* <FogDivFourth></FogDivFourth> */}
      </FogDiv>
    )
  }
}


export default Fog;
