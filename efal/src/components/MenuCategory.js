import React, { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchAllData, filterCategory } from "../redux/actions/shopActions";
import "./MenuCategory.css";

const MenuCategory = () => {
  const dispatch = useDispatch();
  const [first, setfirst] = useState();
  const [categoryActive, setCategoryActive] = useState(true);

  const fetchData = async () => {
    await fetch("https://efalcollection.herokuapp.com/api/article/")
      .then((res) => res.json())
      .then((data) => setfirst(data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(first);

  const newData = new Set(first?.map((item) => item.category));
  const handleClick = (category) => {
    dispatch(filterCategory(category));
    setCategoryActive(false)
  };
  const handleRefresh = () => {
    dispatch(fetchAllData());
    setCategoryActive(true)
    // navigate("/");
  };

  return (
    <div style={{marginTop:"2rem"}} >
      <Nav className="menuCategory-nav p-1" fill variant="tabs">
        <Nav.Item>
          <Nav.Link
            className="menuCategory-nav-link"
            onClick={() => handleRefresh()}
            active = {categoryActive}
          >
            <h3 style={{fontSize:"1.1rem"}}>Tüm Ferace Modelleri</h3>
          </Nav.Link>
        </Nav.Item>
        {Array.from(newData).map((category, index) => (
          <Nav.Item key={index}>
            <Nav.Link
              className="menuCategory-nav-link"
              onClick={() => handleClick(category)}
            >
            <h3 style={{fontSize:"1.1rem"}}>{category}</h3>
              
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>
    </div>
  );
};

export default MenuCategory;
