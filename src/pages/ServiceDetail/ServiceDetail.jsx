import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { services } from '../../data/services';
import { Breadcrumbs } from 'components/Breadcrumbs/Breadcrumbs';
import {
    DetailWrapper,  Title, Text, DetailImage,
    SectionTitle, DetailList, SectionLabel
} from '../Services/Services.styled';
import { ConsultationForm } from 'components/ConsultationForm/ConsultationForm';
import { Footer } from 'components/Footer/Footer';

const renderRich = (text) =>
    text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
        part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part
    );

export const ServiceDetail = () => {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) return <Navigate to="/services" replace />;

    const { title, image, imageAlt, intro, text, sections = [],} = service;
    const introParagraphs = [].concat(intro || text || []);

    

    return (
        <>
            <DetailWrapper>
                <Breadcrumbs
                    items={[
                        { label: 'Головна', to: '/' },
                        { label: 'Послуги', to: '/services' },
                        { label: title },
                            ]}
            />
                <Title>{title}</Title>

                {image && <DetailImage src={image} alt={imageAlt || title} />}
                {introParagraphs.map((p) => (
                    <Text key={p}>{renderRich(p)}</Text>
                    ))}

                {/* intro для новых страниц, text для старых, ещё не расширенных */}
                {(intro || text) && <Text>{intro || text}</Text>}

                {sections.map(({ heading, label, paragraphs = [], list, ordered, after }, i) => (
                    <section key={i}>
                     {heading && <SectionTitle>{heading}</SectionTitle>}
                    {label && <SectionLabel>{label}</SectionLabel>}

                        {paragraphs.map((p) => (
                            <Text key={p}>{renderRich(p)}</Text>
                        ))}

                        {list && (
                                <DetailList as={ordered ? 'ol' : 'ul'} $ordered={ordered}>
                                    {list.map((item) => (
                                        <li key={item}>{renderRich(item)}</li>
                                    ))}
                                </DetailList>
                            )}

                        {after && [].concat(after).map((p) => (
                            <Text key={p}>{renderRich(p)}</Text>
                        ))}
                    </section>
                ))}
            </DetailWrapper>

            <ConsultationForm />
            <Footer />
        </>
    );
};