import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Helmet } from 'react-helmet-async'

const AboutUs = () => {
  return (
    <>
    <Helmet>
      <title>Hakkımızda</title>
      <meta name='description' content="Efal Collection Kuruluş amaçları misyon vizyon" />
      <link rel='canonical' href='/aboutus' />
    </Helmet>
    <div style={{padding:"3rem"}}>
        <h1 style={{textAlign:"center"}}>HAKKIMIZDA</h1>
        <hr/>
    <Row className='d-flex justify-content-center align-items-center'>
    <Col sm={12} md={6}>
        <img style={{width:"25rem"}} src='https://i.pinimg.com/564x/a7/3e/89/a73e8927b985a773356f44e1c3d00ebb.jpg' />

    </Col>
    <Col sm={0} md={6} className="mt-2">
        <p>Efal Collection olarak kurulduğumuz günden itibaren Tesettür giyimde müşterilerin ihtiyaçlarına uygun olarak çözümler sunmayı,   tesettür giyimde en zengin içerikler ile ürün çeşitliliğini sağlayarak en uygun fiyatlar sunarak müşteri memnuniyetini sağlamayı hedeflemekteyiz.Modellerimiz bir tesettür nasıl olması gerekiyorsa ona uygun olarak dizayn edilmektedir.Kaliteden ödün vermeyerek her aşamada özenle gözden geçirilip kontrol edilen ürünlerimizi gönül rahatlığı ile alabilirsiniz.Ürünlerimiz  adına sorulacak sorulara hızlı bir şekilde irtibat hattımız üzerinden dönüşler alabilirsiniz.İyi alışverişler dileriz.  </p>

    </Col>

    </Row>
    </div>
    </>
  )
}

export default AboutUs