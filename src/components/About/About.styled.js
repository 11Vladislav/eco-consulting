import styled, { keyframes } from "styled-components";

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Wrapper = styled.section`
    width: 100%;
    box-sizing: border-box;
    margin-bottom: 45px;
    padding: 60px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'BanderaPro', sans-serif;
    background: linear-gradient(180deg, #ffffff 0%, #f3f8e6 100%);

    @media (max-width: 768px) {
        padding: 40px 15px;
    }
`;

export const AfterTitle = styled.h3`
    font-size: 14px;
    font-weight: 600;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: #A1C935;
    animation: ${fadeUp} 0.7s ease-out 0.1s backwards;
`;

export const Title = styled.h2`
    margin-top: 12px;
    font-size: 28px;
    font-weight: 700;
    line-height: 1.2;
    text-align: center;
    text-transform: uppercase;
    animation: ${fadeUp} 0.7s ease-out 0.1s backwards;

    /* акцентная черта под заголовком */
    &::after {
        content: '';
        display: block;
        width: 60px;
        height: 4px;
        margin: 18px auto 0;
        border-radius: 2px;
        background: #A1C935;
    }

    @media (min-width: 768px) {
        font-size: 42px;
    }
`;

export const Text = styled.p`
    margin-top: 30px;
    max-width: 700px;
    font-size: 17px;
    line-height: 1.7;
    text-align: center;
    color: #444;
    animation: ${fadeUp} 0.7s ease-out 0.1s backwards;
`;

export const Span = styled.span`
    color: #006400;
    font-weight: 700;
`;

export const List = styled.ul`
    list-style: none;
    margin: 50px 0 0;
    padding: 0;
    width: 100%;
    max-width: 1100px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 520px) {
        grid-template-columns: 1fr;
    }
`;

export const ListItem = styled.li`
    padding: 28px 18px 24px;
    text-align: center;
    background: #fff;
    border-radius: 12px;
    border-top: 4px solid ${({ $color }) => $color};
    box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
    transition: transform 0.25s ease, box-shadow 0.25s ease;
    animation: ${fadeUp} 0.7s ease-out ${({ $delay }) => $delay + 0.3}s backwards;

    &:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 24px rgba(0, 0, 0, 0.12);
    }
`;

export const CircularContainer = styled.div`
    margin: 0 auto;
    width: 130px;
    height: 130px;
`;

export const ListText = styled.p`
    margin-top: 18px;
    font-size: 15px;
    line-height: 1.4;
    color: #555;
`;

export const Accent = styled.strong`
    display: block;
    margin-bottom: 4px;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 0.5px;
    color: #000;
`;