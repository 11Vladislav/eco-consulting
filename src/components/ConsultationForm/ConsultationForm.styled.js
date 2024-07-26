import styled from 'styled-components';

import backgroundImage from '../../img/background-1.jpg';

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-image: url(${backgroundImage});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 45px 0;
    margin-top: 45px;
    font-family: 'BanderaPro', sans-serif;
`;

export const FormTitle = styled.h1`
  font-family: 'BanderaPro', sans-serif;
  color: #fff;
  margin-bottom: 20px;
  padding: 0 15px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 400px;
  padding: 0 10px;
`;

export const Input = styled.input`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const TextArea = styled.textarea`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  resize: none;
`;

export const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;