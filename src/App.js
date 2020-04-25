import React from 'react';
import MainPage from './components/main-page.jsx'
import Series from './components/series.jsx'
import { BrowserRouter as Router, Route } from "react-router-dom"


function App() {
  return (
    <Router>
      <Route exact path = "/" > <MainPage /> </Route>
      <Route path = "/series"> <Series /> </Route>
    </Router>

  );
}

export default App;
