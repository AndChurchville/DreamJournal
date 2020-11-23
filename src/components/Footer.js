import React from 'react';
import styled from 'styled-components';
import starsky from "../assets/felix-mittermeier-unsplash.jpg";

export default function Footer() {
    return (
        <>
        <FooterWrap>
            <Copyright> Created by Andrea Churchville</Copyright>
        </FooterWrap>
        </>
    )
}


const FooterWrap = styled.div`
     background-image: linear-gradient(
      0deg,
      rgba(27, 2, 19, 0.5),
      rgba(27, 2, 19, 0.5)
    ),
    url(${starsky});
  background-size: cover;
    height: 5vh;
    padding: 10px;
    position: absolute;
    bottom: 0;
    width: 100%;
    `

const Copyright = styled.div`
    color: white;
    text-align: center;
    font-family: var(--body-text);
    `