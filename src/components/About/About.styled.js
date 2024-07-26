import styled from "styled-components";


export const Wrapper = styled.div`
    width: 100%;
   margin-bottom: 45px;
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
  
    text-align: center;

     @media (min-width: 768px) {
        font-size: 45px;
     }
`

export const AfterTitle = styled.h3`
    margin-top: 15px;
    font-size: 18px;
   
`

export const AboutTitle = styled.h2`
    margin-top: 45px;
    font-size: 30px;
    font-weight: 500;
    line-height: 1;

    

     @media (min-width: 768px) {
        font-size: 45px;
     }
`;

export const Text = styled.p`
    margin-top: 45px;
    font-size: 16px;
    line-height: 1;
    text-align: center;

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