import React, { useState } from 'react';
import { Router } from "@reach/router";
import './App.css';
import Navbar from './components/navbar';
import SideBar from './components/sideBar';
import Render from './components/render';
import Login from './components/login';
import Register from './components/register';
import NavbarProvider from './Context/Navbar';

class App extends React.PureComponent {

  constructor(props) {
    super(props)

    // global state 
    this.state = {
      boolState: true,
      username: "Owasp User"
    }
  }
  updateGlobalState = (state) => this.setState({ ...state })
  render() {
    const { boolState, username } = this.state

    const navbarProps = {
      username,
      updateGlobalState: this.updateGlobalState
    }
    return (
      <React.Fragment>
        {boolState ? (
          <React.Fragment>
            <NavbarProvider value={navbarProps}>
              <Navbar />
            </NavbarProvider>
            <SideBar />
            <Render />
          </React.Fragment>
        ) : <Router>
            <Login path="/" onClick={() => this.updateGlobalState({ boolState: !boolState })} />
            <Register path="/register" />
          </Router>}
      </React.Fragment>
    );
  }
}


export default App;
