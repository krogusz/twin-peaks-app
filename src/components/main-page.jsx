import React from 'react';
import styled from 'styled-components';
import img from '../resources/twin-peaks.jpg'
import Fog from './fog/Fog.jsx';
// const img = "https://www.cgarchitect.com/content/portfolioitems/2015/09/117567/redroomCOLOR_large.jpg"

function MainPage() {
  const MainPage = styled.div`
  background: url(${img}) ;
  background-size:cover;
  width:100vw;
  height:100vh;
`
  return (
    <MainPage>
      <Fog
        density={500}
      />
    </MainPage>

  )
}

export default MainPage;
