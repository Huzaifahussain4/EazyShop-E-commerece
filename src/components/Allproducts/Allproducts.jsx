import React, { useEffect } from "react";
import { Allproductcard, ProductcardNC } from "../Productcard/Productcard";
import { useDispatch, useSelector } from "react-redux";
import { GlobalStatesData, getProducts } from "../../ReduxToolkit/slice/globalStatesSlice";
import axios from "axios";
import './allproductsStyle.css'

function Allproducts() {
  const dispatch = useDispatch();

  const globalState = useSelector(GlobalStatesData);
  const products = globalState?.globalStatesSlice?.products;
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(getProducts(response?.data));
        // console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);
  console.log(products);
  return (
    <div className="allProductsConatainer">
        <div className="allProductsViewdiv">All Products</div>
      <Allproductcard products={products} />
    </div>
  );
}

export default Allproducts;
