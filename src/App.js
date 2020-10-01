import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import DreamEntry from './components/DreamEntry';
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import './App.css';
import { AuthProvider } from './Auth';
import PrivateRoute from './PrivateRoute'

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />

          <Switch>   
            <PrivateRoute path="/" component={Home} exact />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={SignUp} />
            <PrivateRoute path="/DreamEntry" component={DreamEntry} />
            <Route component={Error} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
