import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {device} from "../resources/RWS.js";

const Nav = styled.div`
position: absolute;
bottom:0%;
left:50%;
transform: translateX(-50%);
height:300px;
width:100%;
`;

const NavigationContainer = styled.div`
display: flex;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
@media ${device.mobile}{
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
`;

const NavButton = styled.div`
background: ${props => props.tracker ? "grey" : "#c6c6c6" };
border-radius: 50%;
width: 30px;
height: 30px;
margin: 15px;
justify-content: center;
border: 2px solid rgb(230, 230, 230);
cursor: pointer;
display: flex;
align-items: center;
`;

const Array = ({viewBox, points}) => {
  return(
    <svg
      xmlns = "http://www.w3.org/2000/svg"
      width = "30"
      height = "30"
      viewBox = {viewBox}
      fill = "none"
      stroke = "currentColor"
      strokeWidth = "2"
      strokeLinecap = "round"
      strokeLinejoin = "round"
    >
      <polyline points = {points}></polyline>
    </svg>
  );
};

const Navigation  = ({indexes,handleChangeCard, tracker }) => {
  return(   
    <Nav>
      <NavigationContainer>
        <NavButton onClick = {() => handleChangeCard(-1)}> 
          <Array viewBox = "0 0 24 24" points= "15 18 9 12 15 6">
          </Array>
        </NavButton>

        {indexes.map( (i, key) =>(
          <NavButton tracker = {tracker === key} key = {key} onClick = {handleChangeCard}>{i}</NavButton>
        ))}

        <NavButton onClick = {() => handleChangeCard(1)}> 
          <Array viewBox = "0 0 20 24" points = "9 18 15 12 9 6" >
          </Array>
        </NavButton>
      </NavigationContainer>
    </Nav>       
    
  );
};

Array.propTypes = {
  viewBox: PropTypes.string,
  points: PropTypes.string
};

Navigation.propTypes = {
  handleChangeCard: PropTypes.func,
  indexes: PropTypes.array,
  tracker: PropTypes.string
}; 

export  {Navigation};