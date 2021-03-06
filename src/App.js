import React, {useState} from "react";
import MainPage from "./components/main-page.jsx";
import Series from "./components/series.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";
import {Spring} from "react-spring/renderprops";
import Menu from "./components/menu.jsx";
import Plot from "./components/plot.jsx";
import Character from "./components/characters.jsx";
import Facts from "./components/facts.jsx";
import HomeIcon from "./components/home-icon.jsx";
import MenuIcon from "./components/menu-icon.jsx";
import seasonPlot from "./resources/seasons.json";
import moviePlot from "./resources/movie.json";

const App = () => {
  const [menuDisabled, setMenuDisabled] = useState(true);

  const toogleMenu = () => {
    setMenuDisabled(!menuDisabled)
  }

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
              <MenuIcon style = {style} toogleMenu= {toogleMenu} menuDisabled={menuDisabled} />
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
          disabled = {menuDisabled}
          onClick = {toogleMenu}
        /> 
      </Router>
    </div>
  );
}

export default App;
