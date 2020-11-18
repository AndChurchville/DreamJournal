import React, { useState } from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import NavLinks from './NavLinks';

export default function MenuBars() {
    const [open, setOpen] = useState(false);

    var menuIcon;
    if (open) {
      menuIcon = <FontAwesomeIcon icon={faTimes} />
    } else {
      menuIcon =  <FontAwesomeIcon icon={faBars} />
    }

    return (
      <>
        <Menu open={open} onClick={() => setOpen(!open)}>
          {menuIcon}
        </Menu>
        <NavLinks open={open} />
      </>
    );
}

const Menu = styled.div `
color: ${({ open }) => open ? '#392757' : 'white'};
font-size: 2rem;
cursor: pointer;
z-index: 20;
display: none;

@media (max-width: 760px){
    display: flex;
}
`;
