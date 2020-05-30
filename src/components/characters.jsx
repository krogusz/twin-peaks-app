import React from "react";
import styled from "styled-components";
import {Spring} from "react-spring/renderprops";


const data = ["xijhsdoij", "uhdiuhwyio iuuuhowi", "hujhqid", "duhwiuhewi", "kwhiu juhwuiuw", "kwjwi jhdiwo"];

const CharacterDiv = styled.div`
background-color: #282830;
width: 100%;
height: 100vh;
position: relative;
`;

const ButtonsContainer = styled.div`
position: absolute;
bottom: 20px;
width:100%;
text-align: center;
`
const Button = styled.button`
width: 220px;
height: 50px;
border: 6px solid #1f1f24;

background: linear-gradient(to left, RGBA(256,256,256,0) 50%, RGBA(256,256,256,0.5) 50%);
background-size: 200% 100%;
background-position:right bottom;

border-radius: 50px;
outline:none;
color: #1f1f24;
font: 20px bold;
margin:20px;

transition:all 2s ease;
&:hover{
  background-position: left bottom;
  transform: scale(1.2);
}
&:clicked{
  background-color: black;
}
`

const SwitchButton = (props) => {
  const style = props.clicked ? {backgroundPosition: "left bottom", transform: "scale(1.2)"} : {}
  return(
    <Button style = {style} onClick = {props.click}>
      {props.name}
    </Button>
  )
}


class Characters extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      clicked: null
    };
    this.click = this.click.bind(this);
  }

  click = (i) => {
    this.setState({
      clicked: i
    })
  }

  render(){
    return(
    <CharacterDiv>
      <ButtonsContainer>
        {data.map( (name, i) => (
          <SwitchButton 
            key = {i} 
            name = {name} 
            click = {e => this.click(i)}
            clicked = {this.state.clicked === i ? true : false}
          >
          </SwitchButton>))}
      </ButtonsContainer>

      
    </CharacterDiv>)
  }
}

export default Characters;

// onClick = {(e) => this.click(i)}