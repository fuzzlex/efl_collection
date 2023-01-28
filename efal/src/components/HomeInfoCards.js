import React from 'react'
import { Col, Row } from 'react-bootstrap'
import DeliverTruck from "../assets/delivery.png"
import Verified from "../assets/verified.png"
import CreditCard from "../assets/credit-card.png"
import OnlineShop from "../assets/online-shop.png"

const HomeInfoCards = () => {
  return (
    <div>
        <Row  className="p-4 d-flex justify-content-start">
            <Col className="bg-secondary p-3 d-flex align-items-center border border-2 border-white" xs={12} md={6} xl={3}>
                <img className='w-25' src={DeliverTruck} alt="icon" />
                <div className="text-light  ms-4">
                <h5 ><b>Ücretsiz Kargo</b></h5>
                <p>Siparişleriniz aynı gün kargoya verilerek hızlı bir şekilde ulaştrılmaktadır.</p>
                </div>
            </Col>
            <Col className="bg-secondary p-3 d-flex align-items-center border border-2 border-white" xs={12} md={6} xl={3}>
            <img className='w-25' src={Verified} alt="icon"  />
                <div className="text-light  ms-4">
                <h5 ><b>Güvenli Alışveriş</b></h5>
                <p>Alışverişlerinizde Kişisel Bilgileriniz ve Ödeme Bilgileriniz Güven Altındadır.</p>
                </div>

            </Col>
            <Col className="bg-secondary p-3 d-flex align-items-center border border-2 border-white" xs={12} md={6} xl={3}>
            <img className='w-25' src={CreditCard} alt="icon"  />
                <div className="text-light  ms-4">
                <h5 ><b>Kredi Kartı ile alışveriş</b></h5>
                <p>Alışverişlerinizde kredi kartınızı güvenli bir şekilde kullanabilirsiniz.</p>
                </div>
            </Col>
            <Col style={{minWidth:"16rem"}}  className="bg-secondary p-3 d-flex align-items-center border border-2 border-white " xs={12} md={6} xl={3}>
            <img className='w-25' src={OnlineShop} alt="icon"  />
                <div className="text-light  ms-4">
                <h5 ><b>Sipariş Takibi</b></h5>
                <p>Siparişlerinizi sitemiz üzerinden takip edebilirsiniz.</p>
                </div>
            </Col>
        </Row>
    </div>
  )
}

export default HomeInfoCards