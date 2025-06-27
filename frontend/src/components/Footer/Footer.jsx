import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>FooDel is India’s premier food delivery platform, bringing you a diverse range of flavors from your favorite local eateries to top international cuisines. Whether you're craving a hearty Indian thali, sizzling Asian delights, or classic Italian pizzas, we deliver fresh and delicious meals straight to your doorstep. With a seamless ordering experience, secure payment options, and real-time tracking, FooDel ensures that great food is always just a click away!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>GET IN TOUCH</h2>
            <ul>
                <li>+91 7498238857</li>
                <li>contact@foodel.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 © FooDel.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer
