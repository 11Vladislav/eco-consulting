import styled from 'styled-components';

import { NavLink } from "react-router-dom";

export const MenuLink = styled(NavLink)`
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
    font-family: 'BanderaPro', sans-serif;
  &:hover {
    color: #A1C935;
  }
`

export const Nav = styled.nav`
  padding-left: 15px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 15px;

  @media (max-width: 768px) {
    
    flex-direction: column;
    position: absolute;
    top: 60px;
    left: ${({ open }) => (open ? '0' : '-100%')};
    width: 100%;
    background: #fff;
    transition: 0.3s;
  }
`;

export const MenuItem = styled.li`
  margin: 0 10px;

  @media (max-width: 768px) {
    text-align: center;
    padding: 10px;
    width: 100%;
  }
`;

export const Burger = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    font-size: 24px;
    position: absolute;
    right: 35px;
    font-size: 24px;
    cursor: pointer;
    margin-right: auto;
  }
`;