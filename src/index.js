import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './components/about/about';
import Contact from './components/contact/contact';
import Navbar from './components/navbar/navbar';
import Product from './components/product/product';
import Stores from './components/stores/stores';
import Maincomponents from './script';
import Footer from './components/footer/footer';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Maincomponents/>}/>
      <Route path="product" element={<Product/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="stores" element={<Stores/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>
);
export default Maincomponents;
