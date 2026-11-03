const fs = require('fs');
const path = require('path');

const SITE = 'https://eco-consulting.com.ua';
const BASE = '/uk';
const STATIC = ['/', '/poslugy', '/pro-nas', '/litsenzii', '/kontaktu', '/politika-konfidentsiinosti'];

const src = fs.readFileSync(path.join(__dirname, 'src/data/services.js'), 'utf8');
// строки, закомментированные через //, не попадают в выборку
const slugs = [...src.matchAll(/^\s*slug:\s*'([^']+)'/gm)].map((m) => m[1]);

const paths = [...STATIC, ...slugs.map((s) => `/poslugy/${s}`)];
const today = new Date().toISOString().slice(0, 10);
const abs = (p) => `${SITE}${BASE}${p === '/' ? '/' : p}`;

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${abs(p)}</loc><lastmod>${today}</lastmod></url>`).join('\n')}
</urlset>
`;

const robots = `User-agent: *
Allow: /

Sitemap: ${SITE}${BASE}/sitemap.xml
`;

const pages = ['poslugy', 'pro-nas', 'litsenzii', 'kontaktu', 'politika-konfidentsiinosti'].join('|');
const htaccess = `ErrorDocument 404 ${BASE}/index.html

RewriteEngine On
RewriteBase ${BASE}/

# 301: http -> https и www -> без www (одним переходом)
RewriteCond %{HTTPS} !=on [OR]
RewriteCond %{HTTP_HOST} ^www\\. [NC]
RewriteRule ^ ${SITE}%{REQUEST_URI} [R=301,L]

# реальные файлы (js, css, картинки, sitemap) отдаём как есть
RewriteCond %{REQUEST_FILENAME} -f
RewriteRule ^ - [L]

# существующие страницы SPA: index.html со статусом 200
RewriteRule ^(${pages})/?$ index.html [L]
RewriteRule ^poslugy/(${slugs.join('|')})/?$ index.html [L]

# всё остальное -> 404 (ErrorDocument отдаёт index.html со статусом 404,
# React показывает страницу NotFound)
`;

fs.writeFileSync(path.join(__dirname, 'public/sitemap.xml'), sitemap);
fs.writeFileSync(path.join(__dirname, 'public/robots.txt'), robots);
fs.writeFileSync(path.join(__dirname, 'public/.htaccess'), htaccess);
console.log(`SEO files generated: ${paths.length} URLs`);