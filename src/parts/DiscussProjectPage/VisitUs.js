import React from "react";
import styles from "../../assets/css/discussProjectPage.module.css";

const VisitUsSection = () => {
  return (
    <div className={styles.mapContainer}>
      <h2 className={styles.mapTitle}>Visit Us</h2>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.4066832700755!2d85.15336257555148!3d23.298937478981024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f52742d64825d1%3A0x222c96a5c6bfe458!2sShree%20cold%20store!5e1!3m2!1sen!2sin!4v1743557768171!5m2!1sen!2sin"
        className={styles.mapFrame}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default VisitUsSection;
