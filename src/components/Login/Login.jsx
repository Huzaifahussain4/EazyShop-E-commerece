import React, { useEffect, useState } from "react";
import "./loginStyle.css";
import sideImage from "../../assets/Side Image.png";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useNavigate } from "react-router";
import CustomButton from "../CustomButton/CustomButton";

function Login() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("first")
    try {
      const response = await axios.post("https://fakestoreapi.com/auth/login", {
        username,
        password,
      });
      const { token } = response.data;
      localStorage.setItem("token", token);
      navigate("/");
      console.log("Token stored in localStorage:", token);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="signupContainer">
      <div className="sideImageDiv">
        <img src={sideImage} alt="" className="sideIamge" />
      </div>
      <div className="formContainer">
        <div data-aos="flip-left">
          <div className="signUpTitle">Log in to Exclusive</div>
          <div className="signUpTagLine">Enter your details below</div>
          <div className="formInputFieldDiv">
            <input
              type="text"
              placeholder="Username"
              className="formInputField"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="formInputField"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="btnNfrgtLink">
              {/* <button className="loginBtn">Login</button> */}
              <CustomButton onClick={handleSubmit} name="Login" />
              {/* <CustomButton name="Login2" /> */}
              <div className="forgetPDiv">Forget Password </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
