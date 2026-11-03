import { useLocation } from 'react-router-dom';
import { SITE, PAGES } from './config';

export const BASE = process.env.PUBLIC_URL || '';   // "/uk"
const normalize = (p) => (p.length > 1 ? p.replace(/\/+$/, '') : p);

export const pageUrl = (path = '/') => {
  const p = normalize(path);
  return `${SITE.url}${BASE}${p === '/' ? '/' : p}`;
};

export const usePageSeo = () => {
  const { pathname } = useLocation();
  return { path: normalize(pathname), ...(PAGES[normalize(pathname)] || {}) };
};

export const photoAlt = (name, n = 1) => `${name}, фото ${n}`;   // п. 12