import { Wrapper, List, Item, Crumb, Current } from './Breadcrumbs.styled';
import { JsonLd } from '../../seo/JsonLd';
import { pageUrl } from '../../seo/utils';
import { useLocation } from 'react-router-dom';

export const Breadcrumbs = ({ items }) => {
    const { pathname } = useLocation();
    return (
        <Wrapper aria-label="Хлібні крихти">
            <JsonLd
                data={{
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: items.map(({ label, to }, i) => ({
                        '@type': 'ListItem',
                        position: i + 1,
                        name: label,
                        item: pageUrl(to || pathname),
                    })),
                }}
            />
        <List>
            {items.map(({ label, to }) => (
                <Item key={label}>
                    {to ? (
                        <Crumb to={to}>{label}</Crumb>
                    ) : (
                        <Current aria-current="page">{label}</Current>
                    )}
                </Item>
            ))}
        </List>
        </Wrapper>
    );
};