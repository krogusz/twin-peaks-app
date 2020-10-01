import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const arrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAmUlEQVRIie2UsQ3CMAAEnzRJwxigVAxDjdgpDTtkF6RkkxQZ4CiIEstyKLC/ghvgT37bL/0pBVADHXB0hJ+AgTdlBcAVmNgoIwCapZKYfAFwBsZEeL4AuAHzTvj3gg+VZHFYwltJvaRL1vETVMBd0tMRLkmVIzTEXtGK65JTIs8zjSS+jxZIfFMRiTxjF0l8cx1IGuBhE/wuL4q+v+UDi/jyAAAAAElFTkSuQmCC";

const MenuButtonDiv = styled.div`
position: absolute;
top: 30px;
left: 10px;
transform: translateY(-50%);
z-index: 9999;
font: 0.75rem NewBaskervilleExpOdC; 
& button{
  border: none;
  color: white;
  background-color: transparent;
  font: 1.5rem NewBaskervilleExpOdC;
  letter-spacing: .2vw;
  outline: none;
  & img{
    opacity: 0.3;
  }
}
`;

const MenuIcon = ({toogleMenu, style, menuDisabled}) => {
  return(
    <MenuButtonDiv>
      <button 
        type = "button" 
        onClick = {toogleMenu}
        style = {style}
      >
        {menuDisabled ? "Menu" : <img src={arrow} alt = ""/>}
      </button>
    </MenuButtonDiv >
  );
};

MenuIcon.propTypes = {
  toogleMenu: PropTypes.func,
  style: PropTypes.string,
  menuDisabled: PropTypes.bool
}; 

export default MenuIcon;