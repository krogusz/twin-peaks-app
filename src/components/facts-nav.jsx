import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {device} from "../resources/RWS.js";

const NavigationContainer = styled.div`
display: flex;
position: absolute;
top: 50%;
transform: translateY(-50%);
width:100vw;
height: 15em;
overflow: hidden;
@media ${device.tablet}{
  overflow: visible;
};
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
@media ${device.tablet}{
  top:0%;
  left: ${props => props.right ? "50%" : "auto"};
  right: ${props => props.right ? "auto" : "50%"};
  transform: translateY(-70%);
  margin: 0 30px 0 30px;
  width: 10em;
  height: 10em;
};
@media ${device.mobile}{
  transform: translateY(-100%);
  background-color: transparent;
  margin: 0 70px 0 70px;
  width: 5em;
  height: 5em;
};
`;

const Arrow = styled.span`
font-size: 250%;
position: absolute;
left: ${props => props.right ? "25%" : ""};
right: ${props => !props.right ? "25%" : ""};
top:50%;
transform: translateY(-50%);
@media ${device.tablet}{
left:50%;
top: 50%;
transform: translate(-50%, -50%);
};
@media ${device.mobile}{
  color: rgba(255,255,255,0.2);
  };
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

const Navigation  = ({handleChangeCard}) => {
  return(          
    <NavigationContainer>
      <Button right={false} onClick = {() => handleChangeCard(-1)}><Arrow right={false}>←</Arrow></Button>
      <Button right={true} onClick = {() => handleChangeCard(1)}><Arrow right={true}>→</Arrow></Button>
    </NavigationContainer>
  );
};

Array.propTypes = {
  viewBox: PropTypes.string,
  points: PropTypes.string
};

Navigation.propTypes = {
  handleChangeCard: PropTypes.func
};

export  {Navigation};