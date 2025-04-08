import React from "react";
import styles from "../../assets/css/aboutUs.module.css";
import coldStorageImg from "../../assets/images/AboutUs/coldStorage.jpg";
import commitmentImg from "../../assets/images/AboutUs/commitment.jpg";

const AboutUs = () => {
  return (
    <div className={styles.aboutContainer}>
      <h1 className={styles.aboutTitle}>About Us</h1>

      {/* Company Overview */}
      <section className={styles.aboutSection}>
        <div className={styles.textContent}>
          <h2 className={styles.sectionTitle}>Company Overview</h2>
          <p>
            Established in <strong>March 2023</strong>, Shree Cold Storage is
            the <strong>largest cold storage facility in Ranchi</strong>,
            specializing in preserving perishable produce with{" "}
            <strong>state-of-the-art technology</strong>.
          </p>
          <p>
            We are committed to ensuring food safety, optimizing supply chains,
            and maintaining{" "}
            <strong>high standards of hygiene, security, and efficiency</strong>
            .
          </p>
        </div>
        <div className={styles.imageContent}>
          <img src={coldStorageImg} alt="Shree Cold Storage Facility" />
        </div>
      </section>

      {/* Our Facility */}
      <section className={styles.fullWidthSection}>
        <h2 className={styles.sectionTitle}>Our Facility</h2>
        <p>
          Our facility boasts a massive{" "}
          <strong>7,500 metric ton capacity</strong> with an
          <strong> integrated weighing bridge</strong>, enabling precise and
          seamless logistics.
        </p>
        <p>
          We adhere to strict{" "}
          <strong>safety protocols and government-certified procedures</strong>,
          making us a <strong>trusted choice for businesses</strong> in the
          region.
        </p>
      </section>

      {/* Our Commitment */}
      <section className={styles.aboutSection}>
        <div className={styles.textContent}>
          <h2 className={styles.sectionTitle}>Our Commitment</h2>
          <p>
            At <strong>Shree Cold Storage</strong>, we take pride in delivering
            <strong> high-quality services</strong> to our clients. Our facility
            is equipped with{" "}
            <strong>
              fire safety systems, pest control measures, and real-time
              monitoring
            </strong>
            .
          </p>
        </div>
        <div className={styles.imageContent}>
          <img src={commitmentImg} alt="Commitment to Quality" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className={styles.missionVision}>
        <div className={styles.mission}>
          <h2 className={styles.sectionTitle}>Our Mission</h2>
          <p>
            Our mission is to <strong>empower businesses</strong> by providing
            reliable cold storage solutions that{" "}
            <strong>
              preserve quality, extend shelf life, and ensure timely delivery
            </strong>
            .
          </p>
        </div>
        <div className={styles.vision}>
          <h2 className={styles.sectionTitle}>Our Vision</h2>
          <p>
            We aim to be{" "}
            <strong>Jharkhand’s leading cold storage provider</strong>,
            recognized for
            <strong> hygiene, safety, and innovation</strong>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
