import styled from "styled-components";
import computer from "../../assets/computer.png"



export const Container=styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: fit-content;
`
export const Wrapper=styled.div`
display: flex;
flex-direction: row;
gap: 100px;
justify-content: center;
align-items: center;
height: 700px;
background: #E5E5E5;
`
export const Computer=styled.div`
display: flex;
height: 594px;
width: 602px;
border-radius: 18px;
background-image: url(${computer});
`
 export const Lorem=styled.p`
     height: 313px;
width: 522px;
font-size: 17px;
font-weight: 400;
line-height: 32px;
letter-spacing: 0em;
text-align: left;
 `