import * as S from "./styles/style";
import starLogo from "./assets/images/icon-star.svg";

export default function App() {
    return (
        <>
            <S.GlobalStyle />
            <S.Container>
                <S.ContainerCentro>
                    <S.Estrela>
                        <img src={starLogo} alt="Estrela" />
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
                                <S.StyledRadio name="nivel" />
                                <S.StyleRating>1</S.StyleRating>
                            </S.RadioLabel>
                            <S.RadioLabel>
                                <S.StyledRadio name="nivel" />
                                <S.StyleRating>2</S.StyleRating>
                            </S.RadioLabel>
                            <S.RadioLabel>
                                <S.StyledRadio name="nivel" />
                                <S.StyleRating>3</S.StyleRating>
                            </S.RadioLabel>
                            <S.RadioLabel>
                                <S.StyledRadio name="nivel" />
                                <S.StyleRating>4</S.StyleRating>
                            </S.RadioLabel>
                            <S.RadioLabel>
                                <S.StyledRadio name="nivel" />
                                <S.StyleRating>5</S.StyleRating>
                            </S.RadioLabel>
                        </S.ContainerLabelRadio>

                        <S.StyledButton>SUBMIT</S.StyledButton>
                    </S.ContainerInputs>
                </S.ContainerCentro>
            </S.Container>
        </>
    );
}
