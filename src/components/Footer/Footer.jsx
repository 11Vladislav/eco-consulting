import { useState } from 'react';

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FooterContainer, FooterItem, Icon, MapFrame, ItemText } from './Footer.styled';


export const Footer = () => {
  const [showMap, setShowMap] = useState(false);

  return (
    <FooterContainer>
      <FooterItem onClick={() => setShowMap(!showMap)}>
        <Icon>
          <FaMapMarkerAlt />
        </Icon>
        <ItemText>м. Київ, вул. Деревообробна, 3 В</ItemText>
      </FooterItem>
      <FooterItem as="a" href="tel:+380938334280">
        <Icon>
          <FaPhoneAlt />
        </Icon>
        <ItemText>+38 (093) 833-42-80</ItemText>
      </FooterItem>
      <FooterItem as="a" href="mailto:info@www.eco-consulting.com.ua">
        <Icon>
          <FaEnvelope />
        </Icon>
        <ItemText>info@www.eco-consulting.com.ua</ItemText>
      </FooterItem>
      {showMap && (
        <MapFrame
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.9626916962557!2d30.57326957605762!3d50.404532890669536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4c58cd1c3ff73%3A0x1641df13b5637f2d!2z0LLRg9C70LjRhtGPINCU0LXRgNC10LLQvtC-0LHRgNC-0LHQvdCwLCAzLdCSLCDQmtC40ZfQsiwgMDEwMTM!5e0!3m2!1suk!2sua!4v1722027243962!5m2!1suk!2sua"
          allowFullScreen=""
          loading="lazy"
        ></MapFrame>
      )}
    </FooterContainer>
  );
};

