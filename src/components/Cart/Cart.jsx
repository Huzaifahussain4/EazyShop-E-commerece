import React, { useEffect } from "react";
import { GlobalStatesData } from "../../ReduxToolkit/slice/globalStatesSlice";
import { useSelector } from "react-redux";
import { CartTable } from "../Productcard/Productcard";
import { useLocation } from "react-router";

function Cart() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const globalState = useSelector(GlobalStatesData);
  const cartProducts = globalState?.globalStatesSlice?.cartProducts;
  console.log(cartProducts);

  return (
    <div className="wishListContainer">
      <div className="wishListHeading">Cart</div>
      <CartTable products={cartProducts} />
    </div>
  );
}

export default Cart;
