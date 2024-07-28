import styled from "styled-components";

export const Wrapper = styled.div`
    height: 1500px;
    max-width: 825px;
    margin: 0 auto;
    padding: 150px 15px;
`;


export const Title = styled.h2`
    color: #A1C935;
    margin-top: 30px;
    font-size: 32px;
    font-family: 'BanderaPro', sans-serif;
    @media (max-width: 768px) {
        max-width: 450px;
        font-size: 25px;
    }
`

export const Text = styled.p`
    margin-top: 20px;
    font-family: 'BanderaPro', sans-serif;
    font-size: 16px;
`;

export const TextAttention = styled.h3`
    margin-top: 20px;
    font-family: 'BanderaPro', sans-serif;
    font-size: 16px;
    font-weight: 600;
`;

export const Paragraph = styled.h3`
    margin-top: 20px;
    font-family: 'BanderaPro', sans-serif;
    font-size: 16px;
    font-weight: 600;
    color: #A1C935;
     &:hover {
        color: #000;
        transition:  color 300ms ease-in-out;
  }
`;

export const Textblock = styled.div`
    margin-top: 50px;
`;

export const List = styled.ul`
    margin-top: 35px;
    margin-left: 35px;
    list-style: decimal;
`
export const Listitem = styled.li`
    font-style: "BanderaPro" sans-serif;
    font-size: 16;

`;