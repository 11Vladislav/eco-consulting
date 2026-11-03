import { Wrap, TitleContainer, Title, SubTitle, ButtonContainer, Button, Link } from './HeroContent.styled';


export const HeroContent = () => { 

    return (
        <>
            <Wrap>
                <TitleContainer>
                    <Title>ТОВ “ЕКОЛОГІЧНИЙ КОНСАЛТИНГ”</Title>
                    <SubTitle>ВАШ НАДІЙНИЙ ПОМІЧНИК В СФЕРІ ЕКОЛОГІЇ З 2013 РОКУ</SubTitle>
                </TitleContainer>
                <ButtonContainer>
                   <Link to="/poslugy"><Button>Послуги</Button></Link> 
                    <Link to="/litsenzii"><Button>Ліцензії</Button></Link>
                </ButtonContainer>
            </Wrap>
        </>
    )

}