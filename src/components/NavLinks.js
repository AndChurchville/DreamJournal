import React from 'react';
import firebase from 'firebase';
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars} from '@fortawesome/free-solid-svg-icons';

export default function NavLinks({open}) {
    const location = useLocation();

    return (
        <>
         <Nav open={open}>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/dreamentry">Enter Dream</Link></li>

        {location.pathname !== "/login" && (
          <li><Link to="/login" onClick={() => firebase.auth().signOut()}>
              Logout
            </Link>
          </li>
        )}
       <li className='icon'>
         <FontAwesomeIcon icon={faBars} />
       </li>
  
      </Nav>
            
        </>
    )
}


const Nav = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row no-wrap;

  li {
    justify-content: space-around;
    margin-left: 20px;
    padding: 18px 10px;
    border-radius: 5px;
    &:hover {
      background-color: rgba(157, 117, 178, 0.5);
    }
  }

  a {
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    color: white;
    font-size: 1.5rem;
  }

  @media (max-width: 768px){
    flex-flow: column nowrap;
    background-color: purple;
    position: fixed;
    transform: ${({open}) => open ? 'translateX(0)' :  'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    margin: 0;
    padding: 10px 0; 
    
  li {
    justify-content: space-around;
    &:hover {
      background-color: rgba(157, 117, 178, 0.5);
    }
  }
`;

