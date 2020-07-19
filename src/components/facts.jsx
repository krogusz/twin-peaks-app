import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {Navigation} from "./facts-nav.jsx";
import facts from "../resources/facts.js";
import {Transition} from "react-spring/renderprops";
import SplitText from "react-pose-text";

const Container = styled.div`
width:100vw;
height:100vh;
background-color: #282830;
position: relative;
font: 1.75rem NewBaskervilleExpOdC ;
overflow: hidden;
`;

const CardWrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 900px;
height:15em;
text-align: center;
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

class Facts extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      dir: 0
    };
    this.data = facts["facts"];
    this.length = this.data.length;
  }

  changeCard = (e) => {
    switch(e){
    case 1:
      this.setState({
        index: (this.state.index + 1)%this.length,
        dir: 1
      });
      break;
    case -1:
      this.setState({
        index: (this.state.index - 1 + this.length )%this.length,
        dir: -1
      });
      break;
    default:
    {const newDir = Number(e.target.innerHTML) > this.state.index ? 1 : -1;
      this.setState({
        index: Number(e.target.innerHTML),
        dir: newDir
      });}
    }
  }

  render(){
    return(
      <Container>
        <CardWrapper>
          <Transition
            items={this.data[this.state.index]} 
            keys={this.state.index}
            from={{opacity: 0, transform: `translate3d(${this.state.dir === 1 ? 75 : -75}%,-50%,0)` }}
            enter={{ opacity: 1, transform: "translate3d(0%,-50%,0)" }}
            leave={{ opacity: 0,  transform: `translate3d(${this.state.dir === 1 ? -75 : 75}%,-50%,0)`}}
          >
            {items => props => <TransitionWrapper style={props}>
              <SplitText initialPose="exit" pose="enter" charPoses={charPoses}>
                {items}
              </SplitText>
            </TransitionWrapper>}
          </Transition>
        </CardWrapper>
        <Navigation changeCard = {this.changeCard} indexes = {Array.from(Array(this.length).keys())} />
      </Container>
    );
  }
}

Facts.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  }),
};

export default Facts;