import React, { Component } from 'react'

export class Navbar extends Component {
    render() {
        return (
                <section>
                  <nav className="navbar navbar-dark bg-dark hornav fixed-top">
                    <a href="#" className="navbar-brand">OWASP</a>
                    <div className="ml-auto">
                      <ul className="navbar-nav">
                        <li className="nav-item"><a href="#" className="nav-link">Welcome, <span>Your Name</span></a></li>
                      </ul>
                    </div>
                  </nav>
                </section>
              )
    }
}

export default Navbar
