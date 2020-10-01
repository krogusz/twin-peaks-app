import React from "react";
import styled from "styled-components";
import {Spring} from "react-spring/renderprops";
import PropTypes from "prop-types";
import Item from "./menu-items.jsx";
import menuItems from "../resources/menu-items.json";

const MenuDiv = styled.div`
width:100vw;
height:100vh;
background-color: #282830;
position: absolute;
top: 0;
`;

const Menu = ({disabled, onClick}) => {
  return (
    <Spring
      config = {{tension:280, friction: 120}}
      from={{ marginLeft: -2000  }}
      to={{ marginLeft: disabled ? -2000 : 0 }}
    >
      {item => 
        <MenuDiv style={item}>
          {menuItems.map(({name, img}, i) => (
            <Item 
              key = {i} 
              name = {name} 
              url = {img}
              first = {i === 0 ? true : false}
              onClick = {onClick}
            />
          ))}
        </MenuDiv>
      }
    </Spring>
  );
};

Menu.propTypes = {
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

export default Menu;