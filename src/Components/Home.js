import React from "react";
import "../Css/Home.css";
import VerticalTabs from "./ServiceTab";
import Logos from "./Logos";
import Techstack from "./Techstack";
import Signup from "./Signup";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <br />
      <div className="main section" id="top">
        <div className="main-left">
          <p className="l-1">
            Personalized software development solutions for your business
          </p>
          {/* <p className="l-2">Code Reactions</p> */}
          <p className="l-3">Design. Develop. Deliver.</p>
        </div>
        <div className="main-right">
          <img
            src="https://www.airwir.com/assets/img/about/internet-services.png"
            alt="it-img"
            className="top-img"
          />
        </div>
      </div>

      <div className="clients section" id="clients-section">
        <br />
        <p className="head">OUR ESTEEMED CLIENTS</p>
        <br />
        <Logos />
      </div>

      <div className="about-us">
        <div className="main-right abt-r">
          <img
            src="https://www.pngitem.com/pimgs/m/638-6381232_managed-services-service-provider-hd-png-download.png"
            alt="it-img"
            className="second-img top-img"
          />
        </div>
        <div className="main-left abt-l">
          <p className="abt-1">We deliver extensible Tech Solutions </p>
          <p className="abt-2">
            We are a digital acceleration expert, specialized in excellent
            end-to-end delivery of tailor-made technology solutions bringing
            innovative, extensible, and competitive results. From fully managed
            Delivery Teams to individual expert software engineers, we
            specialize in providing of novel and ingenious technology solutions.
          </p>
        </div>
      </div>
      <div className="services section" id="service-section">
        <br />
        <p className="head">SERVICES WE OFFER</p>

        <VerticalTabs />
      </div>
      {/* <div className="reviews section">
        <p className="head">CLIENT FEEDBACKS</p>
        <FeedbackCard />
      </div> */}

      <div className="tech-stack section">
        <br />
        <p className="head">OUR TECHNOLOGY PROWESS</p>
        <Techstack />
      </div>

      <div className="signup">
        <br />
        <Signup />
      </div>

      <Footer />
    </>
  );
};

export default Home;
