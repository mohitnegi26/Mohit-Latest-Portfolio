import React from "react";
import { NavLink } from "react-router-dom";
import { FaInstagram, FaGithubSquare, FaLinkedin } from "react-icons/fa";
// FaFacebookSquare
const Footer = () => {
  return (
    <>

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 col-sm-12 col-12">
            <div className="footerbar mt-4 text-center">
              <ul className="footer-nav">
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/About"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Experience"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Experience
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Skills"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Skills
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/ContactUs"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Contact
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/Projects"
                    className={({ isActive }) =>
                      isActive ? "active-link" : ""
                    }
                  >
                    Projects
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-12">
            <div className="footericons">
              <ul className="footerbar text-center">
                <NavLink to='https://www.instagram.com/mohit.negi26/'><li className="verticalline"><FaInstagram /></li></NavLink>
                {/* <li className="verticalline"><FaFacebookSquare /></li> */}
                <NavLink to='https://github.com/mohitnegi26'><li className="verticalline"><FaGithubSquare /></li></NavLink>
                <NavLink to='https://www.linkedin.com/in/mohit-negi-0806b7253/'><li className="verticalline"><FaLinkedin /></li></NavLink>
              </ul>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12 col-sm-12 col-12">
            <div className="copyrights text-center">
              <p>Copyright © 2024 Mohit Negi. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
