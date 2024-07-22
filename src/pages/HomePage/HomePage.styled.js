import styled from 'styled-components';
import backgroundImage from '../../img/cover.jpg';



export const HomeContainer = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 767px){
    align-items: center;
  }
`;