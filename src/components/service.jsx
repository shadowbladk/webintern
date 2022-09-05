import React, { Component } from "react";
import { useWindowDimensions } from "react-native";
import "../styles/global.css";
import styles from "../styles/serviceStyle.module.css";

import card1 from "../assets/card1.svg";
import card2 from "../assets/card2.svg";
import card3 from "../assets/card3.svg";

function Service() {
  const { height, width } = useWindowDimensions();

  return (
    <section className={styles.service} id="service">
      <div className={styles.backdrop}></div>
      <div className={`${styles.textContainer} ${"container"}`}>
        <h1 className={styles.title}>Our Service</h1>
        <h3 className={styles.subtitle}>
          Single window for SMEs with CeDeFi Cryptocurrency and Blockchain
          Technology
        </h3>
        <div className={styles.scroll}>
          <div className={styles.card}>
            <img src={card1} alt="card1" className={styles.cardImage}></img>
            <h1 className={styles.cardTitle}>Digital Asset Service</h1>
            <p className={styles.cardText}>
              We assist businesses in launching their own tokens. We provide a
              complete offering,from initial consulting to coin listing.
            </p>
          </div>
          <div className={styles.card}>
            <img src={card2} alt="card2" className={styles.cardImage}></img>
            <h1 className={styles.cardTitle}>Customized Solutions</h1>
            <p className={styles.cardText}>
              All businesses are different - and so are your blockchain needs.
              We will work with you and tailor to your needs.
            </p>
          </div>
          <div className={styles.card}>
            <img src={card3} alt="card3" className={styles.cardImage}></img>
            <h1 className={styles.cardTitle}>Blockchain Business Consulting</h1>
            <p className={styles.cardText}>
              We are happy to be the person who will give advice to those who
              will start a business about Blockchain from the start of the
              business. to strategy Making a marketing plan until you succeed in
              business.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Service;
