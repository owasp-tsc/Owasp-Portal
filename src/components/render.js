import React, { Component } from 'react';
import axios from 'axios';

export class render extends Component {
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
   var list = await axios.get('/questions');
   //const list= [{"Question" : "asdsafas"  , "Answer" : 23}];

   console.log(list);
    this.setState({list , length:list.length});
  }

  onChange=(e)=>{
    this.setState({[e.target.name] : e.target.value});
  }
  onClick=(e)=>{
    console.log("lkafklsajfl");
    this.setState({number: this.state.number+1});
    console.log(this.state.number);   
  }

    render() {
        return (
                <main>
                  {(this.state.length > this.state.number) && this.state.list[this.state.number].Question}
                  <br></br>
                  <input type="text/css" className="postionButton" value={this.state.value} name="value" onChange={this.onChange}></input>
                  <button className="postionButton" onClick={this.onClick}>Submit</button>
                </main>
              );
    }
}

export default render
