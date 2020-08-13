import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavWrapper>
      <Nav>
        <li>
          <Link to="/">Dashboard</Link>
        </li>
        <li>
          <Link to="/dreamentry">Enter a Dream</Link>
        </li>
      </Nav>
    </NavWrapper>
  );
}

const NavWrapper = styled.div`
background-color: rgba(153, 51, 255);
  display: flex;
  justify-content: space-around;
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
    color: white;
    font-size: 1.5rem;
}
`;
