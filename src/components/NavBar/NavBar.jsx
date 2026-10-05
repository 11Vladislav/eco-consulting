import { useState } from 'react';
import {
    MenuLink, Nav, NavRow, Menu, MenuItem, Burger, Drawer,
    Contacts, ContactItem, ContactLink, Span, ContactMail, ItemText,
    SubItem, ItemRow, SubToggle, Submenu, SubLink
} from './NavBar.styled';
import logo from './../../img/logo-2.jpg';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { PiMapPinDuotone } from "react-icons/pi";
import { VscMail } from "react-icons/vsc";
import { HiDevicePhoneMobile } from "react-icons/hi2";

const serviceLinks = [
    { to: '/services#emissions',  label: 'Дозвіл на викиди в атмосферу' },
    { to: '/services#water',      label: 'Дозвіл на спеціальне водокористування' },
    { to: '/services#ovd',        label: 'Оцінка впливу на довкілля (ОВД)' },
    { to: '/services#declaration',label: 'Реєстрація декларації про відходи' },
    { to: '/services#operations', label: 'Дозвіл на здійснення операцій з оброблення відходів' },
    { to: '/services#plan',       label: 'Розробка плану управління відходами' },
];

export const NavBar = () => {
    const [open, setOpen] = useState(false);
    const [subOpen, setSubOpen] = useState(false);

    const handleToggle = () => setOpen(!open);
    const handleClose = () => {
        setOpen(false);
        setSubOpen(false);
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
            <Menu onClick={handleClose}>
                    <SubItem>
                        <ItemRow>
                            <MenuLink to="/services">Послуги</MenuLink>
                            <SubToggle
                                type="button"
                                aria-label="Показати підпункти"
                                $open={subOpen}
                                onClick={(e) => {
                                    e.stopPropagation();   // не закрывать панель
                                    setSubOpen(!subOpen);
                                }}
                            >
                                <FaChevronDown />
                            </SubToggle>
                        </ItemRow>

                        <Submenu $open={subOpen}>
                            {serviceLinks.map(({ to, label }) => (
                                <li key={to}>
                                    <SubLink to={to}>{label}</SubLink>
                                </li>
                            ))}
                        </Submenu>
                    </SubItem>
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