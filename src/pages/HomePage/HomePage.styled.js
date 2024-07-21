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
`;

export const TitleContainer = styled.div`
  margin-left: 150px;
  margin-top: 150px;
  max-width: 595px;

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
    margin-left: 150px;
        @media (min-width: 768px) {
            width: 300px;
            display: flex;
            align-items: center;
            justify-content: space-between;
  }

`

export const Button = styled.button`
    margin-top: 25px;
    border-color: #A1C935;
    border: 1px solid;
    background-color: transparent;
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

`

export const Proposal = styled.div`
    padding-top: 50px;
    background-color: #fff;
    width: 100%;
    @media (min-width: 768px) {
        padding: 100px 0 100px 0;
        margin-left: 150px;
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
  }
`;

export const ProposalTitle = styled.h3`
    margin-top: 45px;
    font-family: 'BanderaPro', sans-serif;
    font-size: 30px;
    text-align: center;
    text-transform: uppercase;
    @media (min-width: 769px) {
        font-size: 35px;
  }
`
export const Text = styled.p`
  font-size: 16px;
  margin-top: 15px;
  text-align: center;
`

export const List = styled.ul`
  display: flex;
  gap: 30px;
  margin-top: 45px;
`