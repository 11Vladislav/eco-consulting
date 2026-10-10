import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { services } from '../../data/services';
import { Breadcrumbs } from 'components/Breadcrumbs/Breadcrumbs';
import {
    DetailWrapper,  Title, Text, DetailImage,
    SectionTitle, DetailList
} from '../Services/Services.styled';
import { ConsultationForm } from 'components/ConsultationForm/ConsultationForm';
import { Footer } from 'components/Footer/Footer';


export const ServiceDetail = () => {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) return <Navigate to="/services" replace />;

    const { title, image, imageAlt, intro, text, sections = [] } = service;

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

                {/* intro для новых страниц, text для старых, ещё не расширенных */}
                {(intro || text) && <Text>{intro || text}</Text>}

                {sections.map(({ heading, paragraphs = [], list, ordered, after  }) => (
                    <section key={heading}>
                        <SectionTitle>{heading}</SectionTitle>

                        {paragraphs.map((p) => (
                            <Text key={p}>{p}</Text>
                        ))}

                        {list && (
                            <DetailList as={ordered ? 'ol' : 'ul'} $ordered={ordered}>
                                {list.map((item) => (
                                    <li key={item}>{item}</li>
                                ))}
                            </DetailList>
                        )}
                            {after && [].concat(after).map((p) => (
                                <Text key={p}>{p}</Text>
                            ))}
                    </section>
                ))}
            </DetailWrapper>

            <ConsultationForm />
            <Footer />
        </>
    );
};