import React, { useEffect } from "react";
import { MailIcon, PhoneIcon } from "../Icons/Icons";
import "./contactStyle.css";
import CustomButton from "../CustomButton/CustomButton";
import Aos from "aos";
import { useLocation } from "react-router";

function Contact() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="mainConatiner">
      <div className="firstContainer" data-aos="fade-right">
        <div className="firstContainerDiv">
          <div className="iconTitle">
            <PhoneIcon />
            <div className="tileDiv">Call To Us</div>
          </div>
          <div className="spanContainer">
            <div className="spanDiv">We are available 24/7, 7 days a week.</div>
            <div className="spanDiv">Phone: +8801611112222</div>
          </div>
        </div>
        <hr />
        <div className="firstContainerDiv">
          <div className="iconTitle">
            <MailIcon />
            <div className="tileDiv">Write To US</div>
          </div>
          <div className="spanContainer">
            <div className="spanDiv">
              Fill out our form and we will contact you within 24 hours.
            </div>
            <div className="spanDiv">Emails: customer@exclusive.com</div>
            <div className="spanDiv">Emails: support@exclusive.com</div>
          </div>
        </div>
      </div>
      <div className="secContainer" data-aos="fade-left">
        <div className="inputFiledContainer">
          <input
            type="text"
            placeholder="Your Name"
            className="contactFormField"
          />
          <input
            type="text"
            placeholder="Your Email"
            className="contactFormField"
          />
          <input
            type="text"
            placeholder="Your Phone"
            className="contactFormField"
          />
        </div>
        <div className="textAreaContainer">
          <textarea
            className="textAreaTag"
            rows={13}
            // cols={100}
            placeholder="Your Message"
          />
        </div>
        <div className="sendBtnContainer">
          <CustomButton name="Send Message" />
        </div>
      </div>
    </div>
  );
}

export default Contact;
