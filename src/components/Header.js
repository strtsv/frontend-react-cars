import React from "react";
import Swiper from "swiper";

import $ from "jquery";
import "../assets/js/jquery.easing.1.3.js";
import "../assets/js/tmstickup.js";
import "../assets/js/parallax.js";
import { WOW } from "../assets/js/wow.js";
import "../assets/js/tmstickup.js";
import "../assets/js/jquery.ui.totop.my.js";

import i1 from "../assets/images/logo-default-268x50.png";
import i2 from "../assets/images/logo-inverse-250x46.png";

import s1 from "../assets/images/tour-1-258x273.jpg";
import s2 from "../assets/images/tour-2-258x273.jpg";
import s3 from "../assets/images/tour-3-258x273.jpg";

import b1 from "../assets/images/slide-1-1920x787.jpg";
import b2 from "../assets/images/slide-2-1920x787.jpg";

class Header extends React.Component {
  constructor(props) {
    super(props);
    $(document).ready(function() {
      new WOW().init();
      $(".rd-navbar").TMStickUp({});
      $().UItoTop({
        easingType: "easeOutQuad",
        containerClass: "ui-to-top fa fa-angle-up",
      });
    });
  }
  componentDidMount() {
    new Swiper(".swiper-container", {
      centeredSlides: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  render() {
    return (
      <header className="page-header">
        {}
        <div className="rd-navbar-wrap rd-navbar-wrap-mod-1">
          <nav
            className="rd-navbar rd-navbar-modern rd-navbar-static"
            data-layout="rd-navbar-fixed"
            data-sm-layout="rd-navbar-fixed"
            data-md-layout="rd-navbar-fixed"
            data-md-device-layout="rd-navbar-fixed"
            data-lg-layout="rd-navbar-fixed"
            data-lg-device-layout="rd-navbar-fixed"
            data-xl-layout="rd-navbar-static"
            data-xl-device-layout="rd-navbar-static"
            data-lg-stick-up-offset="46px"
            data-xl-stick-up-offset="46px"
            data-xxl-stick-up-offset="46px"
            data-lg-stick-up="true"
            data-xl-stick-up="true"
            data-xxl-stick-up="true"
          >
            <div className="rd-navbar-main-outer">
              <div className="rd-navbar-main">
                {}
                <div className="rd-navbar-panel">
                  {}
                  <button
                    className="rd-navbar-toggle"
                    data-rd-navbar-toggle=".rd-navbar-nav-wrap"
                  >
                    <span />
                  </button>
                  {}
                  <div className="rd-navbar-brand">
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
                </div>
                <div className="rd-navbar-right">
                  <div className="rd-navbar-nav-wrap">
                    {}
                    <ul className="rd-navbar-nav">
                      <li className="rd-nav-item active">
                        <a className="rd-nav-link" href="index.html">
                          Home
                        </a>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#">
                          News
                        </a>
                        {}
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="news-1.html">
                              News 1
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="news-2.html">
                              News 2
                            </a>
                          </li>
                          <li className="rd-dropdown-item">
                            <a className="rd-dropdown-link" href="news-3.html">
                              News 3
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="events.html">
                          Events
                        </a>
                        {}
                        <ul className="rd-menu rd-navbar-dropdown">
                          <li className="rd-dropdown-item">
                            <a
                              className="rd-dropdown-link"
                              href="single-event.html"
                            >
                              Single Event
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="#">
                          Pages
                        </a>
                        {}
                        <ul className="rd-menu rd-navbar-megamenu">
                          <li className="rd-megamenu-item">
                            <p className="rd-megamenu-title">Elements</p>
                            <div className="rd-megamenu-block">
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="typography.html"
                                  >
                                    Typography
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="buttons.html"
                                  >
                                    Buttons
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="forms.html"
                                  >
                                    Forms
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="our-team.html"
                                  >
                                    Our Team
                                  </a>
                                </li>
                              </ul>
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="icon-lists.html"
                                  >
                                    Icon Lists
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="counters-and-accordions.html"
                                  >
                                    Counters & Accordions
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="grid-gallery.html"
                                  >
                                    Grid Gallery
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="single-post.html"
                                  >
                                    Single Post
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                          <li className="rd-megamenu-item">
                            <p className="rd-megamenu-title">Pages</p>
                            <div className="rd-megamenu-block">
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="about-us.html"
                                  >
                                    About Us
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="contact-us.html"
                                  >
                                    Contact Us
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="search-results.html"
                                  >
                                    Search results
                                  </a>
                                </li>
                              </ul>
                              <ul className="rd-megamenu-list">
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="404-page.html"
                                  >
                                    404 Page
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="coming-soon.html"
                                  >
                                    Coming Soon
                                  </a>
                                </li>
                                <li className="rd-megamenu-list-item">
                                  <a
                                    className="rd-megamenu-list-link"
                                    href="privacy-policy.html"
                                  >
                                    Privacy policy
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </li>
                        </ul>
                      </li>
                      <li className="rd-nav-item">
                        <a className="rd-nav-link" href="contact-us.html">
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                  {}
                  <div className="rd-navbar-search">
                    <button
                      className="rd-navbar-search-toggle rd-navbar-fixed-element-2"
                      data-rd-navbar-toggle=".rd-navbar-search"
                    >
                      <span />
                    </button>
                    <form
                      className="rd-search"
                      action="search-results.html"
                      data-search-live="rd-search-results-live"
                      method="GET"
                    >
                      <div className="form-wrap">
                        <label
                          className="form-label"
                          htmlFor="rd-navbar-search-form-input"
                        >
                          Search
                        </label>
                        <input
                          className="rd-navbar-search-form-input form-input"
                          id="rd-navbar-search-form-input"
                          type="text"
                          name="s"
                          autoComplete="off"
                        />
                        <div
                          className="rd-search-results-live"
                          id="rd-search-results-live"
                        />
                      </div>
                      <button
                        className="rd-search-form-submit fa-search"
                        type="submit"
                      />
                    </form>
                  </div>
                  <div className="rd-navbar-collapse-outer">
                    <button
                      className="rd-navbar-collapse-toggle"
                      data-multitoggle="#rd-navbar-collapse"
                    >
                      <span />
                      <span />
                      <span />
                    </button>
                    <div className="rd-navbar-collapse" id="rd-navbar-collapse">
                      <button
                        className="rd-navbar-collapse-close"
                        data-multitoggle="#rd-navbar-collapse"
                      >
                        <span className="rd-navbar-collapse-toggle-element active">
                          <span />
                        </span>
                      </button>
                      <h4 className="text-black">Address & Phone</h4>
                      <p className="text-black">
                        9 Valley St. Brooklyn, NY 11203
                      </p>
                      <a className="link-default" href="tel:#">
                        1-800-346-6277
                      </a>
                      <div className="divider divider-small" />
                      <h4>Latest News</h4>
                      {}
                      <div
                        className="swiper-container swiper-slider swiper-slider-pyramid"
                        data-simulate-touch="false"
                        data-direction="horizontal"
                        data-slide-effect="coverflow"
                      >
                        <div className="swiper-wrapper">
                          <div className="swiper-slide">
                            <article className="tour-minimal context-dark">
                              <div
                                className="tour-minimal-inner"
                                style={{
                                  backgroundImage: "url(" + s1 + ")",
                                }}
                              >
                                <div className="tour-minimal-header">
                                  <div className="tour-minimal-header">
                                    <div className="tour-minimal-badge">
                                      News
                                    </div>
                                  </div>
                                </div>
                                <div className="tour-minimal-main">
                                  <h5 className="tour-minimal-title">
                                    <a href="single-post.html">
                                      Chase to race for AIM V. Sullivan
                                    </a>
                                  </h5>
                                </div>
                              </div>
                            </article>
                          </div>
                          <div className="swiper-slide">
                            <article className="tour-minimal context-dark">
                              <div
                                className="tour-minimal-inner"
                                style={{
                                  backgroundImage: "url(" + s2 + ")",
                                }}
                              >
                                <div className="tour-minimal-header">
                                  <div className="tour-minimal-header">
                                    <div className="tour-minimal-badge">
                                      News
                                    </div>
                                  </div>
                                </div>
                                <div className="tour-minimal-main">
                                  <h5 className="tour-minimal-title">
                                    <a href="single-post.html">
                                      Markelov replaces Hubert for F2 season
                                    </a>
                                  </h5>
                                </div>
                              </div>
                            </article>
                          </div>
                          <div className="swiper-slide">
                            <article className="tour-minimal context-dark">
                              <div
                                className="tour-minimal-inner"
                                style={{
                                  backgroundImage: "url(" + s3 + ")",
                                }}
                              >
                                <div className="tour-minimal-header">
                                  <div className="tour-minimal-header">
                                    <div className="tour-minimal-badge">
                                      News
                                    </div>
                                  </div>
                                </div>
                                <div className="tour-minimal-main">
                                  <h5 className="tour-minimal-title">
                                    <a href="single-post.html">
                                      ELMS announces 6-round calendar
                                    </a>
                                  </h5>
                                </div>
                              </div>
                            </article>
                          </div>
                        </div>
                        {}
                        <div className="swiper-pagination" />
                      </div>
                      <a
                        className="button button-default-outline"
                        href="news-1.html"
                      >
                        View All news
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        </div>
        <div
          className="section swiper-container swiper-slider swiper-slider-1"
          data-loop="true"
          data-autoplay={4500}
          data-simulate-touch="false"
          data-direction="horizontal"
        >
          <div className="swiper-wrapper">
            <div
              className="swiper-slide context-dark bg-overlay-4"
              data-slide-bg={b1}
              style={{
                backgroundImage: "url(" + b1 + ")",
              }}
            >
              <div className="swiper-slide-caption section-xxl">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 col-lg-7 col-xxl-6">
                      <div className="inset-6">
                        <div
                          className="box-decorative"
                          data-caption-animate="fadeInUp"
                          data-caption-delay={100}
                          data-caption-duration={900}
                        >
                          <span className="box-decorative-divider" />
                          <h2>
                            <span className="big">
                              Ferrucci, Briscoe partner for Iowa charity home
                              build
                            </span>
                          </h2>
                        </div>
                        <p
                          className="text-white-90"
                          data-caption-animate="fadeInUp"
                          data-caption-delay={250}
                          data-caption-duration={900}
                          style={{
                            maxWidth: "500px",
                          }}
                        >
                          Eric Curran, who won the 2016 and 2018 IMSA
                          WeatherTech SportsCar Championships in the Whelen
                          Engineering Action Express Prototype, is to quit the
                          cockpit for 2020.
                        </p>
                        <div className="inset-5 mt-26">
                          <a
                            className="button button-primary"
                            href="https://getbootstrap.com/docs/4.0/migration/"
                            data-caption-animate="fadeInUp"
                            data-caption-delay={450}
                            data-caption-duration={900}
                          >
                            read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide-lines"
                data-caption-animate="fadeInLeft"
                data-caption-delay={100}
                data-caption-duration={900}
              >
                <div className="swiper-slide-line">
                  <div className="swiper-slide-line-stroke swiper-slide-line-stroke-1" />
                  <div className="swiper-slide-line-stroke swiper-slide-line-stroke-2" />
                </div>
                <div className="swiper-slide-line">
                  <div className="swiper-slide-line-stroke swiper-slide-line-stroke-3 swiper-slide-line-stroke-skew" />
                </div>
              </div>
            </div>
            <div
              className="swiper-slide context-dark bg-overlay-4"
              data-slide-bg={b2}
              style={{
                backgroundImage: "url(" + b2 + ")",
              }}
            >
              <div className="swiper-slide-caption section-xxl">
                <div className="container">
                  <div className="row">
                    <div className="col-md-10 col-lg-7 col-xxl-6">
                      <div className="inset-6">
                        <div
                          className="box-decorative"
                          data-caption-animate="fadeInUp"
                          data-caption-delay={100}
                          data-caption-duration={900}
                        >
                          <span className="box-decorative-divider" />
                          <h2>
                            <span className="big">
                              Honda apologises to Verstappen for throttle issue
                            </span>
                          </h2>
                        </div>
                        <p
                          className="text-white-90"
                          data-caption-animate="fadeInUp"
                          data-caption-delay={250}
                          data-caption-duration={900}
                          style={{
                            maxWidth: "500px",
                          }}
                        >
                          Honda is "very sorry" for the engine issue behind Max
                          Verstappen's problem in the Abu Dhabi Grand Prix, even
                          though the Red Bull Formula 1 driver still finished
                          second.
                        </p>
                        <div className="inset-5 mt-26">
                          <a
                            className="button button-primary"
                            href="https://getbootstrap.com/docs/4.0/migration/"
                            data-caption-animate="fadeInUp"
                            data-caption-delay={450}
                            data-caption-duration={900}
                          >
                            read more
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="swiper-slide-lines"
                data-caption-animate="fadeInLeft"
                data-caption-delay={100}
                data-caption-duration={900}
              >
                <div className="swiper-slide-line">
                  <div className="swiper-slide-line-stroke swiper-slide-line-stroke-1" />
                  <div className="swiper-slide-line-stroke swiper-slide-line-stroke-2" />
                </div>
                <div className="swiper-slide-line">
                  <div className="swiper-slide-line-stroke swiper-slide-line-stroke-3 swiper-slide-line-stroke-skew" />
                </div>
              </div>
            </div>
          </div>
          {}
          <div className="swiper-pagination" />
          {}
          <div className="swiper-button-prev" />
          <div className="swiper-button-next" />
        </div>
      </header>
    );
  }
}

export default Header;
