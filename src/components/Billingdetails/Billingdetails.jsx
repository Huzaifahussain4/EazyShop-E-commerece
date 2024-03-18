import React, { useEffect, useState } from "react";
import "./billingdetailsStyle.css";
import { BillingProducts } from "../Productcard/Productcard";
import { useDispatch, useSelector } from "react-redux";
import {
  GlobalStatesData,
  formDetailsReducer,
  getProducts,
  orderProductReducer,
} from "../../ReduxToolkit/slice/globalStatesSlice";
import axios from "axios";
import { Button, notification, Space, message, Modal } from "antd";
import { useLocation } from "react-router";

function Billingdetails() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const dispatch = useDispatch();

  const globalState = useSelector(GlobalStatesData);
  const cartProducts = globalState?.globalStatesSlice?.cartProducts;
  console.log(cartProducts);

  const [modal, mContextHolder] = Modal.useModal();
  const [messageApi, contextHolder] = message.useMessage();
  const [firstName, setFirstName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [streetAddress, setStreetAddress] = useState("");
  const [addressEtc, setAddressEtc] = useState("");
  const [townCity, setTownCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [emailAddress, setEmailAddress] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    if (
      firstName.trim() === "" ||
      companyName.trim() === "" ||
      streetAddress.trim() === "" ||
      townCity.trim() === "" ||
      phoneNumber === null ||
      emailAddress.trim() === ""
    ) {
      messageApi.open({
        type: "error",
        content: "Please fill in all required fields.",
      });
      return;
    }

    const formData = {
      firstName,
      companyName,
      streetAddress,
      addressEtc,
      townCity,
      phoneNumber,
      emailAddress,
    };
    console.log(formData);
    dispatch(formDetailsReducer(formData));
    dispatch(orderProductReducer(cartProducts));

    setTimeout(() => {
      modal.success({
        title: "successfully",
        content: `Your order has been successfully placed.`,
      });
    }, 1000);
  };

  return (
    <div className="billingContainer">
      {contextHolder}
      {mContextHolder}
      <div className="billingInputContainer">
        <div className="billingTitle">Billing Details</div>
        <div>
          <div className="billingInputDiv">
            First Name
            <input
              type="text"
              name="firstName"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="billingInputField"
            />
          </div>
          <div className="billingInputDiv">
            Company Name
            <input
              type="text"
              name="companyName"
              onChange={(e) => {
                setCompanyName(e.target.value);
              }}
              className="billingInputField"
            />
          </div>
          <div className="billingInputDiv">
            Street Address*
            <input
              type="text"
              name="streetAddress"
              onChange={(e) => {
                setStreetAddress(e.target.value);
              }}
              className="billingInputField"
            />
          </div>
          <div className="billingInputDiv">
            Apartment, floor, etc. (optional)
            <input
              type="text"
              name="addressEtc"
              onChange={(e) => {
                setAddressEtc(e.target.value);
              }}
              className="billingInputField"
            />
          </div>
          <div className="billingInputDiv">
            Town/City
            <input
              type="text"
              name="townCity"
              onChange={(e) => {
                setTownCity(e.target.value);
              }}
              className="billingInputField"
            />
          </div>
          <div className="billingInputDiv">
            Phone Number*
            <input
              type="text"
              name="phoneNumber"
              onChange={(e) => {
                setPhoneNumber(e.target.value);
              }}
              className="billingInputField"
            />
          </div>
          <div className="billingInputDiv">
            Email Address*
            <input
              type="text"
              name="emailAddress"
              onChange={(e) => {
                setEmailAddress(e.target.value);
              }}
              className="billingInputField"
            />
          </div>
        </div>
      </div>
      <div className="billingInputContainer">
        <BillingProducts products={cartProducts} formSubmit={formSubmit} />
      </div>
    </div>
  );
}

export default Billingdetails;
