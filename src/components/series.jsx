import React from 'react';
import styled from 'styled-components';

const SeriesDiv = styled.div`
// background-color: #282830;
background-color: green;

width: 100vw;
height: 100vh;
`
const Series = (props) => {
  return(

        <SeriesDiv style ={props.style}>
          Here wil be series component
        </SeriesDiv>

  )
}

export default Series;