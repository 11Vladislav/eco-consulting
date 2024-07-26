import styled, { keyframes } from "styled-components";


const slideY = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(0); }
`;

const slideX = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
`;

export const Wrapper = styled.div`
    width: 100%;
   margin-bottom: 45px;
   padding-bottom: 45px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'BanderaPro', sans-serif;
    background: rgb(144,143,150);
    background: linear-gradient(90deg, rgba(144,143,150,1) 2%, rgba(221,221,221,1) 100%, rgba(0,212,255,1) 100%);
`;

export const Title = styled.h2`
    margin-top: 45px;
    font-size: 30px;
    font-weight: 600;
    line-height: 1;
    animation: ${slideY} 1s ease-out;
    text-align: center;

     @media (min-width: 768px) {
        font-size: 45px;
     }
`

export const AfterTitle = styled.h3`
    margin-top: 15px;
    font-size: 18px;
    animation: ${slideY} 1.5s ease-out;
`

export const AboutTitle = styled.h2`
    margin-top: 45px;
    font-size: 30px;
    font-weight: 500;
    line-height: 1;
    animation: ${slideY} 1s ease-out;
    

     @media (min-width: 768px) {
        font-size: 45px;
     }
`;

export const Text = styled.p`
    margin-top: 45px;
    font-size: 16px;
    line-height: 1;
    text-align: center;
    animation: ${slideY} 1s ease-out;
    max-width: 400px;
    @media (min-width: 768px) {
        max-width: 550px;
     }
`

export const List = styled.ul`
    padding-top: 50px;
    display: flex;
    gap: 15px;
    max-width: 600px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
   
    @media (min-width: 768px) {
        justify-content: space-around;
     }
`;

export const ListItem = styled.li`
    max-width: 250px;
    text-align: center;
    padding: 15px;
    animation: ${slideX} 1.5s ease-out;
`;  

export const CircularContainer = styled.div`
    margin: 0 auto;
    width: 150px;
    height: 150px;
`;

export const Span = styled.span`
    color: #006400; 
    font-size: 18px;
    font-weight: 600;
    line-height: 1;
`;

export const ListText = styled.p`
    margin-top: 10px;
    font-size: 16px;
    line-height: 1;
    text-align: center;

`;