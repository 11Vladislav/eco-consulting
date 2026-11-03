export const SITE = {
  url: 'https://eco-consulting.com.ua',
  name: 'ТОВ «Екологічний консалтинг»',
  phone: '+380938334280',
  email: 'info@eco-consulting.com.ua',
  street: 'вул. Деревообробна, 3 В',
  city: 'Київ',
  logo: '/logo.jpg',              // положите копию логотипа в public/logo.jpg
  author: { name: 'ТОВ «Екологічний консалтинг»', url: 'https://eco-consulting.com.ua' },  // п. 8: заполните, и автор появится в разметке
  // шаблоны для страниц без своих значений (п. 2, 3)
  titleTemplate: '[name] | [site]',
  descriptionTemplate:
    '[name] — професійні екологічні послуги для підприємств по всій Україні. [site], м. Київ. Безкоштовна консультація.',
};

// Ключ = адрес страницы без /uk. Все поля необязательные и без ограничения длины.
export const PAGES = {
  '/': { name: 'Головна', h1: 'Екологічний консалтинг для підприємств по всій Україні', title: '', description: '', canonical: '' },
  '/poslugy': { name: 'Послуги', h1: 'Перелік послуг ТОВ «Екологічний консалтинг»', title: '', description: '', canonical: '' },
  '/pro-nas': { name: 'Про нас', h1: 'Про компанію', title: '', description: '', canonical: '' },
  '/litsenzii': { name: 'Ліцензії', h1: 'Наші дозвільні документи', title: '', description: '', canonical: '' },
  '/kontaktu': { name: 'Контакти', h1: 'Контакти', title: '', description: '', canonical: '' },
  '/politika-konfidentsiinosti': { name: 'Політика конфіденційності', h1: 'Політика конфіденційності', title: '', description: '', canonical: '' },
};