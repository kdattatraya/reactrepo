import React, { PropTypes } from 'react';
import { connect } from 'react-redux';


class Hello extends React.Component{

constructor(props){
  super (props);
  this.state = {
  name :"DATTA",
  // userName:""
  }

  this.newUser= this.newUser.bind(this);
  this.handleSubmit= this.handleSubmit.bind(this);
}


sayHi(event) {
  alert(`Hi ${this.state.name}`);
  console.log("Hi clicked");
}

handleSubmit(event){
  alert("Hi" +this.state.userName);
  alert("Form submitted");
  this.props.history.push('/courses');
}

newUser(event){
  this.setState({userName: event.target.value});
}

render(){
  return (
    <div className ="container">
        <a href='#' onClick= {this.sayHi.bind(this)}><button>Say hi to developer</button></a>
        <form className="reactForm" onSubmit={this.handleSubmit}>
        <input type="text" id="userName" placeholder="Enter your name" value={this.state.userName} onChange={this.newUser}></input>
        <button class="btn btn-primary" type="submit">Submit</button>
        <button type="button" class="btn btn-primary">Primary</button>
        </form>

       
    </div>
  
  );
}
}

Hello.PropTypes={
  name: React.PropTypes.string.isRequired,
  // userName: REac
}

function mapState(state, ownProps) {
  return {
    user: state.userName
  }
}


export default  connect(mapState)(Hello);