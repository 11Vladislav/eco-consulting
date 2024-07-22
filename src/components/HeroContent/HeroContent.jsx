import { Wrap, TitleContainer, Title, SubTitle, ButtonContainer, Button } from './HeroContent.styled';

export const HeroContent = () => { 

    return (
        <>
            <Wrap>
                <TitleContainer>
                    <Title>ТОВ “ЕКОЛОГІЧНИЙ КОНСАЛТИНГ”</Title>
                    <SubTitle>ВАШ НАДІЙНИЙ ПОМІЧНИК В СФЕРІ ЕКОЛОГІЇ З 2013 РОКУ</SubTitle>
                </TitleContainer>
                <ButtonContainer>
                    <Button>Послуги</Button>
                    <Button>Ліцензії</Button>
                </ButtonContainer>
            </Wrap>
        </>
    )

}