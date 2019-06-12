import React, { Component } from 'react';
import Logo from '../images/logohomestage.jpg'
import './Navbar.css'
import {Link} from 'react-router-dom'
export default class Navbar extends Component {
render()
{
return(
<div>
<div className="sticky-top">
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand colorchange mobileview" href="#"> <img src={Logo} style={{width:"50px",height:"50px"}}/></a>
 
  <button className="navbar-toggler customtoggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
	
      <li className="nav-item active">
        <a className="nav-link colorchange" href="/">Home <span className="sr-only">(current)</span></a>
      </li>
	  

      <li className="nav-item ">
        <a className="nav-link colorchange" href="/about">About</a>
      </li>

	   </ul>
	   
	   <ul className="navbar-nav mx-auto mobilenone">
	 <img src={Logo} style={{width:"50px",height:"50px"}}/>
	   </ul>
	   
	  	  <ul className="navbar-nav">
		 
      <li className="nav-item ">
        <a className="nav-link colorchange" href="/service">Services</a>
      </li>
	  
	  
                  <li className="nav-item ">
                    <a className="nav-link colorchange" href="/portfolio">Portfolio</a>
                  </li>
               
 
       <li className="nav-item ">
        <a className="nav-link colorchange" href="/contact">Contact Us</a>
      </li>
	  
    </ul>
  </div>
</nav>
</div>
</div>
)
}

}