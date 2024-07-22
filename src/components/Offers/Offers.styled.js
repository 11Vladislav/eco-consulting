import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ProposalContainer = styled.div`
  margin-left: calc(10% - 25px);
  display: flex;
  flex-direction: column;
  justify-content: center;
    @media (max-width: 767px){
        display: block;
    }
 
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
  justify-content: center;
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