import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { services } from '../../data/services';
import { Seo } from '../../seo/Seo';
import { JsonLd } from '../../seo/JsonLd';
import { SITE } from '../../seo/config';
import { pageUrl, photoAlt, BASE } from '../../seo/utils';
import { Breadcrumbs } from 'components/Breadcrumbs/Breadcrumbs';
import {
    DetailWrapper,  Title, Text, DetailPicture,
    SectionTitle, DetailList, SectionLabel, Accent, ExtLink
} from '../Services/Services.styled';
import { ConsultationForm } from 'components/ConsultationForm/ConsultationForm';
import { Footer } from 'components/Footer/Footer';
import { NotFound } from 'pages/NotFound/NotFound';

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

    if (!service) return <NotFound />;

    const { title, image, imageMobile, intro, text, sections = [],} = service;
    const introParagraphs = [].concat(intro || text || []);
    const { seo = {} } = service;    // необязательное поле в services.js
    const url = pageUrl(`/poslugy/${slug}`);
    

    return (
        <>
            <Seo
                name={title}
                title={seo.title}
                description={seo.description}
                canonical={seo.canonical}
                />
            <JsonLd
                data={{
                    '@context': 'https://schema.org',
                    '@type': 'Service',
                    name: title,
                    url,
                    areaServed: 'UA',
                    provider: { '@id': `${SITE.url}${BASE}/#organization` },
                }}
            />
                {SITE.author.name && (
            <JsonLd
                data={{
                '@context': 'https://schema.org',
                '@type': 'WebPage',
                url,
                name: title,
                author: { '@type': 'Person', name: SITE.author.name, url: SITE.author.url },
                }}
            />
            )}
            <DetailWrapper>
                <Breadcrumbs
                    items={[
                        { label: 'Головна', to: '/' },
                        { label: 'Послуги', to: '/poslugy' },
                        { label: title },
                            ]}
            />
                <Title as="h1">{seo.h1 || title}</Title>

               {image && (
                    <DetailPicture>
                        {imageMobile && (
                            <source media="(max-width: 768px)" srcSet={imageMobile} />
                         )}
                        <img src={image} alt={photoAlt(title, 1)} title={photoAlt(title, 1)} />
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