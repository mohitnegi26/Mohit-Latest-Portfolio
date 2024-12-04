import React from "react";
import { NavLink } from "react-router-dom";
import { TiThMenu } from "react-icons/ti";
import { FaInstagram, FaGithubSquare, FaLinkedin } from "react-icons/fa";
// FaFacebookSquare
const Header = () => {
  const [showNavbar, setShowNavbar] = React.useState(false);

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar);
  };

  return (
    <>
      <div className="allnavbar">
        <div className="navbar1">
          <ul className="mainnavbar">
            <NavLink to='https://www.instagram.com/mohit.negi26/'><li className="verticalline"><FaInstagram /></li></NavLink>
            {/* <NavLink to = ''></NavLink><li className="verticalline"><FaFacebookSquare /></li> */}
            <NavLink to='https://github.com/mohitnegi26'><li className="verticalline"><FaGithubSquare /></li></NavLink>
            <NavLink to='https://www.linkedin.com/in/mohit-negi-0806b7253/'><li className="verticalline"><FaLinkedin /></li></NavLink>
            <NavLink to='/ContactUs'><li className="navbutton"><button name="contactme">Contact Me</button></li></NavLink>
          </ul>
        </div>
        <nav className="navbar">
          <div className="container">
            <div className="logo">
              <Logo />
            </div>
            <div className="menu-icon" onClick={handleShowNavbar}>
              <Hamburger />
            </div>
            <div className={`nav-elements ${showNavbar ? "active" : ""} 'headingcolor'`} >
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/Experience">Experience</NavLink>
                </li>
                <li>
                  <NavLink to="/About">About</NavLink>
                </li>
                <li>
                  <NavLink to="/ContactUs">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/Skills">Skills</NavLink>
                </li>
                <li>
                  <NavLink to="/Projects">Projects</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

const Hamburger = () => (
  <div className="togglemenu">
    <TiThMenu />
  </div>
);

const Logo = () => (
  <div className="logo">
    <img src="./assets/image/logo.png" width={60} height={60} alt="Site Logo" />
  </div>
);

export default Header;
