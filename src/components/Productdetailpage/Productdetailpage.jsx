import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router";
import "./productdetailspageStyle.css";
import { Rate, Segmented, message } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import CustomButton from "../CustomButton/CustomButton";
import { HeartIcon } from "../Icons/Icons";
import Carouselslider from "../Carouselslider/Carouselslider";
import { Productcard } from "../Productcard/Productcard";
import {
  GlobalStatesData,
  addCartProducts,
  addFavProducts,
} from "../../ReduxToolkit/slice/globalStatesSlice";
import { useDispatch, useSelector } from "react-redux";

function Productdetailpage() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  const dispatch = useDispatch();

  const globalState = useSelector(GlobalStatesData);
  const favProducts = globalState?.globalStatesSlice?.favouritesProducts;
  console.log(favProducts);

  const handleFavProducts = () => {
    dispatch(addFavProducts(products));
  };

  const [messageApi, contextHolder] = message.useMessage();
  const handleCartProducts = () => {
    dispatch(addCartProducts(products));
    messageApi.open({
      type: "success",
      content: "successfuly add it in cart",
    });
  };

  const { id } = useParams();
  console.log(id);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProducts(response?.data);
        console.log(response.data.rating.rate);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const [value, setValue] = useState(1);

  // Function to handle increment action
  const handleIncrement = () => {
    setValue((prevValue) => prevValue + 1);
  };

  // Function to handle decrement action
  const handleDecrement = () => {
    if (value > 1) {
      setValue((prevValue) => prevValue - 1);
    }
  };
  const navigate = useNavigate();
  const handleBilling = () => {
    navigate("/billingdetails");
  };

  return (
    <div className="singleProductCard">
      {contextHolder}
      <div className="singleProductCardContainer">
        <div className="productSmallImages">
          <div className="smallImageContainer">
            <img src={products?.image} alt="" className="smallIamges" />
          </div>
          <div className="smallImageContainer">
            <img src={products?.image} alt="" className="smallIamges" />
          </div>
          <div className="smallImageContainer">
            <img src={products?.image} alt="" className="smallIamges" />
          </div>
          <div className="smallImageContainer">
            <img src={products?.image} alt="" className="smallIamges" />
          </div>
        </div>
        <div className="productFullViewImage">
          <img src={products?.image} alt="" className="fullViewImage" />
        </div>
        <div className="productTxtDetails">
          <div className="productDetailsContainer">
            <div className="productTitle">{products?.title}</div>
            <div className="ratingContainer">
              <Rate disabled defaultValue={products?.rating?.rate} />
              <div className="productRating">
                ({products?.rating?.count} Reviews)
              </div>
            </div>
            <div className="productPrice">${products?.price}</div>
            <div className="productDes">{products?.description}</div>
          </div>
          <div className="productDetailsBtnsConatiner">
            <div className="segmentDiv">
              Size :
              <Segmented
                options={["XS", "S", "M", "L", "XL"]}
                onChange={(value) => {
                  console.log(value);
                }}
              />
            </div>
            <div className="buyContainer">
              <div className="buyBtnQSDiv">
                <div className="numInputSelector">
                  <button className="numInoutBtn" onClick={handleDecrement}>
                    <MinusOutlined />
                  </button>
                  <input
                    type="number"
                    className="numInputfield"
                    value={value}
                    onChange={(e) => setValue(parseInt(e.target.value))}
                  />
                  <button
                    className="numInoutBtn decrementclass"
                    onClick={handleIncrement}
                  >
                    <PlusOutlined />
                  </button>
                </div>
                <div className="addToFavDiv" onClick={handleFavProducts}>
                  <HeartIcon />
                </div>
              </div>
              <div className="buyATCDiv">
                <button className="buyBtn" onClick={handleBilling}>
                  {" "}
                  Buy Now
                </button>
                <button className="addToCartBtn" onClick={handleCartProducts}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div>
        <Productcard />
      </div> */}
    </div>
  );
}

export default Productdetailpage;
