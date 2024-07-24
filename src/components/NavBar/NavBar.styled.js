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
  padding-right: 15px;
  height: 90px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  padding-left: 15px;
  align-items: center;
 

  @media (max-width: 768px) {
    
    flex-direction: column;
    position: absolute;
    top: 85px;
    left: ${({ open }) => (open ? '0' : '-100%')};
    width: 100%;
    background: #fff;
    transition: 0.3s;
  }
`;

export const MenuItem = styled.li`
  margin: 0 10px;
  max-height: 20px;
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

export const Contacts = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
  
 

  @media (min-width: 768px) {
    margin-left: 20px;
    flex-direction: row;
    gap: 10px;
    justify-content: space-between;
     padding: 10px 0;
     
  }

`;

export const ContactItem = styled.li`
  text-align: center;
  @media (min-width: 768px) {
      max-width: 150px;
      max-height: 110px;
    }
`;

export const ContactLink = styled.a`
  color: #000;
    &:hover {
    color: #A1C935;
  }
`;

export const Span = styled.span`
  margin-left: 5px;
  font-size: 18px;
  font-weight: 600;
`;