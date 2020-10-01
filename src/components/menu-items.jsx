import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const ItemWrapper = styled.p`
position: absolute ;
left:50%;
transform: translateX(-50%);
top: 50%;
color: white;
text-transform: uppercase;
margin:0;
z-index: 9999;
letter-spacing: .2vw;
font: 0.75rem NewBaskervilleExpOdC;
opacity: .3;
transition: all 1s ease;
`;

const MenuItemDiv = styled.div`
width:25%;
height:100vh;
display: inline-block ;
box-sizing: border-box;
overflow: hidden;
&:hover ${ItemWrapper}{
  font-size: 1rem;
  opacity: 1;
}
`;

const ItemLink = styled(Link)`
position: relative;
display: block;
width:100%;
height:100%;
`;

const ItemImage = styled.div`
background: url(${props => props.image.url});
opacity:0;
transition: all 1s ease;

&:hover{
opacity:1;
width:100%;
};
width: 110%;
height: 100%;
background-size: cover;
background-position: center;
filter: sepia(70%);
backface-visibility: hidden;
`;

const Item = ({first, name, onClick, url}) => {
  const divStyle = {
    borderRight: `${first? 1 : 1}px rgba(255,255,255,.09) solid`
  };
  return(
    <MenuItemDiv style = {divStyle}>
      <ItemLink 
        to = {`/${name}`}
        onClick = {onClick}
      >
        <ItemWrapper >
          {name}
        </ItemWrapper> 
        <ItemImage image = {{url: url}}></ItemImage>
      </ItemLink>
    </MenuItemDiv>
  );
};

Item.propTypes = {
  first: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  url: PropTypes.string
};

export default Item;