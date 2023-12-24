import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bar d-f jc-sb">
        <div>
          <div className="footer-logo"><img src="images/footer-logo.svg" alt="footer-logo" /></div>
          <p className="footer-desc">
            All rights resereved <a href="">MealsAmericaFL.com</a> is based in the Florida area
            and provides home-delivered meals to consumers across ALL sixty seven counties in Florida.
          </p>
        </div>
        <div>
          <h4 className="footer-bl-title">Contact info</h4>
          <div className="footer-contacts d-f">
            <p className="footer-contacts-address">
              1733 Benbow Ct, Ste 3, Apopka, FL, 32703
            </p>
            <p className="footer-contacts-phone">(786) 600-59-09</p>
            <p className="footer-contacts-email">Support@MealsAmericaFL.com</p>
          </div>
        </div>
        <div>
          <h4 className="footer-bl-title">Links</h4>
          <ul className='footer-bl-list'>
            <li><Link to="about">About Us</Link></li>
            <li><Link to="works">How It Works</Link></li>
            <li><a href="">Our menu</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-rights">&copy; All rights resereved <a href="">MealsAmericaFL.com</a></div>
    </footer>
  )
}

export default Footer