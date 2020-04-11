import React from 'react';
import styled from 'styled-components';
import img from '../resources/twin-peaks.jpg'
import Fog from './fog/Fog.jsx';

function MainPage(){
  const MainPage = styled.div`
  background: url(${img}) ;
  background-size:cover;
  width:100vw;
  height:100vh;
`
return(
  <MainPage>
    <Fog 
      density = {2}
      maxVelocity ={2}
    />
  </MainPage>

)}

export default MainPage;
