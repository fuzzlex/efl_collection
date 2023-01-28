import React from "react";
import { ImLocation2 } from "react-icons/im";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { Col, Row } from "react-bootstrap";
const Contact = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>İLETİŞİM</h1>
      <hr />
      <br />
      <br />
      <br />
      <Row className="d-flex align-items-center justify-content-center">
        <Col xs={12} sm={6} md={4}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              padding:"2rem"            }}
          >
            <ImLocation2 style={{ fontSize: "3rem", color: "orangered" }} />
            <br />
            <h3>
              <b>Adres</b>
            </h3>
            <p>
              Necip Fazıl Mah. Yozgat Cad. No:33 İç Kap.No:2 Sultanbeyli /
              İstanbul
            </p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              // width: "20rem",
            }}
          >
            <BsFillTelephoneInboundFill
              style={{ fontSize: "3rem", color: "orangered" }}
            />
            <br />
            <h3>
              <b>Telefon</b>
            </h3>
            <p>+90 543 171 9431</p>
          </div>
        </Col>
        <Col xs={12} sm={6} md={4}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              // width: "20rem",
            }}
          >
            <MdMarkEmailUnread
              style={{ fontSize: "3rem", color: "orangered" }}
            />
            <br />
            <h3>
              <b>E-Posta</b>
            </h3>
            <p>info@efalcollection.com</p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
