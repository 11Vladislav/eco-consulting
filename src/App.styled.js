import styled, { keyframes } from 'styled-components';


export const scrollToTopButton = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const ScrollToTopButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  display: ${props => (props.visible ? 'block' : 'none')};
  animation: ${scrollToTopButton} 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

