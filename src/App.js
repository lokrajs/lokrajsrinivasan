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
      <Switch>
        <Route exact path='/'>
      <div className='all'>
        <div className='container'>
        <div className='particles-container'>
        <Particles
        height='300px'
        params={{
          interactivity:{
            events:{
              onHover:{
                enable:true,
                mode:'grab'
              }
            }
          },
          particles: { 
            move:{
              attract:{
              rotate:true
              }
            },
            shape:{
              type:['circle','polygon']
            },
            size:{
              value:10,
              random:true,
            },
            number:{
              value:50
            },
            color:{
              value:'#1F51FF'
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
      </Route>
      </Switch>
    )
  }


}

export default App;
