import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {Spring, Transition} from "react-spring/renderprops";

const ItemTitleWrapper = styled.div`
position: relative;
margin-bottom: 5px;
`;

const ItemTitle = styled.span`
font: 1rem NewBaskervilleExpOdC;
color: white;
opacity: 0.3;
`;

const ItemDesc = styled.div`
padding-top:10px;
color: white;
opacity: 0.3;
`;

const ItemLine = styled.hr`
margin: 0px;
background-color:white;
border-color: #282830;
margin: 5px;
`;

const ItemImg = styled.img`
object-fit: cover;
height:200px;
width: 100%;
`;

const ItemWrapper = styled.div`
position: absolute;
height-min: 60%;
width: 8%;
padding: 30px;
// top:9%;
left: ${props => props.left};
display: inline-block;
transition: transform 0.9s ;
&:hover{
  transform: scale(1.2);
}
`;

class Item extends React.Component {
  render(){
    return(
      <Spring
          config = {{tension:120, friction: 120, delay: 2000}}
          from={{top: "-100%"}}
          to={{top: "9%"}}
      >
        {style => 
          <ItemWrapper left={this.props.left} style = {style}>
            <ItemTitleWrapper>
              <ItemTitle> {this.props.name} </ItemTitle>
            </ItemTitleWrapper>
            <ItemLine/>
            <ItemImg src={this.props.img}/>
            <ItemDesc> {this.props.plot} </ItemDesc>
          </ItemWrapper>
        }
      </Spring>
    )
  }
};

export default Item;
