import React , {useState} from 'react';
import {Router , Link} from "@reach/router";
import './App.css';
import Navbar from './components/navbar';
import SideBar from './components/sideBar';
import Render from './components/render';
import UserDetails from './components/context';
import Login from './components/login';
import Register from './components/register';

function App() {

  const [boolState , update] = useState("false");
  return (
    <React.Fragment>
      <UserDetails.Provider value = "username">
      {boolState==="false" && (
      <Router>
        <Login path="/" onClick={update} />
        <Register path="/register" />
      </Router>
      )}
      {boolState==="true" && (
        <React.Fragment>
      <Navbar />
      <SideBar />
      <Render />
      </React.Fragment>
      )}
      </UserDetails.Provider>
    </React.Fragment>
  );
}


export default App;
