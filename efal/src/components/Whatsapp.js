import React from "react";
import WhatsappPng from "../assets/whatsapp.png"

const Whatsapp = () => {
  return (
    <div style={{ position: "fixed", right: "1rem", bottom: "1rem", zIndex:"999", opacity:"0.9" }}>
      {" "}
      {window.screen.width > 500 ? 
      <a
        href="https://web.whatsapp.com/send?phone=905431719431&text&app_absent=0"
        target="_blank"
      >     <img style={{maxWidth:"3.5rem"}} src={WhatsappPng} alt="whatsapp" />
      </a> : 
      <a href="https://wa.me/905431719431" ><img style={{maxWidth:"3.5rem"}} src={WhatsappPng} alt="whatsapp" />
      </a>
      
      }
    
    </div>
  );
};

export default Whatsapp;
