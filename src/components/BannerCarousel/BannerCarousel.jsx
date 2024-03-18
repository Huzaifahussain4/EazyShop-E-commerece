import React from "react";
import "./bannerCarouselStyle.css";
import { Carousel } from "antd";
import firstBanner from "../../assets/banner 1.png";
import secBanner from "../../assets/banner 2.png";
import thirdBanner from "../../assets/banner 3.png";
import fourthBanner from "../../assets/banner 4.png";

// const contentStyle = {
//   height: "160px",
//   color: "#fff",
//   lineHeight: "160px",
//   textAlign: "center",
//   background: "#364d79",
// };
const App = () => (
  <Carousel autoplay>
    <div className="bannerDiv">
      <img src={firstBanner} alt="" className="bannerImage" />
    </div>
    <div className="bannerDiv">
      <img src={secBanner} alt="" className="bannerImage" />
    </div>
    <div className="bannerDiv">
      <img src={thirdBanner} alt="" className="bannerImage" />
    </div>
    <div className="bannerDiv">
      <img src={fourthBanner} alt="" className="bannerImage" />
    </div>
  </Carousel>
);
export default App;
