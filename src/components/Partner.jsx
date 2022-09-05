import React from "react";
import "../styles/aboutStyle.css";
import bosswellText from "../assets/Partnertext.svg";

function Partner() {
  return (
    <section className="partner">
      <h1 className="partner_heading"> Partners</h1>
      <div className="container">
        <div className="card3">
          <div className="bosswelltext">
            <img src={bosswellText} alt="bosswelltext"></img>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
