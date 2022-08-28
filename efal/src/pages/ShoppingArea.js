import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const ShoppingArea = () => {
  const addedProducds = useSelector((state) => state.shopReducer.toAddedProduct);
  const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) === index)
const duplicateElementa = toFindDuplicates(addedProducds);
  console.log(duplicateElementa)
  const setAddedProducts = new Set(addedProducds)
  console.log(setAddedProducts)



  return (
    <div>
      {addedProducds?.map((item) =>
          <Card key={item.id} className="shoppedcard">
            <Card.Img
              variant="top"
              className="shoppedcardimage"
              src={item.img}
            />
            <Card.Body className="shoppedcardtext">
              <Card.Title>{item.title}</Card.Title>
              <Card.Text className="cardprice">{item.price}$</Card.Text>
              <Card.Text className="cardprice">{item.desc}</Card.Text>
            </Card.Body>
          </Card>
        )}
    </div>
  );
};

export default ShoppingArea;
