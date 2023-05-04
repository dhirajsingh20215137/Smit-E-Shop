import React from "react";
import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    < >
       <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink  to ="/" className="navbar-brand" href="#">Smith-E-Shop</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon" />
  </button>
  <div className="collapse navbar-collapse " id="navbarSupportedContent">
    <ul className="navbar-nav text-md-left">
      <li className="nav-item active">
        <NavLink  to ="/about" className="nav-link" href="#">Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink  to ="/register" className="nav-link" href="#">Register</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  to ="/login" className="nav-link" href="#">Login</NavLink>
      </li>
      <li className="nav-item">
        <NavLink  to ="/cart" className="nav-link" href="#">Cart(0)</NavLink>
      </li>
     
      
    </ul>
    

  </div>
</nav>

    </>
  );
};

export default Header;
