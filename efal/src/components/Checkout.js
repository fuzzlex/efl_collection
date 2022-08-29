import React, { useEffect, useState } from "react";
import "./Checkout.css";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import useTurkeyCities from "use-turkey-cities";

import Form from "react-bootstrap/Form";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineUser } from "react-icons/ai";
import { BsTelephoneForward } from "react-icons/bs";
import { MdDelete } from "react-icons/md";
import { FaRegAddressCard } from "react-icons/fa";
import { addShoppingArea, subtractShoppingArea } from "../redux/actions/shopActions";
import { useDispatch, useSelector } from "react-redux";

const Checkout = () => {
  const { cities } = useTurkeyCities();
  const addedProducts = useSelector((state) => state.shopReducer.toAddedProduct);

  const dispatch = useDispatch();
  useEffect(() => {
  
  }, [])
  const priceList = addedProducts.map(product => 
    product.productAmount * product.price )

const shippingPrice = 0;
const totalPrice = priceList.reduce((pre, curr) => pre + curr, 0);
const taxPrice = parseFloat(priceList.reduce((pre, curr) => pre + curr, 0) * 0.18)

  




  return (
    <div className="container">
      <div className="header">
        <p>Sepetim</p>
      </div>
      <div className="main">
        <div className="contac-inf">
          <Form>
          <h3>Kargo İletişim Bilgileri</h3>

            <Form.Floating className="mb-3">
              <Form.Control
                id="floatingInputCustom"
                type="text"
                placeholder="e-posta"
                className="contact-inf-form"
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

              />
            </FloatingLabel>
            <br />

            <FloatingLabel controlId="floatingSelect" label="Şehir">
              <Form.Select aria-label="Floating label select example">
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

              />
              <label htmlFor="floatingInputCustom">Posta Kodu</label>
            </Form.Floating>

            <div className="continue-submit">
              <input type="submit" value="Continue" />
            </div>
          </Form>
        </div>
        <div className="sectionBuy">
          <div className="containerBuy">
            {addedProducts.sort((a,b) => a.price.localeCompare(b.price)).map((product, index) => (
              <div key={product.id} className="buy-vintage" id="products">
                <img className="buyimg" src={product.img} alt="" />
                <div className="buy-vintage_text">
                  <h3>{product.title}</h3>
                  <h4>
                    <strong>{product.price},00</strong> TL
                    <del> {product.price} TL</del>
                  </h4>  




                  <div className="buy-vintage_text__button_vintage productEl">
                    <h5 onClick={() => dispatch(subtractShoppingArea(product))} id="subtract1" className="eksi">
                      -
                    </h5>
                    <h5 id="numberVin">{product.productAmount}</h5>
                    <h5 onClick={() => dispatch(addShoppingArea(product))} id="plus1" className="plusEl">
                      +
                    </h5>
                  </div>
                  <h6 className="totalPriceProduct">
                    Toplam : <strong>{(product.productAmount * product.price).toFixed(2) } TL</strong>
                  </h6>
                </div>
                <div style={{height:"inherit", display:"flex", alignItems:"center"}}>
                <MdDelete onClick={() => dispatch(subtractShoppingArea({...product, productAmount:1}))} style={{fontSize:"2rem", cursor:"pointer"}} />

                </div>
              </div>
            ))}

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
                <h4><strong style={{color:"orangered"}}>{shippingPrice + totalPrice + taxPrice } TL</strong></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
