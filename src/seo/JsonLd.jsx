import { Helmet } from 'react-helmet-async';

export const JsonLd = ({ data }) => (
  <Helmet>
    <script type="application/ld+json">{JSON.stringify(data)}</script>
  </Helmet>
);