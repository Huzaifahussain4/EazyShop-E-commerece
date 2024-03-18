import React, { useEffect, useState } from "react";
import BannerCarousel from "../BannerCarousel/BannerCarousel";
import "./homeStyle.css";
import SiderNav from "../SiderNav/SiderNav";
import { Productcard, ProductcardNC } from "../Productcard/Productcard";
import Carouselslider from "../Carouselslider/Carouselslider";
import { FavIcon, HeadingIcon, QuickViewIcon } from "../Icons/Icons";
import CustomButton from "../CustomButton/CustomButton";
import axios from "axios";
import SecBanner from "../../assets/banner 1.png";
import playStation from "../../assets/ps5-slim-goedkope-playstation_large 1.png";
import womanWearing from "../../assets/attractive-woman-wearing-hat-posing-black-background 1.png";
import perfumeImage from "../../assets/Frame 706.png";
import speakerIamge from "../../assets/Frame 707.png";
import {
  Firstservicecard,
  Secservicecard,
  Thirdservicecard,
} from "../Aboutminicards/Aboutminicards";
import { MiniNav } from "../MiniNav/MiniNav";
import Wishlist from "../Wishlist/Wishlist";
import { useDispatch, useSelector } from "react-redux";
import {
  GlobalStatesData,
  getProducts,
} from "../../ReduxToolkit/slice/globalStatesSlice";
import { useLocation, useNavigate } from "react-router";
// import products from "../../ReduxToolkit/slice/globalStatesSlice.js";

function Home() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to the top of the page whenever the route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  const globalState = useSelector(GlobalStatesData);
  const products = globalState?.globalStatesSlice?.products;
  console.log(products);

  const [electricProduct, setElectricProduct] = useState([]);
  const [shoesItem, setShoesItem] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [secHovered, setSecHovered] = useState(false);
  const [thirdHovered, setThirdHovered] = useState(false);
  const [fourthHovered, setFourthHovered] = useState(false);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (products?.length > 0) {
      const mensClothing = products.filter(
        (item) => item.category === "women's clothing"
      );
      setElectricProduct(mensClothing);
    }
  }, [products]);

  useEffect(() => {
    if (products?.length > 0) {
      const shoeProduct = products.filter(
        (item) => item.category === "jewelery"
      );
      setShoesItem(shoeProduct);
    }
  }, [products]);
  const navigate = useNavigate();
  const handleAllProducts = () => {
    navigate("/allproducts");
  };

  return (
    <div className="parentContainer">
      <div className="siderBanerContainer">
        <div className="siderContainer">
          <MiniNav />
        </div>
        <div className="carouselBannerContainer">
          <BannerCarousel />
        </div>
      </div>

      <div className="rectangleHeading">
        <HeadingIcon />
        <div className="rectangleTitle">Today’s</div>
      </div>
      <div className="salesDiv">Flash Sales</div>
      <div className="productFirstContainer">
        <Productcard products={products} />
      </div>
      <div className="btnConatiner">
        <CustomButton name="View All Products" onClick={handleAllProducts}/>
      </div>

      <div className="rectangleHeading">
        <HeadingIcon />
        <div className="rectangleTitle">This Month</div>
      </div>
      <div className="salesDiv">
        Best Selling Products
        <CustomButton name="View All" onClick={handleAllProducts}/>
      </div>
      <div className="productFirstContainer">
        <Productcard products={electricProduct} />
      </div>
      <div className="secBannerContainer">
        <img src={SecBanner} alt="" className="secBanner" />
      </div>

      <div className="rectangleHeading">
        <HeadingIcon />
        <div className="rectangleTitle">Our Products</div>
      </div>
      <div className="salesDiv">Explore Our Products</div>
      <div className="productFirstContainer">
        <ProductcardNC products={shoesItem} />
      </div>
      <CustomButton name="View All Products" onClick={handleAllProducts}/>

      <div className="sixthSectionContainer">
        <div className="rectangleHeading">
          <HeadingIcon />
          <div className="rectangleTitle">This Month</div>
        </div>
        <div className="salesDiv">New Arrival</div>

        <div className="sixthSecFirstContainer">
          <div
            className="firstIamgeDiv"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
              position: "relative",
            }}
          >
            {isHovered && (
              <div
                data-aos="fade-up"
                data-aos-anchor-placement="bottom-bottom"
                className="hoverDiv"
              >
                <div className="containerTitle">PlayStation 5</div>
                <div className="containerDis">
                  Black and White version of the PS5 coming out on sale.
                </div>
                <button className="containerBtn">Shop Now</button>
              </div>
            )}
            <img src={playStation} alt="" className="firstImage" />
          </div>
          <div className="secIamgeConatiner">
            <div
              className="secImageDiv "
              onMouseEnter={() => setSecHovered(true)}
              onMouseLeave={() => setSecHovered(false)}
              style={{
                position: "relative",
              }}
            >
              {secHovered && (
                <div
                  data-aos="fade-up"
                  data-aos-anchor-placement="bottom-bottom"
                  className="hoverDiv hoveAnotherClass"
                >
                  <div className="containerTitle">Women’s Collections</div>
                  <div className="containerDis">
                    Featured woman collections that give you another vibe.
                  </div>
                  <button className="containerBtn">Shop Now</button>
                </div>
              )}
              <img src={womanWearing} alt="" className="secIamge" />
            </div>
            <div className="thirdImageContainer">
              <div
                className="thirdIamgeDiv "
                onMouseEnter={() => setThirdHovered(true)}
                onMouseLeave={() => setThirdHovered(false)}
                style={{
                  position: "relative",
                }}
              >
                {thirdHovered && (
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="hoverDiv"
                  >
                    <div className="containerTitle">Speakers</div>
                    <div className="containerDis">Amazon wireless speakers</div>
                    <button className="containerBtn">Shop Now</button>
                  </div>
                )}
                <img src={speakerIamge} alt="" className="thirdImage" />
              </div>
              <div
                className="thirdIamgeDiv"
                onMouseEnter={() => setFourthHovered(true)}
                onMouseLeave={() => setFourthHovered(false)}
                style={{
                  position: "relative",
                }}
              >
                {fourthHovered && (
                  <div
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    className="hoverDiv"
                  >
                    <div className="containerTitle">Perfume</div>
                    <div className="containerDis">GUCCI INTENSE OUD EDP</div>
                    <button className="containerBtn">Shop Now</button>
                  </div>
                )}
                <img src={perfumeImage} alt="" className="thirdImage" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="servicesHomeContainer" data-aos="fade-up">
        <Firstservicecard />
        <Secservicecard />
        <Thirdservicecard />
      </div>
      {/* <Wishlist wishlistItems={wishlistItems} /> */}
    </div>
  );
}

export default Home;
