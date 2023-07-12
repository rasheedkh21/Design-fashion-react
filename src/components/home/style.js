import styled from "styled-components";
import model1 from "../../assets/model1.png";
import qizilmodel from"../../assets/qizilmodel.png";
import oqmodel from"../../assets/oqmodel.png";
import qoramodel from "../../assets/qoramodel.png";
import box1 from "../../assets/box1.png";
import box2 from "../../assets/box2.png";
import box3 from "../../assets/box3.png";
import box4 from "../../assets/box4.png";
import box5 from "../../assets/box5.png";
import box6 from "../../assets/box6.png";
import box7 from "../../assets/box7.png";
import box8 from "../../assets/box8.png";
import background from "../../assets/background.png";



export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
`
export const Wrap= styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 707px;
    background: linear-gradient(180deg, #0575E6 0%, #02298A 84.79%, #021B79 100%);
    box-shadow: 0px 13px 41px rgba(38, 111, 197, 0.25);
`
export const Loyiha=styled.h1`
    font-size: 64px;
    font-weight: 700;
    color: #fff;
`
export const Oldi=styled.p`
    color: #fff;
    font-size: 36px;
    font-weight: 500;
`
export const Monthly=styled.h1`
    font-weight: 500;
    font-size: 36px;
    letter-spacing: 0.02em;
    color: #0C1C45;
`
export const Shopping =styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 200px;
`
export const Front = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-left: px;
    margin-top: 50px;
    `
export const Line=styled.div`
    width: 171px;
    border: 1px solid #122B4A;
    `
export const Model=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 100%;
    margin-top: 70px;
    `
export const Models=styled.div`
    display: grid;
    grid-template-columns: auto auto auto auto;
    gap: 30px;
`
export const Back=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 255px;
    height: 381px;
    background: rgba(38, 111, 197, 0.25);
    border-radius: 18px;
 button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    cursor: pointer;
    width: 158px;
    height: 39px;
    background: rgba(38, 111, 197, 0.25);
    border-radius: 20px;
}
:hover {
    width: 255px;
    height: 412px;
    background: rgba(38, 111, 197, 0.11);
    border-radius: 18px;
    cursor: pointer;
}
button:hover {
    justify-content: center;
    align-items: center;
    border: none;
    width: 198px;
    height: 49px;
    background: rgba(38, 111, 197, 0.25);
    border-radius: 20px;
    cursor: pointer;
}
h1 {
    font-size: 24px;
    font-weight: 500;
    line-height: 32px;
    color: #333333;
}
 p {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: left;
    color: #777777;
}
h2 {
    margin-top: 50px;
    margin-left: 100px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 32px;
    color: #333333;
}
`
export const Photo1=styled.div`
    width: 207px;
    height: 297px;
    background-image: url(${model1});
    margin-top: -240px;
`
export const Photo2=styled.div`
    width: 207px;
    height: 297px;
    background-image: url(${qizilmodel});
    margin-top: -240px;`
export const Photo3=styled.div`
    width: 207px;
    height: 297px;
    background-image: url(${oqmodel});
    margin-top: -240px;`
export const Photo4=styled.div`
    width: 207px;
    height: 297px;
    background-image: url(${qoramodel});
    margin-top: -240px;
    `
export const Caption=styled.div`
    display: flex;
    gap: 20px;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 300px;

`
export const Hello=styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
    justify-content: center;
    align-items: center;
    h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 40px;
    letter-spacing: 0.02em;
    color: #0C1C45;

}
`
export const Line1=styled.div`
    width: 65px;
    height: 0;
    border: 1px solid #333333;
`
export const Collection=styled.div`
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: space-evenly;
    align-items: center;
    height: 500px;
    width: 100%;
`
export const Boxwrap=styled.div`
    display: flex;
    flex-direction: row;
    gap: 30px;
`
export const Writings=styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    h1 {
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
    letter-spacing: 0.02em;
    color: #333333;
}
p {
    font-style: normal;
    font-weight: 400;
    font-size: 28px;
    line-height: 40px;
    letter-spacing: 0.02em;
    color: #000000;
}
    `
export const Box1=styled.div`
    width: 131px;
    height: 131px;
    border-radius: 18px;
    background-image: url(${box1});
    `
export const Box2=styled.div`
    width: 131px;
    height: 131px;
    border-radius: 18px;
    background-image: url(${box8});
    `
export const Box3=styled.div`  
  width: 131px;
height: 131px;
border-radius: 18px;
background-image: url(${box2});
`
export const Box4=styled.div`  
  width: 131px;
height: 131px;
border-radius: 18px;
background-image: url(${box3});
`
export const Box5=styled.div`  
  width: 131px;
height: 131px;
border-radius: 18px;
background-image: url(${box4});
`
export const Box6=styled.div`
    width: 131px;
height: 131px;
border-radius: 18px;
background-image: url(${box5});
` 
export const Box7=styled.div`  
  width: 131px;
height: 131px;
border-radius: 18px;
background-image: url(${box6});
`
export const Box8=styled.div`
    width: 131px;
    height: 131px;
    border-radius: 18px;
    background-image: url(${box7});
    `
export const Box9=styled.div`
    width: 131px;
    height: 131px;
    border-radius: 18px;
    background-image: url(${box8});
    `
export const Footerhead=styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 200px;
    margin-bottom: 200px;
    background-image: url(${background});
    height: 400px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
   `

export const Charter=styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
export const Footertext=styled.div`
    width: 526px;
    margin-top: -350px;
    height: 217px;
    background: whitesmoke;
    border-radius: 18px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    h4 {
    font-weight: 500;
    font-size: 32px;
    color: #000000;
}
p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 100;
    font-size: 14px;
    color: #000000;
}
button {
    width: 156px;
    height: 33px;
    background: #0575E6;
    border-radius: 30px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    border: none;
    cursor: pointer;
    color: #FFFFFF;
    :hover{
        background-color: bisque;
    }
}
`
export const Footersecond=styled.div`
    padding-left: 50px;
    width: 100%;
    margin-top: 190px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`
export const Instpic=styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 70px;
    `
    export const Rasm38=styled.img`
    cursor: pointer;
`
export const Rasm39=styled.img`
    cursor: pointer;
`
export const Rasm40=styled.img`
    cursor: pointer;
`
export const Rasm41=styled.img`
    cursor: pointer;
`
export const Rasm42=styled.img`
    cursor: pointer;
`