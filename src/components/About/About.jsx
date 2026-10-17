import { useState, useEffect } from 'react';
import {
    Wrapper, Title, AfterTitle, Text, Span,
    List, ListItem, ListText, Accent, CircularContainer
} from "./About.styled";
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';

const data = [
  { percentage: 96, accent: "СВІТОВИХ ВОД", text: "забруднені людиною", color: "#ce2b2b" },
  { percentage: 80, accent: "ІНФЕКЦІЙ", text: "передаються через воду", color: "#779f07" },
  { percentage: 7, accent: "ТЕРИТОРІЇ УКРАЇНИ", text: "займають звалища та смітники", color: "#2563eb" },
  { percentage: 50, accent: "МІСТ У СВІТІ", text: "з підвищеним забрудненням повітря", color: "#b67e17" },
];

export const About = () => {
    // круги «заполняются» после появления блока
    const [animate, setAnimate] = useState(false);
    useEffect(() => {
        const t = setTimeout(() => setAnimate(true), 300);
        return () => clearTimeout(t);
    }, []);

    return (
        <Wrapper>
            <AfterTitle>коротко про нас</AfterTitle>
            <Title>Чим ми кращі від інших?</Title>
            <Text>
                Компанія <Span>ТОВ «Екологічний консалтинг»</Span> надає професійні
                послуги підприємствам з питань, що стосуються охорони навколишнього
                природного середовища. Наша команда — професіонали своєї справи,
                які вміло поєднують знання міжнародних стандартів екологічного
                консультування з бездоганним розумінням діючого законодавства.
                Ми націлені на якість роботи.
            </Text>

            <List>
                {data.map((item, index) => (
                    <ListItem key={item.text} $color={item.color} $delay={index * 0.15}>
                        <CircularContainer>
                            <CircularProgressbar
                                value={animate ? item.percentage : 0}
                                text={`${item.percentage}%`}
                                strokeWidth={9}
                                styles={buildStyles({
                                    pathTransitionDuration: 1.2,
                                    rotation: 0,
                                    textSize: '22px',
                                    textColor: item.color,
                                    pathColor: item.color,
                                    trailColor: '#eceff1',
                                })}
                            />
                        </CircularContainer>
                        <ListText>
                            <Accent>{item.accent}</Accent> {item.text}
                        </ListText>
                    </ListItem>
                ))}
            </List>
        </Wrapper>
    );
};