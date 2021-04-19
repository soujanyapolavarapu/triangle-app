import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaFacebookF,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer>
        {/* First footer starts here   */}
        <div className="footer-first column-one">
          <div className="footer-logo-text">
            <div className="logo">
              <img
                src="https://i.ibb.co/VBSK5pS/logo.png"
                alt="Triangle logo"
              />
            </div>
            <div>
              <h2>Triangle's World</h2>
            </div>
          </div>

          <div className="footer-icons column-two">
            <div className="app-store column-two">
              <div>
              
                <img
                  src="https://i.ibb.co/D1xwCf0/appStore.png"
                  alt="app_store"
                  height="50px"
                  width="50px"
                />
                <h4>App Store</h4>
              </div>
              <div>
                <img
                  src="https://i.ibb.co/TLkK0tx/google.jpg"
                  alt="app_store"
                  height="50px"
                  width="50px"
                />
                <h4>Google Play</h4>
              </div>
            </div>

            {/* Below links will connect to social network accounts of company   */}
            <div className="social-links">
              <h4>Follow us</h4>
              <a href="https://www.linkedin.com/in/soujanya-polavarapu-816785110/">
                <FaLinkedin />
              </a>
              <a href="https://github.com/soujanyapolavarapu">
                <FaGithub />
              </a>
              <a href="https://www.facebook.com/profile.php?id=100011583960230">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com/soujanyapolavarapu/">
                <FaInstagramSquare />
              </a>
            </div>
          </div>
        </div>
        <hr></hr>

        {/* Second footer starts here   */}
        <div className="footer-second">
          <div>
            <h3 className="footer-second-title">Company</h3>
            <ul>
              <Link to={"/about"} className="link">
                <li>About us</li>
              </Link>
              <Link to={"/howitworks"} className="link">
                <li>How It Works</li>
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="footer-second-title">Help & Support</h3>
            <ul>
              <Link to={"/frequentlyaskedquestions"} className="link">
                <li>FAQ's</li>
              </Link>
              <Link to={"/contact"} className="link">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>

          <div>
            <h3 className="footer-second-title">Address</h3>
            <ul>
              <li>Svogerslev</li>
              <li>Roskilde,4000</li>
            </ul>
          </div>
        </div>
        <hr></hr>

        {/* Last footer starts here   */}
        {/* Here i am navigating link to one of my app   */}
        <div className="footer-last">
          <p>
            <strong>
              Find Triangle - © Copyright 2021 | Designed by
              <a
                href="https://meal-sharing-soujanya.herokuapp.com/meals"
                target="_blank"
              >
                {" "}
                Soujanya
              </a>
            </strong>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
