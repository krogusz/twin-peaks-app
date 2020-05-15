import React from "react";
import styled from "styled-components";
import {Spring} from "react-spring/renderprops";
import moviePlot from "../resources/movie.js";
import Item from "./movie-item.jsx";

const Scrollrapper = styled.div`
overflow-x: scroll;
&::-webkit-scrollbar{
  display: none;
};
overflow-y: hidden;
`;

const MovieDiv = styled.div`
background-color: #282830;
width: 300%;
height: 100vh;
position: relative;
display:flex;
`;

const LineContainer = styled.div`
display: flex;
width: 90%;
height: 20px;
align-items: center;
position: absolute;
top: 90%;
left: 50%;
transform: translate(-50%, -50%);
`;

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
`;

const Movie = () => {
  return(
    <Scrollrapper>
      <MovieDiv >
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
        {moviePlot["data"].map((event, i) => (
          <Item 
            key = {i}
            top = {event["top"]}
            left = {`${i * 9 + 5}%`}
            name = {event["name"]}
            plot = {event["plot"]}
            img = {event["img"]}
          />
        ))}
      </MovieDiv>
    </Scrollrapper>
  );
};

export default Movie;