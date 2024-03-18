import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import  {Productcard , ProductcardNC } from "../Productcard/Productcard";
import axios from "axios"; // Import axios for data fetching

function Carouselslider() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch data when the component mounts
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data); // Update state with fetched product data
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to fetch data only once when the component mounts

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {/* Render each product card */}
        {products.map((product) => (
          <div key={product.id}>{/* <Productcard product={product} /> */}</div>
        ))}
      </Slider>
    </div>
  );
}

export default Carouselslider;
