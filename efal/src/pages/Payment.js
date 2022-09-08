import { format } from "date-fns";
import React, { useEffect } from "react";
import { Button, Tab, Tabs } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import PaymentMain from "../components/payment";
import {
  addOrder,
  fetchOrderCheckoutProducts,
} from "../redux/actions/shopActions";

const Payment = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const order = location.state.order;
  const uuid = location.state.uuid;
  const orderCheckoutProducts = useSelector(
    (state) => state.shopReducer.orderCheckoutProducts
  );
  useEffect(() => {
    dispatch(fetchOrderCheckoutProducts(uuid));
  }, []);
  const checkoutPriceList = orderCheckoutProducts.map(
    (product) => product.totalPrice
  );
  const allTotalPrice = checkoutPriceList.reduce(
    (pre, curr) => Number(pre) + Number(curr),
    0
  );
  const addedOrder = {
    ...order,
    products: orderCheckoutProducts?.map((product) => `${product.id}`),
    all_total_price: allTotalPrice,
    date: format(new Date(), "dd/MM/yyyy"),
    orderNumber: uuid,
  };
  const handleAddOrder = () => {
    addOrder(addedOrder);
  };

  console.log("order", addedOrder);

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
        </Tab>
        <Tab eventKey="profile" title="EFT/ Havale ile Ödeme">
        </Tab>
        <Tab eventKey="longer-tab" title="Kapıda Ödeme">
        </Tab>
        <Tab eventKey="contact" title="Contact">
        </Tab>
      </Tabs>
      <Button onClick={handleAddOrder}>Gönder</Button>
    </div>
  );
};

export default Payment;
