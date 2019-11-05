import React, { Component, useContext } from 'react';
import { Link } from "@reach/router";
import axios from 'axios';
import {NavbarContext} from "../Context/Navbar";

class Login extends Component {
 
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      pass: "",
      incorrect: "",
      register: "",
      success: ""
    }
  }
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onSubmit = async (e) => {
    e.preventDefault();
    const data = {
      "Username": this.state.value,
      "password": this.state.pass
    };
    console.log(data);
    const update = await axios.post('http://localhost:8000/loginData', data);
   console.log(update);
    if (update.data === "success") {
      this.props.update({ username: this.state.value});
      this.props.onClick();
    }
    else
      this.setState({ "incorrect": "Username or password was incorrect" })
  }

  onRegister = async (e) => {
    e.preventDefault();
    const data = {
      "Username": this.state.register
    };
    const update = await axios.post('http://localhost:8000/user', data);
    if (update) this.setState({ "success": "Registered Successfully" });
    console.log(update);
  }
  render() {
    return (
      <React.Fragment>
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form className="login100-form validate-form p-l-55 p-r-55 p-t-178" onSubmit={this.onSubmit}>
                <span className="login100-form-title">
                  Sign In
              </span>

                <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                  <input className="input100" type="text" value={this.state.value} onChange={this.onChange} name="value" placeholder="Username" />
                  <span className="focus-input100" />
                </div>
                <div className="wrap-input100 validate-input" data-validate="Please enter password">
                  <input className="input100" type="password" name="pass" value={this.state.pass} onChange={this.onChange} placeholder="Password" />
                  <span className="focus-input100" />
                </div>
                {this.state.incorrect}
                <br></br>
                {this.props.username}
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn" type="submit" >
                    Sign in
                </button>

                </div>
              </form>
              <form onSubmit={this.onRegister} className="login100-form validate-form p-l-55 p-r-55 p-t-60">
                <div className="wrap-input100 validate-input m-b-16" data-validate="Please enter username">
                  <input className="input100" type="text" value={this.state.register} onChange={this.onChange} name="register" placeholder="Username" />
                  <span className="focus-input100" />
                </div>
                <br></br>
                <div className="container-login100-form-btn">
                  <button className="login100-form-btn" type="submit" >
                    Sign up
                </button>
                </div>
                {this.state.success}
                <br></br>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};



const Hook = (props)=>{

  let {username , updateGlobalState} = useContext(NavbarContext);
  return <Login username = {username} update={(value)=>updateGlobalState(value)} {...props}/>
}

export default Hook;
