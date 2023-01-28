import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./CardDetail.css";
import Form from "react-bootstrap/Form";
import { Badge, Button, Card, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  updateProduct,
  addShoppingArea,
  fetchAllImages,
  addCommentInProduct,
  fetchSelectedComment,
  fetchSelectedImages,
  fetchAllData,
} from "../redux/actions/shopActions";
import { CgShoppingCart } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { ImEye } from "react-icons/im";
import ReactImageMagnify from "react-image-magnify";
import { successNote } from "../components/Toasty";
import { Helmet } from "react-helmet-async";

const CardDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const cardDetails = location.state.cardInfo;
  const [productAmount, setProductAmount] = useState(1);
  const allImageList = useSelector((state) => state.shopReducer.allImage);
  const productComments = useSelector(
    (state) => state.shopReducer.selectedComments
  );
  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchAllData());
    dispatch(fetchAllImages());
  }, []);
  const productList = useSelector((state) => state.shopReducer.productList);
  function Cevir(text) {
    var trMap = {
      çÇ: "c",
      ğĞ: "g",
      şŞ: "s",
      üÜ: "u",
      ıİ: "i",
      öÖ: "o",
    };
    for (var key in trMap) {
      text = text.replace(new RegExp("[" + key + "]", "g"), trMap[key]);
    }
    return text
      .replace(/[^-a-zA-Z0-9\s]+/gi, "")
      .replace(/\s/gi, "-")
      .replace(/[-]+/gi, "-")
      .toLowerCase();
  }
  const [selectedCard] = productList?.filter(
    (product) =>
      Cevir(product.title.toLowerCase().split(" ").join("-")) ===
      window.location.pathname.split("/")[2]
  );

  const addedProducts = useSelector(
    (state) => state.shopReducer.toAddedProduct
  );
  const selectedCardImages = allImageList?.filter(
    (image) => image.id == selectedCard?.images[0]
  );
  const [loadImage, setLoadImage] = useState();

  const initialComment = {
    productCode: selectedCard?.id,
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
      price:
        // product.title == "Biyeli Sport Ferace" ? Number(product.price) - 45 :
        product.price,
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
    selectedCard && handleAddVievs(selectedCard);
    selectedCard && dispatch(fetchSelectedComment(selectedCard.id));
  }, [selectedCard]);

  const handleSelectImage = (image) => {
    setLoadImage(image);
    window.scrollTo(0, 0);
  };
  const handleSendComment = (e) => {
    e.preventDefault();
    addCommentInProduct(comment)
      .then(dispatch(fetchSelectedComment(selectedCard.id)))
      .then(setComment(initialComment))
      .then(successNote("Yorumunuz Eklendi Teşekkür ederiz."));

    // .then(updateProduct({...cardDetails, comments:productComments.map(comment=> comment.id)}))
  };

  const imageList = [
    selectedCardImages[0]?.img1,
    selectedCardImages[0]?.img2,
    selectedCardImages[0]?.img3,
    selectedCardImages[0]?.img4,
    selectedCardImages[0]?.img5,
  ];

  return (
    <div>
      <Helmet>
        <title>{selectedCard?.title}</title>
        <meta
          name="description"
          content={
            selectedCard?.title.split(" ").join("-") + "Genç ferace modelleri 2022-Feraceler-Yarasa kol ferace-Siyah ferace-Ferace elbise-Tesettür ferace-Mevlana ferace modelleri-Mevsimlik ferace-Krep kumaş ferace"
          }
        />
        <meta
          name="keywords"
          content="Ferace, Tesettür, Tesettür Giyim, Ferace Giyim, Efal, Ferace Modelleri, Kampanyalı Ürünler, Efal Giyim, Ferace İndirim"
        />
           <meta property="og:title" content={selectedCard?.title}/>
<meta property="og:description" content={selectedCard?.desc}/>
<meta property="og:url" content={"https://efalcollection.com" + window.location.pathname}/>
<meta property="og:image" content={selectedCardImages[0]?.img1}/>
<meta property="product:brand" content="Efal Collection"/>
<meta property="product:availability" content="in stock"/>
<meta property="product:condition" content="Yeni"/>
<meta property="product:price:amount" content={selectedCard?.price}/>
<meta property="product:price:currency" content="TRY"/>
<meta property="product:retailer_item_id" content={selectedCard?.id}/>
<meta property="product:item_group_id" content="ferace"/>
        <link
          rel="canonical"
          href={
            "https://efalcollection.com/details/" +
            selectedCard?.title.toLowerCase().split(" ").join("-")
          }
          
        />
      </Helmet>
      {addedProducts.length > 0 && window.screen.width < 500 && (
        <div onClick={() => navigate("/shopping")} className="shopBasketDetail">
          <TiShoppingCart className="shopItem" />
          <Badge className="badge" pill bg="warning">
            {addedProducts.length}
          </Badge>
        </div>
      )}
      {selectedCardImages[0]?.img1 ? (
        <div className="card-detail-root">
          <div className="shopping-area">
            <div className="shopping-area-image">
              <ReactImageMagnify
                {...{
                  smallImage: {
                    alt: "Wristwatch by Ted Baker London",
                    isFluidWidth: true,
                    src: `${
                      !loadImage ? selectedCardImages[0]?.img1 : loadImage
                    }`,
                  },
                  largeImage: {
                    alt: "",
                    src: `${
                      !loadImage ? selectedCardImages[0]?.img1 : loadImage
                    }`,
                    width: 1200,
                    height: 1200,
                  },
                  isHintEnabled: true,
                  enlargedImageContainerDimensions:{width:"170%", height:"170%"},
                  hintTextTouch:"Yakınlaştır"
                }}
              />
              <div className="shopping-area-image-other">
                {imageList.map((image) => (
                  <img
                    onClick={() => handleSelectImage(image)}
                    src={image}
                    alt={selectedCard?.title}
                  />
                ))}
              </div>
            </div>

            <div className="shopping-area-desc">
              <h3>{selectedCard?.title}</h3>
              <p>
                <ImEye style={{ fontSize: "1.5rem", margin: "0 0.5rem" }} />{" "}
                {selectedCard?.views} görüntülenme
              </p>
              {/* <h6>55 Soru | Cevap</h6> */}
              <h4>
                {productAmount * selectedCard?.price},00 TL{" "}
                <span>{productAmount * selectedCard?.price + 50},00 TL</span>
              </h4>
              {/* { selectedCard?.title == "Biyeli Sport Ferace" ? <h6 className="text-danger"> Sepette İndirim   {Number(selectedCard?.price) - 45} ,00 TL</h6> : <></>} */}
              <Form.Select
                placeholder="Beden"
                aria-label="Default select example"
              >
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
                  className="bg-black addtocard"
                  onClick={() => handleAddCard(selectedCard)}
                  style={{ flexGrow: 1 }}
                >
                  <CgShoppingCart className="shop" />
                  SEPETE EKLE
                </Button>
              </div>

              <p>{selectedCard?.desc}</p>
            </div>
          </div>
          <div className="comment-area">
            <div className="comment-area-form">
              <h5>Yorum Yaz</h5>
              <Form onSubmit={handleSendComment}>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                  
                >
                  <Form.Label>Email adresi</Form.Label>
                  <Form.Control
                    style={{ minWidth: "100%" }}
                    type="email"
                    placeholder="ornek@ornek.com"
                    value={comment.email}
                    onChange={(e) =>
                      setComment({ ...comment, email: e.target.value })
                    }
                  />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>İsim Soyisim</Form.Label>
                  <Form.Control
                   style={{ minWidth: "100%" }}
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
                    style={{ minWidth: "100%" }}
                    as="textarea"
                    rows={7}
                    value={comment.commentText}
                    onChange={(e) =>
                      setComment({ ...comment, commentText: e.target.value })
                    }
                  />
                </Form.Group>
                <Button type="submit" variant="primary">
                  Gönder
                </Button>
              </Form>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div
            style={{ minHeight: "50vh" }}
            className="d-flex justify-content-center align-items-center"
          >
            <Spinner animation="grow" />
          </div>
        </>
      )}
      <div className="comments-area">
        <h4>Yorumlar</h4>
        <hr />
        <div className="comment-card-root">
          {productComments.map((comment) => (
            <div className="comment-card">
              <FaRegUser />
              <h6> {comment.name_surname}</h6>
              <hr />
              <p>{comment.commentText}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
