import React, {useState, useEffect, createContext} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navbar from './Navbar/Navbar.jsx';
import Main from './Main/Main.jsx';
import Login from './Login/Login';
import { auth } from "./configs/firebase"
import ProtectedRoute from './ProtectedRoute/ProtectedRoute';
import MainLoader from './Loader/MainLoader';
import About from './About/About';
import Home from './Home/Home';
import PageNotFound from './PageNotFound/PageNotFound';


export const AuthContext = createContext();

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let authUnsubscribe = null;
    setIsLoading(true)
    authUnsubscribe = auth.onAuthStateChanged(user => {
      console.log(user)
      if(user)
        setCurrentUser(user);
      else
        setCurrentUser(null)
        setIsLoading(false)
    })

    return () => authUnsubscribe()
    
  },[])

  return (
    <AuthContext.Provider value={{currentUser}}>
      <div className="w-screen h-screen flex flex-col bg-cgray-dark font-cmont">
        <Navbar/>
        {
          isLoading ? (
            <div className="w-full h-full flex justify-center items-center">
              <MainLoader size="25"/>
            </div>
          ) : (
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/login" component={Login}/>
              <ProtectedRoute exact path="/notes" component={Main}/>
              <Route exact path="/about" component={About}/>
              <Route path='*' exact component={PageNotFound} />
            </Switch>
          )
        }
      </div>
    </AuthContext.Provider>
  );
}

export default App;
