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
      <div className="container mx-auto pt-20 pb-28">
        <Fade direction="right" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold mb-8">
            Cold Storage Solutions for Your Growing Needs
          </h1>
        </Fade>
        <Fade direction="left" triggerOnce>
          <p
            className={`${styles.mainDescription} font-light text-lg text-gray-400 text-center mx-auto`}
          >
            At Shree Cold Storage, we are committed to safeguarding your
            perishable goods with state-of-the-art technology and precise care.
            Explore our services tailored to meet the diverse needs of your
            business.
          </p>
        </Fade>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
          {data.map((item, index) => (
            <Fade
              direction={item.animation}
              delay={500 * index}
              key={index}
              triggerOnce
            >
              <div
                className={`${styles.serviceCard} group`}
                onClick={() => handleToggle(index)}
              >
                <div
                  className={`${styles.imageContainer} relative w-full h-80 overflow-hidden`}
                >
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className={`${styles.serviceImage} absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110`}
                  />
                </div>
                <h2 className="text-theme-blue text-center text-xl py-7 bg-white rounded-b-2xl">
                  {item.title}
                </h2>

                {activeIndex === index && (
                  <div className={`${styles.serviceDescriptionTab} bg-white`}>
                    <p className="text-center text-gray-700 py-3">
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </div>
  );
}
