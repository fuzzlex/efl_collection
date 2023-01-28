import React, { useEffect, useRef, useState } from "react";
import { render } from "react-dom";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";

import SupportedCards from "./Cards";
import { GoCreditCard } from "react-icons/go";
import { BiUserCircle } from "react-icons/bi";
import FloatingLabel from "react-bootstrap/FloatingLabel";

import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData,
} from "./utils";
import "./styles.css";

import "react-credit-cards/es/styles-compiled.css";
import { Form } from "react-bootstrap";
import { sendCardInfo } from "../../redux/actions/shopActions";

const PaymentMain = () => {
  const state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null,
  };
  const [payment, setPayment] = useState(state);




  return (
    <div>
      <div className="app-payment">
        <div>
          <h1>Ödeme</h1>
        </div>
        <div className="card-details">
          <div style={{ width: "20rem" }}>
            <Cards
              number={payment.number}
              name={payment.name}
              expiry={payment.expiry}
              cvc={payment.cvc}
              focused={payment.focused}
              className="card-image"
              placeholders={{ name: "İSİM SOYİSİM" }}
              style={{ width: "100%" }}
            />
          </div>
          {/* <Form>
            <h3>Kredi Kartı Bilgileri</h3>

            <Form.Floating className="mb-3">
              <Form.Control
                // type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                required
                value={formatCreditCardNumber(payment.number)}
                onChange={(e) =>
                  setPayment({ ...payment, number: e.target.value })
                }
                onFocus={(e) =>
                  setPayment({ ...payment, focused: e.target.name })
                }
              />
              <label htmlFor="floatingInputCustom">
                <GoCreditCard style={{ marginRight: "0.7rem" }} />
                Kart Numarası
              </label>
            </Form.Floating>
            <Form.Floating className="mb-3">
              <Form.Control
                //   type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                value={payment.name}
                onChange={(e) =>
                  setPayment({ ...payment, name: e.target.value })
                }
                onFocus={(e) =>
                  setPayment({ ...payment, focused: e.target.name })
                }
              />
              <label htmlFor="floatingInputCustom">
                <BiUserCircle style={{ marginRight: "0.7rem" }} />
                İsim - Soyisim
              </label>
            </Form.Floating>

            <Form.Floating className="mb-3">
              <Form.Control
                // type="tel"
                name="expiry"
                className="form-control"
                placeholder="Valid Thru"
                required
                value={formatExpirationDate(payment.expiry)}
                onChange={(e) =>
                  setPayment({ ...payment, expiry: e.target.value })
                }
                onFocus={(e) =>
                  setPayment({ ...payment, focused: e.target.name })
                }
              />
              <label htmlFor="floatingInputCustom">Son Kullanma Tarihi</label>
            </Form.Floating>
            <FloatingLabel controlId="floatingTextarea2" label="CVC">
              <Form.Control
                // type="tel"
                name="cvc"
                className="form-control"
                placeholder="CVC"
                required
                value={formatCVC(payment.cvc)}
                onChange={(e) =>
                  setPayment({ ...payment, cvc: e.target.value })
                }
                onFocus={(e) =>
                  setPayment({ ...payment, focused: e.target.name })
                }
              />
            </FloatingLabel>

            <div className="continue-submit">
              <input onClick={handleSubmit} type="submit" value="Continue" />
            </div>
          </Form> */}
        </div>

        {/* <SupportedCards /> */}
      </div>
    </div>
  );
};
export default PaymentMain;
