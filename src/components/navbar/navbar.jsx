import React from 'react';
import logo from "../../assets/logo.png"
import cart from "../../assets/cart.png"
import shape from "../../assets/Shape.png"
// import { Link } from 'react-router-dom';
import { Container, Logo, Home,  Image,  Ellipse, Cart,  Shakl, Navlink, Logodiv } from './style';


const Navbar = () => {
  return (
    <Container>
      <Logodiv>
      <Logo src={logo}/>
      </Logodiv>
   <Home>
        <Navlink to="/">Home</Navlink>
        <Navlink to="/product">Product</Navlink>
        <Navlink to="/about">About</Navlink>
        <Navlink to="/contact">Contact</Navlink>
        <Navlink to="/stores">Stores</Navlink>
   </Home>
    <Image>
     <Shakl src={shape}/> 
        <Ellipse>
        <Cart src={cart}/>
        </Ellipse>
            
   </Image>
</Container>
  );
};

export default Navbar;