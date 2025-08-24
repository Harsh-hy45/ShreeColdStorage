/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";
import { Services } from "json/landingPageData";
import Header from "parts/Header";
import ServicePortfolio from "parts/ServicesPage/ServicePortfolio";
import Discuss from "parts/DiscussProjectPage/Discuss";
import Service from "parts/ServicesPage/Service";
import Footer from "parts/Footer";

export default class ServicesPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <ServicePortfolio />
        <Service data={Services} />
        <Discuss />
        <Footer />
      </>
    );
  }
}
