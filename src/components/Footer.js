import React from "react";

import i1 from "../assets/images/logo-default-268x50.png";
import i2 from "../assets/images/logo-inverse-250x46.png";

class Footer extends React.Component {
  render() {
    return (
      <footer className="section footer-modern bg-gray-3 context-dark">
        <div className="footer-modern-main">
          <div className="container">
            <div className="row row-30 justify-content-lg-between">
              <div className="col-sm-5 col-md-3 col-lg-3">
                <p className="footer-modern-title">Navigation</p>
                <div className="footer-modern-item-block">
                  <ul className="list list-1">
                    <li>
                      <a href="#">About</a>
                    </li>
                    <li>
                      <a href="#">News</a>
                    </li>
                    <li>
                      <a href="#">Events</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-sm-7 col-md-5 col-lg-4">
                <p className="footer-modern-title">Auto Racing News</p>
                <div
                  className="footer-modern-item-block"
                  style={{
                    maxWidth: "300px",
                  }}
                >
                  <div className="row row-13">
                    <div className="col-6">
                      <ul className="list list-1">
                        <li>
                          <a href="#">Formula One</a>
                        </li>
                        <li>
                          <a href="#">Formula E</a>
                        </li>
                        <li>
                          <a href="#">WEC</a>
                        </li>
                        <li>
                          <a href="#">Openwheel</a>
                        </li>
                        <li>
                          <a href="#">NASCAR</a>
                        </li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul className="list list-1">
                        <li>
                          <a href="#">Sportscar</a>
                        </li>
                        <li>
                          <a href="#">Rally</a>
                        </li>
                        <li>
                          <a href="#">Off-Road</a>
                        </li>
                        <li>
                          <a href="#">Drag Racing</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-lg-3">
                <p className="footer-modern-title">Get in Touch</p>
                <div className="footer-modern-item-block">
                  <ul className="list list-1">
                    <li>
                      <a href="#">Send a Message</a>
                    </li>
                    <li>
                      <a href="contact-us.html">Contacts</a>
                    </li>
                    <li>
                      <a href="#">Request a Callback</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-modern-aside">
          <div className="container">
            <div className="row row-30 align-items-center justify-content-between">
              <div className="col-lg-2 col-xl-auto">
                {}
                <a className="brand" href="index.html">
                  <img
                    className="brand-logo-dark"
                    src={i1}
                    alt
                    width={134}
                    height={25}
                  />
                  <img
                    className="brand-logo-light"
                    src={i2}
                    alt
                    width={125}
                    height={23}
                  />
                </a>
              </div>
              <div className="col-lg-5 col-xl-4 text-xl-right">
                <p className="rights">
                  <span>©  </span>
                  <span className="copyright-year" />
                  <span> </span>
                  <span>Racer</span>
                  <span>. All rights reserved. </span>
                  <a href="privacy-policy.html">Privacy Policy</a>
                  <span>.</span>
                </p>
              </div>
              <div className="col-lg-3 text-xl-left">
                <div className="footer-modern-list">
                  <div className="group group-sm">
                    <a
                      className="link-1 link-1-social icon mdi mdi-instagram"
                      href="#"
                    />
                    <a
                      className="link-1 link-1-social icon mdi mdi-facebook"
                      href="#"
                    />
                    <a
                      className="link-1 link-1-social icon mdi mdi-youtube-play"
                      href="#"
                    />
                  </div>
                </div>
              </div>
            </div>
            {}
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
