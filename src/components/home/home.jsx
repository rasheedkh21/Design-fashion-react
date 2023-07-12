import React from 'react';
// import rasm38  from "../../assets/rasm38.png"
// import rasm39 from "../../assets/rasm39.png"
// import rasm40  from "../../assets/rasm40.png"
// import rasm41  from "../../assets/rasm41.png"
// import rasm42  from "../../assets/rasm42.png"
import {Container, Front, Line, Model, Models, Shopping, Wrap, Back, Photo1, Photo2, Photo3, Photo4, Caption, Hello, Line1, Collection, Boxwrap, Writings, Box1, Box2, Box4, Box5, Box6, Box7, Box8, Box9, Footerhead, Charter, Footertext, Footersecond, Instpic, Rasm38, Loyiha, Box3, Monthly, Oldi,} from './style';
import Slaut from './carousel/carousel';
const Home = () => {
  return (
   <Container>
    <Wrap>
            <Loyiha>layihenin adi</Loyiha>
            <Oldi>layiheni tanidacaq qisa soz</Oldi>
     </Wrap>
        <Shopping>
            <Front>
                <Line></Line>
                <Monthly>Monthly Deals</Monthly>
                </Front>
            </Shopping>
        <Model>
           <Models>

                <Back>
                    <Photo1></Photo1>
                    <h1>Singo Maple</h1>
                    <p>20% Off</p>
                    <h2>$1400</h2>
                    <button>Add to Crt</button>
                    </Back>

                <Back>
                    <Photo2></Photo2>
                    <h1>Singo Maple</h1>
                    <p>20% Off</p>
                    <h2>$1400</h2>
                    <button>Add to Crt</button>
                    </Back>

                <Back>
                    <Photo3></Photo3>
                    <h1>Singo Maple</h1>
                    <p>20% Off</p>
                    <h2>$1400</h2>
                    <button>Add to Crt</button>
                    </Back>

                <Back>
                    <Photo4></Photo4>
                    <h1>Singo Maple</h1>
                    <p>20% Off</p>
                    <h2>$1400</h2>
                    <button>Add to Crt</button>
                    </Back>
                </Models>
            </Model>


        <Caption>
            <Hello>
                <Line1></Line1>
                <h1>Bestseller</h1>
                </Hello>
            <Hello>
                <Line1></Line1>
                <h1>New Arrival</h1>
                </Hello>
            <Hello>
                <Line1></Line1>
                <h1>Featured</h1>
                </Hello>
            </Caption>
        <Collection>
            <Boxwrap>
                <Box1></Box1>
                <Writings>
                    <h1>Tomia Maple</h1>
                    <p>$40000</p>
                    </Writings>
                </Boxwrap>
            <Boxwrap>
                <Box2></Box2>
                <Writings>
                    <h1>Rakai Maple</h1>
                    <p>$40000</p>
                    </Writings>
                </Boxwrap>
            <Boxwrap>
               <Box3></Box3>
                <Writings>
                    <h1>Tomia Maple</h1>
                    <p>$40000</p>
                    </Writings>
                </Boxwrap>
            <Boxwrap>
                <Box4></Box4>
                <Writings>
                    <h1>Way Kambas Maple</h1>
                    <p>$40000</p>
                    </Writings>
           </Boxwrap>
            <Boxwrap>
                <Box5></Box5>
                <Writings>
                    <h1>Alor</h1>
                    <p>$40000</p>
                    </Writings>
            </Boxwrap>
            <Boxwrap>
                <Box6></Box6>
                <Writings>
                    <h1>Way Kambas Maple</h1>
                    <p>$40000</p>
                    </Writings>
            </Boxwrap>
            <Boxwrap>
                <Box7></Box7>
                <Writings>
                    <h1>Sunda</h1>
                    <p>$40000</p>
                    </Writings>
            </Boxwrap>
            <Boxwrap>
                <Box8></Box8>
                <Writings>
                    <h1>Sunda</h1>
                    <p>$40000</p>
                    </Writings>
            </Boxwrap>
            <Boxwrap>
                <Box9></Box9>
                <Writings>
                    <h1>Sunda</h1>
                    <p>$40000</p>
                    </Writings>
            </Boxwrap>
            </Collection>
       <Footerhead></Footerhead>
        <Charter>
        <Footertext>
                <h4>Qosulmaga telesin</h4>
                <p> It is a long established fact that a reader will be distracted by
                     the readable nt of a page when looking at its layout.
                     The point of using Lorem Ipsum is that it has a </p>
                <button>Mağaza Yarat</button>
                </Footertext>
            </Charter>
        <Footersecond>
            <div className='inst-text'>
                <h1>Instagram</h1>
                <div className='line-2'></div>
            </div>
            <Instpic>
                <Slaut/>
             </Instpic>
            </Footersecond>
        </Container>  
  )
  }
export default Home;