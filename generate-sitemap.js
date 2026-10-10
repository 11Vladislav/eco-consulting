const SitemapGenerator = require('sitemap-generator');
const path = require('path');

// Укажите базовый URL вашего сайта на GitHub Pages
const generator = SitemapGenerator('https://github.io', {
  stripQuerystring: true,
  filepath: path.join(__dirname, 'public', 'sitemap.xml') // Файл сохранится в папку public
});

// Логирование для удобства
generator.on('add', (url) => {
  console.log(`Страница добавлена в sitemap: ${url}`);
});

generator.on('done', () => {
  console.log('Sitemap.xml успешно сгенерирован!');
});

// Запуск генератора
generator.start();