import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header d-f jc-sb align-center">
      <Link to='/' className="header-logo"><img src="images/logo.svg" alt="logo" /></Link>
      <nav>
        <ul className="header-nav d-f">
          <li className="header-nav-item"><Link to="about">About Us</Link></li>
          <li className="header-nav-item "><Link to="works">How It Works</Link></li>
          <li className="header-nav-item"><Link to="menu">Menu</Link></li>
          <li className="header-nav-item"><a href="">Contact</a></li>
        </ul>
      </nav>
      <button className='header-btn'>Get Started</button>
    </header>
  )
}

export default Header