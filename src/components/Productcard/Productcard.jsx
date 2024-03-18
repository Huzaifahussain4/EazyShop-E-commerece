import React, { useState, useEffect } from "react";
import axios from "axios";
import "./productcardStyle.css";
import {
  PlusOutlined,
  MinusOutlined,
  UpOutlined,
  DownOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import { Radio } from "antd";
import masterCard from "../../assets/Mastercard.png";
import visa from "../../assets/Visa.png";

import { Carousel } from "primereact/carousel";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import { Rate, Modal, Empty, message } from "antd";
import Aos from "aos";
import {
  FavIcon,
  MasterCardIcon,
  QuickViewIcon,
  VerifyIcon,
} from "../Icons/Icons";
import Loader from "../Loader/Loader";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import {
  GlobalStatesData,
  addCartProducts,
  addFavProducts,
  removeCartProduct,
  removeFavProduct,
} from "../../ReduxToolkit/slice/globalStatesSlice";
import CustomButton from "../CustomButton/CustomButton";
import checkIcon from "../../assets/check-mark.png";

SwiperCore.use([FreeMode, Navigation]);

export function Productcard({ products, increase }) {
  console.log(increase);
  const dispatch = useDispatch();

  const globalState = useSelector(GlobalStatesData);
  const favProducts = globalState?.globalStatesSlice?.favouritesProducts;
  const cartProducts = globalState?.globalStatesSlice?.cartProducts;
  console.log(favProducts);

  const handleFavProducts = (product) => {
    dispatch(addFavProducts(product));
    console.log("first");
  };

  const [messageApi, contextHolder] = message.useMessage();
  const handleCartProducts = (product) => {
    dispatch(addCartProducts(product));
    messageApi.open({
      type: "success",
      content: "Product added to cart successfully",
    });
    console.log(increase);
  };

  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  const [isHovered, setIsHovered] = useState(null);

  const navigate = useNavigate();

  const productCardNavigation = (id) => {
    navigate(`/product/${id}`);
  };

  console.log(products);

  const swiperModules = [FreeMode, Navigation];

  const swiperOptions = {
    freeMode: true,
    allowTouchMove: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: "auto",
        spaceBetween: 10,
      },
      600: {
        slidesPerView: "auto",
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: "auto",
        spaceBetween: 10,
      },
    },
  };

  return (
    <div>
      {contextHolder}
      {products?.length ? (
        <div className="containerParent">
          <Swiper
            style={{
              display: "flex",
              // backgroundColor: "red",
              width: "80%",
              overflow: "hidden",
            }}
            modules={swiperModules}
            className="swiperMainClass"
            {...swiperOptions}
          >
            {products.map((product, i) => (
              <SwiperSlide className="swiperSlideClass" key={i}>
                <div className="productCardContainer">
                  <div
                    className="imageDiv"
                    onMouseEnter={() => setIsHovered(i)}
                    onMouseLeave={() => setIsHovered(null)}
                    style={{
                      position: "relative",
                    }}
                  >
                    {isHovered === i && (
                      <>
                        <div
                          className="quickViewDiv"
                          data-aos="fade-left"
                          onClick={() => productCardNavigation(product?.id)}
                        >
                          <QuickViewIcon />
                        </div>
                        <div
                          className="favIconDiv"
                          data-aos="fade-left"
                          onClick={() => handleFavProducts(product)}
                        >
                          <FavIcon />
                        </div>
                        <button
                          data-aos="fade-up"
                          data-aos-anchor-placement="bottom-bottom"
                          className="hoverBtn"
                          onClick={() => handleCartProducts(product)}
                        >
                          Add to Cart
                        </button>
                      </>
                    )}
                    <img src={product?.image} alt="" className="productIamge" />
                  </div>

                  <div
                    className="titleDiv"
                    onClick={() => productCardNavigation(product?.id)}
                  >
                    {product?.title}
                  </div>
                  <div
                    className="priceDiv"
                    onClick={() => productCardNavigation(product?.id)}
                  >
                    ${product?.price}
                  </div>
                  <div
                    className="ratingContainer"
                    onClick={() => productCardNavigation(product?.id)}
                  >
                    <Rate disabled defaultValue={product?.rating?.rate} />
                    <div className="ratingDiv"> ({product?.rating?.rate})</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
             
          </Swiper>
        </div>
      ) : (
        <div className="loaderContainer">
          <Loader />
        </div>
      )}
    </div>
  );
}

export function Allproductcard({ products }) {
  const dispatch = useDispatch();

  const globalState = useSelector(GlobalStatesData);
  const favProducts = globalState?.globalStatesSlice?.favouritesProducts;
  const cartProducts = globalState?.globalStatesSlice?.cartProducts;
  // console.log(cartProducts);

  const handleFavProducts = (product) => {
    dispatch(addFavProducts(product));
  };
  const [messageApi, contextHolder] = message.useMessage();

  const [isHovered, setIsHovered] = useState(null);
  const navigate = useNavigate();
  const productCardNavigation = (id) => {
    navigate(`/product/${id}`);
  };

  const handleCartProducts = (product) => {
    dispatch(addCartProducts(product));

    messageApi.open({
      type: "success",
      content: "Product added to cart successfully",
    });
  };

  return (
    <div className="mainCardContainer">
      {contextHolder}
      {products?.length ? (
        <div className="cardContainerParent">
          {products.map((product, i) => (
            <div className="productCardContainer secClassProduct">
              <div
                className="imageDiv"
                onMouseEnter={() => setIsHovered(i)}
                onMouseLeave={() => setIsHovered(null)}
                style={{
                  position: "relative",
                }}
              >
                {isHovered === i && (
                  <>
                    <div
                      className="quickViewDiv"
                      data-aos="fade-left"
                      onClick={() => productCardNavigation(product?.id)}
                    >
                      <QuickViewIcon />
                    </div>
                    <div
                      className="favIconDiv"
                      data-aos="fade-left"
                      onClick={() => handleFavProducts(product)}
                    >
                      <FavIcon />
                    </div>
                    <button
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                      className="hoverBtn"
                      onClick={() => handleCartProducts(product)}
                    >
                      Add to Cart
                    </button>
                  </>
                )}
                <img src={product?.image} alt="" className="productIamge" />
              </div>
              <div
                className="titleDiv"
                onClick={() => productCardNavigation(product?.id)}
              >
                {product?.title}
              </div>
              <div
                className="priceDiv"
                onClick={() => productCardNavigation(product?.id)}
              >
                ${product?.price}
              </div>
              <div
                className="ratingContainer"
                onClick={() => productCardNavigation(product?.id)}
              >
                <Rate disabled defaultValue={product?.rating?.rate} />
                <div className="ratingDiv"> ({product?.rating?.rate})</div>
              </div>
            </div>
          ))}
           
        </div>
      ) : (
        <div className="loaderContainer">
          <Loader />
        </div>
      )}
    </div>
  );
}

export function ProductcardNC({ products }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  const globalState = useSelector(GlobalStatesData);
  const favProducts = globalState?.globalStatesSlice?.favouritesProducts;
  const cartProducts = globalState?.globalStatesSlice?.cartProducts;
  // console.log(cartProducts);

  const handleFavProducts = (product) => {
    dispatch(addFavProducts(product));
  };

  const [isHovered, setIsHovered] = useState(null);
  const navigate = useNavigate();
  const productCardNavigation = (id) => {
    navigate(`/product/${id}`);
  };
  const [messageApi, contextHolder] = message.useMessage();
  const handleCartProducts = (product) => {
    dispatch(addCartProducts(product));
    messageApi.open({
      type: "success",
      content: "Product added to cart successfully",
    });
  };

  const handleRemove = (productId) => {
    console.log(productId);
    dispatch(removeFavProduct(productId));
  };

  return (
    <div className="mainCardContainer">
      {contextHolder}
      {products?.length ? (
        <div className="cardContainerParent">
          {products.slice(0, 6).map((product, i) => (
            <div className="productCardContainer secClassProduct">
              <div
                className="imageDiv"
                onMouseEnter={() => setIsHovered(i)}
                onMouseLeave={() => setIsHovered(null)}
                style={{
                  position: "relative",
                }}
              >
                {isHovered === i && (
                  <>
                    <div
                      className="quickViewDiv"
                      data-aos="fade-left"
                      onClick={() => productCardNavigation(product?.id)}
                    >
                      <QuickViewIcon />
                    </div>
                    <div
                      className="favIconDiv"
                      data-aos="fade-left"
                      onClick={() => handleFavProducts(product)}
                    >
                      <FavIcon />
                    </div>
                    <button
                      data-aos="fade-up"
                      data-aos-anchor-placement="bottom-bottom"
                      className="hoverBtn"
                      onClick={() => handleCartProducts(product)}
                    >
                      Add to Cart
                    </button>
                  </>
                )}
                <img src={product?.image} alt="" className="productIamge" />
              </div>
              <div
                className="titleDiv"
                onClick={() => productCardNavigation(product?.id)}
              >
                {product?.title}
              </div>
              <div
                className="priceDiv"
                onClick={() => productCardNavigation(product?.id)}
              >
                ${product?.price}
              </div>
              <div
                className="ratingContainer"
                onClick={() => productCardNavigation(product?.id)}
              >
                <Rate disabled defaultValue={product?.rating?.rate} />
                <div className="ratingDiv"> ({product?.rating?.rate})</div>
              </div>
              <button
                className="removeFavProduct"
                onClick={() => handleRemove(product.id)}
              >
                Delete
              </button>
            </div>
          ))}
           
        </div>
      ) : (
        <div className="loaderContainer">
          {loading ? <Loader /> : <Empty />}
        </div>
      )}
    </div>
  );
}

export function CartTable({ products }) {
  const navigate = useNavigate();
  const handleBilling = () => {
    navigate("/billingdetails");
  };
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const globalState = useSelector(GlobalStatesData);
  const favProducts = globalState?.globalStatesSlice?.favouritesProducts;
  const cartProducts = globalState?.globalStatesSlice?.cartProducts;
  console.log(cartProducts);

  const [quantities, setQuantities] = useState({});

  const handleIncrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    if (quantities[productId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1,
      }));
    }
  };

  const calculateSubtotal = (product) => {
    const quantity = quantities[product.id] || 1;
    return quantity * product.price;
  };

  const totalSubtotal = products
    .reduce((total, product) => total + calculateSubtotal(product), 0)
    .toFixed(2);

  const handleRemove = (productId) => {
    console.log(productId);
    dispatch(removeCartProduct(productId));
  };

  return (
    <div className="cartTableMain">
      <div className="cartTableHeading">
        <div className="tavleheadingDiv">Product</div>
        <div className="tavleheadingDiv">Price</div>
        <div className="tavleheadingDiv">Quantity</div>
        <div className="tavleheadingDiv">Subtotal</div>
      </div>
      {products?.length ? (
        <div className="cartTableParent">
          {products.map((product, i) => (
            <div className="cartTableContainer">
              <div className="cartTableImageDiv">
                <img src={product?.image} alt="" className="cartTableImage" />
                <div className="cartTableTitle">{product?.title}</div>
              </div>
              <div className="cartTablePrice">${product?.price}</div>
              <div className="cartTablePrice">
                <div className="cartNumInputSelector">
                  <input
                    type="number"
                    className="cartNumInputfield"
                    value={quantities[product.id] || 1}
                    onChange={(e) =>
                      setQuantities({
                        ...quantities,
                        [product.id]: parseInt(e.target.value) || 0,
                      })
                    }
                  />
                  <div className="cartNumBtnDiv">
                    <button
                      className="cartNumInpoutBtn"
                      onClick={() => handleIncrement(product.id)}
                    >
                      <UpOutlined />
                    </button>

                    <button
                      className="cartNumInpoutBtn"
                      onClick={() => handleDecrement(product.id)}
                    >
                      <DownOutlined />
                    </button>
                  </div>
                </div>
              </div>
              <div className="cartTablePrice">
                ${calculateSubtotal(product)}
              </div>
              <button
                class="deleteButton"
                onClick={() => handleRemove(product.id)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 50 59"
                  class="bin"
                >
                  <path
                    fill="#B5BAC1"
                    d="M0 7.5C0 5.01472 2.01472 3 4.5 3H45.5C47.9853 3 50 5.01472 50 7.5V7.5C50 8.32843 49.3284 9 48.5 9H1.5C0.671571 9 0 8.32843 0 7.5V7.5Z"
                  ></path>
                  <path
                    fill="#B5BAC1"
                    d="M17 3C17 1.34315 18.3431 0 20 0H29.3125C30.9694 0 32.3125 1.34315 32.3125 3V3H17V3Z"
                  ></path>
                  <path
                    fill="#B5BAC1"
                    d="M2.18565 18.0974C2.08466 15.821 3.903 13.9202 6.18172 13.9202H43.8189C46.0976 13.9202 47.916 15.821 47.815 18.0975L46.1699 55.1775C46.0751 57.3155 44.314 59.0002 42.1739 59.0002H7.8268C5.68661 59.0002 3.92559 57.3155 3.83073 55.1775L2.18565 18.0974ZM18.0003 49.5402C16.6196 49.5402 15.5003 48.4209 15.5003 47.0402V24.9602C15.5003 23.5795 16.6196 22.4602 18.0003 22.4602C19.381 22.4602 20.5003 23.5795 20.5003 24.9602V47.0402C20.5003 48.4209 19.381 49.5402 18.0003 49.5402ZM29.5003 47.0402C29.5003 48.4209 30.6196 49.5402 32.0003 49.5402C33.381 49.5402 34.5003 48.4209 34.5003 47.0402V24.9602C34.5003 23.5795 33.381 22.4602 32.0003 22.4602C30.6196 22.4602 29.5003 23.5795 29.5003 24.9602V47.0402Z"
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                  ></path>
                  <path
                    fill="#B5BAC1"
                    d="M2 13H48L47.6742 21.28H2.32031L2 13Z"
                  ></path>
                </svg>

                <span class="tooltip">Delete</span>
              </button>
            </div>
          ))}
           
        </div>
      ) : (
        <div className="loaderContainer">
          {loading ? <Loader /> : <Empty />}
        </div>
      )}
      <div className="cartTotalContainer">
        <div className="cartTotalHeading">Cart Total</div>
        <div className="subtotalDiv">
          <div>Subtotal</div>
          <div>{totalSubtotal}</div>
        </div>
        <div className="subtotalDiv">
          <div>Shipping</div>
          <div>Free</div>
        </div>
        <div className="subtotalDiv">
          <div>Total</div>
          <div>{totalSubtotal}</div>
        </div>
        <div className="totalBtnDiv">
          <CustomButton
            name="Process to Checkout"
            onClick={() => handleBilling()}
            disabled={products.length === 0}
          />
        </div>
      </div>
    </div>
  );
}

export function BillingProducts({ products, formSubmit }) {
  const [value, setValue] = useState(1);
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };

  const navigate = useNavigate();
  const handleBilling = () => {
    navigate("/billingdetails");
  };
  const dispatch = useDispatch();

  const globalState = useSelector(GlobalStatesData);

  const [quantities, setQuantities] = useState({});

  const handleIncrement = (productId) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 1) + 1,
    }));
  };

  const handleDecrement = (productId) => {
    if (quantities[productId] > 1) {
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [productId]: prevQuantities[productId] - 1,
      }));
    }
  };

  const calculateSubtotal = (product) => {
    const quantity = quantities[product.id] || 1;
    return quantity * product.price;
  };

  const totalSubtotal = products
    .reduce((total, product) => total + calculateSubtotal(product), 0)
    .toFixed(2);

  return (
    <div className="cartTableMain">
      {products?.length ? (
        <div className="cartTableParent">
          {products.map((product, i) => (
            <div className="billingProductContainer">
              <div className="billingProductImageDiv">
                <img
                  src={product?.image}
                  alt=""
                  className="billingProductImage"
                />
                <div className="billingProductTitle">{product?.title}</div>
              </div>
              <div className="billingProductPrice">${product?.price}</div>
            </div>
          ))}
           
        </div>
      ) : (
        <div className="loaderContainer">
          <Loader />
        </div>
      )}
      <div className="billingTotalContainer">
        <div className="billingTotalDiv">
          <div>Subtotal</div>
          <div>{totalSubtotal}</div>
        </div>
        <div className="billingTotalDiv">
          <div>Shipping</div>
          <div>Free</div>
        </div>
        <div className="billingTotalDiv anotherClass">
          <div>Total</div>
          <div>{totalSubtotal}</div>
        </div>
        <div>
          <Radio.Group onChange={onChange} value={value}>
            <Radio value={1}>
              Bank <img src={visa} alt="" />
              <img src={masterCard} alt="" />
            </Radio>

            <Radio value={2}>Cash on delivery</Radio>
          </Radio.Group>
        </div>
        <div className="totalBtnDiv">
          <CustomButton name="Place order" onClick={formSubmit} />
          {/* {contextHolder} */}
        </div>
      </div>
    </div>
  );
}

export function MyOrderProducts({ products }) {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  return (
    <div className="cartTableMain">
      {products?.length ? (
        <div className="cartTableParent">
          {products.map((product, i) => (
            <div className="billingProductContainer orderProductContainer">
              <div className="orderProductImageDiv">
                <img
                  src={product?.image}
                  alt=""
                  className="billingProductImage"
                />
              </div>
              <div className="orderTitleDesDiv">
                <div className="billingProductTitle">{product?.title}</div>
                <div className="orderProductDes">{product?.description}</div>
              </div>
              <div className="billingProductPrice">${product?.price}</div>
              <div className="orderCheckMark">
                <img src={checkIcon} className="checkMark" />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="loaderContainer">
          {loading ? <Loader /> : <Empty />}
        </div>
      )}
    </div>
  );
}
