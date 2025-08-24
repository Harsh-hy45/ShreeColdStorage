import React from "react";
import styles from "../../assets/css/technology.module.css";
import refrigerationImg from "../../assets/images/Technology/refrigerationImg.png";
import condenserImg from "../../assets/images/Technology/compressorImg.png";
import evaporatorImg from "../../assets/images/Technology/evaporatorImg.png";
import automationImg from "../../assets/images/Technology/automation.jpg";

const sections = [
  {
    title: "Advanced Refrigeration System",
    image: refrigerationImg,
    description: [
      "Ammonia, a highly efficient and eco-friendly refrigerant, powers our refrigeration system, ensuring rapid cooling and uniform temperature across all chambers.",
      "The overfeed refrigeration system ensures consistent cooling performance, protecting stored produce from any temperature fluctuations.",
      "Our Kirloskar multi-cylinder reciprocating compressors provide robust and reliable performance with automatic capacity control, smooth operation, and hydraulic delay valves.",
    ],
  },
  {
    title: "High-Efficiency Condenser System",
    image: condenserImg,
    description: [
      "Equipped with 2-inch diameter condenser pipes, these units utilize natural air cooling and water sprays for maximum heat rejection efficiency, even in extreme temperatures.",
    ],
  },
  {
    title: "Precision Cooling with Evaporators",
    image: evaporatorImg,
    description: [
      "Engineered with stainless steel (SS-304) coils and aluminum fins to provide superior heat transfer efficiency.",
      "Fitted with axial fans and Variable Frequency Drives (VFDs) to optimize airflow and energy consumption.",
    ],
  },
  {
    title: "Intelligent Monitoring and Automation",
    image: automationImg,
    description: [
      "Real-time monitoring and control of temperature, humidity, air circulation, and CO₂ levels.",
      "Automated alarms and data logging help maintain safety and quality.",
    ],
  },
];

const additionalFeatures = [
  "Energy-efficient insulation with high-density PUF panels to minimize temperature loss.",
  "Automated defrosting system to prevent ice buildup and ensure consistent performance.",
  "Uninterrupted power backup with diesel generator integration for continuous operation.",
  "Integrated humidity control system to maintain optimal storage conditions.",
  "Real-time cloud-based remote monitoring for tracking system performance and alerts.",
  "Optimized Air Circulation System to ensure uniform cooling and prevent temperature variations.",
];

const Technology = () => {
  return (
    <div className={styles.technologyContainer}>
      <h1 className={styles.technologyTitle}>
        Technology at Shree Cold Storage
      </h1>
      <p className={styles.technologySubtitle}>
        Powering Preservation with Innovation
      </p>
      {sections.map((section, index) => (
        <section
          key={index}
          className={`${styles.technologySection} ${
            index % 2 === 1 ? styles.sectionReverse : ""
          }`}
        >
          <div className={styles.technologyText}>
            <h2>{section.title}</h2>
            {section.description.map((text, i) => (
              <p key={i}>{text}</p>
            ))}
          </div>
          <div className={styles.technologyImage}>
            <img src={section.image} alt={section.title} />
          </div>
        </section>
      ))}

      {/* Additional Technological Features */}
      <div className={styles.additionalFeatures}>
        <h2>Additional Technological Features</h2>
        <ul className={styles.technologyList}>
          {additionalFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Technology;
