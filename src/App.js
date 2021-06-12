import logo from './logo.svg';
import Particles from 'react-particles-js';
import React from 'react';
import { Switch, Route } from 'react-router-dom';



import Header from './components/header/header.component';


import AboutMePage from './pages/aboutme/aboutme.component';
import Name from './components/name-section/name.section.component';


import './App.css';


class App extends React.Component { 
  render() { 
    return(
      <div className='all'>
        <div className='container'>
        <div className='particles-container'>
        <Particles
        height='300px'
        params={{
          particles: { 
            number:{
              value:30
            },
            color:{
              value:'#c32aff'
            }
          }
        }}
        />
        </div>
        <Name/>
        </div>
      <Header/>
        <AboutMePage/>
        
      </div>
    )
  }


}

export default App;
