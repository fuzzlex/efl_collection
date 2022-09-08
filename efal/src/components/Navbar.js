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
import { CgShoppingCart } from "react-icons/cg";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { fetchAllData, searchProduct } from "../redux/actions/shopActions";
import EfalPng from "../assets/Efal.jpeg";
import "./Navbar.css";

const Navbar = () => {
  const [value, setValue] = useState();
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
    <div>
      <NavBar
        className="App"
        variant="light"
        sticky="top"
        expand="xl"
        collapseOnSelect
      >
        <Container>
          <NavBar.Brand className="nav-item" onClick={() => handleRefresh()}>
            <img src={EfalPng} alt="Navbar İmage" />
          </NavBar.Brand>
          <NavBar.Toggle className="toggle" />
        </Container>

        <Container className="menuitem">
          <NavBar.Collapse>
            <Nav className="nav-item-categories">
              <Nav.Item>
                <Nav.Link
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
                 className={
                    window.location.pathname === "/aboutus"
                      ? "nav-items-active"
                      : "nav-items"
                  }
                onClick={() => navigate("/aboutus")}
              >
                Hakkımızda
              </Nav.Link>

              <Form onSubmit={handleSearch} className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Ne Aramıştınız .."
                  className="me-2 form-control"
                  aria-label="Search"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <Button type="submit" variant="outline-dark">
                  Ara
                </Button>
              </Form>
              <Nav.Link
                className="badgeCont"
                onClick={() => navigate("/shopping")}
              >
                <CgShoppingCart className="shop" />
                <Badge className="badge" pill bg="warning">
                  {addedProducts.length}
                </Badge>
              </Nav.Link>
            </Nav>
          </NavBar.Collapse>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;
