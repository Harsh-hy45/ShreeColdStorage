import React from "react";
import { Fade } from "react-awesome-reveal";
import Team from "assets/images/hero/team.png";
import "../assets/css/HeroTeam.css";

export default function HeroTeam() {
  return (
    <section className="services-section grid lg:grid-cols-2 gap-6 bg-white">
      <div className="w-full flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6">
        <Fade direction="up" triggerOnce>
          <h1 className="text-5xl text-theme-blue font-bold leading-tight mb-5">
            Our Team
          </h1>
        </Fade>
        <Fade direction="up" delay={500} triggerOnce>
          <p className="text-lg font-light text-gray-400 leading-relaxed">
            Our team is full of passionate people and ready to make your dream
            software come true.
          </p>
        </Fade>
      </div>

      <div className="image-section">
        <Fade direction="top-right" triggerOnce delay={300}>
          <img src={Team} alt="Hero" />
        </Fade>
      </div>
    </section>
  );
}
