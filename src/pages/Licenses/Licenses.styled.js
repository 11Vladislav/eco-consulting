import styled from "styled-components";

export const Wrap = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    align-items: flex-start;
    justify-content: center;
    padding: 120px 20px 40px;        /* верхний отступ = высота хедера + запас */
    box-sizing: border-box;
    max-width: 1200px;
    margin: 0 auto;

    @media (max-width: 1000px) {
        padding: 120px 15px 30px;    /* на мобильных хедер ниже: логотип + бургер */
    }
`;
export const Thumb = styled.img`
    width: calc(50% - 6px);   /* каждая ліцензія занимает половину страницы */
    max-width: 300px;
    height: 500px;
    cursor: zoom-in;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
    transition: transform 0.2s ease;

    &:hover {
        transform: scale(1.02);
    }

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Title = styled.h2`
    flex: 0 0 100%;                  /* заголовок занимает всю ширину, картинки под ним */
    text-align: center;
    color: #A1C935;
    font-size: 28px;
    font-family: 'BanderaPro', sans-serif;

    @media (max-width: 768px) {
        font-size: 22px;
    }
`;

export const Overlay = styled.div`
    position: fixed;
    inset: 0;
    z-index: 1000;            /* выше хедера (у него z-index: 100) */
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.85);
    cursor: zoom-out;
`;

export const FullImg = styled.img`
    max-width: 95vw;
    max-height: 95vh;
    object-fit: contain;
    cursor: default;
    background: #fff;
`;

export const CloseBtn = styled.button`
    position: absolute;
    top: 15px;
    right: 25px;
    background: none;
    border: none;
    color: #fff;
    font-size: 40px;
    line-height: 1;
    cursor: pointer;

    &:hover {
        color: #A1C935;
    }
`;