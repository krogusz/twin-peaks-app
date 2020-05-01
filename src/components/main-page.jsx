import React from 'react';
import styled from 'styled-components';

const img = "https://ocdn.eu/pulscms-transforms/1/hv9k9kpTURBXy83NzA5NWIzMWQwNTk3YTFjNGRkNzViZDk2MzkxYWJhNC5qcGeSlQMAAM0KAM0FoZUCzQOdAMPDgqEwAaExAQ"

const MainPageDiv = styled.div`
background: url(${img}) ;
background-size:cover;
width:100vw;
height:100vh;
filter: sepia(30%);
`

class MainPage extends React.Component {


  render(){
    return (
          <MainPageDiv >

          </MainPageDiv>
    )
  }
}

export default MainPage;
