import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bar, Text, Button } from './CookieBanner.styled';

const KEY = 'cookie-consent';

export const CookieBanner = () => {
  const [visible, setVisible] = useState(() => {
    try { return !localStorage.getItem(KEY); } catch { return true; }
  });
  if (!visible) return null;

  const accept = () => {
    try { localStorage.setItem(KEY, '1'); } catch {}
    setVisible(false);
  };

  return (
    <Bar role="dialog" aria-label="Повідомлення про cookies">
      <Text>
        Ми використовуємо файли cookie та збираємо персональні дані для роботи сайту.{' '}
        <Link to="/politika-konfidentsiinosti">Політика конфіденційності</Link>
      </Text>
      <Button onClick={accept}>Згоден</Button>
    </Bar>
  );
};