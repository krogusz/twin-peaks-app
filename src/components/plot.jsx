import React, {useState} from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "./season-card.jsx";
import {Navigation} from "./plot-nav.jsx";
import {Transition} from "react-spring/renderprops";
import {device} from "../resources/RWS.js";

const Container = styled.div`
width:100vw;
height:100vh;
background-color: #282830;
position: relative;
@media ${device.tablet}{
  overflow: auto;
}
`;
const CardWrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 900px;
height:800px;
text-align: center;
@media ${device.tablet}{
  width: 500px;
};
@media ${device.mobile}{
  width: 350px;
  top: 50%;
  transform: translate(-50%, -30%);

};
`;

const TransitionWrapper = styled.div`
position: absolute;
top:0;
left:0;
width: 100%;
`;

const Plot = (props) => {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(0);
  const data = typeof props.match.params.id === "undefined" ? props.plot: props.plot[`season${props.match.params.id}`];
  const length = data.length;

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
      const newDir = Number(e.target.innerHTML) > index ? 1 : -1;
      setIndex(Number(e.target.innerHTML));
      setDir(newDir);
    }
    }
  };

  return(
    <Container>
      <CardWrapper>
        <Transition
          items={data[index]} 
          keys={index}
          from={{opacity: 0, transform: `translate3d(${dir === 1 ? 75 : -75}%,0,0) scale(0.5)`}}
          enter={{ opacity: 1, transform: "translate3d(0%,0,0) scale(1)" }}
          leave={{ opacity: 0, transform: `translate3d(${dir === 1 ? -75 : 75}%,0,0) scale(0.5)`}}
        >
          {items => props => <TransitionWrapper style={props}><Card image = {items.img} title={items.name} plot={items.plot}/></TransitionWrapper>}
        </Transition>
        <Navigation tracker ={index} handleChangeCard = {handleChangeCard} indexes = {Array.from(Array(length).keys())} />
      </CardWrapper>
    </Container>
  );
};

Plot.propTypes = {
  plot: PropTypes.string,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  }),
};

export default Plot;