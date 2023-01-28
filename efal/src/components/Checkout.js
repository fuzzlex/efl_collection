import React, { useEffect, useState } from "react";
import "./Checkout.css";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Modal from "react-bootstrap/Modal";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import useTurkeyCities from "use-turkey-cities";

import Form from "react-bootstrap/Form";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import {
  addCheckoutProduct,
  addOrder,
  addShoppingArea,
  getCookie,
  subtractShoppingArea,
} from "../redux/actions/shopActions";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import AgreementModal from "./Modals/AgreementModal";
import AgreementDangerModal from "./Modals/AgreementDangerModal";
import { Col, FormCheck, Row } from "react-bootstrap";

const Checkout = () => {
  const { cities } = useTurkeyCities();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialOrder = {
    name_surname: "",
    email: "",
    telephone: "",
    address: "",
    city: "",
    postcode: "",
    all_total_price: "",
    isPayed: false,
    products: [],
    all_total_price: "",
    date: format(new Date(), "dd/MM/yyyy"),
    orderNumber: "",
    id: "",
  };

  const [order, setOrder] = useState(initialOrder);
  const [isApparove, setApprove] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isAgreement, setAgrement] = useState(false);
  const [agreementModal, setAgrementModal] = useState(false);
  const [agreementDangerModal, setAgrementDangerModal] = useState(false);
  const [campaignCode, setCampaignCode] = useState();
  const [campaignCodeAprroved, setCampaignCodeApproved] = useState("");
  const [uuid, setUuid] = useState();

  const addedProducts = useSelector(
    (state) => state.shopReducer.toAddedProduct
  );

  const priceList = addedProducts.map(
    (product) => product.productAmount * product.price
  );

  const shippingPrice = 0;
  const taxPrice = parseFloat(
    priceList.reduce((pre, curr) => pre + curr, 0) * 0.18
  ).toFixed(2);
  const totalPrice = (
    priceList.reduce((pre, curr) => pre + curr, 0).toFixed(2) - taxPrice
  ).toFixed(2);

  const campaignCodeList = ["654879"]
   const handleApproveCampaignCode = () =>{
    campaignCodeList.includes(campaignCode) ? setCampaignCodeApproved("approved") : setCampaignCodeApproved("notApproved")
    setCampaignCode("")
   }

  const allTotalPrice = shippingPrice + Number(totalPrice) + Number(taxPrice) - Number(campaignCodeAprroved === "approved" ? 50.00 : 0.00);

  const allImageList = useSelector((state) => state.shopReducer.allImage);

  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
  useEffect(() => {
    const randomChars = Math.floor(Date.now() / 1000)
      .toString(36)
      .toUpperCase();
    setUuid(randomChars);
    getCookie("csrftoken")
  }, []);

  const handleApproveOrder = (e) => {
    e.preventDefault();
    if (isAgreement) {
      setClicked(true);
      simulateNetworkRequest().then(() => {
        setApprove(true);
      });
      addedProducts.forEach((product, index) =>
        addCheckoutProduct({
          orderNumber: uuid,
          date: format(new Date(), "dd/MM/yyyy"),
          title: product.title,
          price: Number(product.price) - Number(campaignCodeAprroved === "approved" ? 50.00 : 0.00) ,
          productAmount: product.productAmount,
          totalPrice: Number(product.price) * Number(product.productAmount)  - (Number(campaignCodeAprroved === "approved" ? 50.00 : 0.00)),
          id: uuid + index,
        })
      );
    } else {
      setAgrementDangerModal(true);
    }

    // setApprove(true);
  };
  const handleSubmit = (e) => {
    console.log(allTotalPrice.toFixed(2))
    addOrder({
      ...order,
      products: addedProducts?.map((product, index) => `${uuid + index}`),
      all_total_price: allTotalPrice.toFixed(2),
      orderNumber: uuid,
      id: uuid,
    });
    navigate("/payment", {
      state: {
        complatedOrder: {
          ...order,
          products: addedProducts?.map((product, index) => `${uuid + index}`),
          all_total_price: allTotalPrice.toFixed(2),
          orderNumber: uuid,
          id: uuid,
        },
      },
    });
  };

  return (
    <div className="checkout-root">
      <AgreementModal
        show={agreementModal}
        onHide={() => setAgrementModal(false)}
      />
      <AgreementDangerModal
        show={agreementDangerModal}
        onHide={() => setAgrementDangerModal(false)}
      />

      <div className="header">
        <p>Sepetim</p>
      </div>
      <Form className="container-main-section" onSubmit={handleSubmit}>
        <Row>
          <Col md={7}>
            <div className="main">
              <h3>Kargo İletişim Bilgileri</h3>

              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  required
                  type="text"
                  placeholder="e-posta"
                  className="contact-inf-form"
                  value={order.name_surname}
                  onChange={(e) =>
                    setOrder({ ...order, name_surname: e.target.value })
                  }
                />
                <label className="d-flex" htmlFor="floatingInputCustom">
                  <AiOutlineUser style={{ marginRight: "0.7rem" }} />
                  İsim Soyisim
                </label>
              </Form.Floating>
              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  required
                  type="email"
                  placeholder="e-posta"
                  className="contact-inf-form"
                  value={order.email.toLowerCase()}
                  onChange={(e) =>
                    setOrder({ ...order, email: e.target.value.toLowerCase() })
                  }
                />
                <label className="d-flex" htmlFor="floatingInputCustom">
                  <HiOutlineMail style={{ marginRight: "0.7rem" }} />
                  E-Posta
                </label>
                <Form.Text className="text-muted">
                  Lütfen sipariş takibi için e-posta adresi giriniz!
                </Form.Text>
              </Form.Floating>

              <Form.Floating className="mb-3">
                <Form.Control
                  id="floatingInputCustom"
                  required
                  type="number"
                  placeholder="e-posta"
                  className="contact-inf-form"
                  value={order.telephone}
                  onChange={(e) =>
                    setOrder({ ...order, telephone: e.target.value })
                  }
                />
                <label className="d-flex" htmlFor="floatingInputCustom">
                  <BsTelephoneForward style={{ marginRight: "0.7rem" }} />
                  Telefon Numarası
                </label>
              </Form.Floating>
              <br />
              <h3>Adres Bilgileri</h3>
              <FloatingLabel controlId="floatingTextarea2" label="Adres">
                <Form.Control
                  as="textarea"
                  required
                  placeholder="Leave a comment here"
                  style={{ height: "100px" }}
                  className="contact-inf-form"
                  value={order.address}
                  onChange={(e) =>
                    setOrder({ ...order, address: e.target.value })
                  }
                />
              </FloatingLabel>
              <br />

              <FloatingLabel controlId="floatingSelect" label="Şehir">
                <Form.Select
                  required={order.city === ""}
                  aria-label="Floating label select example"
                  className="contact-inf-form"
                  onChange={(e) => setOrder({ ...order, city: e.target.value })}
                >
                  <option value={""}>Şehir Seçiniz</option>
                  {cities.map((city) => (
                    <option value={city}>{city}</option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              <br />

              <Form.Floating className="mb-3 d-flex">
                <Form.Control
                  required
                  id="floatingInputCustom"
                  type="number"
                  placeholder="e-posta"
                  className="contact-inf-form"
                  value={order.postcode}
                  onChange={(e) =>
                    setOrder({ ...order, postcode: e.target.value })
                  }
                />
                <label htmlFor="floatingInputCustom">Posta Kodu</label>
              </Form.Floating>

              {/* <div className="continue-submit">
              <input onClick={handleSubmit} type="submit" value="Continue" />
            </div> */}
            </div>
          </Col>
          <Col md={5}>
            <div className="sectionBuy">
              {allImageList.map((image) =>
                addedProducts
                  .sort((a, b) => a.price.localeCompare(b.price))
                  .map(
                    (product, index) =>
                      image.id == product.images[0] && (
                        <div
                          key={product.id}
                          className="buy-vintage"
                          id="products"
                        >
                          <Row>
                            <Col xs={4} >
                              <img className="buyimg" src={image.img1Seo} alt="Satın Alınan Ürün " />
                            </Col>
                            <Col xs={8}>
                              <div className="buy-vintage_text">
                                <h3>{product.title}</h3>
                                <h4 className="d-flex flex-wrap">
                                  <strong>{product.price},00</strong> TL
                                  <del> {Number(product.price) + 50},00 TL</del>
                                </h4>

                                <div className="buy-vintage_text__button_vintage productEl">
                                  <h5
                                    onClick={() =>
                                      dispatch(subtractShoppingArea(product))
                                    }
                                    id="subtract1"
                                    className="eksi"
                                  >
                                    -
                                  </h5>
                                  <h5 id="numberVin">
                                    {product.productAmount}
                                  </h5>
                                  <h5
                                    onClick={() =>
                                      dispatch(addShoppingArea(product))
                                    }
                                    id="plus1"
                                    className="plusEl"
                                  >
                                    +
                                  </h5>
                                </div>
                                <h6 className="totalPriceProduct">
                                  Toplam :{" "}
                                  <strong>
                                    {(
                                      product.productAmount * product.price
                                    ).toFixed(2)}{" "}
                                    TL
                                  </strong>
                                </h6>
                                <div
                                  style={{
                                    height: "inherit",
                                    display: "flex",
                                    alignItems: "center",
                                  }}
                                >
                                  <MdDelete
                                    onClick={() =>
                                      dispatch(
                                        subtractShoppingArea({
                                          ...product,
                                          productAmount: 1,
                                        })
                                      )
                                    }
                                    style={{
                                      fontSize: "2rem",
                                      cursor: "pointer",
                                      color: "orangered",
                                    }}
                                  />
                                </div>
                              </div>
                            </Col>
                          </Row>
                          <Form>
                          <Form.Floating className="mb-3 d-flex">
                <Form.Control
                  required
                  id="floatingInputCustom"
                  type="number"
                  placeholder="Kampanya Kodu"
                  className="contact-inf-form"
                  value={campaignCode}
                  onChange={(e) =>
                    setCampaignCode(e.target.value)
                  }
                />
                <label htmlFor="floatingInputCustom">Kampanya Kodu</label>
              </Form.Floating>
                <Button onClick={handleApproveCampaignCode} className="bg-dark">İndirim Uygula</Button>
                {campaignCodeAprroved === "approved" && <p><b className="text-success mt-3">Kampanya Kodu Geçerli 50 TL İndirim Uygulandı</b></p>}
                {campaignCodeAprroved === "notApproved" && <p><b className="text-danger mt-3">Kampanya Kodu Geçersiz!!</b></p>}
                          </Form>
                        </div>
                      )
                  )
              )}

              <div className="footerBuy">
                <div className="shipping" id="ship">
                  <h6>Kargo Ücreti</h6>
                  <h4>{shippingPrice.toFixed(2)} TL</h4>
                </div>
                <div className="total">
                  <h6>Toplam</h6>
                  <h4 id="totalCheck">
                    <strong>{totalPrice}TL</strong>
                  </h4>
                </div>
                <div className="shipping" id="tax">
                  <h6>Vergiler(%18)</h6>
                  <h4>{taxPrice} TL</h4>
                </div>
                <div className="shipping cartTotal">
                  <h6>Ödenecek Toplam Ücret</h6>
                  <h4>
                    <strong style={{ color: "orangered" }}>
                      {allTotalPrice.toFixed(2)} TL
                    </strong>
                  </h4>
                </div>
                {allTotalPrice !== 0 && (
                  <div className="mb-3">
                    <Form.Check type="checkbox" id={`check-api-checkbox`}>
                      <Form.Check.Input
                        disabled={clicked}
                        onChange={(e) => setAgrement(e.target.checked)}
                        type="checkbox"
                        isValid={isAgreement}
                      />
                      <Form.Check.Label>
                        <b
                          onClick={() =>
                            setAgrementModal(true) && setAgrement(false)
                          }
                          style={{
                            color: isAgreement ? "green" : "blue",
                            cursor: "pointer",
                          }}
                        >
                          Mesafeli Satın Alma Sözleşmesini
                        </b>{" "}
                        okudum onaylıyorum
                      </Form.Check.Label>
                      <Form.Control.Feedback type="valid">
                        Onaylandı!
                      </Form.Control.Feedback>
                    </Form.Check>
                  </div>
                )}

                <div className="submit-buttons">
                  <Button
                    variant={
                      !isApparove && allTotalPrice !== 0 ? "primary" : "success"
                    }
                    style={{ backgroundColor: "orangered" }}
                    onClick={(e) => handleApproveOrder(e)}
                    disabled={allTotalPrice === 0}
                  >
                    {clicked && !isApparove ? (
                      <Spinner
                        as="span"
                        animation="border"
                        size="sm"
                        role="status"
                        aria-hidden="true"
                      />
                    ) : isApparove && allTotalPrice !== 0 ? (
                      <>
                        Toplam : <p>{allTotalPrice + " " + "TL"}</p>
                      </>
                    ) : allTotalPrice === 0 ? (
                      "Lütfen ürün ekleyiniz"
                    ) : (
                      "Siparişi Onayla"
                    )}
                  </Button>
                  <button
                    className="w-5 bg-black text-white p-1"
                    onClick={() =>
                      addedProducts.forEach((product) =>
                        dispatch(subtractShoppingArea(product))
                      )
                    }
                  >
                    {"Siparişi İptal Et/ Sepeti Boşalt"}
                  </button>
                </div>
                <div className="submit-buttons">
                  {isApparove && allTotalPrice !== 0 && (
                    <Button className="w-5 mt-3" variant="info" type="submit">
                      {"Sipariş Onaylandı Ödeme işlemlerine Devam Et >>"}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default Checkout;
