import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import "./index.css";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Contact from "./components/Contact/Contact.jsx";
import About from "./components/About/About.jsx";
import Signup from "./components/Signup/Signup.jsx";
import Login from "./components/Login/Login.jsx";
import Productdetailpage from "./components/Productdetailpage/Productdetailpage.jsx";
import Wishlist from "./components/Wishlist/Wishlist.jsx";
import Cart from "./components/Cart/Cart.jsx";
import Allproducts from "./components/Allproducts/Allproducts.jsx";
import Billingdetails from "./components/Billingdetails/Billingdetails.jsx";
import Userprofile from "./components/Userprofile/Userprofile.jsx";
import Myorder from "./components/Myorder/Myorder.jsx";
import Womanclothing from "./components/Womenclothing/Womanclothing.jsx";
import Manclothing from "./components/Manclothing/Manclothing.jsx";
import Jewelery from "./components/Jewelery/Jewelery.jsx";
import Electronics from "./components/Electronics/Electronics.jsx";

const route = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route exact path="/" element={<App />}>
        <Route exact path="" element={<Home />} />
        <Route exact path="contact" element={<Contact />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="signup" element={<Signup />} />
        <Route exact path="login" element={<Login />} />
        <Route exact path="signup" element={<Signup />} />
        <Route exact path="product/:id" element={<Productdetailpage />} />
        <Route exact path="wishlist" element={<Wishlist />} />
        <Route exact path="cart" element={<Cart />} />
        <Route exact path="allproducts" element={<Allproducts />} />
        <Route exact path="billingdetails" element={<Billingdetails />} />
        <Route exact path="userprofile" element={<Userprofile />} />
        <Route exact path="myorder" element={<Myorder />} />
        <Route exact path="womanclothing" element={<Womanclothing />} />
        <Route exact path="manclothing" element={<Manclothing />} />
        <Route exact path="jewelery" element={<Jewelery />} />
        <Route exact path="electronics" element={<Electronics />} />
      </Route>
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
);
