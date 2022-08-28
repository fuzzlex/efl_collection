import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { CgShoppingCart } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { addCard, fetchAllData } from "../redux/actions/shopActions";
import { useNavigate } from "react-router-dom";

import "./Card.css"

const Cards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchAllData());
  }, []);

  const handleAddCard = (item) => {
    console.log(item)
    const newItem = {
      ...item,
      productSellAmount : item.productSellAmount + 1
    }
    console.log(item)

    dispatch(addCard(newItem));
  };
  const filteredList = useSelector((state) => state.shopReducer.productList);
  const handler = (cardInfo) => {
    navigate("details", {state : {cardInfo}})
  }
  

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      {filteredList?.map((item) => (
        <Card  key={item.id} className="card">
          <Card.Img onClick={() => handler(item) } variant="top" className="cardimage" src={item.img} />
          <Card.Body className="card-body">
            <Card.Title onClick={() => handler(item) }>{item.title}</Card.Title>
            <Card.Text onClick={() => handler(item) } className="cardprice">{item.price}.00 TL</Card.Text>
            <Button
              className="addtocard"
              onClick={() => handleAddCard(item)}
              variant="dark"
            >
              <CgShoppingCart className="shop" />

              SEPETE EKLE
            </Button>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default Cards;
