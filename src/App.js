import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import DreamEntry from './components/DreamEntry';
import Home from './components/Home';
import './App.css';





function App() {
  
  return (
  <>
  <BrowserRouter>
  <Navbar/>

  <Switch>
    <Route path='/' component={Home}  exact/>
    <Route path='/DreamEntry' component={DreamEntry} />
    <Route component={Error}  />

  </Switch>
  
  </BrowserRouter>
  </>
  );
}

export default App;
