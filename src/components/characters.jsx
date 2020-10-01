import React from "react";
import styled, {keyframes} from "styled-components";
import dataChar from "../resources/characters.json";
import {device} from "../resources/RWS.js";

const rotate = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const CharacterDiv = styled.div`
background-color: #282830;
width: 100%;
`;
const GridComponent = styled.div`
padding: 250px;
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 20px;
animation: ${rotate} 2s linear;

@media ${device.laptopS}{
  grid-template-columns: repeat(2, 1fr);
  padding: 200px;
};

@media ${device.tablet}{
  grid-template-columns: repeat(1, 1fr);
  padding: 200px;
  grid-gap: 20px;
  overflow: scroll;
};
@media ${device.mobile}{
  padding: 20%;
};
`;
const GridItem = styled.div`
height: 500px;
transition: transform 0.6s;
transform-style: preserve-3d;
position: relative;
transform: ${props => props.clicked ? "rotateY(180deg)" : ""};
`;
const GridItemFront = styled.div`
background: url(${props => props.image})  center;
width: 100%;
height: 100%;
position: absolute;
backface-visibility: hidden;
`;
const GridItemFrontCover = styled.div`
width:100%;
height:100%;
background: RGBA(174, 162, 162, 0.4);
margin:0;
`;
const GridItemBacktHeader = styled.a`
color: #404040;
font:1.5rem NewBaskervilleExpOdC;
text-decoration: none;
`;
const GridItemBackDesc = styled.div`
color: #404040;
font:1rem NewBaskervilleExpOdC;
padding-top:30px;
@media ${device.mobile}{
  font: 0.7rem NewBaskervilleExpOdC;
};
`;
const GridItemBack = styled.div`
background: grey;
width: 100%;
height: 100%;
position: absolute;
color: white;
font: 1rem NewBaskervilleExpOdC;
padding:2rem;
letter-spacing: 0.1em;
backface-visibility: hidden;
transform: rotateY(180deg);
overflow: hidden;
`;

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
    return(
      <CharacterDiv>
        <GridComponent>
          {dataChar.map(({name, img, desc, url}, i) => (
            <GridItem 
              key = {name}
              onClick = {() => this.click(i)}
              clicked = {this.state.clicked === i ? true : false}
            >
              <GridItemFront image = {img}>
                <GridItemFrontCover>
                </GridItemFrontCover>
              </GridItemFront>
              <GridItemBack>
                <GridItemBacktHeader href ={url}>{name}</GridItemBacktHeader>
                <GridItemBackDesc dangerouslySetInnerHTML= {{__html: desc}}></GridItemBackDesc>
              </GridItemBack>
            </GridItem>
          ))}
        </GridComponent>
      </CharacterDiv>
    );
  }
}

export default Characters;

