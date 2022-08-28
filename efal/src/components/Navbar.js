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
import "./Navbar.css"

const Navbar = () => {
  const [value, setValue] = useState();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const filte = useSelector((state) => state.shopReducer);
  const shoppedIds = new Set(filte.toAddedIds.map((e) => e)).size;
  const handleSearch = (e) => {
    dispatch(searchProduct(value));
    setValue("");
  };
  const handleRefresh = () => {
    dispatch(fetchAllData());
    navigate("/");
  };

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
            <img  src={EfalPng} alt="Navbar İmage" />
          </NavBar.Brand>
          <NavBar.Toggle className="toggle" />
        </Container>

        <Container className="menuitem">
          <NavBar.Collapse>
            <Nav className="nav-item-categories">
              <NavDropdown className="nav-items-category" title="Ürünlerimiz">
                <NavDropdown.Item href="#products/tea">Elbise Ferace</NavDropdown.Item>
                <NavDropdown.Item href="#products/coffee">
                  Ferace
                </NavDropdown.Item>
                <NavDropdown.Item href="#products/chocolate">
                  Aksesuar
                </NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                <NavDropdown.Item href="#products/promo">
                  Şal
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Item  >
              <Nav.Link  className={window.location.pathname === "/" ? "nav-items-active" : "nav-items"} onClick={() => navigate("/")}>
                Ana Sayfa
              </Nav.Link>

              </Nav.Item>
              <Nav.Link className="nav-items" onClick={() => navigate("/blog")}>
                İletişim
              </Nav.Link>
              <Nav.Link
                className="nav-items"
                onClick={() => navigate("/contact")}
              >
                Contact Us
              </Nav.Link>

              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Ara .."
                  className="me-2 form-control"
                  aria-label="Search"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
                <Button onClick={() => handleSearch()} variant="outline-dark">
                  Ara
                </Button>
              </Form>
              <Nav.Link
                className="badgeCont"
                onClick={() => navigate("/shopping")}
              >
                <CgShoppingCart className="shop" />
                <Badge className="badge" pill bg="warning">
                  {shoppedIds}
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
