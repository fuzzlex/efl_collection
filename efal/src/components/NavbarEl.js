import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import EfalPng from "../assets/Efal.jpeg";
import { searchProduct } from "../redux/actions/shopActions";
import Navbar from "./Navbar";
import EfalPng2 from "../assets/logo_1.png";
import Countdown from "react-countdown";

import "./NavbarEl.css";
import { Col, Row } from "react-bootstrap";

const NavbarEl = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchProduct(value));
    setValue("");
  };
  const Completionist = () => <span>You are good to go!</span>;
  const renderer = ({ hours, minutes, seconds, completed, days }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          Kampanya bitimine {days} gün {hours} saat {minutes} dakika {seconds}
          saniye kaldı!!
        </span>
      );
    }
  };

  const addedProducts = useSelector(
    (state) => state.shopReducer.toAddedProduct
  );
  const priceList = addedProducts?.map(
    (product) => product.productAmount * product.price
  );
  const taxPrice = parseFloat(
    priceList?.reduce((pre, curr) => pre + curr, 0) * 0.18
  ).toFixed(2);
  const totalPrice =
    priceList?.reduce((pre, curr) => pre + curr, 0).toFixed(2) + taxPrice;

  const initialDate = new Date("2022-10-11");

  const millisecondsToAdd = 30 * 24 * 60 * 60 * 1000; //30 days in milliseconds

  const expiryDate = new Date(initialDate.valueOf() + millisecondsToAdd);

  return (
    <div >
      <header className="section-header">
        {/* <nav className="navbar navbar-dark navbar-expand p-0 bg-dark"> */}
        <div style={{maxHeight:"2.5rem"}} className="d-flex justify-content-center flex-column align-items-center bg-dark home-info-bar ">
          <Row className=" d-flex align-items-center justify-content-center ">
            <Col xs={6} md={10} className="d-flex justify-content-center flex-column align-items-center">
              
              <h1 className="text-white ms-auto me-auto d-flex flex-column justify-content-center align-items-center p-0 m-0">
                TÜM ÜRÜNLERDE KARGO BEDAVA!
              </h1>
             </Col>
            <Col xs={6} md={2}>
              
              <div className="social-container">
                <div className="social-cont-still">
                  <a
                    href="https://wa.me/905431719431"
                    className="bx bxl-whatsapp"
                  ></a>
                  <a
                    href="https://www.instagram.com/efalcollection/"
                    className="bx bxl-instagram"
                  ></a>
                  <a href="" class="bx bxl-facebook"></a>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <Navbar />

        <section className="header-main border-bottom bg-white">
          <div className="container-fluid">
            <div className="row p-2 pt-3 pb-3 d-flex align-items-center">
              <div
                onClick={() => navigate("/")}
                className="col-md-3 nav-item d-flex"
              >
                <img
                  className="d-none d-md-flex"
                  src={EfalPng}
                  width="100"
                  alt="Efal Collection Ferace Tesettür Giyim"
                />
                <img
                  className="d-none d-md-flex"
                  style={{ width: "5rem" }}
                  src={EfalPng2}
                  alt="Efal Collection Ferace Tesettür Giyim"
                />
              </div>
              <div className="col-md-7">
                <form className="d-flex form-inputs" onSubmit={handleSearch}>
                  <input
                    style={{ minWidth: "90%" }}
                    className="form-control"
                    type="text"
                    placeholder="Ne Aramıştınız .."
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                  {/* <i className="bx bx-search"></i> */}
                  <button type="submit" className="btn btn-secondary">
                    Ara
                  </button>
                </form>
              </div>

              <div className="col-md-2">
                <div
                  style={{ cursor: "pointer" }}
                  onClick={() => navigate("/shopping")}
                  className="d-flex d-none d-md-flex flex-row align-items-center cursor:pointer"
                >
                  <span className="shop-bag">
                    <i className="bx bxs-shopping-bag"></i>
                  </span>
                  <div className="d-flex flex-column ms-2">
                    <span className="qty"> {addedProducts.length} Ürün</span>
                    <span className="fw-bold">
                      {addedProducts.length === 0
                        ? "0"
                        : Math.round(parseFloat(totalPrice)).toFixed(2)}
                      TL
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <a className="navbar-brand d-md-none d-md-flex" href="#">
              Categories
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown"
              aria-controls="navbarNavDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavDropdown">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#">
                    Electronics
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Fashion
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Furnitures
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Mobiles
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        Smart Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Feature Phones
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        Mobile Covers
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav> */}
      </header>
    </div>
  );
};

export default NavbarEl;
