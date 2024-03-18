import React, { useEffect } from "react";
import "./myorderStyle.css";
import { BillingProducts, MyOrderProducts } from "../Productcard/Productcard";
import { useDispatch, useSelector } from "react-redux";
import { GlobalStatesData } from "../../ReduxToolkit/slice/globalStatesSlice";
import { useLocation } from "react-router";

function Myorder() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const dispatch = useDispatch();

  const globalState = useSelector(GlobalStatesData);
  const orderProduct = globalState?.globalStatesSlice?.orderProduct;
  console.log(orderProduct);
  return (
    <div className="myOrderContainer">
      <MyOrderProducts products={orderProduct} />
    </div>
  );
}

export default Myorder;