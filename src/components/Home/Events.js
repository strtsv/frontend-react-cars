import React from "react";

import i1 from "../../assets/images/home-2-8.jpg";
import i2 from "../../assets/images/home-2-9.jpg";
import i3 from "../../assets/images/home-2-10.jpg";
import i4 from "../../assets/images/home-2-11.jpg";

class Events extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default">
        <div className="container">
          <div className="text-center">
            <h2 className="wow fadeIn">Upcoming Events</h2>
          </div>
          <div className="row row-30 mt-lg-60">
            <div className="col-sm-6 col-lg-3 wow fadeIn">
              {}
              <article className="post-creative">
                <a
                  className="post-creative-image"
                  href="single-post.html"
                  style={{
                    backgroundImage: "url(" + i1 + ")",
                  }}
                />
                <div className="post-creative-main">
                  <p className="post-creative-title">
                    <a href="single-post.html">
                      Kart Champs 2019: The Grid Championship
                    </a>
                  </p>
                  <time className="post-creative-time" dateTime={2020}>
                    April 24, 2020
                  </time>
                </div>
              </article>
            </div>
            <div
              className="col-sm-6 col-lg-3 wow fadeIn"
              data-wow-delay=".025s"
            >
              {}
              <article className="post-creative">
                <a
                  className="post-creative-image"
                  href="single-post.html"
                  style={{
                    backgroundImage: "url(" + i2 + ")",
                  }}
                />
                <div className="post-creative-main">
                  <p className="post-creative-title">
                    <a href="single-post.html">
                      WeatherTech SportsCar Championship
                    </a>
                  </p>
                  <time className="post-creative-time" dateTime={2020}>
                    May 12, 2020
                  </time>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-lg-3 wow fadeIn" data-wow-delay=".05s">
              {}
              <article className="post-creative">
                <a
                  className="post-creative-image"
                  href="single-post.html"
                  style={{
                    backgroundImage: "url(" + i3 + ")",
                  }}
                />
                <div className="post-creative-main">
                  <p className="post-creative-title">
                    <a href="single-post.html">
                      FIA Masters Historic Formula One Championship
                    </a>
                  </p>
                  <time className="post-creative-time" dateTime={2020}>
                    May 14, 2020
                  </time>
                </div>
              </article>
            </div>
            <div
              className="col-sm-6 col-lg-3 wow fadeIn"
              data-wow-delay=".075s"
            >
              {}
              <article className="post-creative">
                <a
                  className="post-creative-image"
                  href="single-post.html"
                  style={{
                    backgroundImage: "url(" + i4 + ")",
                  }}
                />
                <div className="post-creative-main">
                  <p className="post-creative-title">
                    <a href="single-post.html">
                      USHRA/ PACE Motorsports Off Road Championships
                    </a>
                  </p>
                  <time className="post-creative-time" dateTime={2020}>
                    June 19, 2020
                  </time>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Events;
