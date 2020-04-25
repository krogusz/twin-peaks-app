import React from 'react';
import styled from 'styled-components';

import Menu from './menu.jsx';

const img = "https://ocdn.eu/pulscms-transforms/1/hv9k9kpTURBXy83NzA5NWIzMWQwNTk3YTFjNGRkNzViZDk2MzkxYWJhNC5qcGeSlQMAAM0KAM0FoZUCzQOdAMPDgqEwAaExAQ"


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

  buttonValue

  render(){
    return (
      <MainPageDiv>
        <MenuButtonDiv>
          <button 
          type = "button" 
          onClick = {this.toogleMenu}
          >
            {this.state.menuDisabled ? "Menu" : "<-" }
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
