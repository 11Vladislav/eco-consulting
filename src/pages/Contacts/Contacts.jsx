import ContactsImg from '../../img/contacts-2.jpg';
import { Wrapper, Title, ContactsBlock, ContactItem, ContactTitle, ContactText, Span } from './Contacts.styled';
import { GiVibratingSmartphone } from "react-icons/gi";
import { PiMapPinAreaFill } from "react-icons/pi";
import { MdAlternateEmail } from "react-icons/md";
import { ConsultationForm } from 'components/ConsultationForm/ConsultationForm';
import { Footer } from 'components/Footer/Footer';


export const Contacts = () => { 

    return (
        <>
        <Wrapper>
            <Title>ТОВ “Екологічний консалтинг”</Title>
            <img src={ContactsImg} alt='contacts' height='258' width='1000' />
            <ContactsBlock>
                    <ContactItem>
                        <ContactTitle>Адреса: </ContactTitle>
                            <PiMapPinAreaFill size={50} />
                            <ContactText><ContactText><Span>м. Київ,
                                вул. Деревообробна, 3 В</Span></ContactText>
                            </ContactText>
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
            <Footer/>
            </>
    )
}