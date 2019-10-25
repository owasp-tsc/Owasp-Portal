 
import React, {useState ,useContext} from 'react';
import context from './context';

function Navbar() {

    let name = useContext(context);
    // useEffect(()=>{

  console.log(name);
    // }, [name , update]);
        return (
                <section>
                  <nav className="navbar navbar-dark bg-dark hornav fixed-top">
                    <a href="#" className="navbar-brand">OWASP</a>
                    <div className="ml-auto">
                      <ul className="navbar-nav">
                        <li className="nav-item"><a href="#" className="nav-link">Welcome <span>{name}</span></a></li>
                      </ul>
                    </div>
                  </nav>
                </section>
              )
    };


export default Navbar