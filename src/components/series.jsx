import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const SeriesDiv = styled.div`
background-color: green;
width: 100vw;
height: 100vh;
`;
const Series = (props) => {
  return(
    <SeriesDiv style ={props.style}>
      Here wil be series component
    </SeriesDiv>
  );
};

Series.propTypes = {
  style: PropTypes.string
};

export default Series;