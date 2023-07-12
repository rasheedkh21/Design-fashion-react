import React from 'react'
import { Computer, Container, Lorem, Wrapper } from './style';
import { Loyiha, Oldi, Wrap } from '../home/style';

const Contact = () => {
  return (
    <Container>
      <Wrap>
        <Loyiha>Contact</Loyiha>
        <Oldi>lahiyeni tanidacaq qisa soz</Oldi>
      </Wrap>
      <Wrapper>
        <Computer></Computer>
        <Lorem>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
           when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
           It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing 
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Lorem>
      </Wrapper>
    </Container>
  )
}

export default Contact;