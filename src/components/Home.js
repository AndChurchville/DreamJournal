import React from "react";
import styled from "styled-components";
import starsky from "../assets/felix-mittermeier-unsplash.jpg";
import Dashboard from './Dashboard';

export default function Home() {
  return (
    <>
      <HeroWrapper>
        <HeroOverlay>
          <h1>Dream Journal</h1>
        </HeroOverlay>
        <HeroImg src={starsky} />
      </HeroWrapper>

      <Container>
        <Dashboard />
      </Container>
    </>
  );
}

const Container = styled.div` 
display: grid;
grid-template-columns: repeat(4, auto);
`;

const HeroWrapper = styled.div`
  position: relative;
`;
const HeroOverlay = styled.h1`
  text-align: center;
  position: absolute;
  z-index: 0;
  width: 100%;
  
  h1{
    font-size: 5vw;
    transform: translateY(-1vw); 
    color: #ffffff;
    letter-spacing: 0.35rem;
  }
  
`;

const HeroImg = styled.img`
position: relative;
  display: block;
  width: 100%;
  z-index: -1;
  margin: auto;
  object-fit: cover;
  height: 20vh;
`;


