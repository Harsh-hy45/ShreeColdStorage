import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../elements/Button";
import "../assets/css/hero.css";
import heroVideo from "assets/videos/vid5.mp4";

export default function Hero() {
  return (
    <section className="relative services-section2">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        {/* Bright Text Directly on Top of Video */}
        <h2 className="text-6xl text-white font-bold leading-tight mb-8">
          Preserving Freshness <br />
          with Precision and Care.
        </h2>
        <Fade direction="up" delay={500} triggerOnce>
          <Button
            href="/project"
            type="link"
            className="flex w-auto items-center justify-center px-14 py-5 text-white text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200 mx-auto"
          >
            Our Services
            <svg
              className="ml-2 w-7 h-7 text-white animate-bounce-x"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </Fade>
      </div>
    </section>
  );
}
