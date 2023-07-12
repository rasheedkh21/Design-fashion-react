import React from 'react'
import mastercard from "../../assets/mastercard.png"
import visa from "../../assets/visa.png"
import mandarin from "../../assets/mandarin.png"
import bni from "../../assets/bni.png"
import danamon from "../../assets/danamon.png"
import gopay from "../../assets/gopay.png"
import liverpool from "../../assets/liverpool.png"
import permata from "../../assets/permata.png"
import uob from "../../assets/uob.png"
import { Endwrapper, Firstwrap, Secondwrap } from './style'
const Footer = () => {
  return (
    <Endwrapper>
        <Firstwrap>
        <img src={mastercard}/>
        <img src={visa}/>
        <img src={mandarin}/>
        <img src={bni}/>
        <img src={danamon}/>
        <img src={gopay}/>
        <img src={liverpool}/>
        <img src={permata}/>
        <img src={uob}/>
        <img src={mastercard}/>
        </Firstwrap>
    <Secondwrap>
        <p>Copyright © 2021 - Laman Ibrahimli</p>
    </Secondwrap>
</Endwrapper>
  )
}

export default Footer;