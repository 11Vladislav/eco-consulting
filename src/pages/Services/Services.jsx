import { Title, Wrapper, Text, TextAttention, Paragraph, ParagraphLink, Textblock, List, Listitem, Picture  } from './Services.styled';
import ServiceImg from '../../img/laptop-2.jpg';
import ServiceImgMob from '../../img/laptop-3.jpg';
import { ConsultationForm } from 'components/ConsultationForm/ConsultationForm';
import { Footer } from 'components/Footer/Footer';
import { services } from '../../data/services';

export const Services = () => {

    return (
        <>
        <Wrapper>
                <Picture>
                     <source media="(max-width: 768px)" srcSet={ServiceImgMob} />
                     <img src={ServiceImg} alt="service img" width="1000" height="458" />
                </Picture>
                <Title>Перелік послуг ТОВ «Екологічний консалтинг»</Title>
                <Text>Під екологічним консалтингом мається на увазі цілий комплекс робіт,
                    необхідних для забезпечення правильної діяльності підприємств будь-яких галузей.
                    Наші послуги дозволяють розробити більш ефективні проекти з ресурсозбереження,
                    знизити забруднення навколишнього середовища, антропогенне навантаження,
                    а також виконують низку інших завдань, пов’язаних з діяльністю компаній.</Text>
               <TextAttention>Список послуг, що надаються:</TextAttention>

                            {services.map(({ slug, title, text }, index) => (
                                <div key={slug}>
                                    <Paragraph>
                                        <ParagraphLink to={`/services/${slug}`}>
                                            {index + 1}. {title}
                                        </ParagraphLink>
                                    </Paragraph>
                                    <Text>{text}</Text>
                                </div>
                            ))}
                <Textblock>
                    <TextAttention>
                        Переваги співпраці з ТОВ «Екологічний консалтинг»
                    </TextAttention>
                        <Text>
                            До перевірки діяльності компанії екологічною інспекцією
                            може перетворитися на справжній кошмар.
                            Особливо якщо в штаті немає професійного еколога,
                            відсутнє розуміння самого проходження процедури,
                            а сумніви з приводу правильності організації всіх процесів досить вагомі.
                            Наші фахівці готові допомогти клієнту в таких випадках:
                        </Text>
                    <List>
                        <Listitem>Надання інструкції з проходження перевірки.</Listitem>
                        <Listitem>Ретельний аналіз діяльності компанії по відношенню до навколишнього середовища (еко-аудит).</Listitem>
                        <Listitem>Рекомендації щодо вжиття заходів, які дозволяють знизити шкоду, яка наноситься екології.</Listitem>
                </List>
                <Text>Інформацію можна отримати вже зараз, зателефонувавши за телефонами,
                    вказаними на сайті. Професійний консультант відповість на всі питання і
                    прийме вашу заявку.
                </Text>
                </Textblock>
           
        </Wrapper>
         <ConsultationForm />
            <Footer />
            </>
    )


}