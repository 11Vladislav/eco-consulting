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
    CircularContainer
} from "./About.styled";

import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const data = [
  { percentage: 96, text: "СВІТОВИХ ВОД  забруднені людиною", color: "#ce2b2b" },
  { percentage: 80, text: "ІНФЕКЦІЙ передаються через воду", color: "#779f07" },
  { percentage: 7, text: "ТЕРИТОРІЇ УКРАЇНИ займають звалища та смітники", color: "#0000ff" },
  { percentage: 50, text: "МІСТ У СВІТІ з підвищеним забрудненням повітря", color: "#b67e17" },
];

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
                    {data.map((item, index) => (
                        <ListItem key={index}>
                        <CircularContainer>    
                            <CircularProgressbar 
                                value={item.percentage}
                                text={`${item.percentage}%`}
                                styles={buildStyles({    
                                pathTransitionDuration: 0.5,
                                rotation: 0.25,
                                textColor: item.color,
                                pathColor: item.color,
                                trailColor: '#d6d6d6',
                            })}
                                    />
                        </CircularContainer>
                        <ListText>{item.text}</ListText>
                    </ListItem>
                    ))}
                </List>  
            </Wrapper>
            
        </>
)}