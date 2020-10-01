import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

const icon = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAABmJLR0QA/wD/AP+gvaeTAAABOElEQVRIie3WP07CUACA8e8ZYDJOOBgGN1j0CJo4uLs56OQFvIKj8Qa46sgVjAORE+igm5MxMphIolH0c7AlhP8FyiB8U9PX9vfalzaFMVOLanHc88dFD9SG+q4ezQLMqKd2V1ZzaaEFtdYDjauphejY5/ZJTYJuq08D0LgXdTea5M3YsBrUY/VzBDSuqZ6oOf+WJRmsrqiVBGBnlega60nQkno3ARr3oG6Miu6pr1NA497U/UFg/Kr8TBFtr6xmO9FV9SolsL2qugYQ1BJwDeSBbPezmGpfQB3YyQDfwBmwCaT9+bsAboFma0+0BmnXeqeXUr7Dvs0fnEl4/CVQ7TO2BRymBVdDCOe9BlSSwPO3xgt4Af9v+GMGXssI8Ya6DJSGnPgYQqj3GlDzwLA/yvsQQmPUWabSL7d5KhoHHkOHAAAAAElFTkSuQmCC";

const MenuButtonDiv = styled.div`
position: absolute;
top: 30px;
left: 90px;
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

}
`;

const HomeIcon = ({style}) => {
  if (window.location.pathname === "/"){
    return null;
  }
  return(
    <MenuButtonDiv style ={style}>
      <Link to = {`/`} >
        <button 
          type = "button" 
        >
          {<img src={icon} alt = ""/>}
        </button>
      </Link>
    </MenuButtonDiv>
  );
};

HomeIcon.propTypes = {
  style: PropTypes.string
}; 

export default HomeIcon;