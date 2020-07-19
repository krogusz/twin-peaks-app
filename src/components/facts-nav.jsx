import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const NavigationContainer = styled.div`
display: flex;
position: absolute;
top: 50%;
transform: translateY(-50%);
width:100vw;
height: 15em;
overflow: hidden;
`;

const Button = styled.button`
border-radius:50%;
background-color: rgba(255,255,255,0.2);
width: 15em;
height: 15em;
position: absolute;
top:50%;
transform: translateY(-50%);
right: ${props => props.right ? "0" : ""};
left: ${props => props.right ? "" : "0"};
margin-right: ${props => props.right ? "-7.5em" : "0"};
margin-left: ${props => props.right ? "0" : "-7.5em" };
text-align: ${props => props.right ? "left" : "right" };
border: none;
outline:none;
`;

const Arrow = styled.span`
font-size: 250%;
position: absolute;
left: ${props => props.right ? "25%" : ""};
right: ${props => !props.right ? "25%" : ""};
top:50%;
transform: translateY(-50%);
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
      <Button right={false} onClick = {() => props.changeCard(-1)}><Arrow right={false}>←</Arrow></Button>
      <Button right={true} onClick = {() => props.changeCard(1)}><Arrow right={true}>→</Arrow></Button>
    </NavigationContainer>
  );
};

Array.propTypes = {
  viewBox: PropTypes.string,
  points: PropTypes.string
};

Navigation.propTypes = {
  changeCard: PropTypes.func
};

export  {Navigation};