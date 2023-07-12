import styled from "styled-components";

export const Endwrapper=styled.div`
    width: 100%;
  
    `
export const Firstwrap=styled.div`
    width: 100%;
    height: 273px;
    background: rgba(20, 53, 94, 0.88);
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    align-items: center;
    justify-content: space-evenly;
    img {
    width: 100px;
    height: 100px;
}
img:hover {
    cursor: pointer;
    width: 150px;
    height: 150px;
}
`
export const Secondwrap=styled.div`
    width: 100%;
    height: 67px;
    background: #14355E;
    display: flex;
    justify-content: center;
    align-items: center;
    p {
    font-weight: 400;
    font-size: 18px;
    color: #FFFFFF;
}`
