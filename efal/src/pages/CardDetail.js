import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./CardDetail.css";
import Form from "react-bootstrap/Form";
import { Button, Card } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProduct,
  addShoppingArea,
  fetchAllImages,
  addCommentInProduct,
  fetchSelectedComment,
} from "../redux/actions/shopActions";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { ImEye } from "react-icons/im";
import ReactImageMagnify from "react-image-magnify";
import { successNote } from "../components/Toasty";

const CardDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const cardDetails = location.state.cardInfo;
  console.log(cardDetails);
  const [productAmount, setProductAmount] = useState(1);
  const allImageList = useSelector((state) => state.shopReducer.selectedImage);
  const productComments = useSelector((state) => state.shopReducer.selectedComments);
  console.log("productComments", productComments)
  const selectedCardImages = allImageList?.filter(
    (image) => image.id == cardDetails.images[0]
  );

  const [loadImage, setLoadImage] = useState(selectedCardImages[0].img1);

  const initialComment = {
    productCode:cardDetails.id,
    email: "",
    name_surname: "",
    commentText: "",
  };
  const [comment, setComment] = useState(initialComment);

  const handleAddCard = (product) => {
    const newItem = {
      ...product,
      productSellAmount: product.productSellAmount + 1,
      productAmount: productAmount,
    };

    dispatch(addShoppingArea(newItem));
    successNote("Başarıyla Sepetinize Eklendi");
  };
  const handleAddVievs = (item) => {
    const newItem = {
      ...item,
      views: item.views + 1,
    };

    updateProduct(newItem);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    handleAddVievs(cardDetails);
    dispatch(fetchSelectedComment(cardDetails.id))
  }, []);
  const handleSelectImage = (image) => {
    setLoadImage(image);
    window.scrollTo(0, 0);
  };
  const handleSendComment = (e) =>{
    e.preventDefault();
    addCommentInProduct(comment)
    .then(dispatch(fetchSelectedComment(cardDetails.id)))
    .then(setComment(initialComment))
    .then(successNote("Yorumunuz Eklendi Teşekkür ederiz."))
      

    // .then(updateProduct({...cardDetails, comments:productComments.map(comment=> comment.id)}))


  }
  const imageList = [
    "https://www.emare.com.tr/image/cache/catalog/urunler/frc-0002/s1VSxIOCYEsHS9lEyloZ04FofQVky-800x1200.jpg",
    "https://www.emare.com.tr/image/cache/catalog/urunler/frc-0004/ana1-800x1200.jpg",
    "https://www.emare.com.tr/image/cache/catalog/urunler/frc-0002/u6ZIKpCj0MQ4ye1Hg85DYFfcoiaQW-800x1200.jpg",
  ];

  return (
    <div  >
    <div className="card-detail-root">
      <div className="shopping-area">
        <div className="shopping-area-image">
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Ted Baker London",
                isFluidWidth: true,
                src: `${loadImage}`,
              },
              largeImage: {
                alt: "",
                src: `${loadImage}`,
                width: 1200,
                height: 1800,
              },
              isHintEnabled: true,
            }}
          />
          <div className="shopping-area-image-other">
            {imageList.map((image) => (
              <img
                onClick={() => handleSelectImage(image)}
                src={image}
                alt=""
              />
            ))}
          </div>
        </div>

        <div className="shopping-area-desc">
          <h3>{cardDetails.title}</h3>
          <p>
            <ImEye style={{ fontSize: "1.5rem", margin: "0 0.5rem" }} />{" "}
            {cardDetails.views} görüntülenme
          </p>
          <h6>55 Soru | Cevap</h6>
          <h4>
            {productAmount * cardDetails.price},00 TL{" "}
            <span>{productAmount * cardDetails.price + 50},00 TL</span>
          </h4>
          <Form.Select placeholder="Beden" aria-label="Default select example">
            {/* <option disabled>Beden</option> */}
            <option value="1">Tek Beden (36- 42)</option>
          </Form.Select>
          <div style={{ display: "flex" }}>
            <Form.Group className="mb-3">
              <Form.Label>Adet</Form.Label>
              <Form.Control
                value={productAmount}
                style={{ width: "7rem", marginRight: "1rem" }}
                type="number"
                onChange={(e) =>
                  e.target.value <= 0
                    ? setProductAmount(1)
                    : setProductAmount(e.target.value)
                }
              />
            </Form.Group>
            <Button
              className="addtocard"
              onClick={() => handleAddCard(cardDetails)}
              variant="dark"
              style={{ flexGrow: 1 }}
            >
              <CgShoppingCart className="shop" />
              SEPETE EKLE
            </Button>
          </div>

          <p>{cardDetails.desc}</p>
        </div>
      </div>
      <div className="comment-area">
        <div className="comment-area-form">
          <h5>Yorum Yaz</h5>
          <Form onSubmit={handleSendComment}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email adresi</Form.Label>
              <Form.Control
                style={{ width: "100%" }}
                type="email"
                placeholder="ornek@ornek.com"
                value={comment.email}
                onChange={(e) =>
                  setComment({ ...comment, email: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>İsim Soyisim</Form.Label>
              <Form.Control
                style={{ width: "100%" }}
                type="text"
                placeholder="İsim-Soyisim"
                value={comment.name_surname}
                onChange={(e) =>
                  setComment({ ...comment, name_surname: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Yorum</Form.Label>
              <Form.Control
                style={{ width: "100%" }}
                as="textarea"
                rows={3}
                value={comment.commentText}
                onChange={(e) =>
                  setComment({ ...comment, commentText: e.target.value })
                }
              />
            </Form.Group>
            <Button type="submit" variant="primary">Gönder</Button>
          </Form>
        </div>
 
      </div>
    </div>
    <div className="comments-area">
    <h4>Yorumlar</h4>
    <hr />
    <div className="comment-card-root">
    {productComments.map(comment=> 
    <div className="comment-card">
    <FaRegUser /><h6> {comment.name_surname}</h6>
    <hr />
        <p>{comment.commentText}</p>

    </div>
    )}
    </div>
    
   
    </div>
    

    </div>
  );
};

export default CardDetail;
