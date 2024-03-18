import React from "react";
import "./mininavStyle.css";
import { NavLink } from "react-router-dom";

export function MiniNav() {
  return (
    <div className="miniNavContainer">
      <ul className="miniNavUl">
        <li className="miniNavLi">
          <NavLink className="navLink" to="/womanclothing">Woman's Fashion</NavLink>
        </li>
        <li className="miniNavLi">
          <NavLink className="navLink" to="/manclothing">Men's Fashion</NavLink>
        </li>
        <li className="miniNavLi">
          <NavLink className="navLink" to="/jewelery">Jewelery</NavLink>
        </li>
        <li className="miniNavLi">
          <NavLink className="navLink" to="/electronics">Electronics</NavLink>
        </li>
        <li className="miniNavLi">Medicine</li>
        <li className="miniNavLi">Sports & Outdoor</li>
        <li className="miniNavLi">Baby's & Toys</li>
        <li className="miniNavLi">Groceries & Pets</li>
        <li className="miniNavLi">Health & Beauty</li>
      </ul>
    </div>
  );
}
