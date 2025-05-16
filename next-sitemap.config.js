/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://catatanbintang.my.id',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/private', '/hidden'], // halaman yang tidak ingin muncul di sitemap
};
