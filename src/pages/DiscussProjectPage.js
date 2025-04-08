import React from "react";
import DiscussForm from "../parts/DiscussProjectPage/DiscussForm";
import Header from "../parts/Header";
import Footer from "../parts/Footer";
import VisitUsSection from "../parts/DiscussProjectPage/VisitUs";
import styles from "../assets/css/discussProjectPage.module.css";

export const DiscussProjectPage = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.contentWrapper}>
          <DiscussForm />
          <VisitUsSection />
        </div>
      </div>
      <Footer />
    </>
  );
};
