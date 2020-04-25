import React from 'react';
import styled from 'styled-components';
import {Spring} from 'react-spring/renderprops'

import Item from './menu-items.jsx'
import menuItems from '../resources/menu-items.js'

const MenuDiv = styled.div`
width:100vw;
height:100vh;
background-color: #282830
`

const Menu = (props) => {
  return (<Spring
  config = {{tension:280, friction: 120}}
  from={{ marginLeft: -2000  }}
  to={{ marginLeft: props.disabled ? -2000 : 0 }}>
  {props => 
  <MenuDiv style={props}>
    {menuItems["data"].map((category, i) => (
      <Item 
      key = {i} 
      name = {category["name"]} 
      url = {category["img"]}
      first = {i === 0 ? true : false}
      />
    ))}
    </MenuDiv>
  }

  </Spring>)
}

export default Menu;