import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DeliverReturn from '../pages/DeliverReturn'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Privacy from '../pages/Privacy'
import SaleAgreementText from '../pages/SaleAgreementText'
import Blog from '../pages/Blog'
import CardDetail from '../pages/CardDetail'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import Payment from '../pages/Payment'
import ShoppingArea from '../pages/ShoppingArea'
import AboutUs from '../pages/AboutUs'

const AppRouter = () => {
    return (
        <div>
        <BrowserRouter>
        <Navbar />
        <Routes>

            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/shopping" element={<ShoppingArea />} />
            <Route path="/details" element={<CardDetail />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/saleagreement" element={<SaleAgreementText />} />
            <Route path="/deliveryreturn" element={<DeliverReturn />} />
            <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        <Footer />

        </BrowserRouter>
            
        </div>
    )
}

export default AppRouter

