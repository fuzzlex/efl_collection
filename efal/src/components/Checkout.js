import React, { useEffect, useState } from "react";
import "./Checkout.css";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Modal from 'react-bootstrap/Modal';
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
  fetchOrderCheckoutProducts,
  subtractShoppingArea,
} from "../redux/actions/shopActions";
import { useDispatch, useSelector } from "react-redux";
import { format } from "date-fns";
import { useNavigate } from "react-router-dom";
import AgreementModal from "./Modals/AgreementModal";
import AgreementDangerModal from "./Modals/AgreementDangerModal";

const Checkout = () => {
  const { cities } = useTurkeyCities();
  const addedProducts = useSelector(
    (state) => state.shopReducer.toAddedProduct
  );


  const dispatch = useDispatch();
  const navigate = useNavigate();
  const priceList = addedProducts.map(
    (product) => product.productAmount * product.price
  );

  const shippingPrice = 0;
  const totalPrice = priceList.reduce((pre, curr) => pre + curr, 0);
  const taxPrice = parseFloat(
    priceList.reduce((pre, curr) => pre + curr, 0) * 0.18
  );
  const allImageList = useSelector((state) => state.shopReducer.selectedImage); 

  const initialOrder = {
    name_surname: "",
    email: "",
    telephone: "",
    address: "",
    city: "",
    postcode: "",
    all_total_price: "",
    isPayed : false,
    products: []
  };
  const [order, setOrder] = useState(initialOrder);
  const [isApparove, setApprove] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [isAgreement, setAgrement] = useState(false);
  const [agreementModal, setAgrementModal] = useState(false);
  const [agreementDangerModal, setAgrementDangerModal] = useState(false);
  const [uuid, setUuid] = useState();
  function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 1000));
  }
  useEffect(() => {
    const randomChars = Math.floor(Date.now() / 1000)
      .toString(36)
      .toUpperCase();
    setUuid(randomChars);
  }, []);


  const handleApproveOrder = (e) => {
    e.preventDefault();
    if(isAgreement){
    setClicked(true);
    simulateNetworkRequest().then(() => {
      setApprove(true);
    });
    addedProducts.forEach((product) =>
      addCheckoutProduct({
        orderNumber: uuid,
        date: format(new Date(), "dd/MM/yyyy"),
        title: product.title,
        price: product.price,
        productAmount: product.productAmount,
        totalPrice: Number(product.price) * Number(product.productAmount),
      })
    );}
    else{
      setAgrementDangerModal(true)

    }

    // setApprove(true);
  };
  const handleSubmit =  (e) => {
   navigate("/payment",  {state: {order, uuid}})

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
      <div className="container-main-section">
        <div className="main">
          <Form>
            <h3>Kargo İletişim Bilgileri</h3>

            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="e-posta"
                className="contact-inf-form"
                value={order.name_surname}
                onChange={(e) =>
                  setOrder({ ...order, name_surname: e.target.value })
                }
              />
              <label htmlFor="floatingInputCustom">
                <AiOutlineUser style={{ marginRight: "0.7rem" }} />
                İsim Soyisim
              </label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="email"
                placeholder="e-posta"
                className="contact-inf-form"
                value={order.email}
                onChange={(e) => setOrder({ ...order, email: e.target.value })}
              />
              <label htmlFor="floatingInputCustom">
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
                type="number"
                placeholder="e-posta"
                className="contact-inf-form"
                value={order.telephone}
                onChange={(e) =>
                  setOrder({ ...order, telephone: e.target.value })
                }
              />
              <label htmlFor="floatingInputCustom">
                <BsTelephoneForward style={{ marginRight: "0.7rem" }} />
                Telefon Numarası
              </label>
            </Form.Floating>
            <br />
            <h3>Adres Bilgileri</h3>
            <FloatingLabel controlId="floatingTextarea2" label="Adres">
              <Form.Control
                as="textarea"
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
                aria-label="Floating label select example"
                onChange={(e) => setOrder({ ...order, city: e.target.value })}
              >
                {cities.map((city) => (
                  <option value={city}>{city}</option>
                ))}
              </Form.Select>
            </FloatingLabel>
            <br />

            <Form.Floating className="mb-3">
              <Form.Control
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

            <div className="continue-submit">
              <input onClick={handleSubmit} type="submit" value="Continue" />
            </div>
          </Form>
        </div>

        <div className="sectionBuy">
          <div className="containerBuy">
            {
              allImageList.map(image => (
              addedProducts
              .sort((a, b) => a.price.localeCompare(b.price))
              .map((product, index) => 
                image.id == product.images[0] && 
                <div key={product.id} className="buy-vintage" id="products">
                  <img className="buyimg" src={image.img1} alt="" />
                  <div className="buy-vintage_text">
                    <h3>{product.title}</h3>
                    <h4>
                      <strong>{product.price},00</strong> TL
                      <del> {product.price} TL</del>
                    </h4>

                    <div className="buy-vintage_text__button_vintage productEl">
                      <h5
                        onClick={() => dispatch(subtractShoppingArea(product))}
                        id="subtract1"
                        className="eksi"
                      >
                        -
                      </h5>
                      <h5 id="numberVin">{product.productAmount}</h5>
                      <h5
                        onClick={() => dispatch(addShoppingArea(product))}
                        id="plus1"
                        className="plusEl"
                      >
                        +
                      </h5>
                    </div>
                    <h6 className="totalPriceProduct">
                      Toplam :{" "}
                      <strong>
                        {(product.productAmount * product.price).toFixed(2)} TL
                      </strong>
                    </h6>
                  </div>
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
              )))}

            <div className="footerBuy">
              <div className="shipping" id="ship">
                <h6>Kargo Ücreti</h6>
                <h4>{shippingPrice.toFixed(2)} TL</h4>
              </div>
              <div className="total">
                <h6>Toplam</h6>
                <h4 id="totalCheck">
                  <strong>{totalPrice.toFixed(2)}TL</strong>
                </h4>
              </div>
              <div className="shipping" id="tax">
                <h6>Vergiler(%18)</h6>
                <h4>{taxPrice.toFixed(2)} TL</h4>
              </div>
              <div className="shipping cartTotal">
                <h6>Ödenecek Toplam Ücret</h6>
                <h4>
                  <strong style={{ color: "orangered" }}>
                    {shippingPrice + totalPrice + taxPrice} TL
                  </strong>
                </h4>
              </div>
              {shippingPrice + totalPrice + taxPrice !== 0 && 
              <Form>
        <div className="mb-3">

          <Form.Check  type="checkbox" id={`check-api-checkbox`}>
            <Form.Check.Input disabled={clicked} onChange={(e) => setAgrement(e.target.checked)}    type="checkbox" isValid={isAgreement} />
            <Form.Check.Label ><b onClick={() => setAgrementModal(true) && setAgrement(false)} style={{color:isAgreement ? "green" : "blue", cursor:"pointer"}}>Mesafeli Satın Alma Sözleşmesini</b> okudum onaylıyorum</Form.Check.Label>
            <Form.Control.Feedback type="valid">
              Onaylandı!
            </Form.Control.Feedback>
          </Form.Check>
        </div>
    </Form>
              }

              <div className="submit-buttons">
                <Button
                  variant={
                    !isApparove && shippingPrice + totalPrice + taxPrice !== 0
                      ? "primary"
                      : "success"
                  }
                  onClick={handleApproveOrder}
                  disabled={shippingPrice + totalPrice + taxPrice === 0}
                >
                  {clicked && !isApparove ? (
                    <Spinner
                      as="span"
                      animation="border"
                      size="sm"
                      role="status"
                      aria-hidden="true"
                    />
                  ) : isApparove &&
                    shippingPrice + totalPrice + taxPrice !== 0 ? (
                    <>
                      Toplam :{" "}
                      <p>
                        {shippingPrice + totalPrice + taxPrice + " " + "TL"}
                      </p>
                    </>
                  ) : shippingPrice + totalPrice + taxPrice === 0 ? (
                    "Lütfen ürün ekleyiniz"
                  ) : (
                    "Siparişi Onayla"
                  )}
                </Button>
                <Button
                  className="w-5"
                  variant="danger"
                  onClick={() =>
                    addedProducts.forEach((product) =>
                      dispatch(subtractShoppingArea(product))
                    )
                  }
                >
                  {"Siparişi İptal Et/ Sepeti Boşalt"}
                </Button>
              </div>
              <div className="submit-buttons">
                {isApparove && shippingPrice + totalPrice + taxPrice !== 0 && (
                  <Button
                    onClick={handleSubmit}
                    className="w-5 mt-3"
                    variant="info"
                    
                  >
                    {"Sipariş Onaylandı Ödeme işlemlerine Devam Et >>"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
