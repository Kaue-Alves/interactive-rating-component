import React from "react";
import * as S from "./StylesResultado";
import IconeImagem from "./IconeImagem";

const rate = 4;

export default function Resultado({ rate }) {
    return (
        <>
            <S.GlobalStyle />
            <S.Container>
                <S.ContainerCentro>
                    <IconeImagem />

                    <S.Mensagem>You selected {rate} out of 5</S.Mensagem>

                    <S.Title>Thank you!</S.Title>
                    <S.Paragrafo>
                        We appreciate you taking the time to give a rating. If you ever need more support, dont hesitate to get in touch!
                    </S.Paragrafo>

                    
                </S.ContainerCentro>
            </S.Container>
        </>
    );
}