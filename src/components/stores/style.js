import styled from "styled-components";
import stores1 from "../../assets/stores1.png"
import stores2 from "../../assets/stores2.png"
import stores3 from "../../assets/stores3.png"
import stores4 from "../../assets/stores4.png"
import stores5 from "../../assets/stores5.png"
import stores6 from "../../assets/stores6.png"
import stores7 from "../../assets/stores7.png"
import stores8 from "../../assets/stores8.png"
import stores9 from "../../assets/stores9.png"
import stores10 from "../../assets/stores10.png"
import stores11 from "../../assets/stores11.png"
import stores12 from "../../assets/stores12.png"
import stores13 from "../../assets/stores13.png"
import stores14 from "../../assets/stores14.png"
import stores15 from "../../assets/stores15.png"

export const Container=styled.div`
display: flex;
width: 100%;
height: fit-content;
flex-direction: column;
background: #E5E5E5;
`
export const Wrapper=styled.div`
margin-top: 70px;
margin-bottom: 70px;

width: 100%;
height: 700px;
display: grid;
grid-template-columns: auto auto auto;
justify-content: space-evenly;
align-items: center;
div:hover{
    width: 360px;
    height: 80px;
    background: rgba(38, 111, 197, 0.11);
    
    cursor: pointer;
}
`
export const Styles=styled.div`
display: flex;
flex-direction: row;
gap: 50px;
align-items: center;
height: 80px;
width: 317px;
background: #FFFFFF;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
`

export const Writings=styled.div`
display: flex;
flex-direction: column;
h1{
font-weight: 700;
font-size: 16px;
line-height: 16px;
color: #161412;
}
p{
    font-style: italic;
font-weight: 400;
font-size: 14px;
line-height: 16px;
color: #979797;
}
`
export const Stores1=styled.div`
width: 80px;
height: 80px;
background-image: url(${stores1});
`
export const Stores2=styled.div`
width: 80px;
height: 80px;
background-image: url(${stores2});
`
export const Stores3=styled.div`
width: 80px;
height: 80px;
background-image: url(${stores3});
`
export const Stores4=styled.div`
width: 80px;
height: 80px;
background-image: url(${stores4});
`
export const Stores5=styled.div`
width: 80px;
height: 80px;
background-image: url(${stores5});
`
export const Stores6=styled.div`
width: 80px;
height: 80px;
background-image: url(${stores6});
`
export const Stores7=styled.div`
width: 80px;
height: 80px;
background-image: url(${stores7});
`
export const Stores8=styled.div`
width: 80px;
height: 80px;
background-image: url(${stores8});
`
export const Stores9=styled.div`
width: 80px;
height: 80px;
background-image: url(${stores9});
`
export const Stores10=styled.div`
width: 80px;
height: 80px;
background-image: url(${stores10});
`
export const Stores11=styled.div`
width: 80px;
height: 80px;
background-image: url(${stores11});
`
export const Stores12=styled.div`
width: 80px;
height: 80px;
background-image: url(${stores12});
`
export const Stores13=styled.div`
width: 80px;
height: 80px;
background-image: url(${stores13});
`
export const Stores14=styled.div`
width: 80px;
height: 80px;
background-image: url(${stores14});
`
export const Stores15=styled.div`
width: 80px;
height: 80px;
background-image: url(${stores15});
`