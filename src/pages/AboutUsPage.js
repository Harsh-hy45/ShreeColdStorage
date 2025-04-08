/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

import Header from "parts/Header";
import AboutUs from "parts/ABOUT US/AboutUs";
import AllTeam from "parts/ABOUT US/AllTeam";
import Footer from "parts/Footer";

import { TeamMembers } from "json/landingPageData";

export default class AboutUsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <AboutUs />
        {/* <AllTeam data={TeamMembers} /> */}
        <Footer />
      </>
    );
  }
}
