import styled from "styled-components";
import computer from"../../assets/computer.png"
import computer2 from "../../assets/computer2.png"
import quote from "../../assets/quote.png"
import founder1 from "../../assets/founder1.png"
import founder2 from "../../assets/founder2.png"




export const Container=styled.div`
margin-top: 100px;
display: flex;
flex-direction: column;
width: 100%;
height: fit-content;
background: #E5E5E5;
`
export const Wrapper=styled.div`
display: flex;
justify-content: space-around;
align-items: center;
flex-direction: row;
width: 100%;
height: 700px;
background: #E5E5E5;
`
export const Computer=styled.div`
display: flex;
height: 594px;
width: 602px;
border-radius: 18px;
background-image: url(${computer});`

export const Computer2=styled.div`
display: flex;
height: 594px;
width: 602px;
border-radius: 18px;
background-image: url(${computer2});`


export const Writings=styled.div`
display: flex;
flex-direction: column;
h2{
    width: 136px;
height: 22px;
font-weight: 500;
font-size: 14px;
line-height: 22px;
text-transform: uppercase;
color: #EC1C24;
}
h1{
    width: 511px;
height: 192px;
font-weight: 500;
font-size: 36px;
line-height: 48px;
color: #131D3B;
}
p{
    width: 595px;
height: 192px;
font-weight: 400;
font-size: 17px;
line-height: 32px;
color: #131D3B;
}
h6{
    width: 595px;
height: 160px;
font-weight: 400;
font-size: 18px;
line-height: 40px;
color: #131D3B;
}
h5{
    width: 511px;
height: 48px;
font-weight: 500;
font-size: 36px;
line-height: 48px;
color: #EC1C24;
}
`
export const Ellipsewrap=styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: row;
gap: 50px;
h3{
    width: 500px;
height: 40px;
font-weight: 400;
font-size: 18px;
line-height: 40px;
color: #131D3B;
}
`
export const Ellipse=styled.div`
width: 12px;
height: 12px;
border-radius: 50%;
background: #EC1C24;
`
export const Quote=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 600px;
background-image: url(${quote});
background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 50px;
    margin-bottom: 50px;
    h2{
        width: 125px;
height: 22px;
font-weight: 500;
font-size: 14px;
line-height: 22px;
text-transform: uppercase;
color: #EC1C24;
    }
    p{
        width: 680px;
height: 160px;
font-weight: 400;
font-size: 24px;
line-height: 40px;
text-align: center;
color: #F2F3F5;
    }
`
export const Wrapper2=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
h1{
    width: 279px;
height: 65px;
font-weight: 500;
font-size: 42px;
line-height: 65px;

color: #131D3B;
}
`
export const Founder1=styled.div`
height: 640px;
width: 468px;
border-radius: 18px;
background-image: url(${founder1});
`
export const Founder2=styled.div`
height: 640px;
width: 468px;
border-radius: 18px;
background-image: url(${founder2});
`