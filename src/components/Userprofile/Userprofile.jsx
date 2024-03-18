import React, { useEffect, useState } from "react";
import "./userprofileStyle.css";
import { Button, notification, Space, message, Modal } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  GlobalStatesData,
  userProfileDetailsReducer,
} from "../../ReduxToolkit/slice/globalStatesSlice";
import CustomButton from "../CustomButton/CustomButton";
import { useLocation } from "react-router";

function Userprofile() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const dispatch = useDispatch();

  const globalState = useSelector(GlobalStatesData);
  const userProfileDetails = globalState?.globalStatesSlice?.userProfileDetails;

  const [modal, mContextHolder] = Modal.useModal();
  const [messageApi, contextHolder] = message.useMessage();

  const [formData, setFormData] = useState({
    firstName: userProfileDetails?.firstName || "",
    lastName: userProfileDetails?.lastName || "",
    email: userProfileDetails?.email || "",
    address: userProfileDetails?.address || "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const formSubmit = (e) => {
    e.preventDefault();

    if (
      formData.firstName.trim() === "" ||
      formData.lastName.trim() === "" ||
      formData.email.trim() === "" ||
      formData.address.trim() === "" ||
      formData.currentPassword.trim() === "" ||
      formData.newPassword.trim() === "" ||
      formData.confirmPassword.trim() === ""
    ) {
      messageApi.open({
        type: "error",
        content: "Please fill in all required fields.",
      });
      return;
    }

    console.log(formData);
    dispatch(userProfileDetailsReducer(formData));

    setTimeout(() => {
      modal.success({
        title: "Saved successfully",
        // content: `Your order has been successfully placed.`,
      });
    }, 1000);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="userProfileContainer">
      {contextHolder}
      {mContextHolder}
      <div className="userProfileMainContainer">
        <div className="profileTitle">Edit Your Profile</div>
        <div className="profilefirstConatiner">
          <div className="profileInput">
            First Name{" "}
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your First Name"
              className="profileInputField"
            />
          </div>
          <div className="profileInput">
            Last Name{" "}
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your Last Name"
              className="profileInputField"
            />
          </div>
        </div>
        <div className="profilefirstConatiner">
          <div className="profileInput">
            Email
            <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your Email"
              className="profileInputField"
            />
          </div>
          <div className="profileInput">
            Address
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              placeholder="Enter your Complete Address"
              className="profileInputField"
            />
          </div>
        </div>
        <div className="profilePasswordConatiner">
          <div className="profileInput passwordFieldDiv">
            Password Changes
            <input
              type="text"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleInputChange}
              placeholder="Current Password"
              className="profileInputField passwordField"
            />
            <input
              type="text"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleInputChange}
              placeholder="New Password"
              className="profileInputField passwordField"
            />
            <input
              type="text"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm Password"
              className="profileInputField passwordField"
            />
          </div>
        </div>
        <div className="formSubBtn">
          <CustomButton name="Save Details" onClick={formSubmit} />
        </div>
      </div>
    </div>
  );
}

export default Userprofile;
