import React from "react";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import Checkout from "../components/Checkout";
import "./ShoppingArea.css"

const ShoppingArea = () => {
  
//   const toFindDuplicates = arry => arry.filter((item, index) => arry.indexOf(item) === index)
// const duplicateElementa = toFindDuplicates(addedProducds);
//   console.log(duplicateElementa)
//   const setAddedProducts = new Set(addedProducds)
//   console.log(setAddedProducts)



  return (
    <div>
      <Checkout/>
    </div>
  )
};

export default ShoppingArea;
