import React, { useState } from "react";
import styled from "styled-components";
import {Navigation} from "./facts-nav.jsx";
import facts from "../resources/facts.json";
import {Transition} from "react-spring/renderprops";
import SplitText from "react-pose-text";
import {device} from "../resources/RWS.js";

const Container = styled.div`
width:100vw;
height:100vh;
background-color: #282830;
position: relative;
font: 1.75rem NewBaskervilleExpOdC ;
overflow: hidden;
@media ${device.mobile}{
  overflow: auto;
  font-size: 1rem;
};
`;

const CardWrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 800px;
height:15em;
text-align: center;
@media ${device.tablet}{
  width: 700px;
};
@media ${device.mobile}{
  width: 80%;
};
`;

const TransitionWrapper = styled.div`
position: absolute;
top:50%;
color: rgba(255,255,255,0.2);
`;

const charPoses = {
  exit: { opacity: 0, y: 20 },
  enter: {
    opacity: 1,
    y: 0,
    delay: ({ charIndex }) => charIndex * 5
  }
};

const Facts = () => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const length = facts.length;

  const handleChangeCard = (e) => {
    switch(e){
    case 1:
      setIndex((index + 1)%length);
      setDir(1);
      break;
    case -1:
      setIndex((index - 1 + length )%length);
      setDir(-1);
      break;
    default:
    {
      const newDir = Number(e.target.innerHTML) > this.state.index ? 1 : -1;
      setIndex(Number(e.target.innerHTML));
      setDir(newDir);
    }
    }
  };

  return(
    <Container>
      <CardWrapper>
        <Transition
          items={facts[index]} 
          keys={index}
          from={{opacity: 0, transform: `translate3d(${dir === 1 ? 75 : -75}%,-50%,0)` }}
          enter={{ opacity: 1, transform: "translate3d(0%,-50%,0)" }}
          leave={{ opacity: 0,  transform: `translate3d(${dir === 1 ? -75 : 75}%,-50%,0)`}}
        >
          {items => props => <TransitionWrapper style={props}>
            <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
              {items}
            </SplitText>
          </TransitionWrapper>}
        </Transition>
      </CardWrapper>
      <Navigation handleChangeCard = {handleChangeCard} indexes = {Array.from(Array(length).keys())} />
    </Container>
  );
};

export default Facts;