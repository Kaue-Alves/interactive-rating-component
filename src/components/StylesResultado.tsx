import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'overpass';
  }
`;

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background-color: #121417;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerCentro = styled.div`
    background-color: #252d37;
    width: 80%;
    max-width: 350px;
    height: auto;
    border-radius: 20px;
    padding: 30px 30px 40px 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Mensagem = styled.span`
    font-family: "overpass"
    color: orange;
    background-color: gray;
    padding: 10px;
`

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 700;
    font-family: "overpass";
`;

export const Paragrafo = styled.p`
    color: #959eac;
    line-height: 1.5;
    font-size: 1rem;
    font-weight: 400;
    font-family: "overpass";
    text-align: center;
`;