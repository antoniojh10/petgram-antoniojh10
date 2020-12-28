import React from 'react';
import { RiHome2Line, RiHeartLine, RiUserLine } from 'react-icons/ri';
import { Nav, Link } from './styles';

const SIZE = '2rem';

export const NavBar = () => (
  <Nav>
    <Link to="/">
      <RiHome2Line size={SIZE} />
    </Link>
    <Link to="/favs">
      <RiHeartLine size={SIZE} />
    </Link>
    <Link to="/user">
      <RiUserLine size={SIZE} />
    </Link>
  </Nav>
);
