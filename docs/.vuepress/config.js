module.exports = {
  title: "Vue Test",
  description: " VuePress",
 head: [
    [
      "link",
      { rel: "shortcut icon", type: "icon", href: `/favicon.ico` },
    ]
  ],
  //base: '/v1/',
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
