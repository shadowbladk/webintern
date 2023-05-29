import React from "react";
import "../styles/global.css";
import styles from "../styles/mainMenuStyle.module.css";

function MainMenu() {
  return (
    <section className={`${styles.section} ${styles.main}`} id="mainMenu">
      <div className={`${styles.container} ${"container"}`}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Hello</h1>
          <h3 className={styles.subtitle}>
            Single window for SMEs with CeDeFi Cryptocurrency and Blockchain
            Technology
          </h3>
        </div>
      </div>
    </section>
  );
}

export default MainMenu;
