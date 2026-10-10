import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.nav`
    margin-bottom: 10px;
    font-family: 'BanderaPro', sans-serif;
    font-size: 14px;
`;

export const List = styled.ol`
    display: flex;
    flex-wrap: wrap;          /* длинное название переносится на новую строку */
    align-items: center;
    gap: 6px;
    margin: 0;
    padding: 0;
    list-style: none;
`;

export const Item = styled.li`
    display: flex;
    align-items: center;
    gap: 6px;

    /* разделитель перед каждым пунктом, кроме первого */
    & + &::before {
        content: '/';
        color: #aaa;
    }
`;

export const Crumb = styled(Link)`
    color: #000;
    text-decoration: none;

    &:hover {
        color: #A1C935;
    }
`;

export const Current = styled.span`
    color: #777;
`;