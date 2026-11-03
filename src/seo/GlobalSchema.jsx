import { JsonLd } from './JsonLd';
import { SITE } from './config';
import { BASE } from './utils';

const home = `${SITE.url}${BASE}/`;

export const GlobalSchema = () => (
  <JsonLd
    data={{
      '@context': 'https://schema.org',
      '@graph': [
        {
          '@type': 'Organization',
          '@id': `${home}#organization`,
          name: SITE.name,
          url: home,
          logo: `${SITE.url}${BASE}${SITE.logo}`,
          telephone: SITE.phone,
          email: SITE.email,
        },
        {
          '@type': 'LocalBusiness',
          '@id': `${home}#localbusiness`,
          name: SITE.name,
          url: home,
          image: `${SITE.url}${BASE}${SITE.logo}`,
          telephone: SITE.phone,
          email: SITE.email,
          areaServed: 'UA',
          address: {
            '@type': 'PostalAddress',
            streetAddress: SITE.street,
            addressLocality: SITE.city,
            addressCountry: 'UA',
          },
          openingHoursSpecification: [{
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          }],
          parentOrganization: { '@id': `${home}#organization` },
        },
      ],
    }}
  />
);