import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import SideBar from './components/sideBar';
import Render from './components/render';
import UserDetails from './components/context';

function App() {
  const username = "Rachit";
  return (
    <React.Fragment>
      <UserDetails.Provider value = {username}>
      <Navbar />
      <SideBar />
      <Render />
      </UserDetails.Provider>
    </React.Fragment>
  );
}


export default App;
