import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Visa from "../assets/visa.svg";
import Mastercard from "../assets/mastercard.svg";
import Iyzico from "../assets/Iyzico_logo.svg";

import "./Footer.css";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Row className="bg-secondary text-white p-5">
        <Col className="column">
          <p>Efal Collection</p>
          <a href="/">Ana Sayfa</a>
          <br />
          <a href="/aboutus">Hakkımızda</a>
        </Col>
        <Col className="column">
          <p>Kullanım Şartları</p>
          <a href="/privacy">Gizlilik Politikası</a>
          <br />
          <a href="/deliveryreturn">İade ve Tesimat Şartları</a>
          <br />
          <a href="/saleagreement">Mesafeli Satış Sözleşmesi</a>
          <br />
          <br />
          <br />
        </Col>
        <Col className="column">
          <p>Destek</p>
          <a href="info@efalcollection.com"> info@efalcollection.com</a>
          <p>+90 543 171 9431</p>
        </Col>
        <Col>
          <img
            style={{
              backgroundColor: "white",
              padding: "0.5rem",
              height: "4rem",
              width: "4rem",
            }}
            src={Visa}
            alt="Visa"
          />
          <img
            style={{
              backgroundColor: "white",
              padding: "0.5rem",
              height: "4rem",
              width: "4rem",
            }}
            src={Mastercard}
            alt="Mastercard"
          />
          <img
            style={{
              backgroundColor: "white",
              padding: "0.1rem",
              height: "4rem",
              width: "4rem",
            }}
            src={Iyzico}
            alt="Iyzico"
          />
        </Col>
      </Row>

      <Row className="bg-dark">
        <Col xs={12}>
          <h6 className="text-muted p-2">
            Tüm Hakları Saklıdır Powered by © efalcollection 2022{" "}
          </h6>
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
