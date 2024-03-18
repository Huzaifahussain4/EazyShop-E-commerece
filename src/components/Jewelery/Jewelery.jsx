import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  GlobalStatesData,
  addCartProducts,
  addFavProducts,
  getProducts,
} from "../../ReduxToolkit/slice/globalStatesSlice";
import { useNavigate } from "react-router";
import Loader from "../Loader/Loader";
import { Empty, Rate } from "antd";
import axios from "axios";
import { FavIcon, QuickViewIcon } from "../Icons/Icons";
// import "./womanclothingStyle.css";

function Jewelery() {
  const [electricProduct, setElectricProduct] = useState([]);
  const dispatch = useDispatch();

  const globalState = useSelector(GlobalStatesData);
  const products = globalState?.globalStatesSlice?.products;
  console.log(products);

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
        (item) => item.category === "jewelery"
      );
      setElectricProduct(mensClothing);
    }
  }, [products]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  const handleFavProducts = (product) => {
    dispatch(addFavProducts(product));
  };

  const [isHovered, setIsHovered] = useState(null);
  const navigate = useNavigate();
  const productCardNavigation = (id) => {
    navigate(`/product/${id}`);
  };

  const handleCartProducts = (product) => {
    dispatch(addCartProducts(product));
  };
  return (
    <div className="WomenMainContainer mainCardContainer">
      <div className="allProductsViewdiv">Jewelery</div>
      {products?.length ? (
        <div className="cardContainerParent">
          {electricProduct.map((product, i) => (
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
          {loading ? <Loader /> : <Empty />}
        </div>
      )}
    </div>
  );
}

export default Jewelery;
