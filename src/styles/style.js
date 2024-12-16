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
    background-color: #252D37;
    width: 80%;
    max-width: 350px;
    height: auto;
    border-radius: 20px;
    padding: 30px 30px 40px 30px;
    display: flex;
    flex-direction: column;
`;

export const Estrela = styled.div`
  width: 50px;
  height: 50px;
  background-color: #2f3946;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  font-family: 'overpass';
`

export const Paragrafo = styled.p`
  color: #959EAC;
  line-height: 1.5;
  font-size: 1rem;
  font-weight: 400;
  font-family: 'overpass';
`

export const ContainerInputs = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`

export const ContainerLabelRadio = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 20px;
`

export const RadioLabel = styled.label`
  position: relative;
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover input {
    background-color: #FB7413; /* Cor desejada quando passar o mouse sobre o label */
    cursor: pointer;
  }
`;

export const StyledRadio = styled.input.attrs({ type: 'radio' })`
  width: 100%;
  height: 100%;
  appearance: none;
  background-color: #2f3946;
  border-radius: 50%; 
  position: absolute;

  &:hover {
    background-color: #FB7413;
  }
  
  &:checked {
    background-color: #FFFFFF;
  }

  &:checked + span {
    color: #000000;
  }
`;

export const StyleRating = styled.span`
  font-weight: 700;
  font-family: 'Overpass', sans-serif;
  color: white;
  z-index: 1;

`;

export const StyledButton = styled.button`
  width: 100%;
  height: 50px;
  background-color: #FB7413;
  letter-spacing: 3px;
  color: #121417;
  font-size: 1rem;
  font-weight: 700;
  font-family: 'overpass';
  border: none;
  outline: none;
  max-width: 300px;
  border-radius: 50px;

  &:hover {
    background-color: #FFFFFF;
    cursor: pointer;
  }
`
