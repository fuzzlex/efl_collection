import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import Cards from "../components/Cards";
import MenuCategory from "../components/MenuCategory";
import {
  fetchSelectedOrder,
  setFetchSelectedOrder,
  updatePayedOrder,
} from "../redux/actions/shopActions";
import { TiShoppingCart } from "react-icons/ti";
import { Badge, Button, Carousel, Col, Modal, Row } from "react-bootstrap";
import "./Home.css";
import MainPage from "../assets/anasayfa.webp";
import MainPage2 from "../assets/efal_model_kapak.webp";
import ReactGa from "react-ga";
import Indirim from "../assets/indirim.jpeg"

import HomeInfoCards from "../components/HomeInfoCards";
import { Helmet } from "react-helmet-async";
import Countdown from "react-countdown";
const Home = () => {
  const query = new URLSearchParams(window.location.search);
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(true);
  const isSuccesedOrder = useSelector(
    (state) => state.shopReducer.selectedOrder
  );
  const addedProducts = useSelector(
    (state) => state.shopReducer.toAddedProduct
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const location = useLocation();
  const navigate = useNavigate();
  if (query.get("success")) {
    if (isSuccesedOrder?.id == `${query.get("selectedOrder")}`) {
      updatePayedOrder({ ...isSuccesedOrder, isPayed: true });
    }
  }
  useEffect(() => {
    query.get("success") &&
      dispatch(fetchSelectedOrder(`${query.get("selectedOrder")}`));
  }, [query.get("success")]);

  if (query.get("fail")) {
  }
  const initialDate = new Date("2022-10-11");

  const millisecondsToAdd = 30 * 24 * 60 * 60 * 1000; //30 days in milliseconds

  const expiryDate = new Date(initialDate.valueOf() + millisecondsToAdd);

  const renderer = ({ hours, minutes, seconds, completed, days }) => {
    if (completed) {
      // Render a completed state
      return <></>;
    } else {
      // Render a countdown
      return (
        <span className="text-danger">
          Kampanya bitimine <p>{days} gün {hours} saat {minutes} dakika {seconds} saniye kaldı!!</p>
        </span>
      );
    }
  };
  return (
    <div  >
      <Helmet>
      <title>2022 Ferace Modelleri - Tesettür Giyim | Efal Collection</title>
        <meta name="description"
    content="Spor Ferace Modelleri, Genç Ferace Modlleri, değişik ferace modelleri ve diğer tüm ferace modelleri uygun fiyatlarla İstanbul Efal de "
    data-rh="true" />
        <meta
          name="keywords"
          content="Ferace, Tesettür, Tesettür Giyim, Ferace Giyim, Efal, Ferace Modelleri, Kampanyalı Ürünler, Efal Giyim, Ferace İndirim" 
        />
       
        <meta
          property="twitter:title"
          content="Ferace Modelleri Efal Collection"
        />
        <meta
          property="twitter:description"
          content="Tesettür Giyim Ferace Modelleri Efal Colection ile Hizmetinizde Ferace Elbise Kampanyalı Ürünler"
        />
        <meta
          property="twitter:image"
          content="https://efalcollection.com/static/media/anasayfa.bd7eefa25f8ce8353042.webp"
        />
        <meta property="twitter:card" content="tesettür hijab" />
        <link rel="canonical" href="https://efalcollection.com" />
      </Helmet>
      {query.get("success") ? (
        <div
          style={{
            height: "70vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ border: "1px solid gray", padding: "2rem" }}>
            <h1>Ödemeniz alındı. Teşekkür Ederiz. </h1>
            <h2>Sipariş Numaranız: {query.get("selectedOrder")} </h2>
            <h3>
              Sipariş durumunuzu kontrol etmek için lütfen sipariş numaranızı
              kaydediniz...
            </h3>
          </div>
        </div>
      ) : (
        <>
          <Modal
            show={modalShow}
            onHide={() => setModalShow(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
                Tüm ürünlerde Muhteşem Kampanya
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className="d-flex align-items-center">
                <Col xs={8} md={4}>
                  <img className="w-100" src={Indirim} />
                </Col>
                <Col xs={4} md={8}>
                  <p>Biyeli Spor Feracede Sepette Kampanya</p>{" "}
                  <b className="p-0 text-dark ms-auto me-auto">
                    <Countdown renderer={renderer} date={expiryDate} />
                  </b>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => setModalShow(false)}>Kapat</Button>
            </Modal.Footer>
          </Modal>
          {addedProducts.length > 0 && window.screen.width < 500 && (
            <div onClick={() => navigate("/shopping")} className="shopBasket">
              <TiShoppingCart className="shopItem" />
              <Badge className="badge" pill bg="warning">
                {addedProducts.length}
              </Badge>
            </div>
          )}
          <Carousel variant="dark" style={{ height: "100%" }}>
            <Carousel.Item className="carousel-container">
              <div className="main-image" style={{ position: "relative" }}>
                <h6
                  style={{
                    position: "absolute",
                    left: "20%",
                    top: "20%",
                    color: "white",
                  }}
                >
                  Efal Collection Design
                </h6>
                <h5
                  style={{
                    position: "absolute",
                    right: "5%",
                    bottom: "20%",
                    color: "whitesmoke",
                  }}
                >
                  we make your special design...
                </h5>
                <img
                  className="w-100 p-1 "
                  src={MainPage}
                  alt={"Spor Ferace Modelleri, Genç Ferace Modlleri, değişik ferace modelleri ve diğer tüm ferace modelleri uygun fiyatlarla İstanbul Efal"}
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="main-image" style={{ position: "relative" }}>
                <img
                  className="w-100 p-1 "
                  src={MainPage2}
                  alt={
                    "Spor Ferace Modelleri, Genç Ferace Modlleri, değişik ferace modelleri ve diğer tüm ferace modelleri uygun fiyatlarla İstanbul Efal"
                  }
                />
              </div>
            </Carousel.Item>
          </Carousel>
          <h2
            style={{ fontSize: "15px" }}
            className="text-center text-muted p-0 m-0"
          >
            Ferace Modelleri
          </h2>
          <MenuCategory />
          <Cards />
          <HomeInfoCards />
        </>
      )}
    </div>
  );
};

export default Home;

