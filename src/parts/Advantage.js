import React from "react";
import Fade from "react-awesome-reveal";
import Button from "../elements/Button";
import graphic1 from "../assets/images/Advantages/graphic1.png";
import graphic2 from "../assets/images/Advantages/graphic2.png";
import graphic3 from "../assets/images/Advantages/graphic3.png";
import graphic4 from "../assets/images/Advantages/graphic4.png";

const heroPortfolioData = [
  {
    title: "Cold Storage for Perishable Goods",
    description:
      "We offer state-of-the-art cold storage solutions with a capacity of 7,422 MT, designed to preserve a variety of perishable items including fruits, vegetables, and local produce such as potatoes, tamarind, and mahua.",
    image: graphic1,
  },
  {
    title: "Customized Temperature Zones",
    description:
      "Our cold storage chambers are equipped with customizable temperature zones ranging from 3°C to 25°C, with 90-95% humidity control, ensuring optimal conditions for preserving products like potatoes and other horticultural produce.",
    image: graphic2,
  },
  {
    title: "Advanced Refrigeration Systems",
    description:
      "We use Ammonia-based refrigeration systems with multi-cylinder reciprocating compressors, ensuring efficient cooling and product safety for high-volume goods.",
    image: graphic3,
  },
  {
    title: "Flexible Storage Options",
    description:
      "With flexible platform design (G+6) and wooden grated flooring, we provide secure storage for goods in bags, crates, or cartons for both short-term and long-term storage.",
    image: graphic4,
  },
];

export default function Advantage() {
  return (
    <div className="bg-gray-50 py-20 mb-24 sm:mb-18 xl:mb-16">
      <div className="container mx-auto">
        <Fade bottom triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            Why Choose Us
          </h1>

          <p className="font-light text-lg text-gray-400 text-center mb-12 sm:mb-5 xl:mb-0">
            Why you should choose us to handle your project.
          </p>
        </Fade>

        <div className="flex flex-col sm:flex-row">
          {/* First Two Tabs */}
          <div className="flex-col">
            {heroPortfolioData.slice(0, 2).map((item, index) => (
              <Fade bottom triggerOnce delay={500 * index} key={index}>
                <div className="bg-white flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                  <img
                    src={item.image}
                    alt="Graphic"
                    className="w-20 h-20 object-contain"
                  />
                  <div className="flex-col pl-5">
                    <h2 className="text-theme-blue text-2xl">{item.title}</h2>
                    <p className="font-light text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>

          {/* Second Two Tabs */}
          <div className="flex-col -mt-4 sm:mt-14">
            {heroPortfolioData.slice(2, 4).map((item, index) => (
              <Fade bottom triggerOnce delay={500 * index} key={index}>
                <div className="bg-white flex flex-row items-center p-3 my-6 mx-3 sm:my-7 sm:mx-3 xl:my-14 xl:mx-7 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                  <img
                    src={item.image}
                    alt="Graphic"
                    className="w-20 h-20 object-contain"
                  />
                  <div className="flex-col pl-5">
                    <h2 className="text-theme-blue text-2xl">{item.title}</h2>
                    <p className="font-light text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>

        {/* See More Button */}
        <div className="flex justify-center mt-12">
          <Button
            href="/services"
            type="link"
            className="flex flex-grow-0 w-36 h-12 sm:w-40 sm:h-14 lg:w-44 lg:h-16 xl:w-36 xl:h-12 text-theme-purple px-5 border border-theme-purple items-center mt-14 rounded-full justify-center transition duration-300 hover:bg-theme-purple hover:text-white"
          >
            <p className="font-normal py-3 lg:text-lg xl:text-base">See More</p>
            <svg
              className="w-4 h-4"
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
            <svg
              className="w-4 h-4 -ml-2"
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
        </div>
      </div>
    </div>
  );
}
