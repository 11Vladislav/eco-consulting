import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 auto;
    max-width: 1200px;
   padding-top: 125px;
   padding-bottom: 100px;
   @media (max-width: 768px) {
    padding-bottom: 50px;
   }
`

export const Title = styled.h2`
    font-size: 35px;
    font-weight: 600;
    line-height: 1;
    font-family: 'BanderaPro', sans-serif;
    margin-bottom: 50px;
    text-align: center;
    @media (max-width: 768px) {
        font-size: 30px;
    }
`;

export const List = styled.ol`
   display: flex;
   flex-direction: column;
   gap: 15px;
   max-width: fit-content;
`;

export const ListText = styled.li`
    font-size: 18px;
    line-height: 1;
    font-family: 'BanderaPro', sans-serif;
`;
