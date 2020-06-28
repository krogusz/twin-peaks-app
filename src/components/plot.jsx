import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Card from "./season-card.jsx";
import {Navigation} from "./plot-nav.jsx";
import {Transition} from "react-spring/renderprops";
// import seasonPlot from "../resources/seasons.js";

const Container = styled.div`
width:100vw;
height:100vh;
background-color: #282830;
position: relative;
`;
const CardWrapper = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 900px;
height:600px;
text-align: center;
`;

const TransitionWrapper = styled.div`
position: absolute;
top:0;
left:0;
width: 900px;
`;

class Plot extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      index: 0,
      dir: 0
    };
    this.data = typeof props.match.params.id === "undefined" ? props.plot[`data`]: props.plot[`season${props.match.params.id}`];
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
            from={{opacity: 0, transform: `translate3d(${this.state.dir === 1 ? 75 : -75}%,0,0) scale(0.5)`}}
            enter={{ opacity: 1, transform: "translate3d(0%,0,0) scale(1)" }}
            leave={{ opacity: 0, transform: `translate3d(${this.state.dir === 1 ? -75 : 75}%,0,0) scale(0.5)`}}>
            {items => props => <TransitionWrapper style={props}><Card image = {items.img} title={items.name} plot={items.plot}/></TransitionWrapper>}
          </Transition>
          <Navigation changeCard = {this.changeCard} indexes = {Array.from(Array(this.length).keys())} />

          
        </CardWrapper>
      </Container>
    );
  }
}

Plot.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number
    })
  }),
};

export default Plot;