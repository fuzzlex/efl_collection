import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelectedOrder } from "../redux/actions/shopActions";

const OrderTracking = () => {
    const dispatch = useDispatch()
    const selectedOrder = useSelector(
        (state) => state.shopReducer.selectedOrder
      )
      const [selectedOrderNumber , setSelectedOrderNumber] = useState()
      const [selectedEmail , setSelectedEmail] = useState()

    const handleSubmit = (e) =>{
        e.preventDefault()
        dispatch(fetchSelectedOrder(selectedOrderNumber))
    }
    console.log(selectedOrder)
    
  return (
    <div
      style={{ display: "flex", justifyContent: "center", minHeight: "80vh", flexDirection:"column", alignItems:"center" }}
    >
      <div
        style={{
          maxWidth: "20rem",
          height: "20rem",
          border: "1px solid gray",
          display: "flex",
          justifyContent: "center",
          padding:"1rem",
          margin:"1.5rem"
        }}
      >
        <Form onSubmit={handleSubmit}>
          <h3>Sipariş Takip Formu</h3>

          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              required
              type="text"
              placeholder="e-posta"
              className="contact-inf-form-2"
              value={selectedOrderNumber}
              onChange={(e) =>
                setSelectedOrderNumber(e.target.value)
              }
            />
            <label className="d-flex" htmlFor="floatingInputCustom">
              {/* <AiOutlineUser style={{ marginRight: "0.7rem" }} /> */}
              Sipariş Numarası
            </label>
          </Form.Floating>
          <Form.Floating className="mb-3">
            <Form.Control
              id="floatingInputCustom"
              required
              type="e-mail"
              placeholder="e-posta"
              className="contact-inf-form-2"
              value={selectedEmail}
              onChange={(e) =>
                setSelectedEmail(e.target.value)
              } 
            />
            <label className="d-flex" htmlFor="floatingInputCustom">
              {/* <AiOutlineUser style={{ marginRight: "0.7rem" }} /> */}
              E-posta Adresi
            </label>
          </Form.Floating>
          <Button type="submit">Gönder</Button>
        </Form>
      </div>
      {selectedOrder?.id == selectedOrderNumber ? 
        <div style={{width:"90vw", minHeight:"15vh", border:"1px solid gray", display:"flex", justifyContent:"center", alignItems:"center", flexWrap:"wrap"}}>
        <h3 style={{margin:"1rem"}}>Sipariş No: {selectedOrder?.id}</h3>
        <h3 style={{margin:"1rem"}}>İsim Soyisim: {selectedOrder?.name_surname?.toUpperCase()}</h3>
        <h3 style={{margin:"1rem"}}>Sipariş Tarihi : {selectedOrder?.date}</h3>
        <h3 style={{margin:"1rem"}}>Kargo Durumu : {selectedOrder?.shipmentState}</h3>


</div> : <></> }
      
    </div>
  );
};

export default OrderTracking;
