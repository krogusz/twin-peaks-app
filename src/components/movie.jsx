import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {Spring} from "react-spring/renderprops";

const MovieDiv = styled.div`
background-color: #282830;
width: 100vw;
height: 100vh;
position: relative;
`;


const LineContainer = styled.div`
display: flex;
width: 80%;
height: 20px;
align-items: center;
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
`

const Line = styled.span`
flex-grow: 1;
height: 1px;
background: white;
position: relative;
&::after{
  position: absolute;
  content: '';
  top: -10px;
  right: 0;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid white;
}
`

const Movie = (props) => {
  return(
    <MovieDiv>
      <Spring
        config = {{tension:120, friction: 120, delay: 1300}}
        from={{opacity: 0}}
        to={{opacity: 0.3}}
      >
        {style =>
          <LineContainer >
            <Line style = {style}/> 
          </LineContainer>
        }
      </Spring>
    </MovieDiv>
  );
};



export default Movie;