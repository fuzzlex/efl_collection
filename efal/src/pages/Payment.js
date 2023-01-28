import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PaymentMain from "../components/payment";
import {
  addOrder,
  fetchCsrfToken,
  fetchOrderCheckoutProducts,
  fetchSelectedOrder,
  getCookie,
  sendCardInfo,
} from "../redux/actions/shopActions";
import { API_URL } from "../components/config/index";
import jQuery from 'jquery'
import CSRFToken from "../components/CRFToken";

const Payment = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const complatedOrder = location.state.complatedOrder;
  const [csrfToken, setCsrfToken] = useState()
  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // const sendedOrder = useSelector((state) => state.shopReducer.selectedOrder);
 
  useEffect(() => {
    (fetchCsrfToken().then(res => setCsrfToken(res)));
    
  }, [])
  


  return (
    <div style={{ padding: "2rem" }}>
      <Tabs
        defaultActiveKey="home"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="Kredi Kartı ile Ödeme">
          <PaymentMain />
          <form
            style={{ textAlign: "center", marginTop: "2rem" }}
            action={`${API_URL}/payment/checkout/`}
            method="POST"
          >
          <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
            <input type="hidden" name="csrf_token" value={csrfToken} />
            <input type="hidden" name="order" value={complatedOrder.id} />
            <input type="hidden" name="products" value={complatedOrder.products} />   
            <Button type="submit">Kredi Kartı İle Öde</Button>
          </form>
        </Tab>
        <Tab eventKey="profile" title="EFT/ Havale ile Ödeme"></Tab>
        <Tab eventKey="longer-tab" title="Kapıda Ödeme"></Tab>
        {/* <Tab eventKey="contact" title="Contact"></Tab> */}
      </Tabs>
    </div>
  );
};

export default Payment;
