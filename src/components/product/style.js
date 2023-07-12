import styled from "styled-components";
import oqkoylak from"../../assets/oqkoylakproduct.png"
import qizilk1 from "../../assets/qizilkoylak1product.png"
import qizlik2 from "../../assets/qizilkoylak2product.png"
import seriykoylak from "../../assets/seriykoylak.png"
import oq2koylak from "../../assets/oqkoylak2chiqator.png"
import qizil2chiq from "../../assets/2chiqatorqizil.png"
import jigarrang from "../../assets/jiarrangxol.png"
import yashilrang from "../../assets/yashilrang.png"
import yashilxol from "../../assets/yashilxol.png"
import daratli from"../../assets/daraxtli.png"
import ikkitali from"../../assets/2tali.png"
import qizaloq from"../../assets/qizaloq.png"
import kelin from"../../assets/kelin.png"
import tufli from"../../assets/tufli.png"
import katak from"../../assets/katak.png"
import qora from"../../assets/qora.png"
import qizilyelka from"../../assets/qizilyelka.png"
import kostyum from"../../assets/kostyum.png"
export const Container=styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;`
export const Wrapper=styled.div`
background: #E5E5E5;
display: grid;
grid-template-columns: auto auto auto;
justify-content: center;
align-items: center;
gap: 30px;
width: 100%;
height: fit-content;
`
export const Nikefull=styled.div`
display: flex;
flex-direction: column;
background: #FFFFFF;
box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.08);
border-radius: 15px 15px 20px 20px;
height: 414px;
width: 322px;
margin-top: 70px;
margin-bottom: 70px;
:hover{
    width: 322px;
    height: 450px;
    background: rgba(38, 111, 197, 0.11);
    border-radius: 18px;
    cursor: pointer;
}
`
export const Nikeimage1=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${qizilk1});
`
export const Nikeimage2=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${oqkoylak});
`
export const Nikeimage3=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${qizlik2});
`
export const Nikeimage4=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${seriykoylak});
`
export const Nikeimage5=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${oq2koylak});
`
export const Nikeimage6=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${qizil2chiq});
`
export const Nikeimage7=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${jigarrang});
`
export const Nikeimage8=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${yashilrang});
`
export const Nikeimage9=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${yashilxol});
`
export const Nikeimage10=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${daratli});
`
export const Nikeimage11=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${ikkitali});
`
export const Nikeimage12=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${qizaloq});
`
export const Nikeimage13=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${kelin});
`
export const Nikeimage14=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${tufli});
`
export const Nikeimage15=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${katak});
`
export const Nikeimage16=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${qora});
`
export const Nikeimage17=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${qizilyelka});
`
export const Nikeimage18=styled.div`
display: flex;
height: 282px;
width: 322px;
background-image: url(${kostyum});
`
export const Writings=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
.h1{
    font-weight: 400;
font-size: 10px;
line-height: 26px;
color: #000000;
}
.p{
    font-weight: 500;
font-size: 16px;
line-height: 24px;
color: #777777;
}
`