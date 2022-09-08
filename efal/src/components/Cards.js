import React, { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import { CgShoppingCart } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { updateProduct, addShoppingArea, fetchAllData, fetchAllImages } from "../redux/actions/shopActions";
import { useNavigate } from "react-router-dom";

import "./Card.css"
import { successNote } from "./Toasty";

const Cards = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(fetchAllData());
    dispatch(fetchAllImages());
  }, []);

  const handleAddCard = (product) => {
    const newItem = {
      ...product,
      productSellAmount: product.productSellAmount + 1,
      productAmount: 1

    };

    dispatch(addShoppingArea(newItem));
    successNote("Başarıyla Sepetinize Eklendi") 

  };
  const productList = useSelector((state) => state.shopReducer.productList);
  const imageList = useSelector((state) => state.shopReducer.selectedImage);
  console.log(productList)
  const sortedProducts = productList?.sort((a,b) => a?.title.localeCompare(b?.title))
  const handler = (cardInfo) => {
    navigate("details", {state : {cardInfo}})
  }
  console.log("productList", productList)
  console.log("imageList", imageList)
  productList.map(product => 
    imageList.map(image => 
      
      console.log(image.id )))
  

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}






    >
      {sortedProducts?.map((item, index) => 
        imageList?.map((image) => (
          item.images[0] == image.id && 
        <Card  key={item.id} className="card">
          <Card.Img onClick={() => handler(item) } variant="top" className="cardimage" src={image.img1 } />
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
      )))}
    </div>
  );
};

export default Cards;
