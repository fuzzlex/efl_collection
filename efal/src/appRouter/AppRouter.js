import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Blog from '../pages/Blog'
import CardDetail from '../pages/CardDetail'
import Contact from '../pages/Contact'
import Home from '../pages/Home'
import ShoppingArea from '../pages/ShoppingArea'

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
        </Routes>

        </BrowserRouter>
            
        </div>
    )
}

export default AppRouter

