import React from "react";
import styled from "styled-components";
import starsky from "../assets/felix-mittermeier-unsplash.jpg";

import NavLinks from './NavLinks';
import MenuBars from './MenuBars';


export default function Navbar() {

  return (
    <NavWrapper>
      <Wordmark Link to="/">Dream Journal</Wordmark>
      <MenuBars />
      {/* <NavLinks/> */}
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(27, 2, 19, 0.5),
      rgba(27, 2, 19, 0.5)
    ),
    url(${starsky});
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;
height: 75px;
padding: 5%;

  .icon{
    color: white;
    font-size: 1.5rem;
    display:none;
  }

 
`;

const Wordmark = styled.h1`
color: white;
font-family: 'Caveat Brush', sans-serif;
font-size: 5rem;
padding: 15px 0;

@media (max-width: 1200px){
  font-size: 3rem;
  letter-spacing: 2px;
}
@media (max-width: 992px){
  font-size: 2rem;
}
`;


