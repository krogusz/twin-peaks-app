import React from 'react';
import styled from 'styled-components';
import Menu from './menu.jsx';

const img = "https://ocdn.eu/pulscms-transforms/1/hv9k9kpTURBXy83NzA5NWIzMWQwNTk3YTFjNGRkNzViZDk2MzkxYWJhNC5qcGeSlQMAAM0KAM0FoZUCzQOdAMPDgqEwAaExAQ"
const arrow = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAmUlEQVRIie2UsQ3CMAAEnzRJwxigVAxDjdgpDTtkF6RkkxQZ4CiIEstyKLC/ghvgT37bL/0pBVADHXB0hJ+AgTdlBcAVmNgoIwCapZKYfAFwBsZEeL4AuAHzTvj3gg+VZHFYwltJvaRL1vETVMBd0tMRLkmVIzTEXtGK65JTIs8zjSS+jxZIfFMRiTxjF0l8cx1IGuBhE/wuL4q+v+UDi/jyAAAAAElFTkSuQmCC";

const MainPageDiv = styled.div`
background: url(${img}) ;
background-size:cover;
width:100vw;
height:100vh;
filter: sepia(30%);
`
const MenuButtonDiv = styled.div`
position: absolute;
top: 10px;
left: 10px;
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
`
class MainPage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      menuDisabled: true
    }
    this.toogleMenu = this.toogleMenu.bind(this);
  }

  toogleMenu(){
    this.setState({
      menuDisabled: ! this.state.menuDisabled
    })
  }

  render(){
    return (
      <MainPageDiv>
        <MenuButtonDiv>
          <button 
          type = "button" 
          onClick = {this.toogleMenu}
          >
            {this.state.menuDisabled ? "Menu" : <img src={arrow}/>}
          </button>
        </MenuButtonDiv>
        <Menu 
          disabled = {this.state.menuDisabled}
        />
      </MainPageDiv>
    )
  }
}

export default MainPage;
