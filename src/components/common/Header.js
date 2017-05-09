import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <nav>
        <Link to="/" >Home</Link>
        {" | "}
          <Link to="/courses" >Courses</Link>
        {" | "}
        <Link to="/about" >About</Link>
        {" | "}
        <Link to="/welcome" >Welcome</Link>       
        {" | "}
        <Link to="/login" >Login</Link>
      </nav>
    );
  }
}

export default Header;