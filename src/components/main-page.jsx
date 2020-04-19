import React from 'react';
import styled from 'styled-components';
// import img from '../resources/twin-peaks.jpg'
import Fog from './fog/Fog.jsx';
const img = "https://i.pinimg.com/originals/86/d3/cc/86d3ccbf2c7267c34064adc4c3a705c9.jpg"

function MainPage() {
  const MainPage = styled.div`
  background: url(${img}) ;
  background-size:cover;
  width:100vw;
  height:100vh;
`
  return (
    <MainPage>
      {/* <Fog
        density={50}
      /> */}
    </MainPage>

  )
}

export default MainPage;
