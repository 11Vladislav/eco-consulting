import { 
    HomeContainer,
    TitleContainer, 
    Title, 
    SubTitle, 
    ButtonContainer, 
    Button, 
    Proposal, 
    ProposalTitle,
    Text,
    List,
    ListItem,
    NavLink,
    ProposalContainer

} from './HomePage.styled';

import airImg from './../../img/plant.png';
import recycleImg from './../../img/recycle.png';
import waterImg from './../../img/water.png';
import leafImg from './../../img/leaf.png';

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
        <ProposalContainer> 
            <Proposal>
                    <ProposalTitle>МИ ПРОПОНУЄМО ВАМ:</ProposalTitle>
                    <Text>види дозволів, які ми допоможемо зробити для вас</Text>
            </Proposal>
                <List>
                    <ListItem>
                        <NavLink to='/'><img src={airImg} alt='air' width={155} height={155}></img></NavLink>
                    
                        <Text style={{marginLeft: "15px"}}><b>ПОВІТРЯ</b><br/>Дозвіл на викиди забруднюючих речовин в атмосферу</Text>
                    </ListItem>
                    <ListItem>
                        <NavLink to='/'><img src={recycleImg} alt='recycle' width={100} height={100}></img></NavLink>
                        <Text style={{marginLeft: "15px"}}><b>ВІДХОДИ</b><br/>Реєстрація декларації про відходи</Text>
                    </ListItem>
                    <ListItem>
                        <NavLink to='/'><img src={waterImg} alt='water' width={100} height={100}></img></NavLink>
                        <Text style={{marginLeft: "15px"}}><b>ВОДА</b><br/>Дозвіл на спеціальне водокористування</Text>
                    </ListItem>
                    <ListItem>
                        <NavLink to='/'><img src={leafImg} alt='leaf' width={100} height={100}></img></NavLink>
                        <Text style={{marginLeft: "15px"}}><b>ІНШЕ</b><br/>Всі наші екологічні послуги</Text>
                    </ListItem>
                </List>
        </ProposalContainer>   
    </>    
    )
}

export default HomePage;