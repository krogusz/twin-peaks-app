import React from 'react';
import styled from 'styled-components';

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
`

const MenuItemDiv = styled.div`
width:20%;
height:100vh;
display: inline-block;
box-sizing: border-box;
overflow: hidden;
&:hover ${ItemWrapper}{
  font-size: 1rem;
  opacity: 1;
}
`
const ItemLink = styled.a`
position: relative;
display: block;
width:100%;
height:100%;
`
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
`
const Item = (props) => {
  const divStyle = {
    borderLeft: `${props.first? 0 : 1}px rgba(255,255,255,.09) solid`
  }

  return(
  <MenuItemDiv style = {divStyle}>
    <ItemLink>
    <ItemWrapper >
      {props.name}
    </ItemWrapper> 
    <ItemImage image = {{url: props.url}}></ItemImage>
    </ItemLink>
     
  </MenuItemDiv>
  )
}

export default Item;