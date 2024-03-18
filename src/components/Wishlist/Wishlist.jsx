import React, { useEffect } from "react";
import { GlobalStatesData } from "../../ReduxToolkit/slice/globalStatesSlice";
import { useSelector } from "react-redux";
import "./wishlistStyle.css";
import { Productcard, ProductcardNC } from "../Productcard/Productcard";
import { useLocation } from "react-router";

function Wishlist() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const globalState = useSelector(GlobalStatesData);
  const favouritesProducts = globalState?.globalStatesSlice?.favouritesProducts;
  console.log(favouritesProducts);

  return (
    <div className="wishListContainer">
      <div className="wishListHeading">Wishlist</div>
      <ProductcardNC products={favouritesProducts} />
    </div>
  );
}

export default Wishlist;
