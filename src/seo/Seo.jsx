import { Helmet } from 'react-helmet-async';
import { SITE } from './config';
import { usePageSeo, pageUrl } from './utils';

export const Seo = ({ name, title, description, canonical, noindex }) => {
  const page = usePageSeo();
  const n = name || page.name || SITE.name;
  const fill = (tpl) => tpl.split('[site]').join(SITE.name).split('[name]').join(n);

  // приоритет: пропсы страницы → config.js → шаблон
  const finalTitle = title || page.title || fill(SITE.titleTemplate);
  const finalDesc = description || page.description || fill(SITE.descriptionTemplate);
  const self = pageUrl(page.path);
  const finalCanonical = canonical || page.canonical || self;   // п. 6

  return (
    <Helmet>
      <html lang="uk" />
      <title>{finalTitle}</title>
      <meta name="description" content={finalDesc} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={finalCanonical} />
      <link rel="alternate" hrefLang="uk" href={self} />
      <link rel="alternate" hrefLang="x-default" href={self} />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="uk_UA" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDesc} />
      <meta property="og:url" content={finalCanonical} />
    </Helmet>
  );
};