import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const NavigationContainer = styled.div`
display: flex;
position: absolute;
bottom: 0px;
left:50%;
transform: translateX(-50%);
`;

const NavButton = styled.div`
background: #c6c6c6;
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

const Array = (props) => {
  return(
    <svg
      xmlns = "http://www.w3.org/2000/svg"
      width = "30"
      height = "30"
      viewBox = {props.viewBox}
      fill = "none"
      stroke = "currentColor"
      strokeWidth = "2"
      strokeLinecap = "round"
      strokeLinejoin = "round"
    >
      <polyline points = {props.points}></polyline>
    </svg>
  );
};

const Navigation  = (props) => {
  return(          
    <NavigationContainer>
      <NavButton onClick = {() => props.changeCard(-1)}> 
        <Array viewBox = "0 0 24 24" points= "15 18 9 12 15 6">
        </Array>
      </NavButton>

      {props.indexes.map( (i, key) =>(
        <NavButton key = {key} onClick = {props.changeCard}>{i}</NavButton>
      ))}

      <NavButton onClick = {() => props.changeCard(1)}> 
        <Array viewBox = "0 0 20 24" points = "9 18 15 12 9 6" >
        </Array>
      </NavButton>
    </NavigationContainer>
  );
};

Array.propTypes = {
  viewBox: PropTypes.string,
  points: PropTypes.string
};

Navigation.propTypes = {
  changeCard: PropTypes.func,
  indexes: PropTypes.array
}; 

export  {Navigation};