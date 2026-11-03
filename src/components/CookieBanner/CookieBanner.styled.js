import styled from 'styled-components';

export const Bar = styled.div`
  position: fixed;
  left: 0; right: 0; bottom: 0;
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 15px 20px;
  background: #fff;
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.15);
  font-family: 'BanderaPro', sans-serif;
  font-size: 14px;

  @media (max-width: 600px) { flex-direction: column; gap: 10px; text-align: center; }
`;

export const Text = styled.p`
  margin: 0;
  a { color: #A1C935; font-weight: 600; }
`;

export const Button = styled.button`
  padding: 8px 24px;
  border: none;
  border-radius: 4px;
  background: #A1C935;
  color: #fff;
  font-weight: 700;
  cursor: pointer;
  &:hover { background: #8aaf2a; }
`;