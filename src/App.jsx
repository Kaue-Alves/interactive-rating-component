import * as S from "./styles/style";
import starLogo from "./assets/images/icon-star.svg";
import Resultado from "./components/Resultado";
import { useEffect, useState } from "react";

export default function App() {
    const [rating, setRating] = useState("");
    function handleChange(event) {
        setRating(event.target.value);
    }

    const [alterar, setAlterar] = useState(true);
    function handleAlterar() {
        if (rating === "") {
            alert("Please select a rating!");
            return;
        } else {
            setAlterar(!alterar);
        }
    }

    return (
        <>
            <Resultado rate={rating} alterar={alterar} />
            <S.GlobalStyle />
            <S.Container alterar={alterar}>
                <S.ContainerCentro>
                    <S.Estrela>
                        <S.StyledIcon src={starLogo} alt="Estrela" />
                    </S.Estrela>
                    <S.Title>How Did We Do?</S.Title>
                    <S.Paragrafo>
                        Please let us now how we did with your suport request.
                        All feedback is appreciated to help us improve our
                        offering!
                    </S.Paragrafo>

                    <S.ContainerInputs>
                        <S.ContainerLabelRadio>
                            <S.RadioLabel>
                                <S.StyledRadio
                                    name="nivel"
                                    value="1"
                                    onChange={handleChange}
                                />
                                <S.StyleRating>1</S.StyleRating>
                            </S.RadioLabel>
                            <S.RadioLabel>
                                <S.StyledRadio
                                    name="nivel"
                                    value="2"
                                    onChange={handleChange}
                                />
                                <S.StyleRating>2</S.StyleRating>
                            </S.RadioLabel>
                            <S.RadioLabel>
                                <S.StyledRadio
                                    name="nivel"
                                    value="3"
                                    onChange={handleChange}
                                />
                                <S.StyleRating>3</S.StyleRating>
                            </S.RadioLabel>
                            <S.RadioLabel>
                                <S.StyledRadio
                                    name="nivel"
                                    value="4"
                                    onChange={handleChange}
                                />
                                <S.StyleRating>4</S.StyleRating>
                            </S.RadioLabel>
                            <S.RadioLabel>
                                <S.StyledRadio
                                    name="nivel"
                                    value="5"
                                    onChange={handleChange}
                                />
                                <S.StyleRating>5</S.StyleRating>
                            </S.RadioLabel>
                        </S.ContainerLabelRadio>

                        <S.StyledButton onClick={handleAlterar}>
                            SUBMIT
                        </S.StyledButton>
                    </S.ContainerInputs>
                </S.ContainerCentro>
            </S.Container>
        </>
    );
}
