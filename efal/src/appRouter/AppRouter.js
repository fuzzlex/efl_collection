import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import DeliverReturn from "../pages/DeliverReturn";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Privacy from "../pages/Privacy";
import SaleAgreementText from "../pages/SaleAgreementText";
import Blog from "../pages/Blog";
import CardDetail from "../pages/CardDetail";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import Payment from "../pages/Payment";
import ShoppingArea from "../pages/ShoppingArea";
import AboutUs from "../pages/AboutUs";
import OrderTracking from "../pages/OrderTracking";
import NavbarEl from "../components/NavbarEl";
import Whatsapp from "../components/Whatsapp";
import ReactGa from "react-ga";

const TRACKING_ID = "G-RYLT2409W2";
ReactGa.initialize(TRACKING_ID)
const AppRouter = () => {
  return (
    <div>
      <BrowserRouter>
        <NavbarEl />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shopping" element={<ShoppingArea />} />
          <Route path="/ferace-modelleri/:id" element={<CardDetail />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/saleagreement" element={<SaleAgreementText />} />
          <Route path="/deliveryreturn" element={<DeliverReturn />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/ordertrack" element={<OrderTracking />} />
          <Route
            path="/404"
            element={
              <div className="p-5">
                <h1 className="text-center">404 Error</h1>
                <h1 className="text-center">Page Not Found</h1>
              </div>
            }
          />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
        <Whatsapp />
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default AppRouter;
