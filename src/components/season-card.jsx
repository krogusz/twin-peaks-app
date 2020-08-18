import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {device} from "../resources/RWS.js";

const CardContainer = styled.div`
  height:500px;
  max-width: 900px;
  background: url(${props => props.image});
  background-size: cover;
  background-position: center;
  position: relative;
`;

const TextWrapper = styled.div`
position: absolute;
width: 100%;
bottom:0px;
background: rgba(255,255,255,0.6);
height: 200px;
padding: 16px;
color: #545469;
line-height: 1.5;
@media ${device.mobile}{
  height: 500px;
};

@media ${device.tablet}{
  height: 500px;
  overflow: auto;
};
`;

const Title = styled.div`
font-weight: 700;
font: 1.75rem NewBaskervilleExpOdC ;
padding-bottom: 5px;
`;

const Plot = styled.div`
font: NewBaskervilleExpOdC ;
overflow: hidden;
max-height: 144px;
@media ${device.mobile}{
  max-height: 9999px;
  overflow: auto;
}
`;

const Card = (props) => {
  return(
    <CardContainer
      image = {props.image}
    >
      <TextWrapper>
        <Title>{props.title}</Title>
        <Plot>{props.plot}</Plot>
      </TextWrapper>
    </CardContainer>  
  );
};

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  plot: PropTypes.string
};

export default Card;