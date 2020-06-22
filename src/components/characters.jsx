import React from "react";
import styled from "styled-components";
import {Transition} from "react-spring/renderprops";
import PropTypes from "prop-types";
import dataChar from "../resources/characters.js";

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
`;
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
`;

const BoxContainer = styled.div`
width: 1600px;
height: 600px;
text-align: center;
background-color: RGBA(256,256,256,0.5);
`;

const PersonName = styled.div`
font-size: 50px;
padding: 5px;
height:60px;
`;

const PersonDesc = styled.div`
padding: 20px;
height:500px;
display: inline-block;
width: 50%;
overflow: auto;
overflow-x: hidden;
`;

const PersonImageContainer = styled.div`
position: relative;
width:50%;
height:500px;
display: inline-block;
`;

const PersonImage = styled.img`
width: 400px;
height: 400px;
position: absolute;
top:50%;
left:50%;
transform: translate(-50%, -50%);
`;

const TransitionWrapper = styled.div`
position: absolute;
top: 10%;
left: 50%;
transform: translateX(-50%);
`;

const SwitchButton = (props) => {
  const style = props.clicked ? {backgroundPosition: "left bottom", transform: "scale(1.2)"} : {} ;
  return(
    <Button style = {style} onClick = {props.click}>
      {props.name}
    </Button>
  );
};

const Box  = (props) => {
  return(
    <BoxContainer>
      <PersonName>{props.name}</PersonName>
      <PersonImageContainer>
        <PersonImage src = {props.image} />
      </PersonImageContainer>
      <PersonDesc>{props.desc}</PersonDesc>
    </BoxContainer>
  );
};

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
      clicked: this.state.clicked === i ? null : i
    });
  }

  render(){
    const data = dataChar["data"][this.state.clicked];
    return(
      <CharacterDiv>
        <Transition
          keys={this.state.clicked}
          config={{tension:50}}
          from={{top: -2000}}
          enter={{top: 100}}
          leave={{opacity: 0}}
        >
          {() => props => 
            <TransitionWrapper style={props}>
              {this.state.clicked === null ? <div>Choose the Character</div> : <Box name = {data.name} desc = {data.desc} image = {data.img}/> }
            </TransitionWrapper>
          }
        </Transition>
        <ButtonsContainer>
          {dataChar["data"].map( (person, i) => (
            <SwitchButton 
              key = {i} 
              name = {person["name"]} 
              click = {() => this.click(i)}
              clicked = {this.state.clicked === i ? true : false}
            />
          ))}
        </ButtonsContainer>     
      </CharacterDiv>
    );
  }
}

SwitchButton.propTypes = {
  clicked: PropTypes.number,
  click: PropTypes.func,
  name: PropTypes.string
};

Box.propTypes = {
  name: PropTypes.string,
  image : PropTypes.string,
  desc : PropTypes.string
};

export default Characters;

