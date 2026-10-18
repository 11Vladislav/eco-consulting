import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { services } from '../../data/services';
import { Breadcrumbs } from 'components/Breadcrumbs/Breadcrumbs';
import {
    DetailWrapper,  Title, Text, DetailPicture,
    SectionTitle, DetailList, SectionLabel, Accent, ExtLink
} from '../Services/Services.styled';
import { ConsultationForm } from 'components/ConsultationForm/ConsultationForm';
import { Footer } from 'components/Footer/Footer';

const renderRich = (text) =>
    text
        .split(/(\[[^\]]+\]\([^)]+\)|\*\*\*[^*]+\*\*\*|\*\*[^*]+\*\*|==[^=]+==|\*[^*]+\*)/g)
        .map((part, i) => {
            const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
            if (link) {
                return (
                    <ExtLink key={i} href={link[2]} target="_blank" rel="noopener noreferrer">
                        {link[1]}
                    </ExtLink>
                );
            }
            if (part.startsWith('***')) return <strong key={i}><em>{part.slice(3, -3)}</em></strong>;
            if (part.startsWith('**')) return <strong key={i}>{part.slice(2, -2)}</strong>;
            if (part.startsWith('==')) return <Accent key={i}>{part.slice(2, -2)}</Accent>;
            if (part.startsWith('*')) return <em key={i}>{part.slice(1, -1)}</em>;
            return part;
        });

export const ServiceDetail = () => {
    const { slug } = useParams();
    const service = services.find((s) => s.slug === slug);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug]);

    if (!service) return <Navigate to="/services" replace />;

    const { title, image, imageMobile, imageAlt, intro, text, sections = [],} = service;
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

               {image && (
                    <DetailPicture>
                        {imageMobile && (
                            <source media="(max-width: 768px)" srcSet={imageMobile} />
                         )}
                        <img src={image} alt={imageAlt || title} />
                    </DetailPicture>
                    )}
                {introParagraphs.map((p) => (
                    <Text key={p}>{renderRich(p)}</Text>
                    ))}

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