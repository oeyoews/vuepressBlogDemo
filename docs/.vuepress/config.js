module.exports = {
  title: "Vuepress ",
  description: " Just Do It!",
  head: [['link', { rel: 'icon', href: '/images/logo.svg' }]],
  lastUpdated: 'Last Updated',
  smoothcroll: true,
  themeConfig: {
    logo: 'logo.svg',
    sidebar: 'auto',
    navbar: [
      { text: ' Home ', link: '/' },
      { text: 'Config', link: '/guide/config' },
      { text: "Theme", link: '/guide/theme' }
    ]},
  displayAllHeaders: true,
  plugins: [
    [
      '@vuepress/plugin-search',
      {
        locales: {
          '/': {
            placeholder: 'Search',
          },
        },
      },
    ],
  ],
}
