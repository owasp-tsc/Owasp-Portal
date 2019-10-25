import React, { Component } from 'react';
import axios from 'axios';
import UserDetails from './context';

class render extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       list : [{"Question" : ""}],
       length: 0,
       number : 0,
       value : Number
    }
  }
  
  async componentDidMount()
  {
   var list = await axios.get('http://localhost:8000/questions');
   //const list= [{"Question" : "asdsafas"  , "Answer" : 23}];

   console.log(list);
   console.log(list.data[0].Question);
    this.setState({list:list.data , length:list.data.length});
  }

  onChange=(e)=>{
    this.setState({[e.target.name] : e.target.value});
  }
  onClick= async (e)=>{
    console.log("lkafklsajfl");
    
    const data = {
      "Username" : "Rachit2501",
      "Question":this.state.list[this.state.number].Question , 
      "Answer":this.state.value
    }
    const upload = await axios.post('http://localhost:8000/answer',data);
    this.setState({number: this.state.number+1});
     
  }

    render() {
        return (
          <React.Fragment>
             {(this.state.length === this.state.number) && <h1>Thank You!</h1>}
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
}

export default render
