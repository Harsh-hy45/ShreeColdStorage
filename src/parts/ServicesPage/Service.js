import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import styles from "../../assets/css/ServicesPages/service.module.css";

export default function Service({ data }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-10 pt-20 pb-28">
        <Fade direction="right" triggerOnce>
          <h1 className="text-4xl sm:text-5xl text-theme-blue text-center font-bold mb-8">
            Cold Storage Solutions for Your Growing Needs
          </h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p
            className={`${styles.mainDescription} font-light text-lg text-gray-500 text-center mx-auto max-w-3xl px-4 mb-6`}
          >
            At Shree Cold Storage, we are committed to safeguarding your
            perishable goods with state-of-the-art technology and precise care.
            Explore our services tailored to meet the diverse needs of your
            business.
          </p>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-5 sm:px-8">
          {data.map((item, index) => (
            <Fade
              direction={item.animation}
              delay={300 * index}
              key={index}
              triggerOnce
            >
              <div className={`${styles.serviceCard} group`}>
                <div
                  className={`${styles.imageContainer} relative w-full h-72 sm:h-80 overflow-hidden`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={`${styles.serviceImage} absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110`}
                  />
                </div>
                <h2 className="text-theme-blue text-center text-lg sm:text-xl py-4 bg-white rounded-b-lg">
                  {item.title}
                </h2>

                <button
                  className={`${styles.toggleButton} text-sm sm:text-base py-2`}
                  onClick={() => handleToggle(index)}
                >
                  {activeIndex === index ? "Hide Details" : "View Details"}
                </button>

                <div
                  className={`${styles.serviceDescriptionTab} ${
                    activeIndex === index ? styles.expanded : ""
                  }`}
                  style={{
                    maxHeight: activeIndex === index ? "300px" : "0px",
                    opacity: activeIndex === index ? "1" : "0",
                    padding: activeIndex === index ? "15px 20px" : "0px 20px",
                    transition:
                      "max-height 0.4s ease-in-out, opacity 0.4s ease-in-out, padding 0.3s ease-in-out",
                  }}
                >
                  <p className="text-center text-gray-700 py-2">
                    {item.description}
                  </p>
                </div>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
