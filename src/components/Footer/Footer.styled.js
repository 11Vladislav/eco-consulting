import styled from 'styled-components';


export const FooterContainer = styled.footer`
  background-color: #333;
  color: #aaa;
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 10px;
  padding: 45px;
  flex-wrap: wrap;
  font-family: 'BanderaPro', sans-serif;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    max-width: 300px;

  }
`;

export const FooterItem = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: #ccc;
  margin: 10px;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: orange;
    svg {
      transform: scale(1.3);
    }
    @media (max-width: 768px) {
      justify-content: center;
    }
  }
`;

export const ItemText = styled.div`

`;

export const Icon = styled.div`
  margin-right: 10px;
  transition: transform 0.3s;
`;

export const MapFrame = styled.iframe`
  width: 100%;
  height: 300px;
  border: none;
  margin-top: 20px;
`;
