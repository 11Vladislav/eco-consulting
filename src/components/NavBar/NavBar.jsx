import { useState } from 'react';
import {MenuLink, Nav, Menu, MenuItem, Burger} from './NavBar.styled';
import logo from './../../img/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';


export const NavBar = () => {

    const [open, setOpen] = useState(false);
    
     const handleToggle = () => {
            setOpen(!open);
  };

     const handleClose = () => {
        setOpen(false);
  };
    
    return (
        <Nav>
            <MenuLink to="/">
                <img src={logo} alt='logo' width='174' height='84'/>
            </MenuLink>
            <Burger onClick={handleToggle}>
                    {open ? <FaTimes color="#000" /> : <FaBars color="#000" />}
            </Burger>
            <Menu open={open} onClick={handleClose}>
                <MenuItem>
                    <MenuLink to="/">Головна</MenuLink> 
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/services">Послуги</MenuLink> 
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/law">Законодавство</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/about">Про нас</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/licenses">Ліцензії</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/contacts">Контакти</MenuLink> 
                </MenuItem>
             </Menu>
        </Nav>
    )
}