import React from 'react'
import styled from "styled-components";

export const Policy = () => {
  return (
    <TopDiv>
        <Title>Policies</Title>
    <Content>
    <FigureImg>
        <Img src="./images/dog.jpg" />
      </FigureImg>
      <Box>
        {/* <PreTitle>Policies</PreTitle> */}
        
        <Description>
        <div className='text'>
            <h2>PETS</h2>
            <p>We are pet friendly. Our regular (not small) single kayaks provide plenty of cockpit space for pet passengers.
            Please note that we do not provide life jackets for your furry friends. </p>
        </div>
        <div className='text'>
            <h2>CLOTHING</h2>
            <p>For safety reasons we will not rent kayaks to persons wearing dresses/skirts/robes that fall below the knee. </p>
        </div>
        <div className='text'>
            <h2>CANCELLATION & WEATHER GUARANTEE</h2>
            <p>All reservations cancelled with 24-hour notice and/or cancelled due to 
                unsafe or unpleasant paddling conditions will be rescheduled or fully refunded.</p>
        </div>
        <div className='text'>
            <h2>AGE RESTRICTIONS</h2>
            <p>Only persons 18 years and over can sign a waiver. Persons under 18 must have a waiver signed by a
            parent or guardian who is over 18 years of age. Paddlers under 18 years of age must be accompanied on the water 
            by an adult paddler over 18 years of age. Experienced paddlers under 18 years of age MAY paddle in our restricted beach zone 
            but only if they can demonstrate strong paddling skills and the water is calm and wind is low.. </p>
        </div>
        </Description>
      </Box>

    </Content>
  </TopDiv>
  )
}
const TopDiv = styled.div`
width: 100%;
height: 100%;
position: relative;
padding: 4rem;
    background: #ecf2f9;
`;

const Content = styled.div`
  max-width: 1110px;
  min-height: 500px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

const Box = styled.article`
  color: #0d0d0d;
  padding: 40px;
  max-width: 620px;
  margin-top: 100px;
  width: 70%;
  position: relative;


`;

const Title = styled.h1`
  text-transform: uppercase;
  font-weight: 200;
  letter-spacing: 2px;
  margin-bottom: 24px;
  font-size: 40px;
  color: #0d0d0d;
  text-align: center;
`;


const Description = styled.p`
  letter-spacing: 0.5px;
  font-size: 20px;
  line-height: 26px;
`;
const Img = styled.img`
  height: 600px;
  width:auto;
  transform: translatey(80px);
  right: -6%;
  border-radius: 4px;
`;

const FigureImg = styled.figure`
  right: 0;
  max-width: 600px;
  width: 60%;
  height: 600px;
  transform: translatey(100px);
  /* position: absolute; */
  overflow: hidden;
`;