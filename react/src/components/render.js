import React, { Component , useContext} from 'react';
import axios from 'axios';
import { NavbarContext } from '../Context/Navbar';

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
    var list = await axios.get('http://localhost:8000/questions');
    //const list= [{"Question" : "asdsafas"  , "Answer" : 23}];  
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
   await axios.post('http://localhost:8000/answer', data);
    this.setState({ number: this.state.number + 1 });

  }

  render() {
    return (
      <React.Fragment>
        {(this.state.length === this.state.number) && <div className = "thankyou"><h1>Thank You!</h1></div>}
        <main>
          {(this.state.length > this.state.number) && this.state.list[this.state.number].Question}
          <br></br>
          <div className="color"></div>
          <input type="text/css" className="postionButton" value={this.state.value} name="value" onChange={this.onChange}></input>
          <button className="postionButton" onClick={this.onClick}>Submit</button>
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