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
import Discuss from "parts/DiscussProjectPage/Discuss";
import Footer from "parts/Footer";
import VisitUsSection from "parts/DiscussProjectPage/VisitUs";

import styles from "../assets/css/landingPage.module.css";

export default class LandingPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header transparentBackground={true} />
        <Hero />
        <Service data={Services} />
        {/* <Portfolio data={Portfolios} /> */}
        <Advantage />
        {/* <Testimonial data={Testimonials} /> */}

        {/* Combined VisitUsSection and Discuss */}
        <div className={styles.visitDiscussWrapper}>
          <Discuss />
          <VisitUsSection />
        </div>

        <Footer />
      </>
    );
  }
}
