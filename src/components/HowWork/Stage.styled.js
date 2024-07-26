import styled, { keyframes } from 'styled-components';

const slideInFromLeft = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(0); }
`;

const slideInFromRight = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(0); }
`;

export const Wrapper = styled.ul`
    display: flex;
    flex-direction: row;
    gap: 10px;

`;

export const StageContainer = styled.li`
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
  padding: 20px;
  animation: ${(props) => (props.index % 2 === 0 ? slideInFromLeft : slideInFromRight)} 1s ease-out;
`;

export const Number = styled.div`
  font-size: 50px;
  font-weight: 700;
  color: ${(props) => props.color};
  cursor: pointer;
  font-family: 'BanderaPro', sans-serif;
`;

export const Title = styled.h3`
  text-align: center;
  font-family: 'BanderaPro', sans-serif;
`;

export const Description = styled.p`
  margin: 10px 0;
  font-weight: 700;
  font-family: 'BanderaPro', sans-serif;
   text-align: center;
   
`;

export const Text = styled.div`
  overflow: hidden;
  max-width: 300px;
  max-height: ${(props) => (props.visible ? '200px' : '0')};
  transition: max-height 0.5s ease-out;
`;