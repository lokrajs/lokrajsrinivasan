import logo from './logo.svg';
import React from 'react';
import { Switch, Route } from 'react-router-dom';



import Header from './components/header/header.component';


import AboutMePage from './pages/aboutme/aboutme.component';
import HomePage from './pages/home/home.component';


import './App.css';


class App extends React.Component { 
  render() { 
    return(
      <div>
      <Header/>
        <AboutMePage/>
          {/* <Route exact path = '/aboutme' component = {AboutMePage}/> */}
      </div>
    )
  }


}

export default App;
