import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #141519;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerCentro = styled.div`
  background-color: #202731;
  width: 50%;
  height: 50%;
  border-radius: 10px;
`;