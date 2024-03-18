import React, { useState } from "react";
import { Button, Drawer } from "antd";
import {
  ArrowRightOutlined,
  RightOutlined,
  LeftOutlined,
} from "@ant-design/icons";
import { NavLink, useNavigate } from "react-router-dom";
import "./sidenavStyle.css";
import {
  ArrowIcon,
  BlackCancelIcon,
  BlackCartIcon,
  BlackFavIcon,
  BlackMallBagIcon,
  BlackReveiwsIcon,
  CancelIcon,
  CartIcon,
  DropDownUserIcon,
  FavIcon,
  HeartIcon,
  LogoutIcon,
  MallBagIcon,
  ProfileUserIcon,
  ReveiwsIcon,
  UserIcon,
  WhiteCartIcon,
  WhiteHeartIcon,
} from "../Icons/Icons";

export default function SideNav() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  // const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const handleLogout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <>
      <Button onClick={showDrawer} className="customBtnClass">
        <ArrowIcon />
      </Button>
      <Drawer onClose={onClose} open={open} placement="left">
        <ul className="drawerNavUl">
          <li className="drawerNavLi">
            <NavLink
              to=""
              className={(navData) =>
                navData.isActive ? "active_class" : "linksName"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="drawerNavLi">
            <NavLink
              to="/contact"
              className={(navData) =>
                navData.isActive ? "active_class" : "linksName"
              }
            >
              Contact
            </NavLink>
          </li>
          <li className="drawerNavLi">
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
            <li className="drawerNavLi">
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
          {token && (
            <div className="logoutConatiner">
              <li className="drawerNavLi">
                <button className="sideNavLogoutBtn" onClick={handleLogout}>
                  <LogoutIcon />
                  Logout
                </button>
              </li>
            </div>
          )}
        </ul>
      </Drawer>
    </>
  );
}

export function RightSideNav() {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const navigate = useNavigate();
  const cartNavigationHandle = () => {
    navigate("/cart");
  };
  const wishlistNavigationHandle = () => {
    navigate("/wishlist");
  };
  const accountHandle = () => {
    navigate("/userprofile");
  };
  const orderHandle = () => {
    navigate("/myorder");
  };

  return (
    <>
      <Button onClick={showDrawer} className="rightCustomBtnClass">
        <LeftOutlined />
      </Button>
      <Drawer onClose={onClose} open={open} placement="right">
        <div className="rightSideNavContainer">
          <div className="rightSideNavOptionDiv">
            <button className="rightSideNavOptionBtn" onClick={accountHandle}>
              <DropDownUserIcon /> Manage My Account
            </button>
          </div>
          <div className="rightSideNavOptionDiv">
            <button className="rightSideNavOptionBtn" onClick={orderHandle}>
              <BlackMallBagIcon />
              My Order
            </button>
          </div>
          <div className="rightSideNavOptionDiv">
            <button
              className="rightSideNavOptionBtn"
              onClick={cartNavigationHandle}
            >
              <BlackCartIcon />
              Cart
            </button>
          </div>
          <div className="rightSideNavOptionDiv">
            <button
              className="rightSideNavOptionBtn"
              onClick={wishlistNavigationHandle}
            >
              <BlackFavIcon />
              Wishlist
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
}
