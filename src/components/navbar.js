
import React, { useContext } from 'react';
import { NavbarContext } from '../Context/Navbar';

function Navbar() {
  const { username, updateGlobalState } = useContext(NavbarContext) // Using global Variables via context and we can use them anywhere in the hierarchy 
  return (
    <section>
      <nav className="navbar navbar-dark bg-dark hornav fixed-top">
        <a href="#" className="navbar-brand">OWASP</a>
        <div className="ml-auto">
          <ul className="navbar-nav">
            <li className="nav-item"><a href="#" className="nav-link">Welcome <span>{username}</span></a></li>
            {/* Updating username via button below */}
            <button onClick={() => updateGlobalState({ username: "Username Got Updated!" })}>Click me to update Username</button>
          </ul>
        </div>
      </nav>
    </section>
  )
};


export default Navbar