import React from 'react'
import { Link } from 'react-router-dom'
 import logo from "../assets/logo.jpg"

const Header = () => {
  return (
   <nav>

    <div >
      
      <img src={logo} alt="logo" />
      <h1>PURI</h1>

    </div>

    <main>
     
      <Link  to={"/"}>Home</Link>
      <Link  to={"/#about"}>About Us</Link>
      <Link  to={"/#projects"}>Projects</Link>
      <Link  to={"/media"}>Media</Link>
      <Link  to={"/career"}>Career</Link>
      <Link  to={"/#contact"}>Contact Us</Link>

      </main>






   </nav>
  )
}

export default Header

