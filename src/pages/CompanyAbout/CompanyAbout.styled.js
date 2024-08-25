import styled from "styled-components";

export const Wrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 125px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 15px;
`;

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

export const Text = styled.p`
    font-size: 18px;
    line-height: 1;
    font-family: 'BanderaPro', sans-serif;
    margin-top: 20px;
    margin-bottom: 20px;
    `;

export const Span = styled.span`
    font-size: 18px;
    font-weight: 700;
    line-height: 1;
    font-family: 'BanderaPro', sans-serif;
`;

export const Img = styled.div`
    padding: 15px 0;
`;