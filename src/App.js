import React from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx';
import Main from './Main/Main.jsx';
import Login from './Login/Login';

function App() {
  return (
    <div className="w-screen h-screen flex flex-col bg-cgray-dark font-cmont">
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Main}/>
        <Route exact path="/login" component={Login}/>
      </Switch>
    </div>
  );
}

export default App;
