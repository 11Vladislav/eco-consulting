import { Title, Wrap, SubTitle, Container } from "./HowWork.styled";
import { Stage } from './Stage';

const stages = [
  {
    number: '1',
    color: 'blue',
    title: 'Перший етап',
    description: 'Визначення сфери діяльності і виїзд фахівця',
    text: 'Як тільки Ви звернулися до нас за допомогою, наші фахівці відразу приступають до роботи по Вашій сфері діяльності.',
  },
  {
    number: '2',
    color: 'green',
    title: 'Другий етап',
    description: 'Збір і формування необхідних документів',
    text: 'Наш фахівець приступає до збору всіх необхідних даних. Отримавши всю необхідну інформацію, наш співробітник приступає до підготовки та розробки документів.',
  },
  {
    number: '3',
    color: 'orange',
    title: 'Третій етап',
    description: 'Робота з документами',
    text: 'Узгодження і супровід документообігу в задіяних державних інстанціях для отримання дозвільної документації.',
  },
  {
    number: '4',
    color: 'red',
    title: 'Четвертий етап',
    description: 'Отримання дозвільної документації',
    text: 'Отримання дозвільних документів і передача їх клієнту.',
  },
];

export const HowWork = () => {
    return (
        <Container>
            <Title>Як ми працюємо?</Title>
            <SubTitle>Етапи нашої співпраці з клієнтами</SubTitle>
        <Wrap>
           {stages.map((stage, index) => (
        <Stage key={index} stage={stage} />
      ))}
        </Wrap>
        </Container>
    );

};