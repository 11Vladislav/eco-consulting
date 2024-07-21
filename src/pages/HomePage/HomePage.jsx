import { 
    HomeContainer,
    TitleContainer, 
    Title, 
    SubTitle, 
    ButtonContainer, 
    Button, 
    Proposal, 
    ProposalTitle,
    Text
} from './HomePage.styled';

export const HomePage = () => {

    return (
        <>
        <HomeContainer>
            <TitleContainer>
                <Title>ТОВ “ЕКОЛОГІЧНИЙ КОНСАЛТИНГ”</Title>
                <SubTitle>ВАШ НАДІЙНИЙ ПОМІЧНИК В СФЕРІ ЕКОЛОГІЇ З 2013 РОКУ</SubTitle>
            </TitleContainer>
        <ButtonContainer>
            <Button>Послуги</Button>
            <Button>Ліцензії</Button>
        </ButtonContainer>
      </HomeContainer>
        <Proposal>
                <ProposalTitle>МИ ПРОПОНУЄМО ВАМ:</ProposalTitle>
                <Text>види дозволів, які ми допоможемо зробити для вас</Text>
        </Proposal>
    </>    
    )
}

export default HomePage;