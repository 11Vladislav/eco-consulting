import { Link } from 'react-router-dom';
import { Seo } from '../../seo/Seo';

export const NotFound = () => (
  <>
    <Seo name="Сторінку не знайдено" title="404 — сторінку не знайдено" noindex />
    <div style={{ padding: '200px 20px 80px', textAlign: 'center' }}>
      <h1>404 — сторінку не знайдено</h1>
      <p><Link to="/">Повернутися на головну</Link></p>
    </div>
  </>
);