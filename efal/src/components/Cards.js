import React, { useEffect } from "react";
import { Button, Card, Carousel, Spinner } from "react-bootstrap";
import { CgShoppingCart } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProduct,
  addShoppingArea,
  fetchAllData,
  fetchAllImages,
} from "../redux/actions/shopActions";
import { useNavigate } from "react-router-dom";

import "./Card.css";
import { successNote } from "./Toasty";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AiFillStar } from "react-icons/ai";
import { GrLinkPrevious, GrLinkNext } from "react-icons/gr";
import { BiChevronsLeft, BiChevronsRight } from "react-icons/bi";
import { FaHeart, FaShoppingCart } from "react-icons/fa";
import ReactGa from "react-ga";
import { Helmet } from "react-helmet-async";

const Cards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchAllData());
    dispatch(fetchAllImages());
    ReactGa.pageview(window.location.pathname);
  }, []);

  const handleAddCard = (product) => {
    ReactGa.event({
      category: product.category,
      action: "Sepete Eklendi",
      label: "test",
      value: product.price,
    });
    const newItem = {
      ...product,
      productSellAmount: product.productSellAmount + 1,
      productAmount: 1,
      price:
        // product.title == "Biyeli Sport Ferace" ? Number(product.price) - 45 :
        product.price,
    };

    dispatch(addShoppingArea(newItem));
    successNote("Başarıyla Sepetinize Eklendi");
  };
  function Cevir(text) {
    var trMap = {
      çÇ: "c",
      ğĞ: "g",
      şŞ: "s",
      üÜ: "u",
      ıİ: "i",
      öÖ: "o",
    };
    for (var key in trMap) {
      text = text.replace(new RegExp("[" + key + "]", "g"), trMap[key]);
    }
    return text
      .replace(/[^-a-zA-Z0-9\s]+/gi, "")
      .replace(/\s/gi, "-")
      .replace(/[-]+/gi, "-")
      .toLowerCase();
  }
  const productList = useSelector((state) => state.shopReducer.productList);
  const imageList = useSelector((state) => state.shopReducer.allImage);
  const sortedProducts = productList?.sort((a, b) =>
    a?.title.localeCompare(b?.title)
  );
  const handler = (cardInfo, index) => {
    ReactGa.event({
      category: cardInfo.category,
      action: "Ürüne Bakıldı",
      label: "test",
      value: cardInfo.price,
    });
    navigate(
      `ferace-modelleri/${Cevir(
        cardInfo.title.toLowerCase().split(" ").join("-")
      )}`,
      { state: { cardInfo } }
    );
  };

  return (
    <div className="container">
      {sortedProducts ? (   


        <div className="row p-1">
          {sortedProducts?.map((item, index) =>
            imageList?.map(
              (image) =>
                item.images[0] == image.id && (
                  <div
                    style={{
                      cursor: "pointer",
                      border: "3px solid white",
                      backgroundColor: "#f5f5f5",
                      // maxHeight:"35rem"
                    }}
                    className="col-lg-3 col-6"
                  >
                    <div className="product-grid">
                      <div className="product-image">
                          <Carousel
                          className="d-block"
                            nextIcon={
                              <BiChevronsRight
                                style={{
                                  backgroundColor: "#bf360c",
                                  fontSize: "45px",
                                  padding:"0.1rem",
                                  color:"white",
                                  fontWeight:"900",
                                  // borderRadius:"50%"
                                }}
                              />
                            }
                            prevIcon={
                              <BiChevronsLeft
                                style={{
                                  backgroundColor: "#bf360c",
                                  fontSize: "45px",
                                  padding:"0.1rem",
                                  color:"white",
                                  fontWeight:"900",
                                  // borderRadius:"50%"
                                }}
                              />
                            }
                            interval={null}
                            variant="light"
                            style={{ maxWidth: "100%"}}
                          >
                            <Carousel.Item>
                              <img
                                onClick={() => handler(item, index)}
                                className="pic-1"
                                src={image.img1Seo}
                                alt={
                                  "Efal Collection, Ferace Modelleri " +
                                  item.title +
                                  " " +
                                  item.category
                                }
                              />
                            </Carousel.Item>
                            <Carousel.Item>                            
                            <img
                                onClick={() => handler(item, index)}
                                className="pic-1"
                                src={image.img2Seo}
                                alt={
                                  "Efal Collection, Ferace Modelleri " +
                                  item.title +
                                  " " +
                                  item.category
                                }
                              />
                            </Carousel.Item>
                            <Carousel.Item>                            
                            <img
                                onClick={() => handler(item, index)}
                                className="pic-1"
                                src={image.img4}
                                alt={
                                  "Efal Collection, Ferace Modelleri " +
                                  item.title +
                                  " " +
                                  item.category
                                }
                              />
                            </Carousel.Item>
                            <Carousel.Item>                            
                            <img
                                onClick={() => handler(item, index)}
                                className="pic-1"
                                src={image.img5}
                                alt={
                                  "Efal Collection, Ferace Modelleri " +
                                  item.title +
                                  " " +
                                  item.category
                                }
                              />
                            </Carousel.Item>
                          </Carousel>
                        <span className="product-sale-label">yeni</span>
                        {/* <span className="product-discount-label">-33%</span> */}
                      </div>
                      <div className="product-content ">
                        <ul className="rating">
                          {/* <FontAwesomeIcon style={{fontSize:"12rem"}} icon="star-circle" /> */}
                          <li>
                            <AiFillStar />
                          </li>
                          <li>
                            <AiFillStar />
                          </li>
                          <li>
                            <AiFillStar />
                          </li>
                          <li>
                            <AiFillStar />
                          </li>
                          <li>
                            <AiFillStar />
                          </li>
                        </ul>
                        <h5 className="title"><b>{item.title}</b></h5>
                        <div className="price">
                          <span>{Number(item.price) + 50},00 TL</span>{" "}
                          {item.price + ",00 TL"}
                          {/* { item.title == "Biyeli Sport Ferace" ? <h6 className="text-danger"> Sepette İndirim   {Number(item.price) - 45} ,00 TL</h6> : <></>}  */}
                        </div>
                        <div className="product-button-group">
                          <a className="product-like-icon">
                            <FaHeart />
                          </a>
                          <a
                            onClick={() => handleAddCard(item)}
                            style={{ textDecoration: "none" }}
                            className="add-to-cart"
                          >
                            <FaShoppingCart
                              style={{ margin: "0.5rem", fontSize: "1.2rem" }}
                            />
                            SEPETE EKLE
                          </a>
                          <a className="product-compare-icon">
                            <i className="fas fa-random"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                )
            )
          )}
        </div>
      ) : (
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      )}
    </div>
  );
};

export default Cards;
