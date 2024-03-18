import React from "react";
import "./footerStyle.css";
import footerInputIcon from "../../assets/icon-send.png";
import QRIcon from "../../assets/Qrcode 1.png";
// import QRIcon from "../../assets/Qrcode 1.png";
import GooglePlayIcon from "../../assets/GooglePlay.png";
import AppStoreIcon from "../../assets/AppStore.png";
import FacebookIcon from "../../assets/Icon-Facebook.png";
import instagramIcon from "../../assets/icon-instagram.png";
import LinkedinIcon from "../../assets/Icon-Linkedin.png";
import TwitterIcon from "../../assets/Icon-Twitter.png";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="footerContainer">
      <div className="footercontentDiv">
        <div className="footerOptionDiv">
          <h1 className="footerHeading">EazyShop</h1>
          <span className="footerTxt optionHeading">Subscribe</span>
          <span className="footerTxt">Get 10% off your first order</span>
          <div className="footerInputDiv">
            <input
              type="text"
              placeholder="What are you looking for?"
              className="footerInputField"
            />
            <img src={footerInputIcon} className="footerInputIcon" />
          </div>
        </div>
        <div className="footerOptionDiv">
          <span className="footerTxt optionHeading">Support</span>
          <span className="footerTxt">
            111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
          </span>
          <span className="footerTxt">exclusive@gmail.com</span>
          <span className="footerTxt">+88015-88888-9999</span>
        </div>
        <div className="footerOptionDiv">
          <span className="footerTxt optionHeading">Account</span>
          <span className="footerTxt">My Account</span>
          <span className="footerTxt"><Link to='/login'>Login</Link> / <Link to='/signup'>Signup</Link></span>
          <span className="footerTxt">Cart</span>
          <span className="footerTxt">Wishlist</span>
          <span className="footerTxt">Shop</span>
        </div>
        <div className="footerOptionDiv">
          <span className="footerTxt optionHeading">Quick Lick</span>
          <span className="footerTxt">Privacy Policy</span>
          <span className="footerTxt">Terms of Use</span>
          <span className="footerTxt">FAQ</span>
          <span className="footerTxt">Contact</span>
        </div>
        <div className="footerOptionDiv">
          <span className="footerTxt optionHeading">Download App</span>
          <span className="footerTxt smallTxt">Save $3 with App New User Only</span>
          <div className="downloadIconsDiv">
            <div className="qrCode_App">
              <div>
                <img src={QRIcon} alt="" className="QRIcon"/>
              </div>
              <div className="downloadIconConatiner">
                <img src={GooglePlayIcon} alt="" className="downloadIcon"/>
                <img src={AppStoreIcon} alt="" className="downloadIcon"/>
              </div>
            </div>
            <div className="socialMediaIcons">
              <img src={FacebookIcon} alt="" />
              <img src={TwitterIcon} alt="" />
              <img src={instagramIcon} alt="" />
              <img src={LinkedinIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
