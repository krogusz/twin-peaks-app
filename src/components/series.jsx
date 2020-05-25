import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import {Spring} from "react-spring/renderprops";
import {Link} from "react-router-dom";

const series = ["first season", "second season"];

const SeriesDiv = styled.div`
background-color: #282830;
width: 100vw;
height: 100vh;
position: relative;
`;

const SeriesSubDiv = styled.div`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
text-align: center;
`;

const SeasonTitleWrapper = styled.p`
font: 1.5rem NewBaskervilleExpOdC;
letter-spacing: .2vw;
color: white;
margin-top: 50px;
`;

const ItemLink = styled(Link)`
text-decoration: none;
`;

const Series = (props) => {
  return(
    <SeriesDiv style ={props.style}>
      <SeriesSubDiv>
        {series.map((elem, i) => (
          <Spring
            config = {{tension:120, friction: 120, delay: 1300}}
            from={{ marginLeft: -200 *  (i%2 === 0 ? 1 : -1), opacity: 0}}
            to={{ marginLeft: 0, opacity: 0.3}}
            key = {elem}
          >
            {style => 
              <ItemLink
                to={`series/${i+1}`}
              >
                <SeasonTitleWrapper style = {style} >
                  {elem}
                </SeasonTitleWrapper>
              </ItemLink>
            }
          </Spring>
        ))}
      </SeriesSubDiv>
    </SeriesDiv>
  );
};

Series.propTypes = {
  style: PropTypes.string
};

export default Series;