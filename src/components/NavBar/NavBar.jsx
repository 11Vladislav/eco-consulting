import { useState } from 'react';
import {
    MenuLink, Nav, NavRow, Menu, MenuItem, Burger, Drawer,
    Contacts, ContactItem, ContactLink, Span, ContactMail, ItemText
} from './NavBar.styled';

import logo from './../../img/logo-2.jpg';
import { FaBars, FaTimes } from 'react-icons/fa';
import { PiMapPinDuotone } from "react-icons/pi";
import { VscMail } from "react-icons/vsc";
import { HiDevicePhoneMobile } from "react-icons/hi2";


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
            
            <NavRow>
                <MenuLink to="/">
                    <img src={logo} alt='logo' width='124' height='84'/>
                </MenuLink>
            
                <Burger onClick={handleToggle}>
                        {open ? <FaTimes color="#000" /> : <FaBars color="#000" />}
                </Burger>
            </NavRow>
     
            <Drawer $open={open}>
                <Contacts>
                    <ContactItem>        
                        <PiMapPinDuotone width="28" height="22" />
                        Працюємо по всій Україні &nbsp;9:00 - 18:00
                    </ContactItem>
                    <ContactItem>
                        <ContactMail as="a"  href="mailto:info@www.eco-consulting.com.ua">
                               <VscMail width="28" height="28" />
                                <ItemText>info@www.eco-consulting.com.ua</ItemText>
                        </ContactMail>
                                        
                    </ContactItem>
                    <ContactItem>
                        <ContactLink as="a" href='tel:+38 (093) 833-42-80'>
                                <HiDevicePhoneMobile width="22" height="22" />
                                <Span>+38 (093) 833-42-80 </Span>&nbsp;&nbsp;
                        </ContactLink>Безкоштовна консультація
                        
                    </ContactItem>
                </Contacts>
            <Menu  onClick={handleClose}>
                <MenuItem>
                    <MenuLink to="/services">Послуги</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/law">Законодавство</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/companyabout">Про нас</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/licenses">Ліцензії</MenuLink>
                </MenuItem>
                <MenuItem>
                    <MenuLink to="/contacts">Контакти</MenuLink> 
                </MenuItem>

            </Menu>
  
            </Drawer>
        </Nav>
    )
}