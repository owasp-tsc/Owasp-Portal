import React, { Component , useContext} from 'react';
import axios from 'axios';
import { NavbarContext } from '../Context/Navbar';
const link = 'https://owasp-portal.herokuapp.com/';
class Render extends Component {
  constructor(props) {
    super(props)

    this.state = {
      list: [{ "Question": "" }],
      length: 0,
      number: 0,
      value: Number
    }
   
  }

  async componentDidMount() {
    var list = await axios.get(link + 'questions');
    //const list= [{"Question" : "asdsafas"  , "Answer" : 23}];  
    console.log(list.data.length);
    this.setState({ list: list.data, length: list.data.length });
  }

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  onClick = async (e) => {
    console.log(this.props.username);

    const data = {
      "Username": this.props.username,
      "Question": this.state.list[this.state.number].Question,
      "Answer": this.state.value
    }
   const upload = await axios.post(link +'answer', data);
   console.log(this.state.number);
    this.setState({ number: this.state.number + 1 });

  }

  render() {
    return (
      <React.Fragment>
        {(this.state.length === this.state.number) && <div className = "thankyou"><h1>Thank You!</h1></div>}
        <main>
          {(this.state.length > this.state.number) && this.state.list[this.state.number].Question}
          <br></br>
          {(this.state.length > this.state.number) && (<React.Fragment>
          <div className="color"></div>
          <input type="text/css" className="postionButton" value={this.state.value} name="value" onChange={this.onChange}></input>
          <button className="postionButton" onClick={this.onClick}>Submit</button>
          </React.Fragment>)}
        </main>
      </React.Fragment>
    );
  }
};




const Rendering = (props) => {
  let {username } = useContext(NavbarContext);
  console.log(username);
  return ( <Render {...props} username = {username} /> );
}
 
export default Rendering;