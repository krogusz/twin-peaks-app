import React from "react";
import styled from "styled-components";
import {Spring} from "react-spring/renderprops";

const CharacterDiv = styled.div`
background-color: #282830;
width: 100%;
height: 100vh;
// position: relative;
// display:flex;
`;

const ButtonsContainer = styled.div`
position: absolute;
bottom: 20px;
width:100%;
`
const Button = styled.button`
width: 250px;
height: 50px;
border: 6px solid #1f1f24;

background: linear-gradient(to left, RGBA(256,256,256,0) 50%, RGBA(256,256,256,0.5) 50%);
background-size: 200% 100%;
background-position:right bottom;

border-radius: 50px;
outline:none;
color: #1f1f24;
font: 25px bold;
margin:10px;
// transition: background-color ;

transition:all 2s ease;
&:hover{
  background-position: left bottom;
  transform: scale(1.2)
}
`

const SwitchButton = (props) => {
  return(
    <Button>
      Dale Copper
    </Button>
  )
}


class Characters extends React.Component{
  render(){
    return(
    <CharacterDiv>
      <ButtonsContainer>

        <SwitchButton/>
      
      </ButtonsContainer>

      
    </CharacterDiv>)
  }
}

export default Characters;