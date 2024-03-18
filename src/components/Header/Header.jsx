import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import searchIcon from "../../assets/searchIcon.png";
import "./headerStyle.css";
import {
  CancelIcon,
  CartIcon,
  HeartIcon,
  LogoutIcon,
  MallBagIcon,
  ProfileUserIcon,
  ReveiwsIcon,
  UserIcon,
  UserWhiteIcon,
} from "../Icons/Icons";
import { ClockCircleOutlined } from "@ant-design/icons";
import { Avatar, Badge, Space } from "antd";
import Dropdown from "../Dropdown/Dropdown";
import { Input } from "antd";
import { MenuUnfoldOutlined, BarsOutlined } from "@ant-design/icons";
import Aos from "aos";
// import { MiniNav } from "../MiniNav/MiniNav";
import SideNavbar, { RightSideNav } from "../SiderNav/SiderNav";
import SideNav from "../SiderNav/SiderNav";
import { useDispatch, useSelector } from "react-redux";
import { GlobalStatesData } from "../../ReduxToolkit/slice/globalStatesSlice";
const { Search } = Input;

function Header() {
  const dispatch = useDispatch();

  const globalState = useSelector(GlobalStatesData);
  const cartProducts = globalState?.globalStatesSlice?.cartProducts;
  const favouritesProducts = globalState?.globalStatesSlice?.favouritesProducts;
  const orderProduct = globalState?.globalStatesSlice?.orderProduct;
  console.log(cartProducts.length);

  // const [count, setCount] = useState(5);
  const count = cartProducts.length;
  const favProductsCount = favouritesProducts.length;
  const orderProductCount = orderProduct.length;

  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleProfile = () => {
    navigate("/userprofile");
  };

  const handleMyorder = () => {
    navigate("/myorder");
  };

  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken(null);
  };

  const handleWishList = () => {
    navigate("/wishlist");
  };

  const handleCart = () => {
    navigate("/cart");
  };

  const [isHovered, setIsHovered] = useState(false);
  const [whisList, setWishList] = useState(false);
  const [cart, setCart] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const wishListhandleMouseEnter = () => {
    setWishList(true);
  };

  const wishLishandleMouseLeave = () => {
    setWishList(false);
  };

  const carthandleMouseEnter = () => {
    setCart(true);
  };

  const carthandleMouseLeave = () => {
    setCart(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="headerContainer">
        <ul className="headerUl">
          <li className="titleHeadinLi">
            <NavLink to="" className="titleNavLink">
            <h1 className="titleHeading">EazyShop</h1>
            </NavLink>
          </li>
          <div className="navLinksDiv">
            <li className="linksLi">
              <NavLink
                to=""
                className={(navData) =>
                  navData.isActive ? "active_class" : "linksName"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="linksLi">
              <NavLink
                to="/contact"
                className={(navData) =>
                  navData.isActive ? "active_class" : "linksName"
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="linksLi">
              <NavLink
                to="/about"
                className={(navData) =>
                  navData.isActive ? "active_class" : "linksName"
                }
              >
                About
              </NavLink>
            </li>
            {!token && (
              <li className="linksLi">
                <NavLink
                  to="/signup"
                  className={(navData) =>
                    navData.isActive ? "active_class" : "linksName"
                  }
                >
                  Sign Up
                </NavLink>
              </li>
            )}
          </div>
          <div className="thirdDivContainer">
            {/* <li className="linksLi">
              <div className="searchDiv">
                <input
                  type="text"
                  placeholder="What are you looking for?"
                  className="searchField"
                />
                <img src={searchIcon} className="searchIcon" />
              </div>
            </li> */}
            <li className="linksLi">
              <button className="wishListBtn" onClick={handleWishList}>
                <Badge count={favProductsCount}>
                  {whisList ? (
                    <svg
                      onMouseLeave={wishLishandleMouseLeave}
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="wishListBtnIcon"
                    >
                      <path
                        d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      onMouseEnter={wishListhandleMouseEnter}
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="wishListBtnIcon"
                    >
                      <path
                        d="M11 7C8.239 7 6 9.216 6 11.95C6 14.157 6.875 19.395 15.488 24.69C15.6423 24.7839 15.8194 24.8335 16 24.8335C16.1806 24.8335 16.3577 24.7839 16.512 24.69C25.125 19.395 26 14.157 26 11.95C26 9.216 23.761 7 21 7C18.239 7 16 10 16 10C16 10 13.761 7 11 7Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </Badge>
              </button>
            </li>
            <li className="linksLi">
              <button className="wishListBtn" onClick={handleCart}>
                <Badge count={count}>
                  {/* <Avatar shape="square" size="large" /> */}

                  {cart ? (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onMouseLeave={carthandleMouseLeave}
                      className="wishListBtnIcon"
                    >
                      <path
                        d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 5H7L10 22H26"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="32"
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      onMouseEnter={carthandleMouseEnter}
                      className="wishListBtnIcon"
                    >
                      <path
                        d="M11 27C11.5523 27 12 26.5523 12 26C12 25.4477 11.5523 25 11 25C10.4477 25 10 25.4477 10 26C10 26.5523 10.4477 27 11 27Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25 27C25.5523 27 26 26.5523 26 26C26 25.4477 25.5523 25 25 25C24.4477 25 24 25.4477 24 26C24 26.5523 24.4477 27 25 27Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3 5H7L10 22H26"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10 16.6667H25.59C25.7056 16.6667 25.8177 16.6267 25.9072 16.5535C25.9966 16.4802 26.0579 16.3782 26.0806 16.2648L27.8806 7.26479C27.8951 7.19222 27.8934 7.11733 27.8755 7.04552C27.8575 6.97371 27.8239 6.90678 27.7769 6.84956C27.73 6.79234 27.6709 6.74625 27.604 6.71462C27.5371 6.68299 27.464 6.66661 27.39 6.66666H8"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </Badge>
              </button>
            </li>
            {token && (
              <li className="linksLi">
                <button className="profileBtn" onClick={toggleDropdown}>
                  {isOpen && (
                    <div className="dropdownContainer">
                      <div className="optionBtnConatiner">
                        <button className="optionBtn" onClick={handleProfile}>
                          <ProfileUserIcon /> Manage My Account
                        </button>
                      </div>
                      <div className="optionBtnConatiner">
                        <button className="optionBtn" onClick={handleMyorder}>
                          <MallBagIcon />
                          <div className="myOrdeBadgeDiv">
                            My Order
                            <Badge count={orderProductCount} />
                          </div>
                        </button>
                      </div>
                      {/* <div className="optionBtnConatiner">
                        <button className="optionBtn">
                          <CancelIcon />
                          My Cancellations
                        </button>
                      </div> */}
                      <div className="optionBtnConatiner">
                        <button className="optionBtn" onClick={handleLogout}>
                          <LogoutIcon />
                          Logout
                        </button>
                      </div>
                    </div>
                  )}

                  {isHovered ? (
                    <svg
                      width="32"
                      onMouseLeave={handleMouseLeave}
                      height="32"
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="profileBtnIcon"
                    >
                      <path
                        d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
                        stroke="white"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="32"
                      height="32"
                      onMouseEnter={handleMouseEnter}
                      viewBox="0 0 32 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="profileBtnIcon"
                    >
                      <path
                        d="M24 27V24.3333C24 22.9188 23.5224 21.5623 22.6722 20.5621C21.8221 19.5619 20.669 19 19.4667 19H11.5333C10.331 19 9.17795 19.5619 8.32778 20.5621C7.47762 21.5623 7 22.9188 7 24.3333V27"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.5 14C18.9853 14 21 11.9853 21 9.5C21 7.01472 18.9853 5 16.5 5C14.0147 5 12 7.01472 12 9.5C12 11.9853 14.0147 14 16.5 14Z"
                        stroke="black"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </li>
            )}
          </div>
        </ul>
      </div>
      {/* SECOND NAV BAR */}
      <div className="secNavBar">
        <SideNav />
        <div className="sideNavTitle">EazyShop</div>
        <RightSideNav />
      </div>
    </>
  );
}

export default Header;
