import React, { Component } from 'react'

class sideBar extends Component {
    render() {
        return (

                <section className="content">
                  <nav className="navbar navbar-dark bg-dark flex-column vertnav sticky">
                    <div>
                      <ul className="navbar-nav">
                        <li className="nav-item"><a href="#" className="nav-link"><i className="far fa-user" /></a></li>
                        <li className="nav-item"><a href="#" className="nav-link"><i className="far fa-file" /></a></li>
                        {/*<li className="nav-item"><a href="#" className="nav-link"><i className="fas fa-tv" /></a></li>
                        <li className="nav-item"><a href="#" className="nav-link"><i className="far fa-user" /></a></li>
                        <li className="nav-item"><a href="#" className="nav-link"><i className="far fa-file" /></a></li>
                        <li className="nav-item"><a href="#" className="nav-link"><i className="fas fa-phone" /></a></li>
        <li className="nav-item"><a href="#" className="nav-link"><i className="fas fa-tv" /></a></li>*/}
                      </ul>
                    </div>
                  </nav>
                </section>
              );
    }
}

export default sideBar;
