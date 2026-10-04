import styled from 'styled-components';

import { NavLink } from "react-router-dom";


export const MenuLink = styled(NavLink)`
    border-radius: 4px;
    text-decoration: none;
    color: black;
    font-weight: 500;
    font-size: 18px;
    text-decoration: none;
    transition: background-color 500ms cubic-bezier(0.4, 0, 0.2, 1);
    font-family: 'BanderaPro', sans-serif;
  &:hover {
    color: #A1C935;
  }
`

export const Nav = styled.nav`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  background: #fff;
  z-index: 100;

  @media (max-width: 1000px) {
    display: flex;
    flex-direction: column;
    padding: 0 20px;
  }

  @media (min-width: 1001px) {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 40px;
  }
`;

export const NavRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (min-width: 1001px) {
    display: contents;

    & > a {
      order: 2;                /* логотип: вторая строка, слева */
    }
  }
`;


export const Menu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;

  @media (min-width: 1001px) {
    order: 3;                  /* вторая строка, справа от логотипа */
    flex: 1;
    margin-left: 100px;
  }

  @media (max-width: 1000px) {
    flex-direction: column;
    padding: 10px 0;
    background: #fff;
    border-top: 1px solid #eee;
  }
`;

export const MenuItem = styled.li`
  margin: 0 10px;

  @media (max-width: 1000px) {
    text-align: center;
    padding: 10px;
    width: 100%;
    margin: 0;
  }
`;

export const Burger = styled.div`
  display: none;

  @media (max-width: 1000px) {
    display: block;
    font-size: 24px;
    cursor: pointer;
  }
`;

export const Contacts = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 0;
  padding: 15px 0;
  list-style: none;
  background: #fff;

  @media (min-width: 1001px) {
    order: 1;                  /* первая строка */
    flex: 0 0 100%;            /* занимает всю ширину, переносит остальное вниз */
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 35px;
    padding: 10px 0;
  }
`;

export const ContactItem = styled.li`
  text-align: center;
  @media (min-width: 1000px) {
      max-width: 450px;
      max-height: 110px;
    }
`;

export const ContactMail = styled.div`
  display: flex;
    align-items: center;
  cursor: pointer;
    font-size: 14px;
    color: #000;
    &:hover {
    color: #A1C935;
    }
`

export const ContactLink = styled.a`
  font-size: 14px;
  color: #000;
    &:hover {
    color: #A1C935;
  }
`;

export const Span = styled.span`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 600;
`;


export const NavItem = styled.div`
  @media screen and (max-width: 768px) {
    padding: 10px 0;
    text-align: center;
  }
`;

export const Drawer = styled.div`
  @media (min-width: 1001px) {
    display: contents;   /* Menu и Contacts становятся ячейками сетки Nav */
  }

  @media (max-width: 1000px) {
    position: absolute;
    top: 100%;                          /* сразу под хедером */
    left: 0;
    width: 100%;
    max-height: calc(100vh - 100px);    /* если не влезает, прокручивается */
    overflow-y: auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    background: #fff;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

    transform: translateX(${({ $open }) => ($open ? '0' : '-100%')});
    visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
    transition: transform 0.3s ease, visibility 0.3s;
  }
`;

export const ItemText = styled.div`
  margin-left: 5px;
  font-size: 14px;
  font-weight: 600;
`;