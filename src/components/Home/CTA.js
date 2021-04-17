import React from "react";
import $ from "jquery";

import i from "../../assets/images/bg-image-9.jpg";

class CTA extends React.Component {
  componentDidMount() {
    $(".parallax-container").parallax({});
  }
  render() {
    return (
      <section
        className="parallax-container section-lg context-dark tet-center"
        data-parallax-img={i}
        data-image-src={i}
      >
        <div className="parallax-content">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-sm-10 col-md-8 col-lg-7 text-center">
                <h4 className="wow fadeIn">#1 Racing News Website</h4>
                <h2 className="wow fadeIn" data-wow-delay=".025s">
                  <span className="big">
                    Discover the Latest News from the World of Racing
                  </span>
                </h2>
                <h5 className="wow fadeIn" data-wow-delay=".05s">
                  Racer is your best source for all racing news.
                </h5>
                <a className="button button-primary" href="#">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CTA;
