import React, { useState } from "react";
import { FaInstagram, FaFacebookSquare, FaGithubSquare, FaLinkedin, FaSearch, FaTh } from "react-icons/fa";
import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router-dom";

function Header1() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Function to toggle the mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div className="navbar1">
        <ul className="mainnavbar">
          <li className="verticalline"><FaInstagram /></li>
          <li className="verticalline"><FaFacebookSquare /></li>
          <li className="verticalline"><FaGithubSquare /></li>
          <li className="verticalline"><FaLinkedin /></li>
          <li className="navbutton"><button name="contactme">Contact Me</button></li>
        </ul>
      </div>

      <div className="navbar2">
        <ul className={`mainnavbar2 ${isMobileMenuOpen ? "open" : ""}`}>
          <li className="menu-icon" onClick={toggleMobileMenu}>
            <TiThMenu />
          </li>
          <li className="logo"><img src="./assets/image/logo.png" width={60} height={60} alt="" /></li>
          <li className="navitem dropdown">HOME
            <ul className="dropdown-content">
              <li>HOME PAGE 1</li>
              <li>HOME PAGE 2</li>
            </ul>
          </li>
          <NavLink to='/About'><li className="navitem">ABOUT US</li></NavLink>
          <NavLink to='/'><li className="navitem">EXPERIENCE</li></NavLink>
          <li className="navitem">PORTFOLIO</li>
          <li className="navitem dropdown">PAGES
            <ul className="dropdown-content">
              <li>BLOG</li>
              <NavLink to="/ContactUs"><li>CONTACT US</li></NavLink>
            </ul>
          </li>
          <li className="navitem navlist"><span className="fafaicon"><FaSearch /></span>Search</li>
          <li className="navitem navlistt"><FaTh /></li>
        </ul>
      </div>
    </>
  );
}

export default Header1;
