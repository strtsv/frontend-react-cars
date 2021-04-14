import React from "react";

import Header from "../components/Header";
import News from "../components/Home/News";
import Tours from "../components/Home/Tours";
import CTA from "../components/Home/CTA";
import Events from "../components/Home/Events";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="page animated">
      <Header />
      <News />
      <Tours />
      <CTA />
      <Events />
      <Footer />
    </div>
  );
};

export default Home;
