import React from "react";
import firebase from 'firebase';
import { Link } from "react-router-dom";
import styled from "styled-components";
import starsky from "../assets/felix-mittermeier-unsplash.jpg";



export default function Navbar() {

  return (
    <NavWrapper>
      <Wordmark>Dream Journal</Wordmark>
      <Nav>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/dreamentry">Enter a Dream</Link>
        </li>

        <li>
          <Link to='/login' onClick={() => firebase.auth().signOut()}>Logout</Link>
        </li>
      </Nav>
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
  padding: 2%;
`;

const Wordmark = styled.h1`
color: white;
font-family: 'Caveat Brush', sans-serif;
font-size: 4rem;
`;

const Nav = styled.ul`
list-style: none;
display: flex;

li{
justify-content: space-around;
margin-left: 20px;
}


a{
    text-decoration: none;
    font-family: 'Poppins', sans-serif;
    color: white;
    font-size: 1.5rem;
}
`;
