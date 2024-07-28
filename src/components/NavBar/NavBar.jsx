import { useState } from 'react';
import {
    MenuLink,
    Nav,
    Menu,
    MenuItem,
    Burger,
    Contacts,
    ContactItem,
    ContactLink,
    Span,

} from './NavBar.styled';
import logo from './../../img/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { PiMapPinDuotone } from "react-icons/pi";
import { VscMail } from "react-icons/vsc";
import { HiDevicePhoneMobile } from "react-icons/hi2";


// import { Submenu } from 'components/Submenu/Submenu';

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
                            <Contacts>
                <ContactItem>        
                        <PiMapPinDuotone width="22" height="22" />
                        <Span>Працюємо</Span> по всій території України
                </ContactItem>
                <ContactItem>
                    <ContactLink href='maito:info@eco-consulting.com.ua'>
                            <VscMail width="22" height="22" />
                            <Span>info@eco-consulting.com.ua</Span>
                    </ContactLink>
                        <br/>
                             Працюємо 9:00 - 18:00
                </ContactItem>
                <ContactItem>
                    <ContactLink href='tel:+38 (093) 833-42-80'>
                            <HiDevicePhoneMobile width="22" height="22" />
                            <Span>+38 (093) 833-42-80 </Span><br/>
                    </ContactLink>
                        Безкоштовна консультація
                </ContactItem>
            </Contacts>
            </Menu>

 
        </Nav>
    )
}