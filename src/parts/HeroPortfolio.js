import React from "react";
import { Fade } from "react-awesome-reveal";
import heroPortfolio from "assets/images/Services/portfolioHero.png";
import styles from "../assets/css/heroPortfolio.module.css";

export default function HeroPortfolio() {
  const services = [
    {
      title: "Cold Storage for Perishable Goods",
      description:
        "We offer state-of-the-art cold storage solutions with a capacity of 7,422 MT, designed to preserve a variety of perishable items including fruits, vegetables, and local produce such as potatoes, tamarind, and mahua.",
    },
    {
      title: "Customized Temperature Zones",
      description:
        "Our cold storage chambers are equipped with customizable temperature zones ranging from 3°C to 25°C, with 90-95% humidity control, ensuring optimal conditions for preserving products like potatoes and other horticultural produce.",
    },
    {
      title: "Advanced Refrigeration Systems",
      description:
        "We use Ammonia-based refrigeration systems with multi-cylinder reciprocating compressors, ensuring efficient cooling and product safety for high-volume goods.",
    },
    {
      title: "Flexible Storage Options",
      description:
        "With flexible platform design (G+6) and wooden grated flooring, we provide secure storage for goods in bags, crates, or cartons for both short-term and long-term storage.",
    },
    {
      title: "Efficient Loading and Unloading",
      description:
        "Our facility includes a weighing bridge for accurate measurement and a covered loading/unloading verandah, ensuring seamless handling of products.",
    },
    {
      title: "Energy-Efficient Cooling Technology",
      description:
        "We utilize energy-efficient cooling technology that reduces power consumption, leading to cost savings for our customers, even under heavy loads.",
    },
    {
      title: "Long-Term Storage Solutions",
      description:
        "We offer long-term storage for up to 9 months, with consistent temperature control to prevent spoilage and product degradation.",
    },
    {
      title: "Comprehensive Safety Measures",
      description:
        "Our cold storage is equipped with ammonia leak detection, emergency ventilation, firefighting equipment, and emergency door release mechanisms.",
    },
    {
      title: "Power Backup for Uninterrupted Service",
      description:
        "Our 160 kVA and 45 kVA backup generators ensure uninterrupted cooling even during power outages, keeping your products in optimal condition.",
    },
  ];

  return (
    <section
      className={`grid lg:grid-cols-2 gap-6 bg-white ${styles["services-section"]}`}
    >
      <div className="w-full flex flex-col px-5 mb-5 sm:mb-0 sm:px-12 sm:mt-6 lg:mt-6">
        <Fade direction="up" triggerOnce>
          <h1 className="text-5xl text-theme-blue font-bold leading-tight mb-5">
            Our Services
          </h1>
        </Fade>
        <Fade direction="up" delay={500} triggerOnce>
          <p className="text-lg font-light text-gray-400 leading-relaxed">
            At Shree Cold Storage, we provide advanced, energy-efficient cold
            storage solutions with customized temperature control and flexible
            options. Our facility includes a dedicated weighbridge, ample shed
            for loading and unloading in any climate, and conveyor systems for
            seamless movement of goods across all floors. We are a trusted
            partner for long-term, reliable storage, ensuring product freshness
            and safety.
          </p>
        </Fade>
      </div>

      {/* Image Section */}
      <div className="image-section">
        <Fade direction="up" triggerOnce>
          <img src={heroPortfolio} alt="Hero" />
        </Fade>
      </div>

      {/* Tabs Section */}
      <div className="lg:col-span-2 grid grid-cols-1 gap-8 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className={`flex lg:flex-row items-center p-6 rounded-lg shadow-lg bg-white hover:bg-gray-50 transition-transform transform hover:-translate-y-2 ${styles["service-tab"]}`}
          >
            {/* Serial Number Column */}
            <div
              className={`flex justify-center items-center rounded-full text-white font-bold w-12 h-12 mr-4 lg:mr-8 ${styles["serial-number"]}`}
            >
              {index + 1}
            </div>

            {/* Title and Description Column */}
            <div className="flex-1">
              <h2 className="text-2xl font-semibold text-theme-blue mb-4 lg:text-left">
                {service.title}
              </h2>
              <p className="text-gray-700">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
