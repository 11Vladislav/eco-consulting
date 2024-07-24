import styled from 'styled-components';

export const Container = styled.div`
  /* max-width: 1440px; */
`;

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 12px;
    padding: 8px 0;
    position: fixed;
    transition: 0.4s;
    width: 100%;
    background-color: #fff;
    padding: 15px 0;

    > nav {
        display: flex;
  }
`;