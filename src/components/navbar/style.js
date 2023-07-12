import { Link } from "react-router-dom";
import styled from "styled-components";



export const Container= styled.div`
    position: fixed;
    z-index: 1;
    height: 70px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background-color: #0575e6;
`
export const Logodiv=styled.div`
display: flex;
justify-content: center;
align-items: center;
height: 70px;
width: 70px;
`
export const Logo= styled.img`
 cursor: pointer;
`
export const Home=styled.div`
    display: flex;
    justify-content:space-evenly;
    gap: 50px;
  
`
export const Navlink=styled(Link)`
color: white;
cursor: pointer;
text-decoration: saddlebrown;
:hover {
    color: black;
}
`
export const Image=styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`
export const Shakl=styled.img`
    width: 20px;
    height: 20px;
    cursor: pointer;
    `
export const Ellipse=styled.div`
    width: 46px;
    height: 46px;
    background-color:  #55ACEE;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    `
export const Cart=styled.img`
display:flex;
:hover{
    cursor: pointer;
}
`