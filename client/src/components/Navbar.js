import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../Assets/icon.png'
import Second from '../Assets/Second.svg'
import Avator from './Avator';

import './Navbar.css'

export default function Navbar() {
  var User = null;
   return (
    <nav className = "main-nav">
      <div className = "navbar">
      <Link to="/" className="nav-logo nav-item ">
        <img src={logo} alt="logo" />
      </Link>
      <Link to="/" className="nav-item nav-btn ">About</Link>
      <Link to="/" className="nav-item nav-btn">Product</Link>
      <Link to="/" className="nav-item nav-btn"> For Teams</Link>
      <form>
        <input type="text" placeholder="Search ..." />
        <img src={Second} width="18" className = "search-icon" />
      </form>
      {User === null? <Link to="/Login" className="nav-item nav-links" >Log In</Link> :
      <>
      <Link to ="/User">  <Avator text ="M"> </Avator></Link>
      <button className = "nav-item nav-links" style = {{ position : "relative" , right:"60px" }} >Logout</button>
      </>}</div>
    </nav>
  )
}
