import React from "react";
import Fade from "react-awesome-reveal";
import Button from "../../elements/Button";
import graphic1 from "../../assets/images/Advantages/graphic1.png";
import graphic2 from "../../assets/images/Advantages/graphic2.png";
import graphic3 from "../../assets/images/Advantages/graphic3.png";
import graphic4 from "../../assets/images/Advantages/graphic4.png";

const servicePortfolioData = [
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
    <div className="bg-gray-50 py-20 mb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <Fade bottom triggerOnce>
          <h1 className="text-4xl sm:text-5xl text-theme-blue text-center font-bold">
            Why Choose Us
          </h1>
          <p className="font-light text-lg text-gray-400 text-center mb-8 sm:mb-12">
            Why you should choose us to handle your project.
          </p>
        </Fade>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          {servicePortfolioData.map((item, index) => (
            <Fade bottom triggerOnce delay={500 * index} key={index}>
              <div className="bg-white flex flex-col sm:flex-row items-center p-5 rounded-2xl shadow-xl border border-light-theme-purple transform transition duration-500 hover:scale-105">
                <img
                  src={item.image}
                  alt="Graphic"
                  className="w-24 h-24 sm:w-20 sm:h-20 object-contain mb-4 sm:mb-0 sm:mr-5"
                />
                <div className="text-center sm:text-left">
                  <h2 className="text-theme-blue text-xl sm:text-2xl font-semibold">
                    {item.title}
                  </h2>
                  <p className="font-light text-gray-400 text-sm sm:text-base">
                    {item.description}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button
            href="/services"
            type="link"
            className="px-6 py-3 text-theme-purple border border-theme-purple flex items-center justify-center rounded-full transition duration-300 hover:bg-theme-purple hover:text-white text-base sm:text-lg whitespace-nowrap"
          >
            <span className="font-normal">See More</span>
            <svg
              className="w-5 h-5 ml-2"
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
