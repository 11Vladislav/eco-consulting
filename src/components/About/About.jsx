import {
    Wrapper,
    Title,
    AfterTitle,
    AboutTitle,
    Text,
    List,
    ListItem,
    Span,
    ListText,
} from "./About.styled";

// import { Charts } from 'components/Сharts/Charts';

export const About = () => {

    return (
        <>
        <Wrapper>
            <Title>ЧИМ МИ КРАЩІ ВІД ІНШИХ?</Title>
                <AfterTitle>коротко про нас</AfterTitle>
                <AboutTitle>Про нашу компанію</AboutTitle>
                <Text>Компанія <Span>ТОВ «Екологічний консалтинг»</Span> надає професійні
                    послуги підприємствам з питань, що стосуються охорони навколишнього
                    природного средовища. Наша команда — професіонали своєї справи,
                    які вміло поєднують знання міжнародних стандартів екологічного
                    консультування з бездоганним розумінням діючого законодавства.
                    Ми націлені на якість роботи.</Text>
                <List>
                    <ListItem>
                        <Span>96% СВІТОВИХ ВОД</Span>
                        <ListText>забруднені людиною</ListText>
                    </ListItem>
                    <ListItem>
                        <Span>80% ІНФЕКЦІЙ</Span>
                        <ListText>передаються через воду</ListText>
                    </ListItem>
                    <ListItem>
                        <Span>7% ТЕРИТОРІЇ УКРАЇНИ</Span>
                        <ListText>займають звалища та смітники</ListText>
                    </ListItem>
                    <ListItem>
                        <Span>50% МІСТ У СВІТІ</Span>
                        <ListText>з підвищеним забрудненням повітря</ListText>
                    </ListItem>                    
                </List>
                {/* <Charts /> */}
        </Wrapper>
            
        </>
)}