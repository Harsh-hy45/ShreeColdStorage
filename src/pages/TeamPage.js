/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React, { Component } from "react";

import Header from "parts/Header";
import Team from "parts/ABOUT US/Team";
import AllTeam from "parts/ABOUT US/AllTeam";
import Footer from "parts/Footer";

import { TeamMembers } from "json/landingPageData";

export default class TeamPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <>
        <Header />
        <Team />
        <AllTeam data={TeamMembers} />
        <Footer />
      </>
    );
  }
}
