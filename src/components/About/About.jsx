import React, { useEffect } from "react";
import rightSideImage from "../../assets/aboutSide Image.png";
import "./aboutStyle.css";
import {
  Firstminicards,
  Firstservicecard,
  Fourthminicards,
  Secminicards,
  Secservicecard,
  Thirdminicards,
  Thirdservicecard,
} from "../Aboutminicards/Aboutminicards";
import { Firstcards, Secondcards, Thirdcards } from "../StaffCards/StaffCards";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useLocation } from "react-router";
// ..
// AOS.init();

function About() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div className="mainContainer">
      <div className="firstConatiner">
        <div className="txtContainer">
          <div className="txt2ndConatiner">
            <div className="headingDiv">Our Story</div>
            <div className="paragraphDiv">
              Launced in 2015, Exclusive is South Asia’s premier online shopping
              makterplace with an active presense in Bangladesh. Supported by
              wide range of tailored marketing, data and service solutions,
              Exclusive has 10,500 sallers and 300 brands and serves 3 millioons
              customers across the region.
            </div>
            <div className="paragraphDiv">
              Exclusive has more than 1 Million products to offer, growing at a
              very fast. Exclusive offers a diverse assotment in categories
              ranging from consumer.
            </div>
          </div>
        </div>
        <div className="imgContainer" data-aos="fade-left">
          <img src={rightSideImage} className="rightSideIamge" />
        </div>
      </div>
      <div className="cardsContainer" data-aos="fade-right">
        <Firstminicards />
        <Secminicards />
        <Thirdminicards />
        <Fourthminicards />
      </div>

      <div className="teamContainer" data-aos="fade-left">
        <Firstcards />
        <Secondcards />
        <Thirdcards />
      </div>

      <div className="servicesContainer" data-aos="fade-up">
        <Firstservicecard />
        <Secservicecard />
        <Thirdservicecard />
      </div>
    </div>
  );
}

export default About;
