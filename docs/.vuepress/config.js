module.exports = {

  //base: "/vuepressBlogDemo",
  basse: "vues.vercel.app",

  // site
  lang: 'en',
  title: "Learning",
  description: " Just Do It!",

  themeConfig: { logo: 'https://cdn.jsDelivr.net/gh/oeyoews/img/oeyoew.jpeg', },
  plugins: [ [ '@vuepress/plugin-search', { locales: { '/': { placeholder: 'Search', }, }, }, ], ],

  head: [[ 'link', { rel: 'icon', href: 'favicon.ico' } ], [ "link", { rel: "stylesheet", type: "text/css", href: "/static/css/font.css" }, ],],
  lastUpdated: 'Last Updated',
  smoothcroll: true,
}
