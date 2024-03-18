import React, { useEffect, useState } from "react";
import "./signupStyle.css";
import sideImage from "../../assets/Side Image.png";
import LoginPage from "../Login/Login.jsx";
import { Link, useNavigate } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

function Signup() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://fakestoreapi.com/users", {
        email: "John@gmail.com",
        username: "johnd",
        password: "m38rmF$",
        name: {
          firstname: "John",
          lastname: "Doe",
        },
        address: {
          city: "kilcoole",
          street: "7835 new road",
          number: 3,
          zipcode: "12926-3874",
          geolocation: {
            lat: "-37.3159",
            long: "81.1496",
          },
        },
        phone: "1-570-236-7033",
      });
      console.log(response.data);
      console.log(formData);
      // window.location.pathname = "/login";
      navigate("/login");
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <div className="signupContainer">
      <div className="sideImageDiv">
        <img src={sideImage} alt="" className="sideIamge" />
      </div>
      <div className="formContainer">
        <div data-aos="flip-left">
          <div className="signUpTitle">Create an account</div>
          <div className="signUpTagLine">Enter your details below</div>
          <div className="formInputFieldDiv">
            <input
              type="text"
              placeholder="Name"
              name="username"
              className="formInputField"
              value={formData.username}
              onChange={handleChange}
            />
            <input
              type="email"
              placeholder="Email or Phone number"
              name="email"
              required
              className="formInputField"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="Password"
              className="formInputField"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            <button className="signupBtn" onClick={handleSubmit}>
              Create Account
            </button>
            <div className="loginLinkDiv">
              Already have an account? <Link to="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
