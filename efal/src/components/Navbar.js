import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar as NavBar,
  NavDropdown,
  Badge,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { TiShoppingCart } from "react-icons/ti";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchAllData, searchProduct } from "../redux/actions/shopActions";
import EfalPng from "../assets/Efal.jpeg";
import EfalPng2 from "../assets/logo_1.png";
import "./Navbar.css";

const Navbar = () => {
  const [value, setValue] = useState();
  const [collapse, setCollapse] = useState(true);
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const filte = useSelector((state) => state.shopReducer);
  const shoppedIds = new Set(filte.toAddedIds.map((e) => e)).size;
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(searchProduct(value));
    setValue("");
  };
  const handleRefresh = () => {
    dispatch(fetchAllData());
    navigate("/");
  };
  const addedProducts = useSelector(
    (state) => state.shopReducer.toAddedProduct
  );

  return (
    <div className="navbarRoot">
      <NavBar
        className="App"
        expand="xl"
        collapseOnSelect={collapse}
        variant="light"
      >
        {window.screen.width < 500 ? (
          <Container className="d-flex justify-content-center align-items-center">
            <NavBar.Brand className="nav-item" onClick={() => handleRefresh()}>
              <img src={EfalPng} alt="Efal Collection Ferace Tesettür Giyim" />
              <img
                style={{ width: "5rem" }}
                src={EfalPng2}
                alt="Efal Collection Ferace Tesettür Giyim"
              />
            </NavBar.Brand>
            <NavBar.Toggle
              style={{ backgroundColor: "#f5f5f5" }}
              className="toggle w-100"
              variant="light"
            />
          </Container>
        ) : (
          <></>
        )}

        <Container>
        
          <NavBar.Collapse
            style={{
              backgroundColor: "#ffffff",
              position: window.screen.width < 500 ? "fixed" : "block",
              zIndex: "1000",
              left: window.screen.width < 500 ? "50%" : "0",
              transform:
                window.screen.width < 500 ? "translateX(-50%)" : "none",
              width: "100%",
              // minHeight: "100%",
              top: window.screen.width < 500 ? "12rem" : "0",
            }}
            className="p-1"
          >
            <Nav className="nav-item-categories">
              
              <Nav.Item>
                <Nav.Link
                  style={{ color: "black" }}
                  className={
                    window.location.pathname === "/"
                      ? "nav-items-active"
                      : "nav-items"
                  }
                  onClick={() => navigate("/")}
                >
                  Ana Sayfa
                </Nav.Link>
              </Nav.Item>
              <Nav.Link
                style={{ color: "black" }}
                className={
                  window.location.pathname === "/contact"
                    ? "nav-items-active"
                    : "nav-items"
                }
                onClick={() => navigate("/contact")}
              >
                İletişim
              </Nav.Link>
              <Nav.Link
                style={{ color: "black" }}
                className={
                  window.location.pathname === "/aboutus"
                    ? "nav-items-active"
                    : "nav-items"
                }
                onClick={() => navigate("/aboutus")}
              >
                Hakkımızda
              </Nav.Link>
              <Nav.Link
                style={{ color: "black" }}
                className={
                  window.location.pathname === "/ordertrack"
                    ? "nav-items-active"
                    : "nav-items"
                }
                onClick={() => navigate("/ordertrack")}
              >
                Sipariş Takip
              </Nav.Link>
            </Nav>
          </NavBar.Collapse>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;
