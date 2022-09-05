import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import MainMenu from "./components/mainMenu.jsx";
import Service from "./components/service.jsx";
import Nekoinfo from "./components/Neko";
import Peermoneyinfo from "./components/Peermoney";
import Navbar from "./components/Navbar";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import About from "./components/About";
import Partner from "./components/Partner";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navbar />
    <MainMenu />
    <About />
    <Nekoinfo />
    <Peermoneyinfo />
    <Service />
    <Partner />
    <Contact />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
