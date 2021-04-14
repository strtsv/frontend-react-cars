import React from "react";

import i1 from "../../assets/images/home-2-2-356x513.jpg";
import i2 from "../../assets/images/home-2-3-356x513.jpg";
import i3 from "../../assets/images/home-2-4-356x513.jpg";

class News extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-default">
        <div className="container mt-30 mt-md-45 mt-xxl-75 text-center">
          <h2 className="wow fadeIn">Latest News</h2>
          <p className="text-gray-700 wow fadeIn" data-wow-delay=".025s">
            <span
              style={{
                maxWidth: "655px",
              }}
            >
              We regularly publish news and updates about autosport as well as
              the results of recent races and other events. Here are the most
              recent ones.
            </span>
          </p>
          <div className="row row-30 row-xl-50 row-x-xl-50 mt-md-45 mt-xxl-70">
            <div className="col-sm-6 col-lg-4">
              {}
              <article
                className="tour-3 bg-image context-dark wow fadeIn"
                style={{
                  backgroundImage: "url(" + i1 + ")",
                }}
              >
                <div className="tour-3-inner">
                  <div className="tour-3-main">
                    <h4 className="tour-3-title">
                      <a href="single-post.html">
                        The race that ended Button and Yamamoto's title defence
                      </a>
                    </h4>
                    <ul className="tour-3-meta">
                      <li>
                        <span className="icon mdi mdi-calendar-today" />
                        <span className="tour-3-meta-text">5 days ago</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4">
              {}
              <article
                className="tour-3 bg-image context-dark wow fadeIn"
                style={{
                  backgroundImage: "url(" + i2 + ")",
                }}
                data-wow-delay=".05s"
              >
                <div className="tour-3-inner">
                  <div className="tour-3-main">
                    <h4 className="tour-3-title">
                      <a href="single-post.html">
                        Makowiecki credited for ending Nissan's losing streak
                      </a>
                    </h4>
                    <ul className="tour-3-meta">
                      <li>
                        <span className="icon mdi mdi-calendar-today" />
                        <span className="tour-3-meta-text">5 days ago</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4">
              {}
              <article
                className="tour-3 bg-image context-dark wow fadeIn"
                style={{
                  backgroundImage: "url(" + i3 + ")",
                }}
                data-wow-delay=".1s"
              >
                <div className="tour-3-inner">
                  <div className="tour-3-main">
                    <h4 className="tour-3-title">
                      <a href="single-post.html">
                        Zanardi joins BMW for DTM/Super GT joint race taking
                        place next month
                      </a>
                    </h4>
                    <ul className="tour-3-meta">
                      <li>
                        <span className="icon mdi mdi-calendar-today" />
                        <span className="tour-3-meta-text">5 days ago</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default News;
