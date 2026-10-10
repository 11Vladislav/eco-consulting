import styled from "styled-components";
import { Link } from 'react-router-dom';


export const Picture = styled.picture`
    display: block;
    width: 100%;

    img {
        display: block;
        width: 100%;
        height: auto;      /* пропорции сохраняются, картинка не растягивается */
    }
`;


export const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 15px 25px;
    margin-bottom: 15px;
    background: #fff;

`;



export const Title = styled.h2`
    margin-top: 200px;
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
    font-size: 18px;
`;

export const TextAttention = styled.h3`
    margin-top: 20px;
    font-family: 'BanderaPro', sans-serif;
    font-size: 18px;
    font-weight: 600;
`;

export const Paragraph = styled.h3`
    margin-top: 20px;
    font-family: 'BanderaPro', sans-serif;
    font-size: 16px;
    font-weight: 700;
    color: #A1C935;
     &:hover {
        color: #000;
        transition:  color 300ms ease-in-out;
  }
`;

export const ParagraphLink = styled(Link)`
    color: inherit;
    text-decoration: none;
`;

// export const MoreLink = styled(Link)`
//     display: inline-block;
//     margin-top: 8px;
//     font-family: 'BanderaPro', sans-serif;
//     font-size: 15px;
//     color: #000;
//     text-decoration: none;

//     &:hover {
//         color: #A1C935;
//     }
// `;

export const DetailWrapper = styled(Wrapper)`
    padding-top: 200px;          /* место под хедер, подберите под свою высоту */
    min-height: 60vh;

    @media (max-width: 1000px) {
        padding-top: 120px;
    }
`;

export const BackLink = styled(Link)`
    margin-bottom: 10px;
    font-family: 'BanderaPro', sans-serif;
    color: #000;
    text-decoration: none;

    &:hover {
        color: #A1C935;
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

export const DetailImage = styled.img`
    display: block;
    width: 100%;
    max-height: 420px;
    object-fit: cover;
    margin-top: 20px;
    border-radius: 6px;
`;

export const SectionTitle = styled.h3`
    margin-top: 40px;
    font-family: 'BanderaPro', sans-serif;
    font-size: 22px;
    font-weight: 600;
    color: #A1C935;

    @media (max-width: 768px) {
        font-size: 20px;
    }
`;

export const DetailList = styled.ul`
    margin-top: 15px;
    padding-left: 25px;
    list-style: ${({ $ordered }) => ($ordered ? 'decimal' : 'disc')};
    font-family: 'BanderaPro', sans-serif;
    font-size: 16px;
    line-height: 1.5;

    li {
        margin-top: 8px;
    }

    li::marker {
        color: #A1C935;
        font-weight: 700;
    }
`;