module.exports = {
  base: '/',
  title: "Vuepress ",
  description: " Just Do It!",
  head: [['link', { rel: 'icon', href: 'logo.svg' }]],
  //sidebar: auto,
  lastUpdated: 'Last Updated',
  smoothcroll: true,
  // theme config
  themeConfig: {
    logo: 'logo.svg',
    sidebar: 'auto',
    navbar: [
      { text: 'Home', link: '/' },
      { text: "Config", link: '/guide/config' },
      { text: "Theme", link: '/guide/theme' }
    ]},
  displayAllHeaders: true,
}
