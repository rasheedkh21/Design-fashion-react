import React from 'react'
import { Computer, Computer2, Container, Ellipse, Ellipsewrap, Founder2, Founder1, Quote, Wrapper, Wrapper2, Writings } from './style';
import { Loyiha, Wrap, Oldi } from '../home/style';


const About = () => {
  return (
    <Container>
      <Wrap>
        <Loyiha>About Us</Loyiha>
        <Oldi>lahiyeni tanidacaq qisa soz</Oldi>
      </Wrap>
      <Wrapper>
        <Computer></Computer>
        <Writings>
          <h2>Company mission</h2>
          <h1>“Success is based on pro-active and dedicated teamwork in a professional and ethical environment...”</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
        </Writings>
      </Wrapper>
      <Wrapper>
        <Writings>
          <h2>Company culture</h2>
        <Ellipsewrap>
          <Ellipse></Ellipse>
          <h3>Foster a professional and ethical work environment.</h3>
        </Ellipsewrap>
        <Ellipsewrap>
          <Ellipse></Ellipse>
          <h3>Set safety and quality as our top priorities.</h3>
        </Ellipsewrap>
        <Ellipsewrap>
          <Ellipse></Ellipse>
          <h3>Encourage creativity and innovation in every aspect of our work.</h3>
        </Ellipsewrap>
        <Ellipsewrap>
          <Ellipse></Ellipse>
          <h3>Recognize the value of a continuous improvement.</h3>
        </Ellipsewrap>
        <Ellipsewrap>
          <Ellipse></Ellipse>
          <h3>Be open, listen to our customers, and adapt to change.</h3>
        </Ellipsewrap>
        </Writings>
        <Computer2></Computer2>
      </Wrapper>
      <Quote>
        <h2>Company vision</h2>
        <p>We aim to be a leading contractor in Egypt by focusing on 
          the timely implementation of our projects and meeting the expectations and requirements 
          of our customers at the highest possible level.</p>
      </Quote>
      <Wrapper2>
        <h1>Our Founders</h1>
        <Wrapper>
          <Founder1></Founder1>
          <Writings>          
              <h5>Mr. Ahmed Ismail</h5>
            <h6>Bachelor's degree in Mechanical Engineering from Ain Shams University, 
              Cairo, Egypt, 2002. With 20 years of experience in the construction field for the main contractor of the below-listed construction projects before founding Projex-Tec.</h6>
              </Writings>
        </Wrapper>
                <Wrapper>
          <Writings>           
             <h5>Mr. Shaaban Nada</h5>
            <h6>Bachelor's degree in Mechanical Engineering from Cairo University, Egypt, 2004.
- MCIPS® Member of the Chartered Institute of Procurement & Supply (CIPS - UK) 
- CPSM® (Certified Supply Management Professional) from 
Institute for Supply Management (ISM-USA). 
- CPP® (Certified Purchasing Professional) from the 
American Purchasing Society (APS-USA)
With 17 years of experience in Engineering & Procurement for the main contractor of the below-listed construction projects before founding Projex-Tec..</h6>
              </Writings>
              <Founder2></Founder2>
        </Wrapper>
      </Wrapper2>
    </Container>
  )
}

export default About;