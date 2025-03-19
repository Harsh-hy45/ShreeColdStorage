import React, { Component } from "react";

import {
  Services,
  Portfolios,
  Advantages,
  Testimonials,
} from "json/landingPageData";
import Header from "parts/Header";
import Hero from "parts/LandingPage/Hero";
import Service from "parts/ServicesPage/Service";
import Portfolio from "parts/LandingPage/Portfolio";
import Advantage from "parts/LandingPage/Advantage";
import Testimonial from "parts/ABOUT US/Testimonial";
import Discuss from "parts/DiscussProjectPage/Discuss";
import Footer from "parts/Footer";

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        {/* Pass the transparentBackground prop for Header in LandingPage */}
        <Header transparentBackground={true} />
        <Hero />
        <Service data={Services} />
        {/* <Portfolio data={Portfolios} /> */}
        <Advantage data={Advantages} />
        {/* <Testimonial data={Testimonials} /> */}
        <Discuss />
        <Footer />
      </>
    );
  }
}
