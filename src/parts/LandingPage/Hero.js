import React from "react";
import { Fade } from "react-awesome-reveal";
import Button from "../../elements/Button";
import styles from "../../assets/css/hero.module.css";
import heroVideo from "assets/videos/vid5.mp4";

export default function Hero() {
  return (
    <section className={`relative ${styles["services-section"]}`}>
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

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight mb-8">
          Preserving Freshness <br />
          with Precision and Care.
        </h2>
        <Fade direction="up" delay={500} triggerOnce>
          <Button
            href="/services"
            type="link"
            className="flex w-auto items-center justify-center px-10 sm:px-12 md:px-14 py-4 sm:py-5 text-white text-lg sm:text-xl bg-theme-purple rounded-lg shadow-2xl hover:bg-dark-theme-purple transition duration-200 mx-auto"
          >
            Our Services
            <svg
              className="ml-2 w-5 sm:w-6 md:w-7 h-5 sm:h-6 md:h-7 text-white animate-bounce-x"
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
