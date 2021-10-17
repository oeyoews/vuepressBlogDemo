module.exports = {
  title: "Vue Test",
  description: " VuePress",
  base: '/v1/',
  //sidebar: auto,
  lastUpdated: 'Last Updated',
  smoothcroll: true,
  markdown: {
    lineNumbers: true
  },
  // theme config
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: "Config", link: '/guide/config' },
      { text: "Theme", link: '/guide/theme' }
    ]},
  displayAllHeaders: true,
  sidebar: 'auto'
}
