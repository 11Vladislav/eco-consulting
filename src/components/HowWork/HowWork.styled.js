import styled, { keyframes } from "styled-components";

const slideIn = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
`;

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 20px;
    padding-right: 20px;
     margin-top: 20px;
      @media (max-width: 768px) {
        flex-direction: column;
  }
`;



export const Title = styled.h2`
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;
    animation: ${slideIn} 1s ease-out;
    font-family: 'BanderaPro', sans-serif;
    @media (min-width: 768px) {
        font-size: 45px;
     }
`;

export const SubTitle = styled.h3`
    font-size: 16px;
    text-align: center;
    animation: ${slideIn} 1.5s ease-out;
    font-family: 'BanderaPro', sans-serif;
        @media (min-width: 768px) {
        font-size: 20px;
     }
`;
