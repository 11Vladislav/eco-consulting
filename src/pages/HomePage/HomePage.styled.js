import styled from 'styled-components';
import backgroundImage from '../../img/cover.jpg';
import { Link } from 'react-router-dom';



export const HomeContainer = styled.div`
  background-image: url(${backgroundImage});
  /* background-size: cover; */
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  margin-left: calc(10%);
  max-width: 327px;

  @media (max-width: 768px) {
    padding-right: 100px;
    margin-left: calc(15%);
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
    margin-left: 100px;
    margin-left: calc(15%);
        @media (min-width: 768px) {
            margin-left: calc(10%);
            width: 300px;
            display: flex;
            align-items: center;
            justify-content: space-between;
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

export const ProposalContainer = styled.div`
  margin-left: calc(10% - 25px);
  display: flex;
  flex-direction: column;
  justify-content: center;
 
`;

export const Proposal = styled.div`
    background-color: #fff; 
    margin-left: calc(15%);
    max-width: 419px;
    
    @media (max-width: 767px){
      max-width: 250px;
      margin-left: calc(20%);
    }

    @media (min-width: 768px) {
        
        margin-left: calc(30%);
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
`;
export const Text = styled.p`
  font-size: 16px;
  margin-top: 15px;
`;

export const List = styled.ul`
  padding-bottom: 100px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
  margin-top: 45px;

`;

export const ListItem = styled.li`
  background-color: #f9f9f9;
  border-radius: 2px;
  border: 1px solid;
  border-color: #c3c3c3;
  padding: 20px;
  display: flex;
  align-items: center;
  width: 300px;
  height: 155px;
  
    &:hover, &:focus {
      filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.10000000149011612));
    }
`;

export const NavLink = styled(Link)`
    &:hover, &:focus {
      filter: drop-shadow(0px 2px 4px rgba(0,0,0,0.10000000149011612));
      color: #cb4332;
    }

`;