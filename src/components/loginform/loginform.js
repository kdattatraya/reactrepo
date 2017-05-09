import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import {connect} from 'react-redux';
import {login} from '../../actions/loginActions';

class LoginForm extends Component {

  constructor(props){
    super(props);
    this.state={
      email:"", password:""
    };
    this.handleSubmit= this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let {email,password} =this.state;
    this.props.login(email,password);

    console.log("Form submitted");
    alert("Hi Welcome");
    this.props.history.push('/courses');
  }
  
  render() {
    let {email,password} = this.state;
    let {isLoginPending, isLoginSuccess, loginError} = this.props;
    debugger;
    return(
      <div className = "login-form -wrapper"> 
      <form className = "loginForm" onSubmit={this.handleSubmit}>
        <label> Email</label>
        <input type= "email" name = "email" onChange={e=> this.setState({email: e.target.value})} /> 
        <br></br>
        <label> Password</label>
        <input type= "password" name = "password" onChange={e=> this.setState({password: e.target.value})} /> 
        <br></br>
        <input type= "submit" value ="Login"  className="btn btn-primary" name = "submit"/>

        {isLoginPending && <div>Please wait..</div>}
        {isLoginSuccess && <div>Welcome Back..</div>}
        {loginError && <div>{loginError.message}</div>}
        
      </form>
      </div>
    );
  }
}

const mapStateToProps=(state, ownProps)=>{
  debugger;
  return {
    isLoginPending: state.loginreducer.isLoginPending,
    loginError: state.loginreducer.loginError,
    isLoginSuccess: state.isLoginSuccess
  };
}

const mapDispatchToProps=(dispatch)=>{
  return {
    login: (email,password) => dispatch(login(email,password))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
