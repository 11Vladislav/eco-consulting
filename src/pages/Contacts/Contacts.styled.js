import styled from "styled-components";


export const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    padding-top: 125px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
`;


export const Title = styled.h2`
    margin-top: 10%;
    margin-bottom: 50px;
    color: #A1C935;
    margin-top: 30px;
    font-size: 32px;
    font-family: 'BanderaPro', sans-serif;
    @media (max-width: 768px) {
        max-width: 450px;
        font-size: 25px;
    }

`;

export const ContactsBlock = styled.ul`
    margin-top: 50px;
    display: flex;
    max-width: 1000px;
    gap: 15px;
    justify-content: space-between;
    @media (max-width: 768px) {
        display: block;
    }
`;

export const ContactItem = styled.li`
   display: flex;
   flex-direction: column;
    align-items: center;
`;

export const ContactTitle = styled.h3`
    margin-bottom: 15px;
    font-size: 26px;
    font-weight: 600;
    font-family: 'BanderaPro', sans-serif;
`;

export const ContactText = styled.p`
    margin-top: 15px;
    margin-bottom: 15px;
     font-size: 18px;
     color: #A1C935;
    font-family: 'BanderaPro', sans-serif;
     transition: color 0.3s, transform 0.3s;

    &:hover {
        color: #000;
    }
`;

export const Span = styled.span`
  color: #000;
`;