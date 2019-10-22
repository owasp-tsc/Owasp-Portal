import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import SideBar from './components/sideBar';
import Render from './components/render';


function App() {
  return (
    <React.Fragment>
      <Navbar />
      <SideBar />
      <Render />
    </React.Fragment>
  );
}


export default App;
