import React from "react";
import {ImLocation2} from "react-icons/im"
import {BsFillTelephoneInboundFill} from "react-icons/bs"
import {MdMarkEmailUnread} from "react-icons/md"
const Contact = () => {
  return (
    <div style={{height:"50vh"}}>
    <h1 style={{textAlign:"center"}}>İLETİŞİM</h1>
    <hr />
    <br/>
    <br/>
    <br/>
    <div style={{display:"flex", justifyContent:"space-evenly", alignItems:"center"}}>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", width:"20rem"}}>
            <ImLocation2 style={{fontSize:"3rem", color:"orangered"}} />
            <br />
            <h3><b>Adres</b></h3>
            <p>Necip Fazıl Mah. Yozgat Cad. No:33 İç Kap.No:2 Sultanbeyli / İstanbul</p>

        </div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column",width:"20rem"}}>
            <BsFillTelephoneInboundFill style={{fontSize:"3rem", color:"orangered"}} />
            <br />
            <h3><b>Telefon</b></h3>
            <p>+90 543 171 9431</p>
        </div>
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column",width:"20rem"}}>
            <MdMarkEmailUnread style={{fontSize:"3rem", color:"orangered"}} />
            <br />
            <h3><b>E-Posta</b></h3>
            <p>info@efalcollection.com</p>
        </div>
    </div>

  
    </div>
  );
};

export default Contact;
