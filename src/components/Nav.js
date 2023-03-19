import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <div className="navbar">
        <div className="container">
        <a href="#" className="logo">Logo</a>
        <ul>
        <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
        </ul>
       </div>
       </div>
    )
}

export default Nav;