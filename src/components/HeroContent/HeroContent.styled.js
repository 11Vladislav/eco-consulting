import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
   &:hover, &:focus {
    color: #fff;
   }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  margin-top: 10%;
     @media (max-width: 768px) {
      margin-left: 0;
     
       align-items: center;
       justify-content: center;
     }
`;

export const TitleContainer = styled.div`
 
  @media (max-width: 768px) {
     max-width: 300px;
  }
  
  @media (min-width: 769px) {
    max-width: 595px;
  }
`;


export const Title = styled.h1`
  color: #252b42;
  font-family: 'BanderaPro', sans-serif;
  

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (min-width: 769px) {
    font-size: 40px;
  }
`;

export const SubTitle = styled.h2`
margin-top: 20px;
  color: #295c7a;
  font-family: 'BanderaPro', sans-serif;
  

  @media (max-width: 768px) {
    font-size: 18px;
  }

  @media (min-width: 769px) {
    font-size: 28px;
  }
`;


export const ButtonContainer = styled.div`
    margin-top: 25px;
        @media (min-width: 768px) {
            width: 300px;
            display: flex;
     
  }

`;

export const Button = styled.button`
    margin-top: 25px;
    border-color: #A1C935;
    border: transparent;
    background-color: #e3e3e3;
    color: #000;
    font-size: 20px;
    font-weight: 600;
    border-radius: 37px;
    padding-left: 36px;
    padding-right: 36px;
    padding-top: 10px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-family: 'Open Sans' sans-serif;
    transition: background-color 350ms cubic-bezier(0.4, 0, 0.2, 1);
    &:hover, &:focus {
        background-color: #A1C935;
        border-color: #A1C935;
        color: #fff;
  }
    @media (min-width: 768px) {
        margin-right: 25px;
    }

`;