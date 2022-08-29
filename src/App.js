import React from "react";
import Header from "./Q_Main/Header.js";  
import Footer from "./Q_Main/Footer.js";  
import Home from "./Pages/Home.js";
import About from "./Pages/About-us.js";
import Contact from "./Pages/Contact-us.js";
import Cart from "./Pages/Cart.js";
import All_products from "./Products/All_products.js";
import Mobile from "./Products/Mobile.js";
import MenFashion from "./Products/MenFashion.js";
import Laptop from "./Products/Laptop.js";
import  "./App.css";
import {BrowserRouter,Routes,Route,} from "react-router-dom";

const App = () => 
{
    return(
        <div>
            <BrowserRouter>
                <Header className="header"/>     
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="about-us" element={<About />} />
                        <Route path="contact-us" element={<Contact />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="all-products" element={<All_products />} />
                        <Route path="mobile" element={<Mobile />} />
                        <Route path="laptop" element={<Laptop />} />
                        <Route path="mens-fashion" element={<MenFashion />} />
                    </Routes>  
                <Footer />     
            </BrowserRouter>   
        </div>
    );
}

export default App; 