import React from "react";
import "../styles/aboutStyle.css";
import aboutPic from "../assets/Aboutpic.svg";
import { useWindowDimensions } from "react-native";

function About() {
  const { height, width } = useWindowDimensions();
  if (width > 996) {
    return (
      <section className="about">
        <div className="container">
          <div className="card">
            <h1 className="about_heading"> What is Assure Techonology?</h1>
            <p className="about_text">
              {" "}
              We are a company that develops Blockchain systems andprovides
              consulting on Blockchain, Exchange Platform, Tokennomics, as well
              as planning various business strategies for investors or
              interested parties. We have a team that will provide advice from
              the start of doing business until you succeed in business.
            </p>
          </div>
          <div className="card2">
            <div className="aboutpic">
              <img src={aboutPic} alt="aboutpic"></img>
            </div>
          </div>
        </div>
      </section>
    );
  }
  return (
    <section className="about">
      <div className="container">
        <div className="card2">
          <div className="aboutpic">
            <img src={aboutPic} alt="aboutpic"></img>
          </div>
        </div>
        <div className="card">
          <h1 className="about_heading"> What is Assure Techonology?</h1>
          <p className="about_text">
            {" "}
            We are a company that develops Blockchain systems andprovides
            consulting on Blockchain, Exchange Platform, Tokennomics, as well as
            planning various business strategies for investors or interested
            parties. We have a team that will provide advice from the start of
            doing business until you succeed in business.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
