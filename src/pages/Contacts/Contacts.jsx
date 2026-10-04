import { useState } from 'react';
import ContactsImg from '../../img/contacts-2.jpg';
import ContactsImgMob from '../../img/contacts-mob.png';
import { Wrapper, Title, ContactsBlock, ContactItem, ContactTitle, ContactText, Span, AddressLink, Picture } from './Contacts.styled';
import { GiVibratingSmartphone } from "react-icons/gi";
import { PiMapPinAreaFill } from "react-icons/pi";
import { MdAlternateEmail } from "react-icons/md";
import { ConsultationForm } from 'components/ConsultationForm/ConsultationForm';
import { Footer } from 'components/Footer/Footer';


export const Contacts = () => {
    const [mapTrigger, setMapTrigger] = useState(0);
    const handleAddressClick = () => setMapTrigger((n) => n + 1);

    return (
        <>
        <Wrapper>
            <Title>ТОВ “Екологічний консалтинг”</Title>
            <Picture>
                <source media="(max-width: 768px)" srcSet={ContactsImgMob} />
                <img src={ContactsImg} alt="contacts img" width="1000" height="458" />
            </Picture>
            <ContactsBlock>
                        <ContactItem>
                            <ContactTitle>Адреса: </ContactTitle>
                            <PiMapPinAreaFill size={50} />
                            <AddressLink
                                role="button"
                                tabIndex={0}
                                onClick={handleAddressClick}
                                onKeyDown={(e) => e.key === 'Enter' && handleAddressClick()}
                            >
                                <ContactText>м. Київ, вул. Деревообробна, 3 В</ContactText>
                            </AddressLink>
                    </ContactItem>
                    <ContactItem>
                     <ContactTitle>Телефон: </ContactTitle>
                        <GiVibratingSmartphone size={50} />
                        <ContactText as="a" href="tel:+380938334280">
                            <ContactText>+38 (093) 833-42-80</ContactText>
                        </ContactText>
                    </ContactItem>
                    
                    <ContactItem>
                        <ContactTitle>Пошта: </ContactTitle>
                            <MdAlternateEmail size={50} />
                        <ContactText as="a" href="mailto:info@www.eco-consulting.com.ua">
                            <ContactText>info@eco-consulting.com.ua</ContactText> 
                            </ContactText>
                </ContactItem>
                
            </ContactsBlock>
        </Wrapper> 
            <ConsultationForm />
            <Footer mapTrigger={mapTrigger} />
            </>
    )
}