import React from "react";

import i1 from "../../assets/images/tour-list-2-1-365x248.jpg";
import i2 from "../../assets/images/tour-list-2-2-365x248.jpg";
import i3 from "../../assets/images/tour-list-2-5-365x248.jpg";
import i4 from "../../assets/images/tour-list-2-3-365x248.jpg";
import i5 from "../../assets/images/tour-list-2-4-365x248.jpg";
import i6 from "../../assets/images/tour-list-2-6-365x248.jpg";

class Tours extends React.Component {
  render() {
    return (
      <section className="section section-lg bg-gray-100 text-center">
        <div className="container">
          <h2 className="wow fadeIn">Featured News</h2>
          <div className="row row-30 row-xl-40 mt-lg-60">
            <div className="col-sm-6 col-lg-4 wow fadeIn">
              <article className="tour-classic">
                <div className="tour-classic-media">
                  <a className="tour-classic-figure" href="single-post.html">
                    <img
                      className="tour-classic-image"
                      src={i1}
                      alt
                      width={365}
                      height={248}
                    />
                  </a>
                  <div className="tour-classic-pricing">
                    <p className="tour-classic-price tour-classic-price-new">
                      News
                    </p>
                  </div>
                </div>
                <div className="tour-classic-body">
                  <h4 className="tour-classic-title">
                    <a href="single-post.html">
                      The realities of Hulkenberg's quest to save his F1 career
                    </a>
                  </h4>
                  <div className="tour-classic-footer">
                    <div className="object-inline">
                      <span className="icon mdi mdi-calendar-today text-gray-800" />
                      <span>7 days</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="col-sm-6 col-lg-4 wow fadeIn"
              data-wow-delay=".025s"
            >
              <article className="tour-classic">
                <div className="tour-classic-media">
                  <a className="tour-classic-figure" href="single-post.html">
                    <img
                      className="tour-classic-image"
                      src={i2}
                      alt
                      width={365}
                      height={248}
                    />
                  </a>
                  <div className="tour-classic-pricing">
                    <p className="tour-classic-price tour-classic-price-new">
                      News
                    </p>
                  </div>
                </div>
                <div className="tour-classic-body">
                  <h4 className="tour-classic-title">
                    <a href="single-post.html">
                      Hand: Ford went from “worst car we've had here to the
                      best”
                    </a>
                  </h4>
                  <div className="tour-classic-footer">
                    <div className="object-inline">
                      <span className="icon mdi mdi-calendar-today text-gray-800" />
                      <span>7 days</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4 wow fadeIn" data-wow-delay=".05s">
              <article className="tour-classic">
                <div className="tour-classic-media">
                  <a className="tour-classic-figure" href="single-post.html">
                    <img
                      className="tour-classic-image"
                      src={i3}
                      alt
                      width={365}
                      height={248}
                    />
                  </a>
                  <div className="tour-classic-pricing">
                    <p className="tour-classic-price tour-classic-price-new">
                      News
                    </p>
                  </div>
                </div>
                <div className="tour-classic-body">
                  <h4 className="tour-classic-title">
                    <a href="single-post.html">
                      Acuras still “in a different race”, says Wayne Taylor
                    </a>
                  </h4>
                  <div className="tour-classic-footer">
                    <div className="object-inline">
                      <span className="icon mdi mdi-calendar-today text-gray-800" />
                      <span>7 days</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4 wow fadeIn">
              <article className="tour-classic">
                <div className="tour-classic-media">
                  <a className="tour-classic-figure" href="single-post.html">
                    <img
                      className="tour-classic-image"
                      src={i4}
                      alt
                      width={365}
                      height={248}
                    />
                  </a>
                  <div className="tour-classic-pricing">
                    <p className="tour-classic-price tour-classic-price-new">
                      News
                    </p>
                  </div>
                </div>
                <div className="tour-classic-body">
                  <h4 className="tour-classic-title">
                    <a href="single-post.html">
                      Rossiter cleared for Super GT return after skipping race
                    </a>
                  </h4>
                  <div className="tour-classic-footer">
                    <div className="object-inline">
                      <span className="icon mdi mdi-calendar-today text-gray-800" />
                      <span>7 days</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div
              className="col-sm-6 col-lg-4 wow fadeIn"
              data-wow-delay=".025s"
            >
              <article className="tour-classic">
                <div className="tour-classic-media">
                  <a className="tour-classic-figure" href="single-post.html">
                    <img
                      className="tour-classic-image"
                      src={i5}
                      alt
                      width={365}
                      height={248}
                    />
                  </a>
                  <div className="tour-classic-pricing">
                    <p className="tour-classic-price tour-classic-price-new">
                      News
                    </p>
                  </div>
                </div>
                <div className="tour-classic-body">
                  <h4 className="tour-classic-title">
                    <a href="single-post.html">
                      Sugo Super GT: Honda breaks lap record in qualifying
                    </a>
                  </h4>
                  <div className="tour-classic-footer">
                    <div className="object-inline">
                      <span className="icon mdi mdi-calendar-today text-gray-800" />
                      <span>7 days</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-sm-6 col-lg-4 wow fadeIn" data-wow-delay=".05s">
              <article className="tour-classic">
                <div className="tour-classic-media">
                  <a className="tour-classic-figure" href="single-post.html">
                    <img
                      className="tour-classic-image"
                      src={i6}
                      alt
                      width={365}
                      height={248}
                    />
                  </a>
                  <div className="tour-classic-pricing">
                    <p className="tour-classic-price tour-classic-price-new">
                      News
                    </p>
                  </div>
                </div>
                <div className="tour-classic-body">
                  <h4 className="tour-classic-title">
                    <a href="single-post.html">
                      Gasly can now "drive more naturally" at Toro Rosso
                    </a>
                  </h4>
                  <div className="tour-classic-footer">
                    <div className="object-inline">
                      <span className="icon mdi mdi-calendar-today text-gray-800" />
                      <span>7 days</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <a
            className="button button-1 mt-md-35 mt-lg-50 mt-xl-70 wow fadeIn"
            href="news-2.html"
          >
            View all news
          </a>
        </div>
      </section>
    );
  }
}

export default Tours;
