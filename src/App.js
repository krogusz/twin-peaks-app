import React from "react";
import MainPage from "./components/main-page.jsx";
import Series from "./components/series.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Spring} from "react-spring/renderprops";
import styled from "styled-components";
import Menu from "./components/menu.jsx";
import Plot from "./components/plot.jsx";
import Character from "./components/characters.jsx";
import Facts from "./components/facts.jsx";
import HomeIcon from "./components/home-icon.jsx";
import seasonPlot from "./resources/seasons.js";
import moviePlot from "./resources/movie.js";
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

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuDisabled: true
    };
    this.toogleMenu = this.toogleMenu.bind(this);
  }

  toogleMenu(){
    this.setState({
      menuDisabled: ! this.state.menuDisabled
    });
  }

  render(){
  console.log(this.props)

    return(
      <div style = {{position: "relative"}}>
        <Router>
          <Spring 
            config = {{tension:120, friction: 120, delay: 1300}}
            from={{opacity: 0}}
            to={{opacity: 1}}
          >
            {style => 
              <div >
              <HomeIcon style = {style}/>

              <MenuButtonDiv>
                <button 
                  type = "button" 
                  onClick = {this.toogleMenu}
                  style = {style}
                >
                  {this.state.menuDisabled ? "Menu" : <img src={arrow} alt = ""/>}
                </button>
              </MenuButtonDiv >
              </div>

            }
          </Spring>
          <Route exact path = "/" > <MainPage /> </Route>
          <Route exact path = "/series"> <Series /> </Route>
          <Route path = "/series/:id" render={(props) => <Plot {...props} plot = {seasonPlot} />}/> 
          <Route path = "/movie" render={(props) => <Plot {...props} plot = {moviePlot} />}/>
          <Route path = "/characters"> <Character /> </Route>
          <Route path = "/interesting facts"> <Facts /> </Route>
          <Menu 
            disabled = {this.state.menuDisabled}
            onClick = {this.toogleMenu}
          /> 
        </Router>
      </div>
    );
  }
}

export default App;
